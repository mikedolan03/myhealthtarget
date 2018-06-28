import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import LandingPage from './landingpage';
import DashBoard from './dashboard';
import FactorTracker from './factortracker';
import SymptomTracker from './symptomtracker';
import ReviewScreen from './reviewscreen';
import Login from './login';
import SignUp from './signup';
import NavBar from './navbar';

import './app.css';


export default function App(props) {
	return (
		<Router> 
			<div className="app">
				<header> 
					<h1 className="logo"><Link to="/">My Health Target</Link></h1>
				</header>
				<main>
					<Route exact path="/" component={LandingPage} />
					<Route  path="/loggedin/" component={NavBar} />
					<Route exact path="/loggedin/dashboard/" component={DashBoard} />
					<Route exact path="/login/" component={Login} />
					<Route exact path="/signup/" component={SignUp} />
					<Route exact path="/loggedin/factortracker/" component={FactorTracker} /> 
					<Route exact path="/loggedin/symptomtracker/" component={SymptomTracker} /> 
					<Route exact path="/loggedin/reviewscreen/" component={ReviewScreen}  />

				</main>
			</div>
		</Router>

		);
	}

