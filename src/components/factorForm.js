import React from 'react';
import { Field, FieldArray, reduxForm } from 'redux-form'
import {BrowserRouter as Router, Route, Redirect, Link} from 'react-router-dom';
import { withRouter} from 'react-router-dom';
import {trackFood} from '../actions';
import {fetchFoodList} from '../actions';
import {postFoodItems} from '../actions';
const renderFoods = ({fields}) => {
  
  if(fields.length < 1) fields.push(); 

  return (

 <div className="add-food-form">

    <button type="button" onClick={() => fields.push()}>Add Food</button>

    {fields.map((food, index) =>
      <div key={index}>
        <label>Food:</label>
        <Field
          name={`${food}.name`}
          type="text"
          component="input"
          label={`Food #${index + 1}`}/>
          <label>Tags:</label>
          <Field
          name={`${food}.tags`}
          type="text"
          component="input"
          label={`Tags for #${index + 1}`}/>
          <label>Time:</label>
          <Field
          name={`${food}.time`}
          type="text"
          component="input"
          label={`Tags for #${index + 1}`}/>
          <button
          type="button"
          title="Remove Food"
          onClick={() => fields.remove(index)}>-</button>
          </div>
    
    )}

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
      );
  };
 }
const myForm = withRouter(FactorForm);

export default reduxForm({
  form: 'FactorForm', // a unique identifier for this form
})(myForm);
