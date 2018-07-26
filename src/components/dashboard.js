import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import store from '../store';
import {connect} from 'react-redux';

import './dashboard.css';
import SymptomList from './symptomlist';
import FoodList from './foodlist';
import MyChart from './chart';
import PercentBox from './percentbox';
import DataBar from './databar';
import SymptomDateBar from './symptomdatebar';
import TopFoodsList from './topfoodslist';
import {fetchFoodList} from '../actions';
import {changeSymptom} from '../actions';
import {changeDates} from '../actions';
import {showModal} from '../actions';
import SymptomPickerModal from './symptompickermodal';
import NavBar from './navbar';

var moment = require('moment');
moment().format();

export class DashBoard extends React.Component {

	constructor(props) {
    super(props);
    this.changedSymptom = this.changedSymptom.bind(this);
    this.input = React.createRef();
    this.dateinput = React.createRef();
    this.state = { isModalOpen: false };
    }
  

	componentDidMount() {
        //this.props.dispatch(fetchProtectedData());

       this.setUpQuery( );

    }

    componentDidUpdate(prevProps) {
    
      console.log('component did update');    


      if( prevProps.symptom != this.props.symptom) this.setUpQuery();
      
      	if(prevProps.startDate != this.props.startDate) { 
      		this.setUpQuery(); 
      	} else {
      		
      		if(prevProps.startDate != this.props.startDate) { 
      			this.setUpQuery();
      			}
      	}

    }

  setUpQuery( ) {

  	 let today = moment()._d; 

				today = moment(today).format("MM-DD-YYYY");

				let startDay = moment(today).subtract(7, 'days').format("MM-DD-YYYY");
        
        let myQueryObj = {sdate: this.props.startDate, edate: this.props.endDate	, symptom: this.props.symptom};

        console.log('my search: ', myQueryObj); 

        //let myQueryObj = {sdate: '7-4-2018', edate: '7-11-2018', symptom:'Gas'};

        this.props.dispatch(fetchFoodList('daylists/getcauses', myQueryObj) );
        //this.props.dispatch(fetchFoodList('daylists', {}) );
  }  


	clickedTrackFood() {


		this.props.history.push('/loggedin/factortracker/');

	}

	changedSymptom(event) {

        //event.preventDefault();
        //console.log('in change symp 1', this.props);
        console.log('in change symp 2', this.input.current.value);
        
     this.props.dispatch(changeSymptom(this.input.current.value));
    // this.setUpQuery(); 
       
    }

    openModal(symptomM, dateM) {
      //this.setState({ isModalOpen: true })
           this.props.dispatch(showModal(symptomM, dateM));
           			console.log('any props? ', this.props ); 

    }

    closeModal() {
           this.props.dispatch(showModal(false, false));
    }

   

