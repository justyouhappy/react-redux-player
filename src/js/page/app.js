import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
<<<<<<< HEAD
import Header from '../components/header/header';
import SongImage from '../components/songImage/SongImage';
import SongInfo from '../components/SongInfo/SongInfo';
import PlayArea from '../components/playArea/playArea';
import Button from '../components/Button/Button';
import * as actions from '../redux/action/appAction';
import blurImg from '../common/gaussBlur';
import '../../scss/app.scss';

=======
import Header from '../components/header/header'
import * as actions from '.././redux/action/appAction';
>>>>>>> 80a396f06ae8152df38f32344bfe97b4557f51f8
class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			src: ''
		}
	}
<<<<<<< HEAD
	componentDidMount() {
		let  { indexReducer : {src} } = this.props;
		let image = new Image();
		image.src = src
		image.onload =  () => {
			let srcs = blurImg(image);
			this.setState({
				src: srcs
			})
		}
=======
	setvalue(e) {
		let value = e.target.value;
		this.props.actions.setMusicName(value);
>>>>>>> 80a396f06ae8152df38f32344bfe97b4557f51f8
	}
	render() {
		let  { indexReducer : { src, SongInfo: song } } = this.props;
		return (
<<<<<<< HEAD
			<div className="content-wrap" style={{backgroundImage:`url(${src})`}}>
				<div className="content">
					<Header musicName={song.name || 'xxx'} src={src}></Header>
					<SongImage src={src}></SongImage>
					<SongInfo Song={song} ></SongInfo>
					<PlayArea></PlayArea>
					<Button></Button>
				</div>
=======
			<div className="content-wrap">
				<Header musicName={this.props.musicName} ></Header>
>>>>>>> 80a396f06ae8152df38f32344bfe97b4557f51f8
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