import React from 'react';

export class HealthSummary extends React.Component {
	constructor(props) {
        super(props);
        
    }

	render() {

		return (

			<section>
				<h2>Your Health Target Score: {this.props.score}</h2>
				<h5>Based on the last 10 days of entries</h5>
				<h3>Likely things to avoid: Gluten, stress, pizza</h3>
				<h3>You have your best days when you have: Exercise, Lettuce, French fries</h3>
			</section>

			);
	}

}

