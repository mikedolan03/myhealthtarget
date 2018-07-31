import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';
import {logOut} from '../actions';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFrown } from '@fortawesome/free-regular-svg-icons'
import './navbar.css';
import 'font-awesome/css/font-awesome.min.css';
import {IoSpoon, IoSadOutline, IoAndroidExit} from 'react-icons/lib/io';

export class NavBar extends React.Component { 

	logOut() {
				this.props.dispatch(logOut());
        this.props.dispatch(clearAuth());
        clearAuthToken();
    }

	render() {

		return ( 
			<nav className="navbar">
			<div className="row">
 				<div className="col-12">
					<ul>
						<li><h1><Link to="/loggedin/dashboard/">Symptom Hacker</Link></h1></li>
						<li className="floatright"><button onClick={()=>this.logOut()}><IoAndroidExit size={32}/></button></li>
						<li className="floatright"><Link to="/loggedin/symptomtracker/">
						<IoSadOutline size={32} /></Link></li>
						<li className="floatright"><Link to="/loggedin/factortracker/">
						<IoSpoon size={32}/>
						</Link></li>
						
					</ul>
				</div>
				</div>
			</nav>
			);
	}
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(NavBar);