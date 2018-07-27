import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import SymptomForm from './symptomForm';
import showResults from "./showResults";
import SymptomList from './symptomlist';

export default class SymptomTracker extends React.Component {


	render() {

 		console.log("history: ", this.props.history); 

		return (

			<section className="factortracker-container">
				<div className="row">
 					<div className="col-12">
 						<div className="ft-positioner">
							<h2 className="extra-space-below">Add symptoms to track</h2>
								<SymptomForm history={this.props.history}/>
						</div>
					</div>
				</div>
				<div className="row">
 					<div className="col-12">
						<div className="align-center"><button className="back-to-dash-button red savebutton" onClick={()=> this.props.history.push('/loggedin/dashboard/')}>
						Cancel
						</button>
						</div>
					</div>
				</div>
				<div className="row">
 					<div className="col-12">
 						<div className="foodlist-section">
							<SymptomList show="10"/>
						</div>
					</div>
				</div>
			</section>

			);
	}
}

