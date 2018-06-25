import React from 'react';
//import other compenents and actions

import './dash.css';
import {Hero} from './hero';
import {HealthSummary} from './healthsummary';

export class Dash extends React.Component {
constructor(props) {
        super(props);

    }
	render() {

		console.log('props', this.props);



		return(
			<div className='dash'>
			<header>
				<nav>
				Nav Bar- Hello {this.props.userInfo.firstName} - Log in
				</nav>
			</header>
			<main>
				<Hero />

				<HealthSummary />

				<section>
				<form>
				<div>
					<label>Select a Symptom: </label>
					<input type="text" list="symptoms" />
					<datalist id="symptoms">
					   <option>Tired</option>
					  <option>Headache</option>
					  <option>Stomach ache</option>
					  <option>Sick stomach</option>
					  <option>Heartburn</option>
					  <option>Pain</option>
					  <option>Gas</option>
					</datalist>
					</div>
				</form>
				<h4>Based on your most recent data - here are some connections we see to this symptom: </h4>
				<h5>Possible factors associated with ***: Dairy, Onions, Wheat</h5>
				<h4>--chart showing symptom/rating against points when factor recorded</h4>	
				<img src="chartexample.png" />
				</section>
				<section>
				-other smaller charts of other possible causes related to symptom with link to show them big-
				<h4>We analyze your data to find trends and connections to help you make better choices for your health.</h4>	
				</section>
		
			</main>
			<footer>
			Disclaimer: We aren't doctors, we are just code and AI- so we can't diagnose anything or give medical advise. All information provided is so that users can manage their health and work with a medical professional to alleviate their symptoms. 	
			</footer>
		</div>
		); 

	}
}

const userInfo = {
		userName: 'Mike03',
		firstName: 'Mike'
	};

	const userData = {
		userID: 0,
		targetScore: 90,
		likelyFactors: ['gluten','dairy','nachos'],
		factorEntries: [ 
			{id: 0, factor: 'gluten', date: '5/7/11', time: '5:00pm' },
			{id: 1, factor: 'pizza', date: '6/8/11', time: '3:00pm' }		
		],
		symptomEntries: [
		{id: 0, symptom: 'stomach ache', date: '5/7/11', time: '6:00pm'},
		{id: 0, symptom: 'hearburn', date: '7/5/11', time: '3:00pm'}
		]
	}


Dash.defaultProps = {
    userInfo: userInfo,
    userData, userData
};
	


