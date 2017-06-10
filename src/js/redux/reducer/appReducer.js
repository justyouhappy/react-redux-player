import { combineReducers } from 'redux';
const defaultState = {
	src : '',
	SongInfo: {},
	nowTime: 0,
	endTime: 0,
	show: false
}
const indexReducer = (state = defaultState, action) => {
	switch (action.type) {
		case 'changeSrc':
			return {
				...state,
				src: action.param
			}
		case 'changSone' :
			return {
				...state,
				SongInfo: action.param
			}
		case 'changeNowTime' :
			return {
				...state,
				nowTime: action.param
			}
		case 'setEndTime' :
			return {
				...state,
				endTime: action.param
			}
		case 'setShow' :
			return {
				...state,
				show: action.param
			}
		default:
			return state;
	}
};
const appReducer = combineReducers({
	indexReducer
});
export default appReducer;