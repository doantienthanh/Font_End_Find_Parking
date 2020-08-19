import React from 'react';
import mapboxgl from 'mapbox-gl'; 
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import {FaMapMarkerAlt} from 'react-icons/fa';
mapboxgl.accessToken = 'pk.eyJ1IjoidGhhbmhkb2FuMjAwNTIwIiwiYSI6ImNrY3Zlcng5bTAza2EydmxhMGd0eWtid3QifQ.MW372Vs4owkKB0zLcVRfTw';
export default class MapMain extends React.Component {
    _isMounted = false;
    constructor(props) {
        super(props);
        this.state = {
            lat: 16.058324,
            lng: 108.2393135,
            zoom: 15,
            listParks:[],
        };
       
        this.fullscreenControl = this.fullscreenControl.bind(this);
        this.mapMove = this.mapMove.bind(this);
        // this.mapOnclick = this.mapOnclick.bind(this);
        this.createMaker = this.createMaker.bind(this);
        this.getLocation=this.getLocation.bind(this);
        this.createMakerParks=this.createMakerParks.bind(this);
        this.searchPlace=this.searchPlace.bind(this);
        this.searchParks=this.searchParks.bind(this);
    }
    getLocation(){
        navigator.geolocation.getCurrentPosition((position)=>{
            if(this._isMounted){
             this.setState({
                lng:position.coords.longitude,
                lat:position.coords.latitude
            });
            }
          });
 
    }
    componentDidMount() {
        this._isMounted=true;
         this.getLocation();
        const map = new mapboxgl.Map({
            container: this.mapContainer,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [this.state.lng, this.state.lat],
            zoom: this.state.zoom
        });
        this.searchPlace(map);
        // this.searchParks(map);
        this.fullscreenControl(map);
        this.mapMove(map);
        // this.mapOnclick(map);
        this.createMaker(map);
        fetch('http://127.0.0.1:8000/api/getAllData')
        .then(response =>response.json())
        .then(data=>{
            this.setState({listParks:data});
            this.createMakerParks(map);
            });
    }
 createMakerParks(map){
     const listParks=this.state.listParks;
    listParks.forEach(element => {
        var el = document.createElement('img');
        el.className = 'markerParks';
        el.src ='https://png.pngtree.com/png-clipart/20190614/original/pngtree-vector-parking-sign-icon-png-image_3767413.jpg';
        const address=JSON.parse(element.address);
         const lng=address.lng;
         const lat =address.lat;
          new mapboxgl.Marker(el)
         .setLngLat([lng,lat])
         .addTo(map);
    });
 }

    createMaker(map) {
           new mapboxgl.Marker()
            .setLngLat([this.state.lng, this.state.lat])
            .addTo(map);
    }
    searchPlace(map){
        var geocoder = new MapboxGeocoder({
            accessToken: mapboxgl.accessToken,
            flyTo: {
            bearing: 0,
            speed: 0.5,
            curve: 1,
            easing: function(t) {
            return t;
            }
            },
            mapboxgl: mapboxgl
            });
            map.addControl(geocoder);  
    }
    searchParks(map){
        var geocoder = new MapboxGeocoder({
            accessToken: mapboxgl.accessToken,
           
            });
            map.addControl(geocoder);  
            geocoder.className="searchParks" 
    }
    fullscreenControl(map) {
        map.addControl(new mapboxgl.FullscreenControl());
        map.addControl(new mapboxgl.NavigationControl());
    }
    mapMove(map) {
        map.on('move', () => {
            this.setState({
                lng: map.getCenter().lng.toFixed(4),
                lat: map.getCenter().lat.toFixed(4),
                zoom: map.getZoom().toFixed(2)
            });
        });
    }
    // mapOnclick(map) {
    //     map.on('click', function (e) {
    //         fetch("https://api.mapbox.com/geocoding/v5/mapbox.places/"+e.lngLat.lng+','+e.lngLat.lat+ ".json?access_token=pk.eyJ1IjoidGhhbmhkb2FuMjAwNTIwIiwiYSI6ImNrY3Zlcng5bTAza2EydmxhMGd0eWtid3QifQ.MW372Vs4owkKB0zLcVRfTw")
    //             .then((response) => {
    //                 return response.json()
    //             })
    //             .then(response => {
    //                 console.log(response.features[0].place_name);
    //             });
    //         var marker = new mapboxgl.Marker()
    //             .setLngLat([e.lngLat.lng, e.lngLat.lat])
    //             .addTo(map);
    //     });
    // }

    render() {
    
        return (
            <div>
                <div ref={el => this.mapContainer = el} className='mapContainer' />
            </div>
        )
    }
}
