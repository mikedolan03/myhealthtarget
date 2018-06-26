//import * as actions '../actions';
import {TRACK_FOOD, TRACK_SYMPTOM, UPDATE_SCORE} from '../actions';


const initialState = {
      score: 50
    };

 export const htReducer = (state=initialState, action) => {

 	if(action.type === TRACK_FOOD) {
 		return Object.assign({}, state, {
 			appMode: action.appMode
 		});
 	} else { 

        		if(action.type === TRACK_SYMPTOM) {
	 		
	 				return Object.assign({}, state, {
	 				appMode: action.appMode
	 				});

        		} else {

                 	if(action.type === UPDATE_SCORE) {

                    	return Object.assign({}, state, {
                    	score: action.score
                    	});

                    } else {
                    
                                return state;
                                }
                }
            }

    }

