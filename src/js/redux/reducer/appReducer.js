import { combineReducers } from 'redux';
const defaultState = {
	src : '../../source/img/album3.jpeg',
	SongInfo: {}
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
		default:
			return state;
	}
};
const appReducer = combineReducers({
	indexReducer
});
export default appReducer;