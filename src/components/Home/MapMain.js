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
}
componentDidMount() {
const map = new mapboxgl.Map({
container: this.mapContainer,
style: 'mapbox://styles/mapbox/streets-v11',
center: [this.state.lng, this.state.lat],
zoom: this.state.zoom
});
map.on('move', () => {
this.setState({
lng: map.getCenter().lng.toFixed(4),
lat: map.getCenter().lat.toFixed(4),
zoom: map.getZoom().toFixed(2)
});
});

var marker = new mapboxgl.Marker()
.setLngLat([108.2414633, 16.0597632])
.addTo(map);
map.on('click', function(e) {
    // The event object (e) contains information like the
    // coordinates of the point on the map that was clicked.
    var marker = new mapboxgl.Marker()
    .setLngLat([e.lngLat.lng, e.lngLat.lat])
    .addTo(map);

    fetch("https://api.mapbox.com/geocoding/v5/mapbox.places/"+e.lngLat.lng+","+e.lngLat.lat+".json?access_token=pk.eyJ1IjoidGhhbmhkb2FuMjAwNTIwIiwiYSI6ImNrY3Zlcng5bTAza2EydmxhMGd0eWtid3QifQ.MW372Vs4owkKB0zLcVRfTw")
    .then((response) => {
       return response.json()
    })
    .then(response=>  {
        console.log(response);
        console.log(response.features[0].place_name);
    });
});
}
 
render() {
return (
<div>
<div className='sidebarStyle'>
<div>{this.state.lng}{this.state.lat}{this.state.zoom}</div>
</div>
<div ref={el => this.mapContainer = el} className='mapContainer' />
</div>
)
}
}
 
