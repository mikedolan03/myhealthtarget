import React from 'react';
import {BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import './symptomdatebar.css';
import 'font-awesome/css/font-awesome.min.css';
import {IoSad, IoAndroidCalendar} from 'react-icons/lib/io';
import {connect} from 'react-redux';
import {changeDates} from '../actions';
import {showModal} from '../actions';
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'

var moment = require('moment');
moment().format();


export class SymptomDateBar extends React.Component {

 constructor(props) {
    super(props);
    this.sdateinput = React.createRef();
    this.edateinput = React.createRef();
    this.state = {
      gotoSymptoms: false,
      gotoFoods: false
    }

  }

  componentDidMount() 
  {
    console.log('datebar mounted gf: ' + this.state.gotoFoods + ' gs: '+this.state.gotoSymptoms);
  }

  componentWillUnmount() {
    console.log('datebar is unmounting...');
    console.log('datebar unmounted gf: ' + this.state.gotoFoods + ' gs: '+this.state.gotoSymptoms);

  }

  changeSymptom(event) {

        event.preventDefault();

			this.props.dispatch(showModal(true, false));
        
        
        console.log('clicked change symptom');
        console.log('any props? ', this.props ); 


        if(this.props.OnOpen) {
            this.props.onOpen()
        }

  }

 changedDate(event) {

     //console.log('in change date', this.dateinput.current.value);
      event.preventDefault();

      this.props.dispatch(showModal(false, true));
        
        
        console.log('clicked change symptom');
                        console.log('any props? ', this.props ); 


        if(this.props.OnOpen) {
            this.props.onOpenD()
        }  
    // this.props.dispatch(changeDates(this.sdateinput.current.value, this.edateinput.current.value));

       
    } 

  clickAddFood(event) {

    console.log('clicked food');
      event.preventDefault();

        this.setState({
          gotoFoods: true 
        });
          

      } 

    clickAddSymptom(event) {
    console.log('clicked symp');

     //console.log('in change date', this.dateinput.current.value);
      event.preventDefault();

        this.setState({
          gotoSymptoms: true 
        });
          

      }  
	render() {
   
   if(this.state.gotoFoods) {
    //Note: Why this set state is commented out -- 
    //- Should not set state in render -bad pattern and throws warning
    //- Plus these redirects unmount this component which will reset state
    /*this.setState({
          gotoFoods: false
        }); */
      return <Redirect to="/loggedin/factortracker" />;

   }

   if(this.state.gotoSymptoms) {
    /* this.setState({
          gotoSymptoms: false 
        }); */ 

      return <Redirect to="/loggedin/symptomtracker" />;

   }


    if(this.props.top) { 

      /* <li><button onClick={e => this.changeSymptom(e)}><IoSad size={32} /> {this.props.symptom}</button></li>*/

		return ( 
			<div className="sd-bar top">
      <div className="top-positioner">
				<ul>
					<li className="nofloat sd-date"><button onClick={e => this.changedDate(e)} >{moment(this.props.startDate).format('MM[/]DD')} - {moment(this.props.endDate).format('MM[/]DD')}</button></li>
				</ul>
			</div>
      </div>
			);
     }
     else { if (this.props.addbuttons)  
            {
              return ( 
              <div className="sd-bar">
                <ul>
                  <li><button className="bar-button blue"  onClick={e => this.clickAddSymptom(e)}>Add Symptom</button></li>
                  <li className="floatright"><button className="bar-button red" onClick={e => this.clickAddFood(e)} >Add food</button></li>
                </ul>
              </div>
              );
            }
            else {

            return ( 
              <div className="sd-bar">
                <ul>
                  <li><button className="bar-button orange" onClick={e => this.changeSymptom(e)}>Change Symptom</button></li>
                  <li className="floatright "><button className="bar-button purple" onClick={e => this.changedDate(e)} >Change Date</button></li>
                </ul>
              </div>
              );
          }
        }
	}
}



const mapStateToProps = state => ({
    foodList: state.reducer.foodList,
    loading: state.reducer.loading,
    loaded: state.reducer.loaded,
    symptom: state.reducer.symptom,
    startDate: state.reducer.startDate,
    endDate: state.reducer.endDate, 
    showSymptomModal: state.reducer.showSymptomModal,
    showDateModal: state.reducer.showDateModal,
    showNoDataModal: state.reducer.showNoDataModal

});

export default connect(mapStateToProps)(SymptomDateBar);