import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
//import './landingpage.css'
import {connect} from 'react-redux';

export class ReviewScreen extends React.Component { 

render() {

	return (
		<section className="reviewscreen-container"> 
			<h2>This is the ReviewScreen page.</h2> 

			<h3>Select a symptom: Headache</h3>

			<em>These foods were consumed more than once prior to symptoms: </em>
			<div>
			- Pizza
			- Bread
			- Corn muffin
			- Soda
			</div>



			<Link to="/loggedin/dashboard/">Back to Dashboard</Link>
		</section>
		); 
	}

}

const mapStateToProps = state => ({
    foodList: state.reducer.foodList,
    symptomList: state.reducer.symptomList
});

export default connect(mapStateToProps)(ReviewScreen);
