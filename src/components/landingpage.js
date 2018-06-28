import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

//import './landingpage.css'

export default class LandingPage extends React.Component { 

render() {

	return ( 
		<section className="landing-page-container">
			<h2>This is the landing page.</h2> 
			
			<h3><Link to="/signup/">Sign Up</Link></h3>

			<h3><Link to="/login/">Already have an account? Log in</Link></h3>
		</section>

		); 
	}

}
