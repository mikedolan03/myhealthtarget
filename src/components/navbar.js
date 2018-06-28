import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import './navbar.css';

export default class NavBar extends React.Component { 

	render() {

		return ( 
			<nav className="navbar">
				<ul>
					<li><Link to="/loggedin/dashboard/">Home</Link></li>
					<li><Link to="/loggedin/factortracker/">Track Food</Link></li>
					<li><Link to="/loggedin/symptomtracker/">Track Symptom</Link></li>
					<li><Link to="/loggedin/reviewscreen/">Review</Link></li>
					<li className="floatright"><Link to="/">Log out</Link></li>
				</ul>
			</nav>
			);
	}
}