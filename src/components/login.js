import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

//import './login.css'

export default class LogIn extends React.Component { 

render() {

	return ( 		

		<section className="login-page-container">

			<h2>This is the log in page.</h2> 
			<form>
			<label>User Name</label>
			<input type="text" name="user" />
			<label>Password</label>
			<input type="password" name="password" />
			<button onClick={()=> this.props.history.push('/loggedin/dashboard')}>
				Log In
			</button>
			</form>
			<h3><Link to="/signup/">Don't have an account? Sign Up</Link></h3>
		
		</section>
		); 
	}

}