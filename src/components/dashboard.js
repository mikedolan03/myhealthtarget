import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import store from '../store';
import './dashboard.css';
import SymptomList from './symptomlist';


export default class DashBoard extends React.Component {


	clickedTrackFood() {


		this.props.history.push('/loggedin/factortracker/');

	}

	render( ) {

			let mySymptoms; 
		let lists;

			console.log('store in dash: ', store.getState());

  			let currentStore = store.getState(); 

  			if(currentStore.reducer.symptomList.length > 0) {
  				console.log('we have symptoms');

  				  lists = currentStore.reducer.symptomList.map((list, index) => (
            		<li className="list-wrapper" key={index}>
                		<SymptomList {...list} />
            		</li>
            		));

  				
  			}


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
		<ul>{lists}</ul>

		</section>


			);

	}; 

}