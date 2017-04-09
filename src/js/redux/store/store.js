import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducer/index';
export default function createstore(initstate){
    return createStore(reducers,initstate,applyMiddleware(thunk));
}