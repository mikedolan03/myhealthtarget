//actions the user can do

//users can navigate between food tracking / symptom tracking
//so we need an action to enable the respective forms



export const TRACK_FOOD = 'TRACK_FOOD';
export const trackFood = foodobj => ({
    type: TRACK_FOOD,
    foodobj
});

export const TRACK_SYMPTOM = 'TRACK_SYMPTOM';
export const trackSymptom = () => ({
    type: TRACK_SYMPTOM,
    appMode: 'Symptom Input'
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

function getData() {
    return new Promise((resolve, reject)=>{
     
    	const myData =[ 
       		{name: 'carrot', tags: 'orange, veg', time: "01:00", date: "2018-06-28"},
       		{name: 'spagetti', tags: 'pasta, gluten', time: "01:30", date: "2018-06-25"}
			];
			let error = false; 

            if (error) reject(error);
            else resolve(myData);
        
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
     getData()
    .then(foodList => {
        dispatch(fetchFoodListSuccess(foodList));
    });
};