import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from '../components/header'
import * as actions from '.././redux/action/appAction';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.setvalue = this.setvalue.bind(this);
  }
  setvalue(e) {
    let value = e.target.value;
    this.props.actions.setMusicName(value);
  }
  getprop(props = this.props) {
    console.log(props);
  }
  componentDidMount() {
    this.getprop();
  }
  render() {
    return (
            <div onClick={this.setvalue}>
                <Header musicName={this.props.musicName} ></Header>
            </div>
    );
  }
}
App = connect((state) => state, (dispatch) => {
  return {
	    actions: bindActionCreators(actions, dispatch)
  }
} )(App);
export default App