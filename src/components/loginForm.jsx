import React, {Component} from 'react'; 
import Input from './input';

class LoginForm extends Component {

    state =  {
        account: {username: '', password: ''},
        errors: {}
    }
    validate = () => {
        return {username: 'Username is required'}
    };
    handleOnSubmit = (event) =>{
        event.preventDefault();
        const errors = this.validate();
        this.setState({errors})
        if (errors) return;

        console.log("Submitted");
    };
    handleChange = ({currentTarget: input}) => {
        const account = {...this.state.account}
        account[input.name] = input.value;
        this.setState( {account} );
    };



    render() { 
        const { account } = this.state;
        return ( 
            <div>
                <h1>Login</h1>
                <form onSubmit={this.handleOnSubmit}>
                    <Input 
                     name="username"
                     value={account.username}
                     label={account.username}
                     onChange={this.handleChange}
                     />
                    <Input 
                     name="password"
                     value={account.password}
                     label={account.password}
                     onChange={this.handleChange}
                     />
                        
                        
                    <button className="btn btn-primary">Login</button>
                </form>
            </div>
         );
    }
}
 
export default LoginForm;
