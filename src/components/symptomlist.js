import React from 'react';

import {connect} from 'react-redux';

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
		let array = this.buildList().slice();

		array.sort(function(a, b) {
    			a = new Date(a.date);
    			b = new Date(b.date);
    			return a>b ? -1 : a<b ? 1 : 0;
		}
		);

		return array.slice(0, parseInt(this.props.show));; 
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

		let lists;


		if(this.props.foodList.todayList != null) {
  				console.log('we have foods');

  				lists = this.props.foodList.todayList.symptomList.map((list, index) => (
            <div className="list-wrapper" key={index}>
                <SymptomListItem {...list} />
            </div>
            ));

          return (
						<div className="symptom-list dark-box">
							<h3>Today's Symptoms</h3>
							<div>
								{lists}
							</div>
						</div>
					);

  				
  	} else {

                 return (
									<div className="symptom-list dark-box">
										<h3>Today's Symptoms</h3>
										<div>
											Add more data so we can track your symptoms!
										</div>
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

export default connect(mapStateToProps)(SymptomList);
