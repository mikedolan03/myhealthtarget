import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFrown } from '@fortawesome/free-regular-svg-icons'
import './navbar.css';
import 'font-awesome/css/font-awesome.min.css';
import {IoSpoon, IoSadOutline, IoAndroidExit} from 'react-icons/lib/io';

export default class NavBar extends React.Component { 

	render() {

		return ( 
			<nav className="navbar">
				<ul>
					<li><h1><Link to="/loggedin/dashboard/">Symptom Hacker</Link></h1></li>
					<li className="floatright"><Link to="/"><IoAndroidExit size={32}/></Link></li>
					<li className="floatright"><Link to="/loggedin/symptomtracker/">
					<IoSadOutline size={32} /></Link></li>
					<li className="floatright"><Link to="/loggedin/factortracker/">
					<IoSpoon size={32}/>
					</Link></li>
					
				</ul>
			</nav>
			);
	}
}