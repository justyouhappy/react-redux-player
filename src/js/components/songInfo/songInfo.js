import React from 'react';
import './SongInfo.scss';
class SongInfo extends React.Component {

  render() {
    let Song = this.props.Song;
    return (
      <div className="song-info">
        <h1 className='song-name'>{Song.name || 'xxx'}</h1>
        <h3 className='singer-name'>{Song.singerName || 'xxx'}</h3>
        <h3 className='album-name'>{Song.albumName || 'xxx'}</h3>
        <h3 className='rhythm'>{Song.rhythm || 'xxx'}</h3>
        <h3 className='lyric'>{Song.lyric || 'xxx'}</h3>
      </div>
    )
  }
}
export default SongInfo;