import React from 'react';
import {connect} from 'react-redux';
import FoodListItem from './foodlistitem';
import {fetchFoodList} from '../actions';
import './foodlist.css';

var moment = require('moment');
moment().format();

export class FoodList extends React.Component {


render() {

			let mySymptoms; 
			let lists;


		//	console.log('my prop based data in food list', this.props.foodList.daylists);


  			if(this.props.foodList.todayList != null) {
  				console.log('we have foods');

  				lists = this.props.foodList.todayList.foodList.map((list, index) => (
            <li className="list-item" key={index}>
              <FoodListItem {...list} showTags="true" />
            </li>
            ));

          return (
                  <div className="food-list">
                  <h3 className="orange-text align-center">All the foods you ate today:</h3>
                  <ul>
                  {lists}
                  </ul>
                  </div>
                  );

  				
  			} else {

          return (
                  <div className="food-list align-center">
                  <h3 className="orange-text">All the foods you ate today:</h3>
                  <h3>You currently have no food entries for today. Add some!</h3>
                  </div>
                  );

        }


	

  }

}

const mapStateToProps = state => ({
    foodList: state.reducer.foodList,
    loaded: state.reducer.loaded,
    symptom: state.reducer.symptom,
    sentSuccess: state.reducer.sentSuccess
});

export default connect(mapStateToProps)(FoodList);
