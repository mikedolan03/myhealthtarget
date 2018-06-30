import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import './landingpage.css'

export default class LandingPage extends React.Component { 

render() {

	return ( 
		<section className="landing-page-container">
			<section>
			  -screen shot of dashboard-
			  <h4>My Health Target helps you figure out what lifestyle factors are keeping you from hitting your health targets.</h4>
			</section>
			<section>
			  <h3><Link to="/signup/">Sign Up</Link></h3>
			  <h3><Link to="/login/">Already have an account? Log in</Link></h3>
			</section>
			<section>
			  -screen shot of food/activity/symptom inputs-
			  <h4>Log food, activities, stress, mood throughout your day and track symptoms and other health markers.</h4>	
		    </section>
		    <section>
			  -screen shot of data wall -charts graphs-
			  <h4>We analyze your data to find trends and connections to help you make better choices for your health.</h4>	
			</section>
		</section>
		
		); 
	}

}
