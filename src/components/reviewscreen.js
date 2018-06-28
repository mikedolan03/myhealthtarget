import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
//import './landingpage.css'

export default class ReviewScreen extends React.Component { 

render() {

	return (
		<section className="reviewscreen-container"> 
			<h2>This is the ReviewScreen page.</h2> 

			<Link to="/loggedin/dashboard/">Back to Dashboard</Link>
		</section>
		); 
	}

}
