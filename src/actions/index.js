//actions the user can do

//users can navigate between food tracking / symptom tracking
//so we need an action to enable the respective forms
import {SubmissionError} from 'redux-form';
import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';
const queryString = require('query-string');


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

export const UPDATE_SCORE = 'UPDATE_SCORE';
export const updateScore = (score) => ({
    type: UPDATE_SCORE,
    score
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

//myFetch(url, options, redirect, refer, body) {
   function myFetch(url, options) {
	
   	if( Math.floor(Math.random() * 10) == 1 ) {
   		return Promise.reject('Error with api');
   	}

	let myData;

	if(!options) { 
	 	options = { 
	 		method: 'GET' 
	 	};
	}

	//probably should be `${API_BASE_URL}/foodlist`
   	if(url == `${API_BASE_URL}/foodlist` &&
   		options.method == 'GET') {





   		 myData =[ 
       		{name: 'carrot', tags: 'orange, veg', time: "01:00", date: "2018-06-27"},
       		{name: 'spaghetti', tags: 'pasta, gluten', time: "11:30", date: "2018-06-25"},
       		{name: 'pizza', tags: 'cheese, wheat, tomato, veg', time: "01:00", date: "2018-06-28"},
       		{name: 'blueberries', tags: 'fruit, blue', time: "5:30", date: "2018-06-25"},
       		{name: 'cheerios', tags: 'cereal, oats, milk', time: "06:00", date: "2018-06-28"},
       		{name: 'spaghetti', tags: 'pasta, gluten', time: "07:30", date: "2018-06-26"},
       		{name: 'ice cream', tags: 'dairy, sugar', time: "08:00", date: "2018-06-28"},
       		{name: 'ravioli', tags: 'pasta, gluten', time: "14:30", date: "2018-06-26"}
			];
			let error = false; 

   	}

   	if(url == `${API_BASE_URL}/foodlist` &&
   		options.method == 'POST') {

   		 myData = options.body; 
   		
   	}

   if(url == `${API_BASE_URL}/foodlist` &&
   		options.method == 'PUT') {
   	//edit entry
   		   		
   		   myData = options.body; 

   	}

   if(url == `${API_BASE_URL}/symptomlist` &&
   		options.method == 'GET') {
   		
   		 myData =[ 
       		{name: 'sick stomach', severity: '5', time: "01:00", date: "2018-06-28"},
       		{name: 'heartburn', severity: '2', time: "01:30", date: "2018-06-29"},
       		{name: 'sick stomach', severity: '3', time: "01:00", date: "2018-06-29"},
       		{name: 'headache', severity: '6', time: "01:30", date: "2018-06-30"},
       		{name: 'sick stomach', severity: '5', time: "01:00", date: "2018-06-29"},
       		{name: 'heartburn', severity: '10', time: "01:30", date: "2018-06-28"},
       		{name: 'gas', severity: '5', time: "01:00", date: "2018-06-28"},
       		{name: 'heartburn', severity: '8', time: "01:30", date: "2018-06-27"},
       		{name: 'gas', severity: '4', time: "01:00", date: "2018-06-28"},
       		{name: 'heartburn', severity: '2', time: "01:30", date: "2018-06-30"}
			];
   	}

   if(url == `${API_BASE_URL}/symptomlist` &&
   		options.method == 'POST') {
   		   		   		
   		   	 myData = options.body; 

   	}

    if(url == `${API_BASE_URL}/symptomlist` &&
   		options.method == 'PUT') {
   		   	
   		   	 myData = options.body; 

   	}
   	//if url and no options or option.method=get return requested data
   	//implement search filters on server side - here just return simple sorted data
   	//

    return new Promise((resolve, reject)=>{
     


    		let error = false; 

			
			//or test error 
			//error = "ahhhhh something went wrong!"; 

            if (error)  { reject(error); 
            }
            else resolve(myData);
        
    });
}

function getDataSymptoms() {
    return new Promise((resolve, reject)=>{
     
    	
			let error = false; 
			
			//or test error 
			//error = "ahhhhh something went wrong!"; 

            if (error)  { reject(error); 
            }
            else resolve();
        
    });
}

function sendData(data) {
    return new Promise((resolve, reject)=>{
     
    	
			let error = false; 
			
			//or test error 
			//error = "ahhhhh something went wrong!"; 

            if (error)  { reject(error); 
            }
            else resolve(data);
        
    });
}


//now we need to do this a pretend post. 
//so maybe we make the myData global in here - then we add our new food to it, then return
//it like its a json response then we send the success and do the TrackFood action.
//track food should probably be renamed Add_Food or somethting since we are adding it to the
//db


/*export const signUpUser = user => dispatch => {
    return fetch(`${API_BASE_URL}/users`, {
   method: 'POST',
   headers: {
    'content-type': 'application/json'
   },
   body: JSON.stringify(user)
   })*/

export const fetchFoodList = (endpoint, myQueryObj ={}) => (dispatch, getState) => {
    if(endpoint == '') { endpoint = 'daylists';}
    let myQuery;
    let myUrl = `${API_BASE_URL}/${endpoint}/`; 
    //let myQueryObj = {sdate: '7-4-2018', edate: '7-11-2018'};
    
    //if query sent - add it
    if(myQueryObj !== {}) {
    myQuery = '?' + queryString.stringify(myQueryObj); 
    myUrl = myUrl + myQuery;
    } 
    
     console.log('in the fetchfoodlistpromise');
     //myFetch(`${API_BASE_URL}/foodlist`, {method: 'GET'} )
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
    .then(foodList => {
      console.log('foodlist after res', foodList  );
        dispatch(fetchFoodListSuccess(foodList));
    })
    .catch(error => { 
  		console.log('error: ', error);
  		//dispatch error message action - to show user a error component

    });
};

export const fetchSymptomList = () => dispatch => {
    //fetch(`${API_BASE_URL}/foodlist`).then(res => {
     //   if (!res.ok) {
      //      return Promise.reject(res.statusText);
      //  }
       // return res.json();
     console.log('in the fetchsymptomlistpromise');
     
     myFetch(`${API_BASE_URL}/symptomlist`, {method: 'GET'} )
    .then(symptomList => {
        dispatch(fetchSymptomListSuccess(symptomList));
    })
    .catch(error => { 
  		console.log('error: ', error);

    });
};

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

export const postSymptoms = (symptom) => dispatch => {
	myFetch(`${API_BASE_URL}/foodlist`, {method: 'POST', body: symptom} )
	.then(responseData => { 
		console.log('data sent');
		dispatch( trackSymptom(responseData));
	})
	.catch(error => {
		console.log('error: ', error);
	})
}