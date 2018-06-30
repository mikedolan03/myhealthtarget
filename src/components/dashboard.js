import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import store from '../store';
import './dashboard.css';

export default class DashBoard extends React.Component {

	clickedTrackFood() {


		this.props.history.push('/loggedin/factortracker/');

	}

	render( ) {

			console.log('store in dash: ', store.getState());
  

		return (

		<section className="dashboard"> 

			<h2>This is the Dashboard</h2> 

			<div className="info-block">
			<h3>Block of recent data, Health Target Score</h3>
			</div>

			<h2>Track something</h2> 

			<button onClick={()=> this.props.history.push('/loggedin/factortracker/')}>
				Add food to track
			</button>

			<button onClick={()=> this.props.history.push('/loggedin/symptomtracker/')}	>
				Add symptom	to track
			</button>

			<button onClick={()=> this.props.history.push('/loggedin/reviewscreen/')}	>
				Review your Data
			</button>

		</section>

			);

	}; 

}