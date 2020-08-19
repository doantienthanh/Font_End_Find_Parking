import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Header from "../Home/Header";
import Bottom from "../Home/Bottom";
import MenuDashboard from "./MenuDashboard";
 class Update extends Component {
     constructor(props){
         super(props);
         this.state={
             park:{},
         }
         this.getPark=this.getPark.bind(this);
         this.getPark();
        this.updatePark=this.updatePark.bind(this);
      
     }
      getPark() {
        let ida=this.props.match.params.id;
        fetch('http://127.0.0.1:8000/api/park/'+ida+'/get')
        .then(response =>{
            if (response.ok) {
              response.json().then(data => {
            //    this.setState({park:data});
            //    console.log
            var position=data.address;
            var location=JSON.parse(position);
            var name =data.name;
            var price=data.price;
            var area=data.area;
            var description=data.description;
            fetch("https://api.mapbox.com/geocoding/v5/mapbox.places/"+location.lng+','+location.lat+ ".json?access_token=pk.eyJ1IjoidGhhbmhkb2FuMjAwNTIwIiwiYSI6ImNrY3Zlcng5bTAza2EydmxhMGd0eWtid3QifQ.MW372Vs4owkKB0zLcVRfTw")
            .then((response) => {
                return response.json()
            })
            .then(response => {
                var parks={
                    id:ida,
                    name:name,
                    address:response.features[0].place_name,
                    price:price,
                    area:area,
                    description:description
                }
             this.setState({park:parks});
            });
              });
            }
          });
     }

     updatePark(event){
        event.preventDefault();
        var id=this.state.park.id;
        var name = event.target["nameUpdate"].value;
        var address = event.target["addressUpdate"].value;
        var area = event.target["areaUpdate"].value;
        var price = event.target["priceUpdate"].value;
        var description = event.target["descriptionUpdate"].value;
        fetch("https://api.mapbox.com/geocoding/v5/mapbox.places/" + address + ".json?access_token=pk.eyJ1IjoidGhhbmhkb2FuMjAwNTIwIiwiYSI6ImNrY3Zlcng5bTAza2EydmxhMGd0eWtid3QifQ.MW372Vs4owkKB0zLcVRfTw")
        .then((response) => {
          return response.json();
        })
        .then((response) => {
          var located = {
            lng: response.features[0].center[0],
            lat: response.features[0].center[1]
        }
           var location=JSON.stringify(located);
            var parkUpdate={
                name:name,
                location:location,
                area:area,
                price:price,
                description:description
            }
           fetch('http://127.0.0.1:8000/api/park/'+id+'/edit',{
               method:'PATCH',
               headers: {
                 'Content-Type': 'application/json'
               },
               body:JSON.stringify(parkUpdate)
           })
           .then((response) => {
            return response.json();
          })
          .then((response) => {
            this.props.history.push('/user/keeper/parking');
                  });
    });
     }
    render() {
        var park=this.state.park;
        return (
            <div className="AddParking">
            <Header />
            <div className="body-Dashboard">
              <div className="left-body-dashboard">
                <MenuDashboard />
              </div>
              <div className="center-body-dashboard">
                <div className="body-addParking">
                  <h1 className="title-addPaking">UPDATE PAKING</h1>
                  <div className="content-addPaking">
                    <form className="form-addParking" onSubmit={this.updatePark}>
                      <input
                        type="text"
                        className="input-addParking"
                       defaultValue={park.name}
                        name="nameUpdate"
                      />
                      <input
                        type="text"
                        className="input-addParking"
                        defaultValue={park.address}
                        name="addressUpdate"
                      />
                      <input
                        type="number"
                        className="input-addParking"
                        defaultValue={park.area}
                        name="areaUpdate"
                      />
                      <input
                        type="number"
                        className="input-addParking"
                        defaultValue={park.price}
                        name="priceUpdate"
                      />
                      <textarea
                        className="input-addParking description"
                        defaultValue={park.description}
                        name="descriptionUpdate"
                      />
                      <button className="btn-addParking">Submit</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <Bottom />
          </div>
        )
    }
}
export default withRouter(Update);