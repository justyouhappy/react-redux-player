import React from 'react';
import './playArea.scss';
import formatTime from '../../common/format';
class playArea extends React.Component {

  render() {
   let val = (this.props.nowTime/this.props.endTime-1)*100;
    return (
      <div className="play-area">
        <span className="cur-time">{formatTime(this.props.nowTime)}</span>
        <div className="pro-warp">
          <div className="pro-bottom">
            <div className="pro-top" style={{transform: 'translateX(' + val + '%' + ')',}} >
              <span className="slice-point"></span>
            </div>
          </div>
        </div>
        <span className="all-time">{formatTime(this.props.endTime)}</span>
      </div>
    )
  }
}
export default playArea;