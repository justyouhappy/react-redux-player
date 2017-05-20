import React from 'react';
import './header.scss';
class Header extends React.Component {

  render() {
    return (
      <div className="header">
        {this.props.musicName}
      </div>
    )
  }
}
export default Header;