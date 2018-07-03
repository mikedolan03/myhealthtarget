import React from 'react';
//import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
//import store from '../store';
import {connect} from 'react-redux';

//import './syomptomlist.css';
import SymptomListItem from './symptomlistitem';

export class SymptomList extends React.Component {

render() {

			let mySymptoms; 
			let lists;


			console.log('my prop based data in symp list', this.props.foodList); 

  			//let currentStore = store.getState(); 

  			if(this.props.symptomList.length > 0) {
  				console.log('we have symptoms');

  				  lists = this.props.symptomList.map((list, index) => (
            		<li className="list-wrapper" key={index}>
                		<SymptomListItem {...list} />
            		</li>
            		));

  				
  			}


	return (
		<div className="symptom-list">
		<h3>Recent Symptoms</h3>
		<ul>
		{lists}
		</ul>
		</div>
		);

}

}

const mapStateToProps = state => ({
    foodList: state.reducer.foodList,
    symptomList: state.reducer.symptomList
});

export default connect(mapStateToProps)(SymptomList);
