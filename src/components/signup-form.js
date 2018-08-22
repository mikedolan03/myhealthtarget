import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import {signUpUser} from '../actions';
import {login} from '../actions/auth';
import {newUser} from '../actions';
//import Input from './input';
import './signup-form.css';
import {required, nonEmpty, matches, length, isTrimmed} from '../validators';
const passwordLength = length({min: 10, max: 72});
const matchesPassword = matches('password');

export class SignUpForm extends React.Component {
    onSubmit(values) {
        const {username, password, firstName, lastName, email} = values;
        const user = {username, password, firstName, lastName, email};
        return this.props
            .dispatch(signUpUser(user))
            .then(
                () => {
                this.props.dispatch(login(username, password))
                this.props.dispatch(newUser(true))

                })
    }

    render() {
        return (
            <div className="sign-up-form-container">
            <em>Join and hack your symptoms today!</em>
            <form
                className="signup-form"
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
              <label htmlFor="username">Username</label>
                <Field
                    component="input"
                    type="text"
                    name="username"
                    validate={[required, nonEmpty, isTrimmed]}
                placeholder="Username"/>
                <label htmlFor="password">Password</label>
                <Field
                    component="input"
                    type="password"
                    name="password"
                    validate={[required, passwordLength, isTrimmed]}
                placeholder="Password"/>
                <label htmlFor="passwordConfirm">Confirm password</label>
                <Field
                    component="input"
                    type="password"
                    name="passwordConfirm"
                    validate={[required, nonEmpty, matchesPassword]}
                placeholder="Retype Password"/>
                <button
                    type="submit"
                    disabled={this.props.pristine || this.props.submitting}>
                    Sign Up
                </button>
            </form>
            <div className="demo-info-signup"><div className="orange-text small-text">Or click Log In and try the demo: </div> 
            <div className="red-text small-text inline-element-right-marg"> User: user999</div>
            <div className="blue-text small-text inline-element-left-marg"> Password: password123</div>
        </div>
        </div>
        );
    }
}

export default reduxForm({
    form: 'signup',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('signup', Object.keys(errors)[0]))
})(SignUpForm);
