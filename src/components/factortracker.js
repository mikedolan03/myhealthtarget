import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

export default class FactorTracker extends React.Component {

	render() {

		return (

			<section className="factortracker-container">
			<h2>This is the food activity tracking form page</h2>

			<form>
			<label>Food</label>
			<input type="text" name="food" />
			<label>Tags</label>
			<input type="text" name="tags" />
			</form>

			<h3><Link to="/loggedin/dashboard/">Save data</Link></h3>


			</section>

			);
	}
}