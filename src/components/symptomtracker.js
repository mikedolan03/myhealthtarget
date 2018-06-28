import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

export default class SymptomTracker extends React.Component {

	render() {

		return (

			<section className="symptomtracker-container">
			<h2>Symptom Tracking Form</h2>
			<label>Symptom</label>
			<input type="text" name="symptom" />
			<label>Severity Level 1-10</label>
			<input type="number" name="severity" />

			<h3><Link to="/loggedin/dashboard/">Save symptom</Link></h3>

			</section>

			); 
	}


}