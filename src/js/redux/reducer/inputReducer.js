const defaultState = {
	inpValue: ''
};
const inputReducer = (state=defaultState,action)=> {
	switch (action.type) {
		case 'changeValue':
            return {
                ...state,
                inpValue:action.param
            }
		default:
			return state;
	}
};

export default inputReducer;