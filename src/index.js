import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './index.css';
import store from './store';
import {Dash} from './components/dash'
import FactorForm from './factorForm';
import showResults from "./showResults";

ReactDOM.render(
    <Provider store={store}>
        <FactorForm onSubmit={showResults}/>
    </Provider>,
    document.getElementById('root')
);

	
