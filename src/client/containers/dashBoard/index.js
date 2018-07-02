import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Hotels from '../hotels';
import Flights from '../flights';
import Header from '../../components/dashboardHeader/header';

export default class DashBoard extends Component {
  render(){
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path='/' component={Hotels} />
            <Route path='/flights' component={Flights} />
          </Switch>
        </div>
      </Router>
    )
  }
}
