import React, {Component} from 'react';
import Movies from './components/movies';
import Rental from  './components/rentals';
import NotFound from './components/notFound';
import {Route, Redirect, Switch} from 'react-router-dom';
import './App.css';
import Customer from './components/customers';


class App extends Component {
  render() {  
  return (
    <main className="container">
      <Switch>
        <Route path="/movies" component={Movies}></Route>
        <Route path="/customers" component={Customer}></Route>
        <Route path="/rentals" component={Rental}></Route>
        <Route path="/notFound" component={NotFound}></Route>
        <Redirect from="/" to="/movies"/>
      </Switch>
        
      </main>
  );
  }
}

export default App;
