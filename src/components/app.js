import React from 'react';
import {connect} from 'react-redux';

import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import LandingPage from './landingpage';
import DashBoard from './dashboard';
import myFactorTracker from './factortracker';
import SymptomTracker from './symptomtracker';
import SignUp from './signup';
import NavBar from './navbar';
import {refreshAuthToken} from '../actions/auth';


import './app.css';
import './grid.css';


export class App extends React.Component {

    componentDidUpdate(prevProps) {
        if (!prevProps.loggedIn && this.props.loggedIn) {
            // logged in, refresh the auth token 
            this.startPeriodicRefresh();
        } else if (prevProps.loggedIn && !this.props.loggedIn) {
            // Stop refreshing log out
            this.stopPeriodicRefresh();
        }
    }

    componentWillUnmount() {
        this.stopPeriodicRefresh();
    }

    startPeriodicRefresh() {
        this.refreshInterval = setInterval(
            () => this.props.dispatch(refreshAuthToken()),
            60 * 60 * 1000 // One hour
        );
    }

    stopPeriodicRefresh() {
        if (!this.refreshInterval) {
            return;
        }

        clearInterval(this.refreshInterval);
    }

 render() {

	return (
		<Router> 
			<div className="app">
				<main>
					<Route exact path="/" component={LandingPage} />
					<Route path="/loggedin/" component={NavBar} />
					<Route exact path="/loggedin/dashboard/" component={DashBoard} />
					<Route exact path="/signup/" component={SignUp} />
					<Route exact path="/loggedin/factortracker/" component={myFactorTracker} /> 
					<Route exact path="/loggedin/symptomtracker/" component={SymptomTracker} /> 

				</main>
			</div>
		</Router>

		);
	}
}

const mapStateToProps = state => ({
	userData: state.userData,
	 hasAuthToken: state.auth.authToken !== null,
   loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(App);

