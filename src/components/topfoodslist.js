import React from 'react';
import {connect} from 'react-redux';

import TopFoodItem from './topfooditem';
import './topfoodslist.css';

export class TopFoodsList extends React.Component {

render() {

			let lists;

  		if(this.props.foodList.foodCounts.length > 0) {
  			console.log('we have foods');

  			lists = this.props.foodList.foodCounts.slice(0,5).map((list, index) => (
          <div className="list-item" key={index}>
            <button><TopFoodItem {...list} percent={ (list.count / this.props.foodList.daylists.length) * 100 }/></button>
          </div>
        ));

      return (
    		<div className="food-list">
    		  <h3>Foods That Might Cause {this.props.symptom}</h3>
    		  <div>
    		   {lists}
    		  </div>
    		</div>
    		);
  } else {

    return (
        <div className="food-list">
          <h3>Not enough data on foods associated with {this.props.symptom}</h3>
        </div>
        );
    }

 }

}

const mapStateToProps = state => ({
    foodList: state.reducer.foodList,
    symptomList: state.reducer.symptomList,
    loaded: state.reducer.loaded,
    symptom: state.reducer.symptom
});

export default connect(mapStateToProps)(TopFoodsList);
