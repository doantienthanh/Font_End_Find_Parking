import React, { Component } from 'react';
import Header from '../Home/Header';
import Bottom from '../Home/Bottom';
import MenuDashboard from './MenuDashboard';

export default class Dashboard extends Component {
  render() {
    return (
      <div className="Dasboard">
        <Header />
        <div className="body-Dashboard">
          <div className="left-body-dashboard">
            <MenuDashboard />
          </div>
          <div className="center-body-dashboard">
            thanh
          </div>
        </div>
        <Bottom />
      </div>
    );
  }
}
