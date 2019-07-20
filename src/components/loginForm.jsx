import React, {Component} from 'react'; 

class LoginForm extends Component {
    handlerOnSubmit = (event) =>{
        event.preventDefault();
        console.log("Submitted");
    };



    render() { 
        return ( 
            <div>
            <h1>Login</h1>
            <form onSubmit={this.handlerOnSubmit}>
                <div className="form-group"><label htmlFor="username">Username</label><input id="username"type="text" className="form-control"/></div>
                <div className="form-group"><label htmlFor="password">Password</label><input id="password"type="text" className="form-control"/></div>
                <button className="btn btn-primary">Login</button>
            </form>
            </div>
         );
    }
}
 
export default LoginForm;
