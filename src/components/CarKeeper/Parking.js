import React, { Component } from 'react';
import Header from '../Home/Header';
import Bottom from '../Home/Bottom';
import MenuDashboard from './MenuDashboard';
import Cookies from 'js-cookie';
import {Link} from 'react-router-dom';
import {FaEdit,FaTrashAlt} from 'react-icons/fa';
export default class Parking extends Component {
    constructor(){
        super();
        this.state={
            parks:[],
        }
        this.getAllParks=this.getAllParks.bind(this);
        this.deleteParking=this.deleteParking.bind(this);
        this.getAllParks();
    }
    getAllParks(){
        var id_user=Cookies.get('user_id');
       fetch('http://127.0.0.1:8000/api/keeper/getparking',{
           method:'post',
           headers:{
            'Authorization': id_user,
           }
        })
        .then((response) => response.json())
        .then(data =>{
         this.setState({parks:data,function () {
          console.log(this.state.parks);
        }});
        });
    }
    deleteParking(id){
     return(event)=>{
       var id_park=id;
      event.preventDefault();
     fetch('http://127.0.0.1:8000/api/keeper/parking/'+id_park+'/delete',{
       method:'DELETE',
     })
     .then((response)=>response.json())
     .then(data=>{
    this.getAllParks();
     });
     }
    }
  render() {
    return (
      <div className="Parking">
        <Header />
        <div className="body-Dashboard">
          <div className="left-body-dashboard">
            <MenuDashboard />
          </div>
          <div className="center-body-dashboard">
              <table className="table-parking">
              <thead>
          <tr className="row-table">
            <th className="content-table">STT</th>
            <th className="content-table">NAME</th>
            <th className="content-table">ADDRESS</th>
            <th className="content-table">AREA</th>
            <th className="content-table">DESCRIPTION</th>
            <th className="content-table"></th>
            <th className="content-table"></th>
          </tr>
          </thead>
          <tbody>
            {
             this.state.parks.map((item,index)=>
             <tr className="row-table" key={index}>
              <td className="content-table">{index+1}</td>
              <td className="content-table">{item.name}</td>
              <td className="content-table">{item.address}</td>
              <td className="content-table">{item.area}</td>
              <td className="content-table">{item.description}</td>
              <td className="content-table">
               <form onSubmit={this.deleteParking(item.id)}>
              <button className="btn btn-delete"><FaTrashAlt/></button>
              </form>
              </td>
              <td className="content-table">
              <Link  to={"/user/keeper/"+item.id+"/edit"}><button className="btn btn-update"><FaEdit/></button></Link>
            </td>
             </tr>
             )
         }
          </tbody>
              </table>
          </div>
        </div>
        <Bottom />
      </div>
    );
  }
}
