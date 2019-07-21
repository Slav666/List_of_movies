import Joi from 'joi-browser';
import Form from './form';
import React from 'react';

class RegisterForm extends Form {

    state =  {
        data: {username: '', password: '', name: ''},
        errors: {}
    }
    schema = {
        username: Joi.string().required().email().label('Username'),
        password: Joi.string().required().min(5).label('Password'),
        name: Joi.string().required().label('Name')
    };
    
    doSubmit = () => {
        console.log('Registered')
    };
    
    render() { 
        
        return ( 
            <div>
                <h1>Register</h1>
                <form onSubmit={this.handleOnSubmit}>
                    {this.renderInput('username', 'Username')}
                    {this.renderInput('password', 'Password', "password")}
                    {this.renderInput('name', 'Name')}
                    {this.renderButton('Register')}
                </form>
            </div>
         );
    };
}
 
export default RegisterForm ;