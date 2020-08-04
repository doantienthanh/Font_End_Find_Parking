import React, { Component } from 'react';
import Header from '../Home/Header';
import Bottom from '../Home/Bottom';
import MenuDashboard from './MenuDashboard';
export default class Setting extends Component {


  render() {
    return (
      <div className="Setting">
        <Header />
        <div className="body-Dashboard">
          <div className="left-body-dashboard">
            <MenuDashboard />
          </div>
          <div className="center-body-dashboard">
            Setting
          </div>
        </div>
        <Bottom />
      </div>
    )
  }
}
