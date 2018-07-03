import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import SymptomForm from './symptomForm';
import showResults from "./showResults";
import SymptomList from './symptomlist';

export default class SymptomTracker extends React.Component {


	render() {

 console.log("history: ", this.props.history); 

		return (

			<section className="symptomtracker-container">
			<h2>This is the symptom tracking form page</h2>


			<SymptomForm history={this.props.history}/>


			<h3><Link to="/loggedin/dashboard/">Go back to Dashboard (without saving)</Link></h3>

			<SymptomList />



			</section>

			);
	}
}

