import React from 'react';
import './button.scss';
import classnames from 'classnames';

class Button extends React.Component {
  constructor(props) {
		super(props);
		this.state = {
			like: false,
      playing: false
		}
    this.Play = this.Play.bind(this);
    this.PlayPre = this.PlayPre.bind(this);
    this.PlayNext = this.PlayNext.bind(this);
	}
  PlayPre() {
    this.props.audio.playPre();
    this.renderAudio();
  }
  PlayNext() {
    this.props.audio.playNext();
    this.renderAudio();
  }
  renderAudio() {
    let { actions: {setSrc, setSong}, audio: {datalist: data, index} } = this.props;
    setSrc(data[index].image);
    setSong({
      name: data[index].song,
      singerName: data[index].singer,
      albumName: data[index].album,
      rhythm: data[index].rhythm,
      lyric: data[index].lyric
    });

  }
  Play() {
    !this.state.playing ? this.props.audio.play() : this.props.audio.pause();
    this.setState({playing: !this.state.playing});
  }
	render() {
    let { like, playing } = this.state;
		return (
      <div className="play-control">
        <div className="btn-wrap" onClick={()=>this.setState({like: !like})}>
          <span className={classnames("like-btn", {"checked": like})}></span>
        </div>
        <div className="btn-wrap" onClick={this.PlayPre}>
          <span className="prev-btn"></span>
        </div>
        <div className="btn-wrap" onClick={this.Play}>
          <span className={classnames("play-btn", {"playing": playing})}></span>
        </div>
        <div className="btn-wrap" onClick={this.PlayNext}>
          <span className="next-btn"></span>
        </div>
        <div className="btn-wrap">
          <span className="list-btn"></span>
        </div>
      </div>
		)
	}
}
export default Button;