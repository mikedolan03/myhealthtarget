import React from 'react';
import {BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom';
//import {fetchFoodList} from '../actions';
//import {fetchSymptomList} from '../actions';
import SignUpForm from './signup-form';

import {connect} from 'react-redux';

//import './signup.css'

export function SignUp(props){ 

if (props.loggedIn) {
        return <Redirect to="/loggedin/dashboard" />;
    }    
    return (
        <div className="home">
            <h2>Register for Foo App</h2>
            <SignUpForm />
            <Link to="/">Login</Link>
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(SignUp);