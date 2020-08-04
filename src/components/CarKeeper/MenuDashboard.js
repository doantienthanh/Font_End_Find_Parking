import React, { Component } from 'react';
import { FaTachometerAlt, FaDatabase, FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
export default class MenuDashboard extends Component {
  render() {
    return (
      <div className="MenuDasboard">
        <Link className="link-dashboard" to="/user/keeper/dashboard"><span className="item-menu"><FaTachometerAlt className="icon-menu" />&nbsp;&nbsp;Dashboard</span></Link>
        <Link className="link-dashboard" to="/user/keeper/add"><span className="item-menu"><FaDatabase className="icon-menu" />&nbsp;&nbsp;Add Parking</span></Link>
        <Link className="link-dashboard" to="/user/keeper/parking"><span className="item-menu"><FaDatabase className="icon-menu" />&nbsp;&nbsp;Parking</span></Link>
        <Link className="link-dashboard" to="/user/keeper/profile"><span className="item-menu"><FaDatabase className="icon-menu" />&nbsp;&nbsp;Profile</span></Link>
        <Link className="link-dashboard" to="/user/keeper/setting"><span className="item-menu"><FaDatabase className="icon-menu" />&nbsp;&nbsp;Setting</span></Link>
      </div>
    );
  }
}
