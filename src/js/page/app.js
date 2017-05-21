import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from '../components/header/header';
import SongImage from '../components/songImage/SongImage';
import SongInfo from '../components/SongInfo/SongInfo';
import PlayArea from '../components/playArea/playArea';
import Button from '../components/Button/Button';
import * as actions from '../redux/action/appAction';
import blurImg from '../common/gaussBlur';
import '../../scss/app.scss';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			src: ''
		}
	}
	componentDidMount() {
		let { indexReducer: {src} } = this.props;
		let image = new Image();
		image.src = src
		image.onload = () => {
			let srcs = blurImg(image);
			this.setState({
				src: srcs
			})
		}
	}
	render() {
		const { indexReducer: { SongInfo: song, src: clearsrc } } = this.props;
		const { src } = this.state;
		return (

			<div className="content-wrap" style={{backgroundImage: `url(${src})`}}>
				<div className="content">
					<Header musicName={song.name || 'xxx'} src={clearsrc}></Header>
					<SongImage src={clearsrc}></SongImage>
					<SongInfo Song={song} ></SongInfo>
					<PlayArea></PlayArea>
					<Button></Button>
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