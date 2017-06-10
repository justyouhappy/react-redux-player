import React from 'react';
import './button.scss';
import classnames from 'classnames';

class Button extends React.Component {
  constructor(props) {
		super(props);
		this.state = {
      playing: false,
      like: props.audio.like
		}
    this.Play = this.Play.bind(this);
    this.PlayPre = this.PlayPre.bind(this);
    this.PlayNext = this.PlayNext.bind(this);
    this.ToFollow = this.ToFollow.bind(this);
    this.renderAudio = this.renderAudio.bind(this);
	}
  componentWillReceiveProps(nextProps) {
    if(nextProps.audio.autoplay) {
      this.setState({playing: true})
    }
	}
  PlayPre() {
    this.props.audio.playPre();
    this.renderAudio();
  }
  PlayNext() {
    this.props.audio.playNext();
    this.renderAudio();
  }
  ToFollow() {
    this.props.audio.setLike();
    this.setState({like : !this.state.like});
  }
  renderAudio() {
    let { actions: {setSrc, setSong}, audio: {datalist: data, index, like} } = this.props;
    setSrc(data[index].image);
    setSong({
      name: data[index].song,
      singerName: data[index].singer,
      albumName: data[index].album,
      rhythm: data[index].rhythm,
      lyric: data[index].lyric
    });
    this.setState({ like: this.props.audio.like });
  }
  Play() {
    !this.state.playing ? this.props.audio.play() : this.props.audio.pause();
    this.setState({playing: !this.state.playing});
  }
	render() {
    let { like, playing } = this.state;
		return (
      <div className="play-control">
        <div className="btn-wrap" onClick={this.ToFollow}>
          <span className={classnames("like-btn", {"checked": this.state.like})}></span>
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
        <div className="btn-wrap" onClick={() => {this.props.actions.setShow(true)}}>
          <span className="list-btn"></span>
        </div>
      </div>
		)
	}
}
export default Button;