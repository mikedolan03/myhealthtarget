import React from 'react';
import { Field, FieldArray, reduxForm } from 'redux-form'
import {BrowserRouter as Router, Route, Redirect, Link} from 'react-router-dom';
import {postSymptoms} from '../actions';
import './symptomForm.css';

const renderSymptoms = ({fields}) => {
  
  if(fields.length < 1) fields.push(); 

  return (

 <div className="add-symptom-form">


    {fields.map((symptom, index) =>
      <div key={index} className="symptom-box">
        <div className="question">
              <label>What are you experiencing?</label>
          
         <Field
          className="answer"
          name={`${symptom}.name`}
          component="select"
          value="stomach ache"
          label={`Symptom #${index + 1}`}>
            <option value="stomach ache">stomach ache</option>
            <option value="head ache">head ache</option>
            <option value="heartburn">heartburn</option>
            <option value="gas">gas</option>
            <option value="sick stomach">sick stomach</option>
            <option value="tired">tired</option>
            <option value="skin rash">skin rash</option>
            <option value="pain">pain</option>
          </Field>
        </div>

      <div className="question">
          <label>How bad is it? (1-10):</label>
     
          <Field 
          className="answer"
          name={`${symptom}.severity`}
          type="range"
          component="input"
          min="1"
          max="10"
          label={`Severity for #${index + 1}`}/>
      </div>
          <button
          className = "remove"
          type="button"
          title="Remove Symptom"
          onClick={() => fields.remove(index)}>x</button>

        </div>
    
    )}
    <button type="button" className="add" onClick={() => fields.push()}>Add Symptom</button>

  </div>

  );
}

export class SymptomForm extends React.Component {

  //const { handleSubmit, pristine, reset, submitting } = this.props;
  constructor(props) {
        super(props);

      
    }
  
  onSubmit(values) {
        //event.preventDefault();
     this.props.dispatch(postSymptoms(values));
       console.log(values);
       this.props.history.push('/loggedin/dashboard');
    }

  render() {
     console.log("history in form: ", this.props.history); 

    return (
    <div className = "form-container">
      <form  onSubmit={this.props.handleSubmit(values =>
                      this.onSubmit(values))} >
         <div> 
         <FieldArray name="symptoms" component={renderSymptoms} />
         </div>
       <div className="question">
          <label>Date</label>
            <Field
            className = "answer"
              name="date"
              component="input"
              type="date"
              placeholder=""
            />
        </div>
       
        <div className="question">
          <label>Time</label>
            <Field className="answer" name="time" component="input" type="time" value="" />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
      </div>
      );
  };
 }

export default reduxForm({
  form: 'SymptomForm', // a unique identifier for this form
})(SymptomForm);
