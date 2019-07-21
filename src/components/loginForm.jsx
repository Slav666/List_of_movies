
import Joi from 'joi-browser';
import Form from './form';
import React from 'react';

class LoginForm extends Form {

    state =  {
        data: {username: '', password: ''},
        errors: {}
    }
    schema = {
        username: Joi.string().required().label('Username'),
        password: Joi.string().required().label('Password')
    }
    
   

    doSubmit = () => {
        console.log('Submitted')
    };
    
    


    render() { 
        
        return ( 
            <div>
                <h1>Login</h1>
                <form onSubmit={this.handleOnSubmit}>
                    {this.renderInput('username', 'Username')}
                    {this.renderInput('password', 'Password')}
                    {this.renderButton('Login')}
                </form>
            </div>
         );
    }
}
 
export default LoginForm;
