import React from 'react';
import './button.scss';
class Button extends React.Component {

	render() {
		return (
      <div className="play-control">
        <div className="btn-wrap">
          <span className="like-btn"></span>
        </div>
        <div className="btn-wrap">
          <span className="prev-btn"></span>
        </div>
        <div className="btn-wrap">
          <span className="play-btn"></span>
        </div>
        <div className="btn-wrap">
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