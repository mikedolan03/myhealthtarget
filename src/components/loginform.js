import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
//import Input from './input';
import {login} from '../actions/auth';
import {required, nonEmpty} from '../validators';

export class LoginForm extends React.Component {
    onSubmit(values) {
        return this.props.dispatch(login(values.username, values.password));
    }

    render() {
        let error;
        if (this.props.error) {
            error = (
                <div className="form-error" aria-live="polite">
                    {this.props.error}
                </div>
            );
        }
        return (
        <div>
        <div className="sign-up-form-container">
            <em>Welcome back!</em>
            <form
                className="login-form"
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                {error}
                <label htmlFor="username">Username</label>
                <Field
                    className="extra-space"
                    component="input"
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Username"
                    validate={[required, nonEmpty]}
                />
                <label htmlFor="password">Password</label>
                <Field
                    className="extra-space"
                    component="input"
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    validate={[required, nonEmpty]}
                />
                <button disabled={this.props.pristine || this.props.submitting}>
                    Log in
                </button>
            </form>

        </div>
        <div className="demo-info"><div className="orange-text small-text">Try the demo: </div> 
            <div className="red-text small-text inline-element-right-marg"> User: user999</div>
            <div className="blue-text small-text inline-element-left-marg"> Password: password123</div>
        </div>
        </div>  
        );
    }
}

export default reduxForm({
    form: 'login',
    onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
})(LoginForm);