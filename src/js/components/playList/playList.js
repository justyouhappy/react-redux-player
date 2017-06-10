import React from 'react';
import './playList.scss';
import formatTime from '../../common/format';
class playList extends React.Component {
  clickList(i) {
    this.props.actions.setShow(false);
    this.props.audio.playIndex(i);
    this.props.renderAudio();
  }
  render() {
    const className = "play-list" + (this.props.show ? ' show' : '');
    let html = '';
    const data = this.props.audio.datalist || [];
    // console.log(data);
    const length = this.props.audio.datalist && this.props.audio.datalist.length;
    for (var len = length, i = 0; i < len; i++) {
        var cur = data[i];
        html += '<li data-index="' + i + '"><h3>' + cur.song + '<span> - ' + cur.singer + '</span></h3></li>';
    }
    return (
      <div className={className}>
             <div className="list-head">播放列表</div>
             <ul>
                {
                    data.map((e,i) => {
                        let className = i === this.props.audio.index ? 'playing': ''
                        return (
                            <li className={className} key={i} onClick={this.clickList.bind(this, i)}>
                                <h3> {e.song}</h3>
                                <span> {e.singer} </span>
                            </li>
                        )
                    })
                }
             </ul>
             <div className="close-btn" onClick={() => {this.props.actions.setShow(false)}}>关闭</div>
      </div>
    )
  }
}
export default playList;