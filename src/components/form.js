import React, { Component } from 'react'; 
import  Joi  from 'joi-browser';
import Input from './input';

class Form extends Component {
    state = {  
        data: {},
        errors: {}
    }

    validate = () => {
        const options = {abortEarly: false};

        const {error} = Joi.validate(this.state.data, this.schema, options);
        if (!error) return null;

        const errors ={};
        
        // Line 22 and 23 - map na array into an object
        for (let item of error.details)
        errors[item.path[0]] = item.message;
        return errors;
    };

    validateProperty = ({name, value}) => {
        const obj = {[name]: value};
        const schema = {[name]: this.schema[name]};
        const {error} = Joi.validate(obj, schema);
        if (error) return null;
        return error ? error.detail[0].message: null;
    };

    handleOnSubmit = (event) =>{
        event.preventDefault();

        const errors = this.validate();
        
        this.setState({errors: errors || {}});
        if (errors) return;
        
        this.doSubmit();
        
    };

    handleChange = ({currentTarget: input}) => {
        const errors ={...this.state.errprs};
        const errorMessage = this.validateProperty(input);
        if (errorMessage) errors[input.name] = errorMessage;
        else delete errors[input.name];

        const data = {...this.state.data}
        data[input.name] = input.value;
        this.setState( {data, errors} );
    };
    renderButton(label){
    return(
    <button disabled={this.validate()}
    className="btn btn-primary">{label}</button>
    );
    }
    renderInput(name, label){
        const { data, errors } = this.state;
        return (
            <Input 
                 name={name}
                 value={data[name]}
                 label={label}
                 onChange={this.handleChange}
                 error={errors[name]}
             />
        )
    }

}
 
export default Form;