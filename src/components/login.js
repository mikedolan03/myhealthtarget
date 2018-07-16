import React from 'react';
import {BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom';
import {fetchFoodList} from '../actions';
import {fetchSymptomList} from '../actions';
import LoginForm from './loginform';

import {connect} from 'react-redux';
//import './login.css'

export  class LogIn extends React.Component { 

login() {

	// this.props.dispatch(fetchFoodList());
	//	this.props.dispatch(fetchSymptomList());

	// this.props.history.push('/loggedin/dashboard');

}

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

/*
	return ( 		

		<section className="login-page-container">

			<h2>This is the log in page.</h2> 
			<form>
			<label>User Name</label>
			<input type="text" name="user" />
			<label>Password</label>
			<input type="password" name="password" />
			<button onClick={()=> this.login()}>
				Log In
			</button>
			</form>
			<h3><Link to="/signup/">Don't have an account? Sign Up</Link></h3>
		
		</section>
		); 
	}

}
*/

const mapStateToProps = state => ({
    foodList: state.reducer.foodList,
    symptomList: state.reducer.symptomList,
    loggedIn: state.auth.currentUser !== null

});

export default connect(mapStateToProps)(LogIn);