import React from 'react';
import {BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom';

import LoginForm from './loginform';

import {connect} from 'react-redux';
//import './login.css'

export  class LogIn extends React.Component { 



render() {

	if (this.props.loggedIn) {
        return <Redirect to="/loggedin/dashboard" />;
    }   
    else {

					return ( 

					<LoginForm />

					)
		}
};

}



const mapStateToProps = state => ({
    foodList: state.reducer.foodList,
    symptomList: state.reducer.symptomList,
    loggedIn: state.auth.currentUser !== null

});

export default connect(mapStateToProps)(LogIn);