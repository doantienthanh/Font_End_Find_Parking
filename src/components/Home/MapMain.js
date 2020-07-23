import React from 'react';
import mapboxgl from 'mapbox-gl';
mapboxgl.accessToken = 'pk.eyJ1IjoidGhhbmhkb2FuMjAwNTIwIiwiYSI6ImNrY3Zlcng5bTAza2EydmxhMGd0eWtid3QifQ.MW372Vs4owkKB0zLcVRfTw';
export default class MapMain extends React.Component {
    constructor() {
        super();
        this.state = {
            lng: 108.2414633,
            lat: 16.0597632,
            zoom: 15
        };
        this.fullscreenControl=this.fullscreenControl.bind(this);
        this.mapMove=this.mapMove.bind(this);
        this.mapOnclick=this.mapOnclick.bind(this);
        this.createMaker=this.createMaker.bind(this);
    }
    componentDidMount() {
        const map = new mapboxgl.Map({
            container: this.mapContainer,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [this.state.lng, this.state.lat],
            zoom: this.state.zoom
        });
        this.fullscreenControl(map);
        this.mapMove(map);
        this.mapOnclick(map);
        this.createMaker(map);
    }
    createMaker(map){
        var marker = new mapboxgl.Marker()
        .setLngLat([108.2414633, 16.0597632])
        .addTo(map);
    }
    fullscreenControl(map){
        map.addControl(new mapboxgl.FullscreenControl());
        map.addControl(new mapboxgl.NavigationControl());
    }
    mapMove(map){
        map.on('move', () => {
            this.setState({
                lng: map.getCenter().lng.toFixed(4),
                lat: map.getCenter().lat.toFixed(4),
                zoom: map.getZoom().toFixed(2)
            });
        });
    }
    mapOnclick(map){
        map.on('click', function (e) {
            fetch("https://api.mapbox.com/geocoding/v5/mapbox.places/" + e.lngLat.lng + "," + e.lngLat.lat + ".json?access_token=pk.eyJ1IjoidGhhbmhkb2FuMjAwNTIwIiwiYSI6ImNrY3Zlcng5bTAza2EydmxhMGd0eWtid3QifQ.MW372Vs4owkKB0zLcVRfTw")
                .then((response) => {
                    return response.json()
                })
                .then(response => {
                    console.log(response.features[0].place_name);
                });

                var marker = new mapboxgl.Marker()
                .setLngLat([e.lngLat.lng, e.lngLat.lat])
                .addTo(map);    
        });
    }
    render() {
        return (
            <div>
                <div ref={el => this.mapContainer = el} className='mapContainer' />
            </div>
        )
    }
}

