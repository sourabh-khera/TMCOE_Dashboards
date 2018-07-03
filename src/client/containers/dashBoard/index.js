import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HotelsDashBoard from '../hotels';
import FlightsDashBoard from '../flights';
import Header from '../../components/dashboardHeader/header';

export default class DashBoard extends Component {
  render(){
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path='/' component={HotelsDashBoard} />
            <Route path='/flights' component={FlightsDashBoard} />
          </Switch>
        </div>
      </Router>
    )
  }
}
