
import { MapLayer ,withLeaflet} from "react-leaflet";
import L from "leaflet";
import "leaflet-routing-machine";
import "lrm-google";


import {MAPBOX_TOKEN } from "./consts";

class Routing extends MapLayer {
  createLeafletElement() {
    const { map } = this.props;
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
      router: L.Routing.mapbox(MAPBOX_TOKEN),
      geocoder: L.Control.Geocoder.mapbox(MAPBOX_TOKEN),
      addWaypoints: true,
      routeWhileDragging: true,
      draggableWaypoints: false,
      fitSelectedRoutes: true,
      showAlternatives: false
    }).addTo(map.leafletElement);
    return leafletElement.getPlan();
  }
}
export default withLeaflet(Routing);
