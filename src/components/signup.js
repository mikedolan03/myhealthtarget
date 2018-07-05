import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {fetchFoodList} from '../actions';
import {fetchSymptomList} from '../actions';

import {connect} from 'react-redux';

//import './signup.css'

export class SignUp extends React.Component { 

login() {

	 this.props.dispatch(fetchFoodList());
	 	 this.props.dispatch(fetchSymptomList());

	 this.props.history.push('/loggedin/dashboard');

}

render() {

	return ( 
		<section className="signup-page-container">

			<h2>This is the sign up page.</h2> 
			<h3>Create a new account: </h3>
			<form>
			<label>Email</label>
			<input type="email" name="email" />
			<label>User Name</label>
			<input type="text" name="user" />
			<label>Password</label>
			<input type="password" name="password" />
			<button onClick={()=> this.login()}>
				Create Account
			</button>
			</form>
			<h3><Link to="/login/">Already have an account? Log in</Link></h3>
		</section>

		); 
	}

}

const mapStateToProps = state => ({
    foodList: state.reducer.foodList,
    symptomList: state.reducer.symptomList
});

export default connect(mapStateToProps)(SignUp);