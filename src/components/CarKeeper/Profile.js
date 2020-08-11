import React, { Component } from 'react';
import Header from '../Home/Header';
import Bottom from '../Home/Bottom';
import MenuDashboard from './MenuDashboard';
export default class Profile extends Component {
  render() {
    return (
      <div className="Profile">
        <Header />
        <div className="body-Dashboard">
          <div className="left-body-dashboard">
            <MenuDashboard />
          </div>
          <div className="center-body-dashboard">
dffdfd
          </div>
        </div>
        <Bottom />
      </div>
    );
  }
}
