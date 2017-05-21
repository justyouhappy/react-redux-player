import { combineReducers } from 'redux';
const defaultState = {
	src : '../../source/img/album3.jpeg',
	SongInfo: {},
	nowTime: 0,
	endTime: 0,
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
		default:
			return state;
	}
};
const appReducer = combineReducers({
	indexReducer
});
export default appReducer;