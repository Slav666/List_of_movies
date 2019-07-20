import React, {Component} from 'react';
import Movies from './components/movies';
import Rental from  './components/rentals';
import NotFound from './components/notFound';
import {Route, Redirect, Switch} from 'react-router-dom';
import './App.css';
import Customer from './components/customers';
import NavBar from './components/navBar';
import MovieForm from './components/movieForms';


class App extends Component {
  render() {  
  return (
    <React.Fragment>
    <NavBar />
    <main className="container">
      <Switch>
        <Route path="/movies/:id" component={MovieForm}></Route>
        <Route path="/movies" component={Movies}></Route>
        <Route path="/customers" component={Customer}></Route>
        <Route path="/rentals" component={Rental}></Route>
        <Route path="/notFound" component={NotFound}></Route>
        <Redirect from="/" exact to="/movies"/>
        <Redirect to="notFound" />
      </Switch>
      </main>
      </React.Fragment>
  );
  }
}

export default App;
