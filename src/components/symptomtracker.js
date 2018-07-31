import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import SymptomForm from './symptomForm';
import SymptomList from './symptomlist';
import requiresLogin from './requires-login';

export class SymptomTracker extends React.Component {


	render() {

 		console.log("history: ", this.props.history); 

		return (

			<section className="factortracker-container">
				<div className="row">
 					<div className="col-8">						
 					  <h2 className="extra-space-below">Add symptoms to track</h2>
 					</div>
 				</div>
 				<div className="row">
 					<div className="col-8">	
 						<div className="ft-positioner">
								<SymptomForm history={this.props.history}/>
						</div>
						<div className="align-center">
							<button className="back-to-dash-button red savebutton" onClick={()=> this.props.history.push('/loggedin/dashboard/')}>
							Cancel
							</button>
						</div>
					</div>
 					<div className="col-4">
 						<div className="foodlist-section">
							<SymptomList show="10"/>
						</div>
					</div>
				</div>
			</section>

			);
	}
}

export default requiresLogin()(SymptomTracker);
