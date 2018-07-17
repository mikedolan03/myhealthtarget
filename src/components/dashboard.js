import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import store from '../store';
import {connect} from 'react-redux';

import './dashboard.css';
import SymptomList from './symptomlist';
import FoodList from './foodlist';
import MyChart from './chart';
import PercentBox from './percentbox';
import DataBar from './databar';
import {fetchFoodList} from '../actions';


export class DashBoard extends React.Component {

	componentDidMount() {
        //this.props.dispatch(fetchProtectedData());
        	 this.props.dispatch(fetchFoodList());

    }


	clickedTrackFood() {


		this.props.history.push('/loggedin/factortracker/');

	}

	render( ) {

			let mySymptoms; 
			let lists;

			console.log('any props? ', this.props ); 

			console.log('store in dash: ', store.getState());

			if (this.props.loading) {

				console.log('loading');

				return(	
					<section className="dashboard">
					<h2>Loading... </h2>
					</section>	
					 );

			} else if (this.props.loaded) {

								console.log('loaded');

								if(this.props.foodList.length <=0 ){

									return( 
										<section className="dashboard"> 

										<h2>Start tracking food and symptoms so we can analyze your data!</h2>

									</section> 
									); 

								} else { 

									return (

				<section className="dashboard"> 

				<h2>Recent Correlations</h2> 

				{this.props.foodList[0].foodList[0].name}

				<MyChart />

				<PercentBox number="50" description="hello" />

				<DataBar percent="50" description= "hi" number="5" />


				<SymptomList show='5'/>
				<button className="big-button" onClick={()=> this.props.history.push('/loggedin/symptomtracker/')}	>
				Add symptom	to track
				</button>

				<FoodList show='5'/>
				<button className="big-button" onClick={()=> this.props.history.push('/loggedin/factortracker/')}>
				Add food to track
					</button>

					<button className="big-button" onClick={()=> this.props.history.push('/loggedin/reviewscreen/')}	>
						Review your Data
					</button>
				</section>


					);

								}


				
				} else {

				console.log('Getting data');


					return(	
					<section className="dashboard">
					<h2>Getting data... </h2>
					</section>	
					 );
				}
			}
		}


const mapStateToProps = state => ({
    foodList: state.reducer.foodList,
    symptomList: state.reducer.symptomList,
    loading: state.reducer.loading,
    loaded: state.reducer.loaded
});

export default connect(mapStateToProps)(DashBoard);