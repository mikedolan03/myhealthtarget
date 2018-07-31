//import * as actions '../actions';
import {CHANGE_SYMPTOM, SHOW_MODAL, LOGGING_IN, LOG_OUT, NEW_USER, CHANGE_DATES, SEND_ITEM_SUCCESS, FETCH_FOODLIST_REQUEST, FETCH_FOODLIST_SUCCESS, FETCH_FOODLIST_DATASTATUS} from '../actions';
var moment = require('moment');
moment().format();

const initialState = {
      foodList: [],
      symptomList: [],
      loading: false,
      loaded: false,
      symptom: 'Gas',
      startDate: moment(moment().format()).subtract(30, 'days').format('YYYY[-]MM[-]DD'),
      endDate: moment().format('YYYY[-]MM[-]DD'),
      showSymptomModal: false,
      showDateModal: false,
      showNoDataModal: 'noshow',
      loggingIn: false,
      newUserFlag: false,
      dataStatus: 'none',
      sentSuccess: false
    };

 export const htReducer = (state=initialState, action) => {

    console.log('in action: ', action); 

                 	if(action.type === CHANGE_SYMPTOM) {

                    	return Object.assign({}, state, {
                    	symptom: action.symptomvalue
                    	});

                    } else {

                        if(action.type === SHOW_MODAL) {

                        return Object.assign({}, state, {
                        showSymptomModal: action.symptomShow,
                        showDateModal: action.dateShow,
                        showNoDataModal: action.noDataShow

                        });

                    } else {

                      if(action.type === LOGGING_IN) {

                        return Object.assign({}, state, {
                        loggingIn: action.loggingInVar
                        });

                    } else {

                       if(action.type === LOG_OUT) {

                        state = initialState;

                        return state;
                        

                    } else {

                       if(action.type === NEW_USER) {

                        return Object.assign({}, state, {
                        newUserFlag: action.newUserFlag
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
                            console.log('foodlist updating', action.foodlist); 

                        return Object.assign({}, state, {
                        foodList: action.foodList,
                        loading: false,
                        loaded: true,
                        dataStatus: action.dataStatus

                        });

                        } else {

                          if(action.type === FETCH_FOODLIST_DATASTATUS) {

                            console.log('FETCH_FOODLIST_DATASTATUS');
                            console.log('query status', action.dataStatus); 

                        return Object.assign({}, state, {
                        dataStatus: action.dataStatus
                        });

                        

                        } else {

                          if(action.type === SEND_ITEM_SUCCESS) {
                         console.log('sent item success');

                         return Object.assign({}, state, { 
                            sentSuccess: action.sentSuccess
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
            }

    }