	render( ) {

			let mySymptoms; 
			let lists;


			//console.log("date: ", today);

			console.log('any props? ', this.props ); 

			console.log('store in dash: ', store.getState());

			if (this.props.loading) {

				console.log('loading');

				return(
					<div>
					 <header className="headerwidth"> 
					  <h1 className="logo"><Link to="/">My Health Target</Link></h1>
				   </header>	
					<section className="dashboard">
					<h2>Loading... </h2>
					</section>	
					</div>
					 ); 

			} else if (this.props.loaded) {

								console.log('loaded', this.props.foodList.length);

								if(!this.props.foodList.foodCounts){

									return( 
										<div>
					 					<header className="headerwidth"> 
					  				<h1 className="logo"><Link to="/">Symptom Hacker</Link></h1>
				   					</header>
										<section className="dashboard"> 

										<h2>Start tracking food and symptoms so we can analyze your data!</h2>

										<button className="big-button" onClick={()=> this.props.history.push('/loggedin/symptomtracker/')}	>
										Add symptom	to track
										</button>

										<button className="big-button" onClick={()=> this.props.history.push('/loggedin/factortracker/')}>
										Add food to track
										</button>

									</section> 
									</div>
									); 

								} else { 

								let myPercent; //=	(this.props.foodList.foodCounts[0].count / this.props.foodList.daylists.length) * 100; 
								myPercent = Math.round( ((this.props.foodList.foodCounts[0].count / this.props.foodList.daylists.length) * 100) );
								return (
								<div>
								<SymptomPickerModal isOpen={this.props.showSymptomModal} isOpenD={this.props.showDateModal} onClose={()=> this.closeModal()} />
								<NavBar />
								<section className="dashboard">  
								
									<div className="dashboard-container">
									
 											<div className="row">
 												<div className="col-12">
													<div className="chart-area-container">
	
														<MyChart />
													<SymptomDateBar top="true" onOpen={()=> this.openModal(true, false)} onOpenD={()=> this.openModal(false, true)} symptom={this.props.symptom} startDate={this.props.startDate} endDate={this.props.endDate}/>
													<SymptomDateBar onOpen={()=> this.openModal(true, false)} onOpenD={()=> this.openModal(false, true)} symptom={this.props.symptom} startDate={this.props.startDate} endDate={this.props.endDate}/>

													</div>
												</div>
											</div>
									
											<div className="row">
												<div className="col-6">
													<TopFoodsList />
													<PercentBox number={this.props.foodList.foodCounts[0].count} unit=' times'
														heading={this.props.foodList.foodCounts[0].name} description="# times eaten before symptom"/> 
												</div>
											</div>
											<div className="row">
												<div className="col-6">
													<h2>What foods are causing {this.props.symptom}?</h2>
													<h4>Change Symptom:  </h4>
													<label>What are you experiencing?</label> 

            <select name="selectSymptom" ref={this.input} onChange={()=> {this.changedSymptom()} }>
              
              <option value="Stomach Ache">Stomach Ache</option>
              <option value="Head Ache">Head Ache</option>
              <option value="Heartburn">Heartburn</option>
              <option value="Gas">Gas</option>
              <option value="Sick Stomach">sick stomach</option>
              <option value="Tired">Tired</option>
              <option value="Skin Rash">Skin Rash</option>
              <option value="Pain">Pain</option>
            </select> 
												</div>
											</div>
											<div className="row">
												<div className="col-6">
													<MyChart />
												</div>
												<div className="col-6">
												<TopFoodsList />
												<PercentBox number={this.props.foodList.foodCounts[0].count} unit=' times'
														heading={this.props.foodList.foodCounts[0].name} description="# times eaten before symptom"/> 
												</div>
											</div>
											<div className="row">
												<div className="col-4">
													<DataBar percent={myPercent} symptom={this.props.symptom} description= {this.props.foodList.foodCounts[0].name} number={`${Math.round( ((this.props.foodList.foodCounts[0].count / this.props.foodList.daylists.length) * 100) )}%`} />
												</div>
												<div className="col-4">
													<DataBar percent={myPercent} symptom={this.props.symptom} description= {this.props.foodList.foodCounts[1].name} number={`${Math.round( ((this.props.foodList.foodCounts[1].count / this.props.foodList.daylists.length) * 100) )}%`} />
												</div>
												<div className="col-4">
													<DataBar percent={myPercent} symptom={this.props.symptom} description= {this.props.foodList.foodCounts[2].name} number={`${Math.round( ((this.props.foodList.foodCounts[2].count / this.props.foodList.daylists.length) * 100) )}%`} />
												</div>
											</div>
											<div className="row">
												<div className="col-12">
													{this.props.foodList.daylists[0].foodList.length > 0 ? this.props.foodList.daylists[0].foodList[0].name : "No food" }

													<SymptomList show='5'/>
													<button className="big-button" onClick={()=> this.props.history.push('/loggedin/symptomtracker/')}	>
													Add symptom	to track
													</button>

													
													<button className="big-button" onClick={()=> this.props.history.push('/loggedin/factortracker/')}>
													Add food to track
													</button>

													<button className="big-button" onClick={()=> this.props.history.push('/loggedin/reviewscreen/')}	>
													Review your Data
													</button>
												</div>
											</div>
									</div>
								</section>
							</div>

					);

								}


				
				} else {

				console.log('Getting data');


					return(	
					<div>
					 <header className="headerwidth"> 
					  <h1 className="logo"><Link to="/">My Health Target</Link></h1>
				   </header>
					<section className="dashboard">
					<h2>Getting data... </h2>
					</section>	
					</div>
					 );
				}
			}
		}


const mapStateToProps = state => ({
    foodList: state.reducer.foodList,
    symptomList: state.reducer.symptomList,
    loading: state.reducer.loading,
    loaded: state.reducer.loaded,
    symptom: state.reducer.symptom,
    startDate: state.reducer.startDate,
    endDate: state.reducer.endDate,
    showSymptomModal: state.reducer.showSymptomModal,
    showDateModal: state.reducer.showDateModal


});

export default connect(mapStateToProps)(DashBoard);