import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import {reducer as formReducer} from 'redux-form'
import {htReducer} from './reducers';

export default createStore(
    combineReducers({
        form: formReducer,
        reducer: htReducer
    }), applyMiddleware(thunk)
);