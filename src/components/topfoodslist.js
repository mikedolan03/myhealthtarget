import React from 'react';
import {connect} from 'react-redux';

import TopFoodItem from './topfooditem';
import './topfoodslist.css';

export class TopFoodsList extends React.Component {

  generatePercent(number1, number2) {

    let newPercent;

    newPercent = Math.round( ((number1 / number2) * 100) );

    if(newPercent > 100) newPercent = 100;

    if(newPercent < 0) newPercent =0; 

    return newPercent;  
                      

  }

  renderTitle() {


          if(this.props.dataStatus =='general') {

            return ( <h3>Top Foods Eaten</h3> );

          } else {
                  return ( <h3>Foods That Might Cause {this.props.symptom}</h3>);
                  }
 }


render() {

			let lists;

  		if(this.props.foodList.foodCounts) {
  			console.log('we have foods');

  			lists = this.props.foodList.foodCounts.slice(0,5).map((list, index) => (
          <div className="list-item" key={index}>
            <button><TopFoodItem {...list} 
            percent={ this.generatePercent(list.count,this.props.foodList.daylists.length)} totalDays={this.props.foodList.daylists.length}/></button>
          </div>
        ));

         

      return (
    		<div className="food-list">
    		  {this.renderTitle()}
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
    symptom: state.reducer.symptom,
    dataStatus: state.reducer.dataStatus

});

export default connect(mapStateToProps)(TopFoodsList);
