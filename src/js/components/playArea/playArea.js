import React from 'react';
import './playArea.scss';
class playArea extends React.Component {

  render() {
    return (
      <div className="play-area">
        <span className="cur-time">00:00</span>
        <div className="pro-warp">
          <div className="pro-bottom">
            <div className="pro-top">
              <span className="slice-point"></span>
            </div>
          </div>
        </div>
        <span className="all-time">00:00</span>
      </div>
    )
  }
}
export default playArea;