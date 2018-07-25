import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

import FactorForm from './factorForm';
import showResults from "./showResults";
import FoodList from './foodlist';

export class FactorTracker extends React.Component {

	submitFactorData(values) {
		console.log('i submitted data!', values);

	}

	render() {

 		console.log("history: ", this.props.history); 

		return (

			<section className="factortracker-container">
				<div className="row">
 					<div className="col-12">
						<h2>What did you eat today?</h2>
							<FactorForm submitData={this.submitFactorData}/>
					</div>
				</div>
				<div className="row">
 					<div className="col-12">
						<button onClick={()=> this.props.history.push('/loggedin/dashboard/')}>
						Go back to dash
						</button>
					</div>
				</div>
				<div className="row">
 					<div className="col-12">
 						<div className="foodlist-section">
							<FoodList />
						</div>
					</div>
				</div>
			</section>

			);
	}
}

const mapStateToProps = state => ({
	userData: state.userData
});

const myFactorTracker = withRouter(FactorTracker);

export default connect(mapStateToProps)(myFactorTracker);
