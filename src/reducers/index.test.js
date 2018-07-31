import {htReducer} from './index';
import {changeSymptom, showModal, loggingIn, newUser, changeDates, fetchFoodListRequest, fetchFoodListSuccess, fetchFoodListDataStatus, sendItemSuccess} from '../actions';


describe('htReducer', () => {

    describe('changeSymptom', () => {

        it('Should change the symptom', () => {
            let state = { 
                symptom: 'stomach ache'
            };
            state=htReducer(state, changeSymptom('pain')); 
            expect(state).toEqual({
                symptom: 'pain'
            });

        });
    });

    describe('showModal', () => {

        it('Should change the modal state', () => {
            let state = { 
                showSymptomModal: false,
                showDateModal: false,
                showNoDataModal: 'noshow'
            };
            state=htReducer(state, showModal(true, false, 'noshow')); 
            expect(state).toEqual({
                showSymptomModal: true,
                showDateModal: false,
                showNoDataModal: 'noshow'
            });

        });

    });

    describe('loggingIn', () => {

        it('Should change logging in state', () => {
            let state = { 
                 loggingIn: false
            };
            state=htReducer(state, loggingIn(true)); 
            expect(state).toEqual({
                loggingIn: true
            });
        });
    });

    describe('fetchFoodListRequest', () => {

        it('Should change flag that we are loading new data', () => {
            let state = { 
                 loading: false,
                loaded: false
            };
            state=htReducer(state, fetchFoodListRequest()); 
            expect(state).toEqual({
                loading: true,
                loaded: false
            });
        });
    });

    describe('changeDates', () => {

        it('Should change the search dates', () => {
            let state = { 
                startDate: '5/11/15',
                endDate: '5/12/16'
            };
            state=htReducer(state, changeDates('6/11/15', '7/12/16')); 
            expect(state).toEqual({
                startDate: '6/11/15',
                endDate: '7/12/16'
            });

        });

    });

     describe('fetchFoodListSuccess', () => {

        it('Should return a foodlist obj tell that loading is done and give a status', () => {
            let state = { 
                foodList: null,
                loading: true,
                loaded: false,
                dataStatus: 'none'
            };
            state=htReducer(state, fetchFoodListSuccess({}, 'good')); 
            expect(state).toEqual({
                foodList: {},
                loading: false,
                loaded: true,
                dataStatus: 'good'
            });
        });
    }); 

    describe('fetchFoodListDataStatus', () => {

            it('Should set a status', () => {
                let state = { 
                    dataStatus: 'none'
                };
                state=htReducer(state, fetchFoodListDataStatus('general')); 
                expect(state).toEqual({
                    dataStatus: 'general'
                });
            });
    });


});



