//import * as actions '../actions';
import {TRACK_FOOD, TRACK_SYMPTOM, UPDATE_SCORE, FETCH_FOODLIST_SUCCESS} from '../actions';


const initialState = {
      foodList: [],
    };

 export const htReducer = (state=initialState, action) => {

    console.log('in action: ', action); 

 	if(action.type === TRACK_FOOD) {

        console.log('TRACK_FOOD'); 

        let newFoods = action.foodobj.foods; 

        newFoods.map((obj) => {
            obj.time = action.foodobj.time;
            obj.date = action.foodobj.date;
        });

 		//return Object.assign({}, state, {
 			//foodList: [...state.foodList,
             //  newFoods]
 		//});

        return { 
            ...state, 
            foodList: state.foodList.concat(newFoods)
        }
 	} else { 

        		if(action.type === TRACK_SYMPTOM) {
	 		console.log('TRACK_Symtpom'); 
	 				return Object.assign({}, state, {
	 				appMode: action.appMode
	 				});

        		} else {

                 	if(action.type === UPDATE_SCORE) {

                    	return Object.assign({}, state, {
                    	score: action.score
                    	});

                    } else {

                        if(action.type === FETCH_FOODLIST_SUCCESS) {

                            console.log('FETCH_FOODLIST_SUCCESS'); 

                        return Object.assign({}, state, {
                        foodList: action.foodList
                        });

                        } else {
                    
                                return state;
                                }
                    }
                }
            }

    }

