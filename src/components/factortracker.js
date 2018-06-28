import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import FactorForm from './factorForm';
import showResults from "./showResults";

export default class FactorTracker extends React.Component {


	render() {

 console.log("history: ", this.props.history); 

		return (

			<section className="factortracker-container">
			<h2>This is the food activity tracking form page</h2>


			<FactorForm history={this.props.history}/>


			<h3><Link to="/loggedin/dashboard/">Go back to Dashboard (without saving)</Link></h3>


			</section>

			);
	}
}