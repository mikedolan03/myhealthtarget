import React from 'react';
import { Field, FieldArray, reduxForm } from 'redux-form'
import {BrowserRouter as Router, Route, Redirect, Link} from 'react-router-dom';
import {postSymptoms} from '../actions';

const renderSymptoms = ({fields}) => {
  
  if(fields.length < 1) fields.push(); 

  return (

 <div className="add-symptom-form">

    <button type="button" onClick={() => fields.push()}>Add Symptom</button>

    {fields.map((symptom, index) =>
      <div key={index}>
        <label>Symptom:</label>
        <Field
          name={`${symptom}.name`}
          component="select"
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
        
          <label>Severity (1-10):</label>
          <Field
          name={`${symptom}.severity`}
          type="number"
          component="input"
          label={`Severity for #${index + 1}`}/>
          <button
          type="button"
          title="Remove Symptom"
          onClick={() => fields.remove(index)}>-</button>
        </div>
    
    )}

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
      <form  onSubmit={this.props.handleSubmit(values =>
                      this.onSubmit(values))} >
         <div> 
         <FieldArray name="symptoms" component={renderSymptoms} />
         </div>
       <div>
          <label>Date</label>
          <div>
            <Field
              name="date"
              component="input"
              type="date"
              placeholder=""
            />
          </div>
        </div>
        <div>
          <label>Time</label>
          <div>
            <Field name="time" component="input" type="time" value="" />
          </div>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
      );
  };
 }

export default reduxForm({
  form: 'SymptomForm', // a unique identifier for this form
})(SymptomForm);
