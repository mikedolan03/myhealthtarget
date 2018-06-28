import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import store from '../store';

export default class DashBoard extends React.Component {

	render( ) {

			console.log('store in dash: ', store.getState());
  

		return (

		<section className="dashboard"> 

			<h2>This is the Dashboard</h2> 

			<h3>Block of recent data, Health Target Score</h3>

			<h2>Track something</h2> 

			<h3><Link to="/loggedin/factortracker/">Add a food to track</Link></h3>
			<h3><Link to="/loggedin/symptomtracker/">Add a symptom to track</Link></h3>
			<h3><Link to="/loggedin/reviewscreen/">Review your Data</Link></h3>

		</section>

			);

	}; 

}