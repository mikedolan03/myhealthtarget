import React from 'react';
//import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
//import store from '../store';
import {connect} from 'react-redux';

//import './syomptomlist.css';
import FoodListItem from './foodlistitem';

export class FoodList extends React.Component {

render() {

			let mySymptoms; 
			let lists;


			console.log('my prop based data in food list', this.props.foodList); 

  			//let currentStore = store.getState(); 

  			if(this.props.foodList.combinedFoods.length > 0) {
  				console.log('we have foods');

  				  lists = this.props.foodList.combinedFoods.map((list, index) => (
            		<li className="list-item" key={index}>
                		<FoodListItem {...list} showTags="true" />
            		</li>
            		));

  				
  			}


	return (
		<div className="food-list">
		<h3>Foods That Might Cause {this.props.symptom}</h3>
		<ul>
		{lists}
		</ul>
		</div>
		);

}

}

const mapStateToProps = state => ({
    foodList: state.reducer.foodList,
    symptomList: state.reducer.symptomList,
    loaded: state.reducer.loaded,
    symptom: state.reducer.symptom
});

export default connect(mapStateToProps)(FoodList);
