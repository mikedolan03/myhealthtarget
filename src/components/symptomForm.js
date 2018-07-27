import React from 'react';
import { Field, FieldArray, reduxForm } from 'redux-form'
import {BrowserRouter as Router, Route, Redirect, Link} from 'react-router-dom';
import {postSymptoms} from '../actions';
import {IoIosTrash, IoAndroidCalendar} from 'react-icons/lib/io';

import './symptomForm.css';
let moment = require('moment');
moment().format();
 

const renderDate =({ fields }) => { 

  if(fields.length <= 0) {

    let todayDate = moment().format('YYYY-MM-DD')
    
    return ( 
      <div className="date-section extra-space-below">
      Date: {todayDate}
      <button type="button" onClick={() => fields.push()}><IoAndroidCalendar size={32} /></button>
      </div>
      )

  } 
  else {

    return (
            <div className="date-section extra-space-below">
              {
                fields.map( (date, index) =>
                <div key={index}>
                  <label htmlFor={`Date #${index + 1}`}>Date:</label>
                   <Field
                    name={`date${index + 1}`}
                    component="input"
                    type="date"
                    />
                </div>
                )
              }
              {fields.error && <li className="error">{fields.error}</li>}
            </div>
          ) 
      }
}

const renderSymptoms = ({fields}) => {
  
  if(fields.length < 1) fields.push(); 

  return (

          <div className="add-food-form">

            {fields.map( 
                (symptom, index) =>
                  <div key={index} className="food-entry">
                    
                      <label className="extra-space-below" >What are you experiencing?</label> 
                        <Field
                       
                        name={`${symptom}.name`}
                        component="select"
                        placeholder="Select a symptom"
                        label={`Symptom #${index + 1}`}>
                          <option value="Stomach Ache">Stomach Ache</option>
                          <option value="Head Ache">Head Ache</option>
                          <option value="Heartburn">Heartburn</option>
                          <option value="Gas">Gas</option>
                          <option value="Sick Stomach">Sick Stomach</option>
                          <option value="Tired">Tired</option>
                          <option value="Skin Rash">Skin Rash</option>
                          <option value="Pain">Pain</option>
                        </Field>
                   
                  
                    <label className="hide">How bad is it? (1-10):</label>
                      <Field 
                      name={`${symptom}.severity`}
                      type="number"
                      component="input"
                      placeholder="Rate on a scale of 1 to 10..."
                      min="1"
                      max="10"
                      label={`Severity for #${index + 1}`} />
                  
                    <label className="hide">Time:</label>
                      <Field
                      name={`${symptom}.time`}
                      type="text"
                      component="input"
                      placeholder="What time did it happen?"
                      label={`time for #${index + 1}`}/>
                  
                    <button
                    className="trash-button orange-text"
                    type="button" 
                    title="Remove Symptom"
                    onClick={() => fields.remove(index)}><IoIosTrash size={32}/></button>
                  </div>
                
             )}
           
                <div className="align-right"> 
                 <button type="button" className="add-food-button" onClick={() => fields.push()}>Add more</button>
                </div>

          </div>

          )
    

      
}


export class SymptomForm extends React.Component {

  constructor(props) {
        super(props);

      
    }
  
  onSubmit(values) {
        //event.preventDefault();

    let todayDate = moment().format('YYYY-MM-DD'); 


    console.log('sending: ', values);
    
        if(!values.date1) { 
          
          console.log('date: ',todayDate);
          values.date = todayDate; 
          console.log('new date: ', values);

        } else {
          values.date = values.date1; 
          console.log('date was set: ', values);
        }


     this.props.dispatch(postSymptoms(values));
       console.log(values);
       this.props.history.push('/loggedin/dashboard');
    }

  render() {
     console.log("history in form: ", this.props.history); 

    return (
      <div className = "food-form-container foodformbox">
        <form  onSubmit={this.props.handleSubmit(values => this.onSubmit(values))} >
         <div>
            <FieldArray name="date" component={renderDate} />
          </div>
         <div> 
          <FieldArray name="symptoms" component={renderSymptoms} />
         </div>
         
         <div>
          <div className="align-center"><button className="green savebutton" type="submit">Save</button></div>
        </div>
      </form>
      </div>
      );
  };
 }

export default reduxForm({
  form: 'SymptomForm', // a unique identifier for this form
})(SymptomForm);
