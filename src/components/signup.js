import React from 'react';
import {BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom';
//import {fetchFoodList} from '../actions';
//import {fetchSymptomList} from '../actions';
import SignUpForm from './signup-form';
import LoginForm from './loginform';
import {connect} from 'react-redux';
import {loggingIn} from '../actions';
import './signup.css'

export function SignUp(props){ 


if (props.loggedIn) {
        return <Redirect to="/loggedin/dashboard" />;
    }

if (props.loggingIn) {

    return (

     <div className="sign-up-container">
            <LoginForm />
            <div className="login-link">
                <button onClick={() => props.dispatch(loggingIn(false)) }>No account, yet? Need to sign up?</button>
            </div>
        </div>

        );
}    
    return (
        
        <div className="sign-up-container">
            <SignUpForm />
            <div className="login-link">
                <button onClick={() => props.dispatch(loggingIn(true)) }>No account, yet? Need to sign up?</button>
            </div>
        </div>
        
       

    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null,
    loggingIn: state.reducer.loggingIn
});

export default connect(mapStateToProps)(SignUp);