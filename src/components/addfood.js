import React from 'react'; 
import { Field, reduxForm } from 'redux-form';
import * as actions from '../actions';
import store from '../store';
import {connect} from 'react-redux';

export class AddFood extends React.Component {

render() {
console.log('act', actions);
console.log('props', this.props);

store.dispatch(actions.addCount());

	return (
	<div>
		<div>
        	<label>What did you eat?</label>
	        <div>
	          <Field
	            name={`food-${this.props.count}`}
	            component="input"
	            type="text"
	            placeholder="ex. carrots"
	          />
	        </div>
      	</div>
      	<div>
        	<label>Tags</label>
	        <div>
	          <Field
	            name="tags"
	            component="input"
	            type="text"
	            placeholder="ex. gluten..."
	          />
	        </div>
      	</div>
      </div>
		);
}

}


const mapStateToProps = state => ({
    count: state.count
});

export default connect(mapStateToProps)(AddFood);