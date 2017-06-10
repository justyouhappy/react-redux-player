import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from '../components/header/header';
import SongImage from '../components/songImage/SongImage';
import SongInfo from '../components/SongInfo/SongInfo';
import PlayArea from '../components/playArea/playArea';
import Button from '../components/Button/Button';
import PlayList from '../components/playList/playList';
import * as actions from '../redux/action/appAction';
import blurImg from '../common/gaussBlur';
import MyAudio from '../components/Audio';
import fetchdata from '../common/fetch';
import '../../scss/app.scss';


class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			src: '',
			renderAudio: ()=>{}
		}
		this.BlurImg = this.BlurImg.bind(this);
		this.setProgress = this.setProgress.bind(this);
	}
	componentDidMount() {
		fetchdata('./data/data.json').then(data => {
			this.audio = new MyAudio(data, this.setProgress);
			this.BlurImg(data[0].image);
			this.props.actions.setEndTime(this.audio.duration);
			this.props.actions.setSrc(data[0].image);
			this.props.actions.setSong({
				name: data[0].song,
				singerName: data[0].singer,
				albumName: data[0].album,
				rhythm: data[0].rhythm,
				lyric: data[0].lyric
			});
		});
		this.setState({renderAudio: this.btn.renderAudio});
		
	}
	componentWillReceiveProps(nextProps) {
		if(this.props.indexReducer.src != nextProps.indexReducer.src) {
			this.BlurImg(nextProps.indexReducer.src);
		}
	}
	BlurImg(src) {
		let image = new Image();
		image.src = src
		image.onload = () => {
			let srcs = blurImg(image);
			this.setState({
				src: srcs
			})
		}
	}
	setProgress(stop) {
		if(stop) {
			cancelAnimationFrame(this.frameId); 
		} else {
			cancelAnimationFrame(this.frameId);        
			let frame = () => {
				if (this.audio.music.currentTime < this.audio.duration) {
					this.props.actions.setNowTime(~~this.audio.music.currentTime);
					this.frameId = requestAnimationFrame(frame);
				} else { 
					this.props.actions.setNowTime(0);
					cancelAnimationFrame(this.frameId);
				}
			}
			frame();
		}
    }
	render() {
		const { indexReducer: { SongInfo: song, src: clearsrc ,nowTime, endTime, show}, actions } = this.props;
		const { src } = this.state;
		return (

			<div className="content-wrap" style={{backgroundImage: `url(${src})`}}>
				<div className="content">
					<Header musicName={song.name || 'xxx'} src={clearsrc}></Header>
					<SongImage src={clearsrc}></SongImage>
					<SongInfo Song={song} ></SongInfo>
					<PlayArea audio={this.audio||{}} nowTime={nowTime} endTime={endTime} setNowTime={actions.setNowTime} setProgress={this.setProgress}></PlayArea>
					<Button audio={this.audio||{}} ref={c => this.btn = c} actions={actions} BlurImg={this.BlurImg}></Button>
					<PlayList audio={this.audio||{}} renderAudio={this.state.renderAudio} actions={actions} show={show}></PlayList>
				</div>
			</div>
		);
	}
}
App = connect((state) => state, (dispatch) => {
	return {
		actions: bindActionCreators(actions, dispatch)
	}
})(App);
export default App