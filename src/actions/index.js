//actions the user can do

//users can navigate between food tracking / symptom tracking
//so we need an action to enable the respective forms

const API_BASE_URL = '/'; 

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

export const FETCH_FOODLIST_SUCCESS = 'FETCH_FOODLIST_SUCCESS';
export const fetchFoodListSuccess = (foodList) => ({
    type: FETCH_FOODLIST_SUCCESS,
    foodList
});

export const SEND_FOODITEM_SUCCESS = 'SEND_FOODITEM_SUCCESS';
export const sendFoodItemSuccess = (foodItem) => ({ 
	type: SEND_FOODITEM_SUCCESS,
	foodItem
});

//myFetch(url, options, redirect, refer, body) {
   function myFetch(url, options) {
	
	let myData;

	//probably should be `${API_BASE_URL}/foodlist`
   	if(url == `${API_BASE_URL}/foodlist` &&
   		options.method == 'GET') {

   		 myData =[ 
       		{name: 'carrot', tags: 'orange, veg', time: "01:00", date: "2018-06-28"},
       		{name: 'spagetti', tags: 'pasta, gluten', time: "01:30", date: "2018-06-25"}
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
       		{name: 'heartburn', severity: '10', time: "01:30", date: "2018-06-25"}
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

export const fetchFoodList = () => dispatch => {
    //fetch(`${API_BASE_URL}/foodlist`).then(res => {
     //   if (!res.ok) {
      //      return Promise.reject(res.statusText);
      //  }
       // return res.json();
     console.log('in the fetchfoodlistpromise');


     myFetch(`${API_BASE_URL}/foodlist`, {method: 'GET'} )
    .then(foodList => {
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
     console.log('in the fetchfoodlistpromise');
     getDataSymptoms()
    .then(symptomList => {
        //dispatch(fetchSymptomListSuccess(foodList));
    })
    .catch(error => { 
  		console.log('error: ', error);

    });
};

export const postFoodItems = (foodItem) => dispatch => {
	
	myFetch(`${API_BASE_URL}/foodlist`, {method: 'POST', body: foodItem} )
	.then(responseData => { 
		console.log('data sent');
		dispatch( trackFood(responseData));
	})
	.catch(error => {
		console.log('error: ', error);
	})
}

export const postSymptoms = (symptom) => dispatch => {
	sendData(symptom)
	.then(responseData => { 
		console.log('data sent');
		dispatch( trackSymptom(responseData));
	})
	.catch(error => {
		console.log('error: ', error);
	})
}