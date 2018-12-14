import React, { Component } from 'react';
import { Router, Route, Redirect, Switch } from 'react-router-dom';
import { history } from './store';
import  Dashboard  from '../src/pages/home'
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Router history={history}>

            <Dashboard to="/dashboard" />
     
        </Router>
      </div>
    );
  }
}


//App.displayName = 'App'


export default App;
