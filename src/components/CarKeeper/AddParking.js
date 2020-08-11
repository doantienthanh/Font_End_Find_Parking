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
                 <div className="body-addParking">
                   <h1 className="title-addPaking">ADD PAKING</h1>
                   <div className="content-addPaking">
                     <form className="form-addParking">
                       <input className="input-addParking" placeholder="Enter name of your parking" name="name"/>
                       <input className="input-addParking" placeholder="Enter address of your parking" name="address"/>
                       <input className="input-addParking" placeholder="Enter name of your parking" name="name"/>
                       <input className="input-addParking" placeholder="Enter address of your parking" name="address"/>
                       <input className="input-addParking" placeholder="Enter name of your parking" name="name"/>
                       <input className="input-addParking" placeholder="Enter address of your parking" name="address"/>
                       <input className="input-addParking" placeholder="Enter name of your parking" name="name"/>
                       <input className="input-addParking" type="file" placeholder="Enter address of your parking" name="address"/>
                      <button className="btn-addParking">Submit</button>
                     </form>
                   </div>
                 </div>
          </div>
        </div>
        <Bottom />
      </div>
    );
  }
}
