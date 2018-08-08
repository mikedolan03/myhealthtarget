import {CHANGE_SYMPTOM, SHOW_MODAL, LOGGING_IN, LOG_OUT, NEW_USER, CHANGE_DATES, SEND_ITEM_SUCCESS, FETCH_FOODLIST_REQUEST, FETCH_FOODLIST_SUCCESS, FETCH_FOODLIST_DATASTATUS} from '../actions';

//set up moment.js
var moment = require('moment');
moment().format();

const initialState = {
      foodList: [],
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

    switch (action.type) {
    
      case CHANGE_SYMPTOM:
        
        return Object.assign({}, state, {
                      symptom: action.symptomvalue
                      });
        break;

      case SHOW_MODAL:

        return Object.assign({}, state, {
                        showSymptomModal: action.symptomShow,
                        showDateModal: action.dateShow,
                        showNoDataModal: action.noDataShow

                        });
        
      break;

      case LOGGING_IN:

        return Object.assign({}, state, {
                        loggingIn: action.loggingInVar
                        });
        
      break;

      case LOG_OUT:

        state = initialState;
        return state;
        
      break;

      case NEW_USER:

       return Object.assign({}, state, {
                        newUserFlag: action.newUserFlag
                        });
        
      break;

      case CHANGE_DATES:

      return Object.assign({}, state, {
                        startDate: action.start_Date,
                        endDate: action.end_Date
                        });
        
      break;

      case FETCH_FOODLIST_REQUEST:

       return Object.assign({}, state, { 
                            loading: true,
                            loaded: false
                         });
        
      break;

      case FETCH_FOODLIST_SUCCESS:

        console.log('FETCH_FOODLIST_SUCCESS');
        //console.log('foodlist updating in new switch', action.foodlist); 

        return Object.assign({}, state, {
        foodList: action.foodList,
        loading: false,
        loaded: true,
        dataStatus: action.dataStatus
        });
        
      break;

      case FETCH_FOODLIST_DATASTATUS:

        console.log('FETCH_FOODLIST_DATASTATUS');
        console.log('query status', action.dataStatus); 

        return Object.assign({}, state, {
          dataStatus: action.dataStatus
        });
        
      break;

      case SEND_ITEM_SUCCESS:

        console.log('sent item success');
        return Object.assign({}, state, { 
          sentSuccess: action.sentSuccess
        });
        
      break;

      default: 

      return state; 

    }
  }
