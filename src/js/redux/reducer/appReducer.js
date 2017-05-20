import { combineReducers } from 'redux';
const defaultState = {
	musicName: ''
};
const HeaderReducer = (state = defaultState, action) => {
	switch (action.type) {
		case 'changeName':
			return {
				...state,
				musicName: action.param
			}
		default:
			return state;
	}
};
const appReducer = combineReducers({
	HeaderReducer
});
export default appReducer;