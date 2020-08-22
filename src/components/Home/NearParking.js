import React, { Component } from 'react'
import mapboxgl from 'mapbox-gl'; 
mapboxgl.accessToken = 'pk.eyJ1IjoidGhhbmhkb2FuMjAwNTIwIiwiYSI6ImNrY3Zlcng5bTAza2EydmxhMGd0eWtid3QifQ.MW372Vs4owkKB0zLcVRfTw';
export default class NearPaking extends Component {
    constructor(){
        super();
        this.state={
            position: {
                    lat: 16.058324,
                    lng: 108.2393135,
                   },
            listParks:[],
            parks:[],
            isLoaded:false
        }
        this.getAllData=this.getAllData.bind(this);
        this.getAllData();
        this.getParksNear=this.getParksNear.bind(this);
        this.createMapParks=this.createMapParks.bind(this);
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
        var location=this.state.position;
        var yourLocation=new mapboxgl.LngLat(location.lng, location.lat);
        var parksNear=[];
        listParks.forEach(element => {
            var address=JSON.parse(element.address);
            var parksLocation=new mapboxgl.LngLat(address.lng, address.lat);
            var distance=yourLocation.distanceTo(parksLocation);
            if(distance<=1000){
                parksNear.push(element);
            }
        });
        this.setState({parks:parksNear});
    }
    createMapParks(element){
        var location=JSON.parse(element.address);
        const map = new mapboxgl.Map({
            container:element.name,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [location.lng,location.lat],
            zoom: 14
        });
        var el = document.createElement('img');
        el.className = 'markerParks';
        el.src ='https://png.pngtree.com/png-clipart/20190614/original/pngtree-vector-parking-sign-icon-png-image_3767413.jpg';
        el.title=element.name; 
        new mapboxgl.Marker(el)
        .setLngLat([location.lng,location.lat])
        .addTo(map);
    }
 
    render() {
        return (
                 <div className='nearParks'>
                 <h1 className="text-tital">GẦN ĐÂY </h1>
                 <div id='div' className="row-listParking">
                 {
                    this.state.parks.map((element)=>{
                        {/* console.log(element);
                        var div=document.createElement('div');
                        div.id=element.name;
                        div.name='mapParks';
                        var pas=document.getElementById('div');
                        pas.appendChild(div); */}
                        this.createMapParks(element);
                    })
                 }
                 </div>
                 <div  className="row-listParking">
                        <div id='Iphones' className='mapParks'/>
                        <div id='Tô Hiến Thành, Sơn Trà' className='mapParks'/>
                        <div id='Iphonesthanh' className='mapParks'/>
                        
                 </div>
                  </div>
                 )
      
    } 
}
