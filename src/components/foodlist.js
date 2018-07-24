import React from 'react';
//import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
//import store from '../store';
import {connect} from 'react-redux';

//import './syomptomlist.css';
import FoodListItem from './foodlistitem';
import {fetchFoodList} from '../actions';

var moment = require('moment');
moment().format();

export class FoodList extends React.Component {

   setUpQuery( ) {

     let today = moment()._d; 

        today = moment(today).format("MM-DD-YYYY");

        let startDay = moment(today).subtract(7, 'days');
        
        let myQueryObj = {date: '7/4/18'};

        console.log('my search: ', myQueryObj); 

        //let myQueryObj = {sdate: '7-4-2018', edate: '7-11-2018', symptom:'Gas'};

        this.props.dispatch(fetchFoodList('daylists', myQueryObj) );
        //this.props.dispatch(fetchFoodList('daylists', {}) );
  }  

  componentDidMount() {
        //this.props.dispatch(fetchProtectedData());

       //this.setUpQuery( );

    }

render() {

			let mySymptoms; 
			let lists;


			console.log('my prop based data in food list', this.props.foodList.daylists);

     // console.log('compare dates: '+ moment(this.props.foodList.daylists[3].date).format("MM-DD-YYYY")+' to ' + moment('7/4/18').format("MM-DD-YYYY"));


      //const result = this.props.foodList.daylists.find( day => moment(day.date).format("MM-DD-YYYY") === moment('7/4/18').format("MM-DD-YYYY") ); 
     // console.log('result of find:', result);

  			//let currentStore = store.getState(); 

  			if(this.props.foodList.todayList.foodList != null) {
  				console.log('we have foods');

  				  lists = this.props.foodList.todayList.foodList.map((list, index) => (
            		<li className="list-item" key={index}>
                		<FoodListItem {...list} showTags="true" />
            		</li>
            		));

  				
  			}


	return (
		<div className="food-list">
		<h3>All the foods you ate today:</h3>
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
