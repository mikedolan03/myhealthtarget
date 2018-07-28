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
			<div className="ro">
				<div className="col8">
					<h2>Symptom Hacker helps you figure out what foods are causing you health problems.</h2>
					<h2>Use the app to record what foods you have been eating and when you have symptoms.</h2>
					<h2>Then let the app compare all the data you collect and create a dashboard that helps you connect the dots between foods and symptoms.</h2>
				</div>
				<div className="col4">
				</div>

			</div>
	
		
		</section>
		
		); 
	}

}
