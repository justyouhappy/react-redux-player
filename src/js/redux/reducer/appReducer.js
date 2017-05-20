import { combineReducers } from 'redux';
const defaultState = {
<<<<<<< HEAD
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
=======
	musicName: ''
};
const HeaderReducer = (state = defaultState, action) => {
	switch (action.type) {
		case 'changeName':
			return {
				...state,
				musicName: action.param
>>>>>>> 80a396f06ae8152df38f32344bfe97b4557f51f8
			}
		default:
			return state;
	}
};
const appReducer = combineReducers({
	indexReducer
});
export default appReducer;