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

export const TRACK_FOOD = 'TRACK_FOOD';
export const trackFood = foodobj => ({
    type: TRACK_FOOD,
    foodobj
});

export const TRACK_SYMPTOM = 'TRACK_SYMPTOM';
export const trackSymptom = symptomObj => ({
    type: TRACK_SYMPTOM,
    symptomObj
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
export const fetchFoodListSuccess = (foodList) => ({
    type: FETCH_FOODLIST_SUCCESS,
    foodList
});

export const FETCH_FOODLIST_DATASTATUS = 'FETCH_FOODLIST_DATASTATUS';
export const fetchFoodListDataStatus = (dataStatus) => ({
    type: FETCH_FOODLIST_DATASTATUS,
    dataStatus
});

export const FETCH_SYMPTOMLIST_SUCCESS = 'FETCH_SYMPTOMLIST_SUCCESS';
export const fetchSymptomListSuccess = (symptomList) => ({
    type: FETCH_SYMPTOMLIST_SUCCESS,
    symptomList
});

export const SEND_FOODITEM_SUCCESS = 'SEND_FOODITEM_SUCCESS';
export const sendFoodItemSuccess = (foodItem) => ({ 
	type: SEND_FOODITEM_SUCCESS,
	foodItem
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

        if(newfoodList.message = "No search data") {

        //dispatch an action to set a state that we are showing last months data

        dispatch(fetchFoodListDataStatus('general'));

        } else {

              //dispatch an action to set a state that we have no data
        dispatch(fetchFoodListDataStatus('none'));


        }



      } else {

        dispatch(fetchFoodListDataStatus('good'));

      }
                

        dispatch(fetchFoodListSuccess(newfoodList));

      
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
        console.log('in res', res.body);
        console.log('data sent');
        dispatch( trackFood(res));
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
		dispatch( trackSymptom(responseData));
	})
	.catch(error => {
		console.log('error: ', error);
	})
}