import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

//import './signup.css'

export default class SignUp extends React.Component { 

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
			
			<h3><Link to="/loggedin/dashboard/">Create Account</Link></h3>
			</form>
			<h3><Link to="/login/">Already have an account? Log in</Link></h3>
		</section>

		); 
	}

}