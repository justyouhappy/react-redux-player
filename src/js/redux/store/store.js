import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
export default function createstore(reducers, initstate) {
	return createStore(reducers, initstate, applyMiddleware(thunk));
}