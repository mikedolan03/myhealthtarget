import * as actions from './actions';

const initialState = {
count: 0
}
export const Reducer = (state=initialState, action) => {
    
	let count = state.count; 
	count++; 
	
	 return Object.assign({}, state, {
            count
        });
};