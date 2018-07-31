import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import FactorForm from './factorForm';
import FoodList from './foodlist';
import './factortracker.css';


export class FactorTracker extends React.Component {


	render() {


		return (

			<section className="factortracker-container">
				<div className="row">
 					<div className="col-8">
 						<h2>Add foods to track</h2>
 					</div>
 					</div>
				<div className="row">
 					<div className="col-8">
 						<div className="ft-positioner">
								<FactorForm />
						</div>
						<div className="align-center"><button className="back-to-dash-button red savebutton" onClick={()=> this.props.history.push('/loggedin/dashboard/')}>
						Cancel
						</button></div>
					</div>
 					<div className="col-4">
 						<div className="foodlist-section">
							<FoodList />
						</div>
					</div>
				</div>
			</section>

			);
	}
}


const myFactorTracker = withRouter(FactorTracker);

export default requiresLogin()(myFactorTracker);
