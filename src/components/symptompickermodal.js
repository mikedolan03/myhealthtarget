import React from 'react';
import {connect} from 'react-redux';
import {changeDates} from '../actions';
import {showModal} from '../actions';
import {changeSymptom} from '../actions';

import './symptompickermodal.css';

export class SymptomPickerModal extends React.Component {

    constructor(props) {
    super(props);
    this.changedSymptom = this.changedSymptom.bind(this);
    this.input = React.createRef();
    this.changedDates = this.changedDates.bind(this);
    this.sdinput = React.createRef();
    this.edinput = React.createRef();
    }

    close(e) {
        e.preventDefault();
       console.log('close pop up triggered ');

        this.props.dispatch(showModal(false, false, 'noshow'));

    }

    closeNoData(e) {
        e.preventDefault() 
        this.props.dispatch(showModal(false, false, 'seen'));

    }

    changedSymptom(event) {

        console.log('in change symp 2', this.input.current.value);
        
        this.props.dispatch(changeSymptom(this.input.current.value));
        this.props.dispatch(showModal(false, false, 'noshow'));
    }

    changedDates(event) {

        this.props.dispatch(changeDates(this.sdinput.current.value, this.edinput.current.value));
        this.props.dispatch(showModal(false, false, 'noshow'));

    }

    render() {

       // if (this.props.isOpen === false)
       // return null

    //onClick={e => this.close(e)}
       if(this.props.showNoDataModal == "show")
        {

                    console.log('rendering no data ');


            return (
           <div className="symptom-picker-container">
            <div className="modal">
            
            </div>
            
            <div className="symptom-picker-popup">
             <div className="pop-content">
              <h3>We couldn't find data match that symptom and date range.</h3>
              <h3>Try a different date range and/or symptom. Or add more symptoms and food items!</h3>
             </div>
             <button onClick={e => this.closeNoData(e)}>Got it!</button>
            </div>
           </div> 
        );

        }

        if(this.props.showDateModal )
        {

                    console.log('rendering date picker');


            return (
           <div className="symptom-picker-container">
            <div className="modal">
            
            </div>
            
            <div className="symptom-picker-popup">
             <div className="pop-content">
              <h2>What date range would you like to look at?</h2>

              <label>Start Date</label> <input  ref={this.sdinput} type="date" name="sdate" />
              <label>End Date</label> <input  ref={this.edinput} type="date" name="edate" />
              
              <button className="submit-button"  onClick={e => this.changedDates(e)}>Change Dates</button>

             </div>
             <button className="cancel-button" onClick={e => this.close(e)}>Cancel</button>
            </div>
           </div> 
        );

        }

    if(this.props.showSymptomModal )
        {

          console.log('rendering symptom picker');

        return (
    	   <div className="symptom-picker-container">
    	    <div className="modal">
            hello
            </div>
            
            <div className="symptom-picker-popup">
            <div className="pop-content">
            <h2>Pick a symptom so we can find what foods are causing it!</h2>

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
            <button onClick={e => this.close(e)}>Cancel</button>
            </div>
           </div> 
        );
    }

    return null;

    };
};

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
    showNoDataModal: state.reducer.showNoDataModal
});

export default connect(mapStateToProps)(SymptomPickerModal);
