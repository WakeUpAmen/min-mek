import React, { Component } from 'react';
import {BrowserRouter, Route, Link, Switch, Redirect} from 'react-router-dom';
import './App.css';
import Unit from './components/Unit';
import Pilots from './components/Pilots';
import Meths from './components/Meths';
import Organization from './components/Organization';
import {Nav, NavItem} from 'react-bootstrap';

/* App component */
class App extends Component {
    render() {
        return (
        <div>
            <Nav   className='navs' bsStyle="tabs">
                    <NavItem className='nav-itms' eventKey="1" href="/">Unit</NavItem>
                    <NavItem className='nav-itms' eventKey="2" href="/meth">Meth</NavItem>
                    <NavItem className='nav-itms' eventKey="3" href="/pilot">Pilot</NavItem>
                    <NavItem className='nav-itms' eventKey="4" href="/organization">Organization</NavItem>
            </Nav>
            <BrowserRouter>
            <Switch>
                <Route exact={true} path="/" component={Unit} />
                <Route path="/pilot" component={Pilots} />
                <Route path="/meth" component={Meths} />
                <Route path="/organization" component={Organization} />
                </Switch>
            </BrowserRouter>
        </div>
        
        );
  }
}

export default App;
