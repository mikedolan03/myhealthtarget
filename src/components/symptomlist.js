import React from 'react';
//import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
//import store from '../store';
import {connect} from 'react-redux';

//import './syomptomlist.css';
import SymptomListItem from './symptomlistitem';

export class SymptomList extends React.Component {

	sortList() {

		let array = this.props.symptomList.slice(0, parseInt(this.props.show));

		array.sort(function(a, b) {
    			a = new Date(a.date);
    			b = new Date(b.date);
    			return a>b ? -1 : a<b ? 1 : 0;
		}
		);

		return array; 
	}

render() {

			let mySymptoms; 
			let lists;


			console.log('my prop based data in symp list', this.props.foodList); 

  			//let currentStore = store.getState(); 

  			if(this.props.symptomList.length > 0) {
  				console.log('we have symptoms');
				

//  	lists = this.props.symptomList.slice(0, parseInt(this.props.show)).map((list, index) => (

  	lists = this.sortList().map((list, index) => (
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
