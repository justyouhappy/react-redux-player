import React from 'react';
import './songImage.scss';
class SongImage extends React.Component {

  render() {
    return (
      <div className="song-img">
        <div className="img-wrap">
          <img src={this.props.src}/>
        </div>
      </div>
    )
  }
}
export default SongImage;