import React from 'react';
import { Field, FieldArray, reduxForm } from 'redux-form'
import { formValues } from 'redux-form';
import {BrowserRouter as Router, Route, Redirect, Link} from 'react-router-dom';
import { withRouter} from 'react-router-dom';
import {fetchFoodList} from '../actions';
import {postFoodItems} from '../actions';
import {IoIosTrash, IoAndroidCalendar} from 'react-icons/lib/io';
import './factorform.css'; 
let moment = require('moment');
moment().format();
 

const renderDate =({ fields }) => { 

  if(fields.length <= 0) {

    let todayDate = moment().format('YYYY-MM-DD')
    
    return ( 
      <div className="date-section">
      Date: {todayDate}
      <button type="button" onClick={() => fields.push()}><IoAndroidCalendar size={32} /></button>
      </div>
      )

  } 
  else {

    return (
    <div className="date-section">
      {fields.map((date, index) =>
        <div key={index}>
          <label htmlFor={`Date #${index + 1}`}>Date:</label>
           <Field
            name={`date${index + 1}`}
            component="input"
            type="date"
            />
        </div>
      )}
      {fields.error && <li className="error">{fields.error}</li>}
    </div>
    ) 
  }
}

const renderFoods = ({fields}) => {
  
  if(fields.length < 1) fields.push(); 

  return (

 <div className="add-food-form ">


    {fields.map((food, index) =>
      <div key={index} className="food-entry">
        <label className="hide" htmlFor={`${food}.name`}>Food:</label>
        <Field
          name={`${food}.name`}
          type="text"
          component="input"
          placeholder="What is one food you ate?"
          label={`Food #${index + 1}`}/>
          <label className="hide" htmlFor={`${food}.tags`}>Tags:</label>
          <Field
          name={`${food}.tags`}
          type="text"
          component="input"
          placeholder="Add any tags about food..."
          label={`Tags for #${index + 1}`}/>
          <label className="hide" htmlFor={`${food}.time`}>Time:</label>
          <Field
          name={`${food}.time`}
          type="text"
          component="input"
          placeholder="What time did you eat it?"
          label={`Time for #${index + 1}`}/>
          <button
          className="trash-button orange-text"
          type="button" 
          title="Remove Food"
          onClick={() => fields.remove(index)}> <IoIosTrash size={32}/> </button>
          </div>
    
    )}
    <div className="align-right"><button type="button" className="add-food-button" onClick={() => fields.push()}>Add more</button></div>

  </div>

  );
}

export class FactorForm extends React.Component {

  //const { handleSubmit, pristine, reset, submitting } = this.props;
  constructor(props) {
        super(props);

      
    }


    
  
  onSubmit(values) {

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
    
  
    this.props.dispatch(postFoodItems(values));
    this.props.history.push('/loggedin/dashboard');
    }



  render() {


    return (
      <div className="food-form-container foodformbox">
        <form onSubmit={this.props.handleSubmit(values =>this.onSubmit(values))}>
          <div>
            <FieldArray name="date" component={renderDate} />
          </div>
          <div> 
            <FieldArray name="fooditems" component={renderFoods} />
          </div>
          
        <div>
          <div className="align-center"><button className="green savebutton" type="submit">Save</button></div>
        </div>
      </form>
     </div>

      );
  };
 }

FactorForm.defaultProps = {
    initialValues: {date: moment().format('YYYY-MM-DD')}
};

const myForm = withRouter(FactorForm);

export default reduxForm({
  form: 'FactorForm', // a unique identifier for this form
})(myForm);
