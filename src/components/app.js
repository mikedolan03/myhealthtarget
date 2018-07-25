import React from 'react';
import {connect} from 'react-redux';

import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import LandingPage from './landingpage';
import DashBoard from './dashboard';
import myFactorTracker from './factortracker';
import SymptomTracker from './symptomtracker';
import ReviewScreen from './reviewscreen';
import Login from './login';
import SignUp from './signup';
import NavBar from './navbar';

import './app.css';
import './grid.css';


export class App extends React.Component {

 componentDidMount() {
		//this.props.dispace(fetchUserData());
 }

 render() {

	return (
		<Router> 
			<div className="app">
				<main>
					<Route exact path="/" component={LandingPage} />
					<Route path="/loggedin/" component={NavBar} />
					<Route exact path="/loggedin/dashboard/" component={DashBoard} />
					<Route exact path="/login/" component={Login} />
					<Route exact path="/signup/" component={SignUp} />
					<Route exact path="/loggedin/factortracker/" component={myFactorTracker} /> 
					<Route exact path="/loggedin/symptomtracker/" component={SymptomTracker} /> 
					<Route exact path="/loggedin/reviewscreen/" component={ReviewScreen}  />

				</main>
			</div>
		</Router>

		);
	}
}

const mapStateToProps = state => ({
	userData: state.userData
});

export default connect(mapStateToProps)(App);

