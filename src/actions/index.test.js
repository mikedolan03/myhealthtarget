import {CHANGE_SYMPTOM, changeSymptom, SHOW_MODAL, showModal, LOGGING_IN, loggingIn, LOG_OUT, logOut, NEW_USER, newUser} from './index';
import {CHANGE_DATES, changeDates, FETCH_FOODLIST_REQUEST, fetchFoodListRequest, FETCH_FOODLIST_SUCCESS, fetchFoodListSuccess} from './index';
import {FETCH_FOODLIST_DATASTATUS, fetchFoodListDataStatus, SEND_ITEM_SUCCESS, sendItemSuccess} from './index';


describe('changeSymptom', () => {
    it('Should return the action', () => {
        const symptomvalue = 'symptom name';
        const action = changeSymptom(symptomvalue);
        expect(action.type).toEqual(CHANGE_SYMPTOM);
        expect(action.symptomvalue).toEqual(symptomvalue);
    });
});

describe('showModal', () => {
    it('Should return the action', () => {
        const symptomShow = false;
        const dateShow = false;  
        const noDataShow = false;
        const action = showModal(symptomShow, dateShow, noDataShow);
        expect(action.type).toEqual(SHOW_MODAL);
        expect(action.symptomShow).toEqual(symptomShow);
        expect(action.dateShow).toEqual(dateShow);
        expect(action.noDataShow).toEqual(noDataShow);

    });
});

describe('loggingIn', () => {
    it('Should return the action', () => {
        const loggingInVar = true;
        const action = loggingIn(loggingInVar);
        expect(action.type).toEqual(LOGGING_IN);
        expect(action.loggingInVar).toEqual(loggingInVar);
    });
});

describe('logOut', () => {
    it('Should return the action', () => {
        const action = logOut();
        expect(action.type).toEqual(LOG_OUT);
    });
});

describe('newUser', () => {
    it('Should return the action', () => {
        const newUserFlag = true;
        const action = newUser(newUserFlag);
        expect(action.type).toEqual(NEW_USER);
        expect(action.newUserFlag).toEqual(newUserFlag);
    });
});

describe('changeDates', () => {
    it('Should return the action', () => {
        const start_Date = '12-21-18'; 
        const end_Date = '12-24-18';
        const action = changeDates(start_Date, end_Date);
        expect(action.type).toEqual(CHANGE_DATES);
        expect(action.start_Date).toEqual(start_Date);
        expect(action.end_Date).toEqual(end_Date);
         
    });
});

describe('fetchFoodListRequest', () => {
    it('Should return the action', () => {
    const action = fetchFoodListRequest();
    expect(action.type).toEqual(FETCH_FOODLIST_REQUEST);
             
    });
});

describe('fetchFoodListSuccess', () => {
    it('Should return the action', () => {
    	const foodList = {};
        const dataStatus = 'good';
        const action = fetchFoodListSuccess(foodList, dataStatus);
        expect(action.type).toEqual(FETCH_FOODLIST_SUCCESS);
         expect(action.foodList).toEqual(foodList);
        expect(action.dataStatus).toEqual(dataStatus);    
    });
});

describe('fetchFoodListDataStatus', () => {
    it('Should return the action', () => {
        const dataStatus = 'good';
        const action = fetchFoodListDataStatus(dataStatus);
        expect(action.type).toEqual(FETCH_FOODLIST_DATASTATUS);
        expect(action.dataStatus).toEqual(dataStatus);    
    });
});

describe('sendItemSuccess', () => {
    it('Should return the action', () => {
        const sentSuccess = true;
        const action = sendItemSuccess(sentSuccess);
        expect(action.type).toEqual(SEND_ITEM_SUCCESS);
         expect(action.sentSuccess).toEqual(sentSuccess);
          
    });
});