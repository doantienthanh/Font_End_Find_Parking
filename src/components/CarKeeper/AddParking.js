import React, { Component } from "react";
import Header from "../Home/Header";
import Bottom from "../Home/Bottom";
import MenuDashboard from "./MenuDashboard";
import Cookies from "js-cookie";
import { withRouter } from "react-router-dom";
 class AddParking extends Component {
  constructor() {
    super();
    this.state = {
      location: "",
      error:''
    };
    this.addParking = this.addParking.bind(this);
    //  this.componentDidMount=this.componentDidMount.bind(this);
  }
  addParking(event) {
    event.preventDefault();
    // var id_user=Cookies.get('user_id');
    var id_user=7;
    var name = event.target["name"].value;
    var add = event.target["address"].value;
    var area = event.target["area"].value;
    var price = event.target["price"].value;
    var description = event.target["description"].value;
    var address = add + ",Đà Nẵng 553400,Việt Nam";
    fetch("https://api.mapbox.com/geocoding/v5/mapbox.places/" + address + ".json?access_token=pk.eyJ1IjoidGhhbmhkb2FuMjAwNTIwIiwiYSI6ImNrY3Zlcng5bTAza2EydmxhMGd0eWtid3QifQ.MW372Vs4owkKB0zLcVRfTw")
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        var located = {
          lng: response.features[0].center[0],
          lat: response.features[0].center[1],
        };
        this.setState({ location: located }, function () {
          var location = JSON.stringify(this.state.location);
          this.props.postData("http://127.0.0.1:8000/api/keeper/addparking", {
              id_user: id_user,
              name: name,
              location: location,
              area: area,
              price: price,
              description: description,
            })
            .then((response) => {
             if(response.status===200){
              //  alert(response.message);
              this.props.history.push('/user/keeper/parking');
             }else{
             this.setState({error:response.message,function () {
               console.log(this.state.error);
             }});
             }
            });
        });
      });
  }
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
                <form className="form-addParking" onSubmit={this.addParking}>
                  <input
                    type="text"
                    className="input-addParking"
                    placeholder="Enter name of your parking"
                    name="name"
                  />
                  <input
                    type="text"
                    className="input-addParking"
                    placeholder="Enter address of your parking"
                    name="address"
                  />
                  <input
                    type="number"
                    className="input-addParking"
                    placeholder="Enter area of your parking"
                    name="area"
                  />
                  <input
                    type="number"
                    className="input-addParking"
                    placeholder="Enter price of your parking"
                    name="price"
                  />
                  <textarea
                    className="input-addParking description"
                    placeholder="Enter description of your parking"
                    name="description"
                  />
                  <p className="error-addParking">{this.state.error}</p>
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
export default withRouter(AddParking);