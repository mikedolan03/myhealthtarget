import React from 'react';
import {connect} from 'react-redux';
import {changeDates} from '../actions';
import {showModal} from '../actions';
import './symptompickermodal.css';

export class SymptomPickerModal extends React.Component {

    close(e) {
        e.preventDefault() 
        this.props.dispatch(showModal(false));

    }

    render() {

        if (this.props.isOpen === false)
        return null

        return (
    	   <div className="symptom-picker-container">
    	    <div className="modal">
            </div>
            
            <div className="symptom-picker-popup" onClick={e => this.close(e)}>

             I am a pop up! 

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
