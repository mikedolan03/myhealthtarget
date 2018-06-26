import React from 'react';
import { Field, FieldArray, reduxForm } from 'redux-form'
import {AddFood} from './components/addfood'

const renderFoods = ({fields}) => (

  <ul>
    <li>
      <button type="button" onClick={() => fields.push()}>Add Food</button>
    </li>
    {fields.map((food, index) =>
      <li key={index}>
        <button
          type="button"
          title="Remove Food"
          onClick={() => fields.remove(index)}/>
        <Field
          name={`${food}.name`}
          type="text"
          component="input"
          label={`Food #${index + 1}`}/>
          <Field
          name={`${food}.tags`}
          type="text"
          component="input"
          label={`Tags for #${index + 1}`}/>
      </li>
    )}
  </ul>

  )

const FactorForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
 
  return (
    <form onSubmit={handleSubmit}>
       <div> 
       <FieldArray name="foods" component={renderFoods} />
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
        <button type="submit" disabled={pristine || submitting}>Submit</button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'fForm', // a unique identifier for this form
})(FactorForm);
