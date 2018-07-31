//actions the user can do

//users can navigate between food tracking / symptom tracking
//so we need an action to enable the respective forms
import {SubmissionError} from 'redux-form';
import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';
//const queryString = require('query-string');


//const API_BASE_URL = '/'; 

export const signUpUser = user => dispatch => {
    return fetch(`${API_BASE_URL}/users`, {
   method: 'POST',
   headers: {
    'content-type': 'application/json'
   },
   body: JSON.stringify(user)
   })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .catch(err => {
      const {reason, message, location} =  err;
      if (reason === 'Validation Error') {
        return Promise.reject(
          new SubmissionError({
            [location]: message
          })
        );
      }
    });
};

export const NEW_USER = 'NEW_USER';
export const newUser = (newUserFlag) => ({
    type: NEW_USER,
    newUserFlag
});


export const CHANGE_SYMPTOM = 'CHANGE_SYMPTOM';
export const changeSymptom = (symptomvalue) => ({
    type: CHANGE_SYMPTOM,
    symptomvalue
});

export const CHANGE_DATES = 'CHANGE_DATES';
export const changeDates = (start_Date, end_Date) => ({
    type: CHANGE_DATES,
    start_Date,
    end_Date
});

export const LOGGING_IN = 'LOGGING_IN';
export const loggingIn = loggingInVar => ({
    type: LOGGING_IN,
    loggingInVar
});

export const LOG_OUT = 'LOG_OUT';
export const logOut = () => ({
    type: LOG_OUT
});

export const SHOW_MODAL = 'SHOW_MODAL';
export const showModal = (symptomShow, dateShow, noDataShow) => ({
    type: SHOW_MODAL,
    symptomShow,
    dateShow,
    noDataShow
});

export const FETCH_FOODLIST_REQUEST = 'FETCH_FOODLIST_REQUEST';
export const fetchFoodListRequest = () => ({
    type: FETCH_FOODLIST_REQUEST
});

export const FETCH_FOODLIST_SUCCESS = 'FETCH_FOODLIST_SUCCESS';
export const fetchFoodListSuccess = (foodList, dataStatus) => ({
    type: FETCH_FOODLIST_SUCCESS,
    foodList,
    dataStatus
});

export const FETCH_FOODLIST_DATASTATUS = 'FETCH_FOODLIST_DATASTATUS';
export const fetchFoodListDataStatus = (dataStatus) => ({
    type: FETCH_FOODLIST_DATASTATUS,
    dataStatus
});


export const SEND_ITEM_SUCCESS = 'SEND_ITEM_SUCCESS';
export const sendItemSuccess = (sentSuccess) => ({ 
	type: SEND_ITEM_SUCCESS,
	sentSuccess
});






//MAIN WAY WE GET OUR DATA TO FILL THE DASHBOARD

export const fetchFoodList = (endpoint, myQueryObj ={}) => (dispatch, getState) => {
    if(endpoint == '') { endpoint = 'daylists';}
    let myQuery;
    let myUrl = `${API_BASE_URL}/${endpoint}/`; 
    
    //if query sent - add it
    if(myQueryObj !== {}) {
    
    myQuery = Object.keys(myQueryObj).map(key => key + '=' + myQueryObj[key]).join('&');
    
    myUrl = myUrl + "?" + myQuery;
    } 
    
    console.log('in the fetchfoodlistpromise', myUrl);
    const authToken = getState().auth.authToken;


    return fetch(`${myUrl}`, { 
      method: 'GET',
      headers: {
        Authorization: `Bearer ${authToken}`
      }
    }) 
    .then(res => {
        console.log('in res', res.body);
      return res.json(); 
    })
    .then(newfoodList => {
      console.log('foodlist after res', newfoodList);

      if(newfoodList.message) {
        newfoodList.UserMessage  = "We couldn't find any entries!";

        if(newfoodList.message == "No search data") {

          //dispatch an action to set a state that we are showing last months data

          //dispatch(fetchFoodListDataStatus('general'));
          dispatch(fetchFoodListSuccess(newfoodList, 'general'));


          } else {

               // newfoodList.message = "User has no recent data")  or error message


                //dispatch an action to set a state that we have no data
                  //dispatch(fetchFoodListDataStatus('none'));
                dispatch(fetchFoodListSuccess(newfoodList, 'none'));

                }
    

      } else {

        //dispatch(fetchFoodListDataStatus('good'));
        dispatch(fetchFoodListSuccess(newfoodList, 'good'));


      }
                

      //  dispatch(fetchFoodListSuccess(newfoodList));

      
    })
    .catch(error => { 
  		console.log('error: ', error);
  		//dispatch error message action - to show user a error component

    });
};


//How we add food items to our db

export const postFoodItems = (foodItem) => (dispatch, getState) => {

console.log('adding', foodItem);
 

  const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/daylists/`, { 
      method: 'POST',
      headers: {
        Authorization: `Bearer ${authToken}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(foodItem)
    }) 
    .then(res => {
       
        console.log('data sent');
        dispatch(sendItemSuccess(true));


      return res.json(); 
    })
	.catch(error => {
		console.log('error: ', error);
	})
};


//how we add Symptoms to our db

export const postSymptoms = (symptom) => (dispatch, getState) => {
	 const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/daylists/`, { 
      method: 'POST',
      headers: {
        Authorization: `Bearer ${authToken}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(symptom)
    }) 
	.then(responseData => { 
		console.log('data sent');

    dispatch(sendItemSuccess(true));

	})
	.catch(error => {
		console.log('error: ', error);
	})
}