//actions the user can do

//users can navigate between food tracking / symptom tracking
//so we need an action to enable the respective forms



export const TRACK_FOOD = 'TRACK_FOOD';
export const trackFood = () => ({
    type: TRACK_FOOD,
    appMode: 'Food Input'
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