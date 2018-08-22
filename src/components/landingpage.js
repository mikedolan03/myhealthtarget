import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import SignUp from './signup';
import './landingpage.css'
import screenshot from './shgraph.png';
import screenshotb from './shdeskdash.png';
import screenshotc from './shsyminput.png';

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
			<div className="row">
				<div className="col-5">
					<h2>Why use Symptom Hacker?</h2>
					<h3>Symptom Hacker helps you figure out what foods are causing you health problems.</h3>
					<h3>Use the app to record what foods you have been eating and when you have symptoms.</h3>
				</div>
				<div className="col-7">
					<div className="img-container">
						<img src ={screenshot} className="screen-shot-long"/>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-5">
					<h2>Get Hacking! </h2>
					<h3>Let the app compare all the data you collect and create a dashboard that helps you connect the dots between foods and symptoms.</h3>
				</div>
				<div className="col-7">
					<div className="img-container">
						<img src ={screenshotb} className="screen-shot"/>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-5">
					<h2>Features: </h2>
					<ul>
					<li>You can record all the foods you eat for each day.</li>
					<li>Check out animated charts that rate foods as possible problems</li>
					<li>Go back and record things you forgot or add new items to today's log</li>
					<li>Record as many symptoms as you want each day and rate how bad they are. </li>
					<li>Look at different date ranges and see food/symptom trends over time.</li>
					<li>Our responsive React app updates live as you add new info and works awesome on your computer or your phone.</li>
					</ul>
				</div>
				<div className="col-7">
					<div className="img-container">
						<img src ={screenshotc} className="screen-shot"/>
					</div>
				</div>
			</div>
	
		
		</section>
		
		); 
	}

}
