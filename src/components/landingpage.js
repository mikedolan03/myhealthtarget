import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import SignUp from './signup';
import './landingpage.css'
import screenshot from './shgraph.png';
import screenshotb from './shdeskdash.png';

export default class LandingPage extends React.Component { 

render() {

	return ( 
	<section className="landing-page-container">
		<div role = "banner" className="top-banner">
			<div className="logo">Symptom Hacker</div>
			<div className="banner-text-container">
				<h1>Ever wonder what foods are making you feel sick?</h1>
				<h3>Use the Symptom Hacker to find problem foods and eliminate them from your diet.</h3>
			</div>
		</div>
		<div className="sign-up-section">
				<SignUp />
		</div>

			<section>
			<div className="row">
				<div className="col-8">
					<h2>Symptom Hacker helps you figure out what foods are causing you health problems.</h2>
					<h2>Use the app to record what foods you have been eating and when you have symptoms.</h2>
					<h2>Then let the app compare all the data you collect and create a dashboard that helps you connect the dots between foods and symptoms.</h2>
					<img src={screenshotb} width="100%"/>
				</div>
				<div className="col-4">
				<img src={screenshot} />
				</div>

			</div>
			  -screen shot of dashboard-
			  <h4>My Health Target helps you figure out what lifestyle factors are keeping you from hitting your health targets.</h4>
			</section>
			<section>
			  <h3><Link to="/signup/">Sign Up</Link></h3>
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
