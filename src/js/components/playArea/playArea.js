import React from 'react';
import './playArea.scss';
import formatTime from '../../common/format';
class playArea extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      val: -100
    }
    this.touchStart = this.touchStart.bind(this);
    this.touchMove = this.touchMove.bind(this);
    this.touchEnd = this.touchEnd.bind(this);
  }
  touchStart() {
    this.props.setProgress(true);
  }
  touchMove(e) {
    let x = e.changedTouches[0].clientX - this.warp.offsetLeft,
        ration = x / this.warp.offsetWidth;
    ration = ration < 0 ? 0 : (ration > 1 ? 1 : ration);
    this.setState({ val: (ration - 1) * 100 });
    this.props.setNowTime(~~(this.props.endTime * ration));
  }
  touchEnd(e) {
     let x = e.changedTouches[0].clientX - this.warp.offsetLeft,
        ration = x / this.warp.offsetWidth;
    ration = ration < 0 ? 0 : (ration > 1 ? 1 : ration);
    this.props.audio.jumpToPlay(ration);
  }
  componentWillReceiveProps(nextProps) {
    if(this.props.nowTime != nextProps.nowTime) {
		  this.setState({val: (nextProps.nowTime/nextProps.endTime-1)*100});
    }
	}
  render() {
   let { val } = this.state;
    return (
      <div className="play-area">
        <span className="cur-time">{formatTime(this.props.nowTime)}</span>
        <div className="pro-warp" ref={c => this.warp = c}>
          <div className="pro-bottom">
            <div className="pro-top" style={{transform: 'translateX(' + val + '%' + ')',}} >
              <span className="slice-point"
                onTouchStart={this.touchStart}
                onTouchMove={this.touchMove}
                onTouchEnd={this.touchEnd}
              >
              </span>
            </div>
          </div>
        </div>
        <span className="all-time">{formatTime(this.props.endTime)}</span>
      </div>
    )
  }
}
export default playArea;