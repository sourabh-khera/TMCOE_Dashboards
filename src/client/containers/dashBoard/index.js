import React, { Component } from 'react';
import {BrowerRouter as Router, Route, Switch} from 'react-router-dom';
import Hotels from '../hotels';
import Flights from '../flights';

export default class DashBoard extends Component {
  render(){
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path='/' component="" />
            <Route path='/flights' component="" />
          </Switch>
        </div>
      </Router>
    )
  }
}
