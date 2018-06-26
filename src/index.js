import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './index.css';
import store from './store';
import {Dash} from './components/dash'
import FactorForm from './components/factorForm';
import showResults from './components/showResults';

ReactDOM.render(
    <Provider store={store}>
        <Dash />
    </Provider>,
    document.getElementById('root')
);

	
