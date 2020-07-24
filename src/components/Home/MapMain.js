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
        // let a = document.createElement("img");
        // a.src = "data:image/jpeg;base64,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";

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

