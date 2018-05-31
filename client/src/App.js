import React, { Component } from 'react';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import './App.css';
import Unit from './components/Unit';
import Pilots from './components/Pilots';
import Meths from './components/Meths';
import Organization from './components/Organization';

/* App component */
class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <Switch>
            <Route exact={true} path="/" component={Unit} />
            <Route path="/pilot" component={Pilots} />
            <Route path="/meth" component={Meths} />
            <Route path="/organization" component={Organization} />
            </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
