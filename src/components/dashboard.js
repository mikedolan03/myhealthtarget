import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import store from '../store';
import {connect} from 'react-redux';

import './dashboard.css';
import SymptomList from './symptomlist';
import FoodList from './foodlist';
import MyChart from './chart';


export class DashBoard extends React.Component {


	clickedTrackFood() {


		this.props.history.push('/loggedin/factortracker/');

	}

	render( ) {

			let mySymptoms; 
			let lists;

			console.log('store in dash: ', store.getState());

			console.log('my prop based data', this.props.foodList); 

  			let currentStore = store.getState(); 

  			/*if(currentStore.reducer.symptomList.length > 0) {
  				console.log('we have symptoms');

  				  lists = this.props.symptomList.map((list, index) => (
            		<li className="list-wrapper" key={index}>
                		<SymptomListItem {...list} />
            		</li>
            		));

  				
  			} */


		return (

		<section className="dashboard"> 

			<h2>This is the Dashboard</h2> 

			<MyChart />

			<div className="info-block">
			<h3>Block of recent data, Health Target Score</h3>
			</div>


		<SymptomList show='5'/>
		<button onClick={()=> this.props.history.push('/loggedin/symptomtracker/')}	>
				Add symptom	to track
			</button>

		<FoodList show='5'/>
		<button onClick={()=> this.props.history.push('/loggedin/factortracker/')}>
				Add food to track
			</button>

			<button onClick={()=> this.props.history.push('/loggedin/reviewscreen/')}	>
				Review your Data
			</button>
		</section>


			);

	}; 

}

const mapStateToProps = state => ({
    foodList: state.reducer.foodList,
    symptomList: state.reducer.symptomList
});

export default connect(mapStateToProps)(DashBoard);