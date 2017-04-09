import React from 'react';
import { connect } from 'react-redux';
import { setinpValue } from '.././redux/action/inputAction';
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
        this.setvalue = this.setvalue.bind(this);
    }
    setvalue(e) {
        let value = e.target.value;
        this.props.dispatch(setinpValue(value));
    }
    render() {
        return (
            <div>
                <input style = {{'border':'1px soild #000'}}value={this.props.value} onChange={this.setvalue}></input>
            </div>
        );
    }
}
App = connect((state) => {
    return state.inputReducer;
})(App);
export default App