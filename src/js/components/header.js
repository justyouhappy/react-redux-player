import React from 'react';
class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}
	render() {
		return (
            <div>{this.props.musicName}</div>
		)
	}
}
export default Header;