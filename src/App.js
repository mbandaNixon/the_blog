import React, { Component } from 'react';
import { Router, Route, Redirect, Switch } from 'react-router-dom';
import { history } from './store';
import  Dashboard  from '../src/pages/dashboard'
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Router history={history}>
          <Switch>

            <Redirect to="/dashboard" />
          </Switch>
        </Router>
      </div>
    );
  }
}


//App.displayName = 'App'


export default Dashboard(App);
