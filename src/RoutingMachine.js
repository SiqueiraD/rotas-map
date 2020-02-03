
import { MapLayer ,withLeaflet} from "react-leaflet";
import L from "leaflet";
import "leaflet-routing-machine";
import "lrm-google";


import {MAPBOX_TOKEN } from "./consts";

class Routing extends MapLayer {


  
  createLeafletElement() {
    const { map, id } = this.props;

    let leafletElement = L.Routing.control({
      lineOptions: {
        styles: [
          {
            color: "blue",
            opacity: 0.6,
            weight: 4
          }
        ]
      },
      waypoints: this.points,
      router: L.Routing.mapbox(MAPBOX_TOKEN),
      geocoder: L.Control.Geocoder.mapbox(MAPBOX_TOKEN),
      addWaypoints: true,
      routeWhileDragging: true,
      draggableWaypoints: false,
      fitSelectedRoutes: true,
      showAlternatives: false
    }).on('routingstart',(e)=>{
      if(!this.points)
        this.postData(e);
    }).addTo(map.leafletElement);

    if(id)
      fetch("http://localhost:3000/maps/"+id)
        .then(res => res.json())
        .then((result) => {
          this.points = result.map((x)=>{ 
            console.log(x);
            return L.latLng(x.latLng.lat, x.latLng.lng); 
          });
          return this.points;
        },
        // Nota: É importante lidar com os erros aqui em vez de um bloco catch() para
        // não recebermos exceções de erros dos componentes.
        (error) => {
          this.setState({isLoaded: true, error});
          return [];
        }).then((a)=>{
          //leafletElement.options.waypoints = a;
          console.log(leafletElement);
          leafletElement.setWaypoints(a);
        });

      return leafletElement.getPlan();
  }
  
  
  postData(e) {
    fetch('http://localhost:3000/maps', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(e.waypoints)
  })
}
}
export default withLeaflet(Routing);
