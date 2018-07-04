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
			<h2>This is the food activity tracking form page</h2>


			<FactorForm submitData={this.submitFactorData}/>


			<h3><Link to="/loggedin/dashboard/">Go back to Dashboard (without saving)</Link></h3>
		
		<button onClick={()=> this.props.history.push('/loggedin/dashboard/')}>
				Go back to dash
			</button>

			<FoodList />

			</section>

			);
	}
}

const mapStateToProps = state => ({
	userData: state.userData
});

const myFactorTracker = withRouter(FactorTracker);

export default connect(mapStateToProps)(myFactorTracker);
