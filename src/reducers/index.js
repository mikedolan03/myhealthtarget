//import * as actions '../actions';
import {TRACK_FOOD, TRACK_SYMPTOM, CHANGE_SYMPTOM, SHOW_MODAL, CHANGE_DATES, FETCH_FOODLIST_REQUEST, FETCH_FOODLIST_SUCCESS, FETCH_SYMPTOMLIST_SUCCESS} from '../actions';
var moment = require('moment');
moment().format();

const initialState = {
      foodList: [],
      symptomList: [],
      loading: false,
      loaded: false,
      symptom: 'Gas',
      startDate: moment(moment().format()).subtract(7, 'days').format('MM[/]DD'),
      endDate: moment().format('MM[/]DD'),
      showSymptomModal: false
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
	 		    console.log('TRACK_Symptom'); 

                let newSymptoms = action.symptomObj.symptoms;

                newSymptoms.map( (obj) => {
                    obj.time = action.symptomObj.time;
                    obj.date = action.symptomObj.date;
                });

	 				return {
                        ...state,
                        symptomList: state.symptomList.concat(newSymptoms)
                    }

        		} else {

                 	if(action.type === CHANGE_SYMPTOM) {

                    	return Object.assign({}, state, {
                    	symptom: action.symptomvalue
                    	});

                    } else {

                        if(action.type === SHOW_MODAL) {

                        return Object.assign({}, state, {
                        showSymptomModal: action.show
                        });

                    } else {

                        if(action.type === CHANGE_DATES) {

                        return Object.assign({}, state, {
                        startDate: action.start_Date,
                        endDate: action.end_Date
                        });

                    } else {

                        if(action.type === FETCH_FOODLIST_REQUEST) {
                         console.log('FF Request');

                         return Object.assign({}, state, { 
                            loading: true,
                            loaded: false
                         });

                        } else {



                        if(action.type === FETCH_FOODLIST_SUCCESS) {

                            console.log('FETCH_FOODLIST_SUCCESS');
                            console.log('foodlist', action.foodlist); 

                        return Object.assign({}, state, {
                        foodList: action.foodList,
                        loading: false,
                        loaded: true
                        });

                        } else {

                            if(action.type === FETCH_SYMPTOMLIST_SUCCESS) {

                            console.log('FETCH_SYMPTOMLIST_SUCCESS'); 

                        return Object.assign({}, state, {
                        symptomList: action.symptomList
                        });

                        } else {

                           
                    
                                return state;
                                }
                    }
                  }
              }
          }
                 }
                }
            }

    }

