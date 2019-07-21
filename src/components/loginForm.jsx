import React, {Component} from 'react'; 
import Joi from 'joi-browser';
import Input from './input';

class LoginForm extends Component {

    state =  {
        account: {username: '', password: ''},
        errors: {}
    }
    schema = {
        username: Joi.string().required().label('Username'),
        password: Joi.string().required().label('Password')
    }
    validate = () => {
        const options = {abortEarly: false};

        const {error} = Joi.validate(this.state.account, this.schema, options);
        if (!error) return null;

        const errors ={};
        
        // Line 22 and 23 - map na array into an object
        for (let item of error.details)
        errors[item.path[0]] = item.message;
        return errors;
    };
    handleOnSubmit = (event) =>{
        event.preventDefault();

        const errors = this.validate();
        
        this.setState({errors: errors || {}});
        if (errors) return;
        console.log('Submitted')
        
    };
    validateProperty = ({name, value}) => {
       const obj = {[name]: value};
       const schema = {[name]: this.schema[name]};
       const {error} = Joi.validate(obj, schema);
       if (error) return null;
       return error ? error.detail[0].message: null;
    };
       
    handleChange = ({currentTarget: input}) => {
        const errors ={...this.state.errprs};
        const errorMessage = this.validateProperty(input);
        if (errorMessage) errors[input.name] = errorMessage;
        else delete errors[input.name];

        const account = {...this.state.account}
        account[input.name] = input.value;
        this.setState( {account, errors} );
    };



    render() { 
        const { account, errors } = this.state;
        return ( 
            <div>
                <h1>Login</h1>
                <form onSubmit={this.handleOnSubmit}>
                    <Input 
                     name="username"
                     value={account.username}
                     label="Username"
                     onChange={this.handleChange}
                     error={errors.username}
                     />
                    <Input 
                     name="password"
                     value={account.password}
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
