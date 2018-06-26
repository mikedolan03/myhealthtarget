import {createStore, combineReducers} from 'redux'
import {reducer as formReducer} from 'redux-form'
import {htReducer} from './reducers';

export default createStore(
    combineReducers({
        form: formReducer,
        reducer: htReducer
    })
);