import React, { Component } from 'react'

export default class NearPaking extends Component {
    constructor(){
        super();
        this.state={
            position: [
                {
                    lat: 16.058324,
                    lng: 108.2393135,
                }
            ],
            listParks:[],
            parks:[]
        }
        this.getAllData=this.getAllData.bind(this);
        this.getAllData();
        this.getParksNear=this.getParksNear.bind(this);
        
    }
    getAllData(){
        fetch('http://127.0.0.1:8000/api/getAllData')
        .then(response =>response.json())
        .then(data=>{
            this.setState({listParks:data});
            this.getParksNear();
            });
    }
    getParksNear(){
        var listParks=this.state.listParks;
        var parksNear=[];
    }
    render() {
        return (
            <div className="nearParking">
            <h1 className="text-tital">GẦN ĐÂY</h1>
            </div>
        )
    }
}
