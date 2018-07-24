import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './symptomdatebar.css';
import 'font-awesome/css/font-awesome.min.css';
import {IoSad, IoAndroidCalendar} from 'react-icons/lib/io';
import {connect} from 'react-redux';
import {changeDates} from '../actions';
import {showModal} from '../actions';
var moment = require('moment');
moment().format();


export class SymptomDateBar extends React.Component {

 constructor(props) {
    super(props);
    this.sdateinput = React.createRef();
    this.edateinput = React.createRef();


  }

  changeSymptom(event) {

        event.preventDefault();

			this.props.dispatch(showModal(true));
        
        
        console.log('clicked change symptom');
                   			console.log('any props? ', this.props ); 


        if(this.props.OnOpen) {
            this.props.onOpen()
        }

  }

 changedDate(event) {

     console.log('in change date', this.dateinput.current.value);
        
    // this.props.dispatch(changeDates(this.sdateinput.current.value, this.edateinput.current.value));

       
    } 

	render() {

		return ( 
			<div className="sd-bar">
				<ul>
					<li><button onClick={e => this.changeSymptom(e)}><IoSad size={32} /> {this.props.symptom}</button></li>
					<li className="floatright"><button>{this.props.startDate} - {this.props.endDate}</button></li>
				</ul>
			</div>
			);
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
    showSymptomModal: state.reducer.showSymptomModal
});

export default connect(mapStateToProps)(SymptomDateBar);