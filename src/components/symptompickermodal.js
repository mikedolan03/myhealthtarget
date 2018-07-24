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
    }

    close(e) {
        e.preventDefault() 
        this.props.dispatch(showModal(false));

    }

    changedSymptom(event) {

        //event.preventDefault();
        //console.log('in change symp 1', this.props);
        console.log('in change symp 2', this.input.current.value);
        
     this.props.dispatch(changeSymptom(this.input.current.value));
             this.props.dispatch(showModal(false));



    // this.setUpQuery(); 
       
    }

    render() {

        if (this.props.isOpen === false)
        return null

    //onClick={e => this.close(e)}

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
    showSymptomModal: state.reducer.showSymptomModal
});

export default connect(mapStateToProps)(SymptomPickerModal);
