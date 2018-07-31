import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import store from '../store';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';

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

let moment = require('moment');
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

       this.setUpQuery( );

    }

    componentDidUpdate(prevProps) {
    
      console.log('component did update');

      console.log('props before modal stuff? ', this.props ); 


   

      // if(this.props.dataStatus == 'good' && this.props.showNoDataModal=='show')
    //  {
    //  	      	this.openModal(false, false, 'noshow');
//
    //  }


/*
      if(!this.props.foodList.foodCounts && 
      	this.props.showNoDataModal=="noshow" &&
      	!this.props.showSymptomModal &&
      	!this.props.showDateModal) {

      	console.log('show no data pop up');

      	this.openModal(false, false, 'show');
      }

      if(this.props.foodList.foodCounts  &&
      	this.props.showNoDataModal=="show") {

      	console.log('oops hide data pop up');

      	this.openModal(false, false, 'noshow');
      }

      if(this.props.dataStatus == 'general' && this.props.showNoDataModal=='noshow')
      {
      	      	this.openModal(false, false, 'show');

      }
      */


      //changed the symptom lets send the query
      if( prevProps.symptom != this.props.symptom) { 
      	this.setUpQuery();
      } else {

      //changed our start or end date - send query

      if(prevProps.startDate != this.props.startDate) {
      	
      		this.setUpQuery();

      	} else {
      		
      		if(prevProps.endDate != this.props.endDate) {
      		  
      			this.setUpQuery();

      			} else {

      				console.log('if no query is being sent then it loaded already - do modal if we need one');

      				   if(this.props.dataStatus == 'general' && this.props.showNoDataModal=='noshow' && !this.props.loading)
      						{
      							 console.log('do no data modal');

      	      			this.openModal(false, false, 'show');

      							} else {

      									if(this.props.dataStatus == 'none' && this.props.showNoDataModal=='noshow' && !this.props.loading) {

      										//new user without data

      									 console.log('do new user modal');


      										this.openModal(false, false, 'show');


      									}


      								      console.log('data modal wasnt needed');

      							}


      			}
      	}
      }

    }

  setUpQuery( ) {

  	//reset modal -just in case there is no data
    // this.openModal(false, false, 'noshow'); 

  	//let today = moment()._d; 
		//today = moment(today).format("MM-DD-YYYY");
		//let startDay = moment(today).subtract(7, 'days').format("MM-DD-YYYY");
        
    let myQueryObj = {sdate: this.props.startDate, edate: this.props.endDate	, symptom: this.props.symptom};
		console.log('my search: ', myQueryObj); 

        //let myQueryObj = {sdate: '7-4-2018', edate: '7-11-2018', symptom:'Gas'};

     this.props.dispatch(fetchFoodList('daylists/getcauses', myQueryObj) );
        //this.props.dispatch(fetchFoodList('daylists', {}) );
  }  

  buildTags() {

		let tags = '';

		 	this.props.foodList.combinedFoods.slice(0,10).map( flist => { 

		 		if(flist.tags != undefined) {
		 			tags += (flist.tags+" ") ; 
		 		}
		 	

			   });

		 	console.log('combined tags', tags);

		 	return tags; 

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

    openModal(symptomM, dateM, nodataM) {
      //this.setState({ isModalOpen: true })
           this.props.dispatch(showModal(symptomM, dateM, nodataM));
           			console.log('any props? ', this.props ); 

    }

    closeModal() {
           this.props.dispatch(showModal(false, false, false));
    }

    renderBigPercent() {

    		let nodata = 'false';

    		

								if(!this.props.foodList.foodCounts){ 
									nodata = 'true';
									console.log('foodcounts missing nodata = ', nodata);
								}

								if(this.props.dataStatus =="none") {
									nodata = 'true';
									console.log('status none nodata = ', nodata);
								}

								if(this.props.foodList.foodCounts) {

									if(this.props.foodList.foodCounts.length <= 0) {
										nodata='true';
										console.log('foodcounts empty nodata = ', nodata);

									}
								}

								console.log('nodata = ', nodata);



    	if(nodata=='false') {


    		return (
    						<div className="dark-box">
								<DataBar dataStatus={this.props.dataStatus} symptom={this.props.symptom} description= {this.props.foodList.foodCounts[0].name } 
								number={`${this.generatePercent(this.props.foodList.foodCounts[0].count, this.props.foodList.daylists.length)}%`} nodata={nodata} />
								</div>
								)

    	} else {

    		return(

    		<div className="dark-box">
				<DataBar symptom={this.props.symptom} description= ''
				number="0" nodata='true' dataStatus={this.props.dataStatus}/>
				</div>

				)


    	}
    


    }


    renderPercentBoxes( ) {

    	let percentboxes = [];
    	let count = 0; 


    	if(!this.props.foodList.foodCounts){
    		return null;
    	} else 
    			{


    				if(this.props.foodList.foodCounts.length > 1) {

    					for(let ci = 1; ci < this.props.foodList.foodCounts.length; ci++) {

    						count = count + 1; 

    						if(count == 1){ 
	    							percentboxes.push(<div className="col-4 add-vert-space" key={'db'+count}>
	    							<div className="dark-box">
	    							<DataBar tagVersion="true" symptom={this.props.symptom} description= {this.buildTags()} dataStatus={this.props.dataStatus}/> 
	    							</div>
	    							</div>
	    							); 
	    					} else 
    							{

    								if(count==2) { 
		    							percentboxes.push(<div className="col-4 add-vert-space" key={'db'+count}>
		    							<div className="dark-box">
		    							<DataBar outOfVersion="true" symptom={this.props.symptom} dataStatus={this.props.dataStatus} description= {this.props.foodList.foodCounts[ci].name } number={this.props.foodList.foodCounts[ci].count} totals={this.props.foodList.daylists.length} /> 
		    							</div>
		    							</div>
		    							); 
    								} else {

			    							percentboxes.push(<div className="col-4 add-vert-space" key={'db'+count}>
			    							<div className="dark-box">
			    							<DataBar symptom={this.props.symptom} dataStatus={this.props.dataStatus} number={`${Object.keys(this.props.foodList.symptomOnlyDays).length} days`} symptomCount="true"/> 
			    							</div>
			    							</div>
			    							); 
	    								}
	    						}
								if(count == 3) break;
    					}

    						
    				}
    				
    					return percentboxes; 

    			} 

  }

  generatePercent(number1, number2) {

  	let newPercent;

  	newPercent = Math.round( ((number1 / number2) * 100) );

  	if(newPercent > 100) newPercent = 100;

  	if(newPercent < 0) newPercent =0; 

  	return newPercent; 	
											

  }

   

	render( ) {

			let mySymptoms; 
			let lists;


			console.log('any props? ', this.props ); 

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
			
								let nodata = 'false';

								if(!this.props.foodList.foodCounts){ 

									nodata = 'true';
																	console.log('foodcounts missing nodata = ', nodata);


								}

								if(this.props.dataStatus =="none") {
									nodata = 'true';
																	console.log('status none nodata = ', nodata);

								}

								console.log('nodata = ', nodata);

								return (
								<div>
								<SymptomPickerModal isOpen={this.props.showSymptomModal} isOpenD={this.props.showDateModal} onClose={()=> this.closeModal()} />
							
								<section className="dashboard">  
								
									<div className="dashboard-container">
 											<div className="row">
 												<div className="col-12">
													<div className="chart-area-container">
													 <MyChart nodata={nodata}/>
													 <SymptomDateBar onOpen={()=> this.openModal(true, false)} onOpenD={()=> this.openModal(false, true)} symptom={this.props.symptom} startDate={this.props.startDate} endDate={this.props.endDate}/>
													 <SymptomDateBar addbuttons="true" onOpen={()=> this.openModal(true, false)} onOpenD={()=> this.openModal(false, true)} symptom={this.props.symptom} startDate={this.props.startDate} endDate={this.props.endDate}/>
													 <SymptomDateBar top="true" onOpen={()=> this.openModal(true, false)} onOpenD={()=> this.openModal(false, true)} symptom={this.props.symptom} startDate={this.props.startDate} endDate={this.props.endDate}/>
													</div>
												</div>

											</div>
									
											<div className="row aligner">
												<div className="col-6">
									
													<TopFoodsList />
												
												</div>
												<div className="col-6 aligner-item">
												{this.renderBigPercent()}
												</div>
											</div>
											<div className="row">
											
												{this.renderPercentBoxes()} 
												
											</div>
									
											<div className="row">
												<div className="col-12 add-vert-space">
													<FoodList />
												</div>
											</div>
											<div className="row">
												<div className="col-12 add-vert-space">
													<SymptomList show="10"/>

													<button className="big-button" onClick={()=> this.props.history.push('/loggedin/symptomtracker/')}	>
													Add symptom	to track
													</button>

													
													<button className="big-button" onClick={()=> this.props.history.push('/loggedin/factortracker/')}>
													Add food to track
													</button>

												
												</div>
											</div>
									</div>
								</section>
							</div>

					);

								


				
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
    showDateModal: state.reducer.showDateModal,
    showNoDataModal: state.reducer.showNoDataModal,
    newUser: state.reducer.newUser,
    dataStatus: state.reducer.dataStatus
});

export default requiresLogin()(connect(mapStateToProps)(DashBoard));