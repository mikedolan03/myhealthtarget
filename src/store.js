import {createStore, combineReducers} from 'redux'
import {reducer as formReducer} from 'redux-form'
import {Reducer} from './reducer';
export default createStore(
    combineReducers({
        form: formReducer,
        reducer: Reducer
    })
);