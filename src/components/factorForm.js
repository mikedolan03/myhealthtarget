import React from 'react';
import { Field, FieldArray, reduxForm } from 'redux-form'
import {BrowserRouter as Router, Route, Redirect, Link} from 'react-router-dom';
import { withRouter} from 'react-router-dom';
import {trackFood} from '../actions';
import {fetchFoodList} from '../actions';
import {postFoodItems} from '../actions';
import './factorform.css'; 

 
const renderFoods = ({fields}) => {
  
  if(fields.length < 1) fields.push(); 

  return (

 <div className="add-food-form">


    {fields.map((food, index) =>
      <div key={index} className="food-entry dark-box">
        <label for={`${food}.name`}>Food:</label>
        <Field
          name={`${food}.name`}
          type="text"
          component="input"
          placeholder="What did you eat?"
          label={`Food #${index + 1}`}/>
          <label for={`${food}.tags`}>Tags:</label>
          <Field
          name={`${food}.tags`}
          type="text"
          component="input"
          placeholder="Add any tags about food..."
          label={`Tags for #${index + 1}`}/>
          <label for={`${food}.time`}>Time:</label>
          <Field
          name={`${food}.time`}
          type="text"
          component="input"
          placeholder="what time did you eat?"
          label={`Time for #${index + 1}`}/>
          <button
          className="floatRight"
          type="button"
          title="Remove Food"
          onClick={() => fields.remove(index)}>-</button>
          </div>
    
    )}
    <button type="button" onClick={() => fields.push()}>Add Food</button>

  </div>

  );
}

export class FactorForm extends React.Component {

  //const { handleSubmit, pristine, reset, submitting } = this.props;
  constructor(props) {
        super(props);

      
    }
  
  onSubmit(values) {
        //event.preventDefault();
       console.log('sending to store: ', values.foods);
     // this.props.dispatch(trackFood(values));
     this.props.dispatch(postFoodItems(values));
       this.props.history.push('/loggedin/dashboard');
    }

    //form  onSubmit={this.props.handleSubmit(values =>
    //                  this.onSubmit(values))}

  render() {
     console.log("history in form: ", this.props.history); 

    return (
     <div className="food-form-container">
      <form onSubmit={this.props.handleSubmit(values =>this.onSubmit(values))}>
         <div> 
         <FieldArray name="fooditems" component={renderFoods} />
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
          <button type="submit">Submit</button>
          <button type="button" onClick={()=> this.props.dispatch(fetchFoodList()) }>load from server</button>
        </div>
      </form>
     </div>

      );
  };
 }
const myForm = withRouter(FactorForm);

export default reduxForm({
  form: 'FactorForm', // a unique identifier for this form
})(myForm);
