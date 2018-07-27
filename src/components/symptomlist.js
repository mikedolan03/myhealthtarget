import React from 'react';
//import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
//import store from '../store';
import {connect} from 'react-redux';

//import './syomptomlist.css';
import SymptomListItem from './symptomlistitem';
import './symptomlist.css';

export class SymptomList extends React.Component {

	constructor(props) {
    super(props);
    this.state = {showInfo: false}
    this.showMoreInfo = this.showMoreInfo.bind(this);
  }

	showMoreInfo(index) {
			this.setState(prevState => ({
      showInfo: !prevState.showInfo
    }));

			console.log('hello ',this.state); 
	}

	sortList() {

	//	let array = this.props.foodList.todayList.symptomList.slice(0, parseInt(this.props.show));
		let array = this.buildList().slice(0, parseInt(this.props.show));

		array.sort(function(a, b) {
    			a = new Date(a.date);
    			b = new Date(b.date);
    			return a>b ? -1 : a<b ? 1 : 0;
		}
		);

		return array; 
	}

	buildList() {

		let combinedSymptoms = []; 

		 	this.props.foodList.daylists.map( dlist => { 

		 		let symListtoAdd = dlist.symptomList; 

		 		symListtoAdd.map(sympListitem => { 

		 			sympListitem.date = dlist.date; 

		 		})

		 		combinedSymptoms = combinedSymptoms.concat(symListtoAdd); 

			   });

		 	console.log('combined Symptoms', combinedSymptoms);

		 	return combinedSymptoms; 

	}

render() {

	if(!this.props.foodList.daylists) return null; 

  this.buildList();

			let mySymptoms; 
			let lists;


			console.log('my prop based data in symp list', this.props.foodList); 

  			//let currentStore = store.getState(); 

  			if(this.props.foodList.todayList.symptomList.length > 0) {
  				console.log('we have symptoms');
			
 				 	lists = this.sortList().map((list, index) => (
            		<div className="list-wrapper" key={index}>
                		<SymptomListItem {...list} />
            		</div>
            		));
  			}


	return (
		<div className="symptom-list dark-box">
		<h3>Your Recent Symptoms</h3>
		<div>
		{lists}
		</div>
		</div>
		);

}

}

const mapStateToProps = state => ({
    foodList: state.reducer.foodList,
    symptomList: state.reducer.symptomList
});

export default connect(mapStateToProps)(SymptomList);
