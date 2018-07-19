import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './index.css';
import store from './store';
import FactorForm from './components/factorForm';
import showResults from './components/showResults';
import App from './components/app';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

	
