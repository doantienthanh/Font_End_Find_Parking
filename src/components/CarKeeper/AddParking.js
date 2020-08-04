import React, { Component } from 'react';
import Header from '../Home/Header';
import Bottom from '../Home/Bottom';
import MenuDashboard from './MenuDashboard';
export default class AddParking extends Component {
  render() {
    return (
      <div className="AddParking">
        <Header />
        <div className="body-Dashboard">
          <div className="left-body-dashboard">
            <MenuDashboard />
          </div>
          <div className="center-body-dashboard">
            add
          </div>
        </div>
        <Bottom />
      </div>
    );
  }
}
