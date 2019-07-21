
import Joi from 'joi-browser';
import Input from './input';
import Form from './form';
import React, { Component } from 'react';

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
        const { data, errors } = this.state;
        return ( 
            <div>
                <h1>Login</h1>
                <form onSubmit={this.handleOnSubmit}>
                    <Input 
                     name="username"
                     value={data.username}
                     label="Username"
                     onChange={this.handleChange}
                     error={errors.username}
                     />
                    <Input 
                     name="password"
                     value={data.password}
                     label="Password"
                     onChange={this.handleChange}
                     error={errors.password}
                     />
                        
                        
                    <button 
                    disabled={this.validate()}
                    className="btn btn-primary">Login</button>
                </form>
            </div>
         );
    }
}
 
export default LoginForm;
