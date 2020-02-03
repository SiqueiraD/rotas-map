import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import MapComponent from "./Map";

import "./index.css";

const rootElement = document.getElementById("root");
ReactDOM.render(<Router><App /></Router>, rootElement);


// import React from 'react';
// import ReactDOM from 'react-dom';
// import { render } from 'react-dom'
// import Leaflet from 'leaflet'
// import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
// import 'leaflet-routing-machine'
// import MapInfo from "./MapInfo";
// import RoutingMachine from './Routing';
// import './index.css';

// class Square extends React.Component {
//   render() {
//     return (
//       <button className="square">
//         {/* TODO */}
//       </button>
//     );
//   }
// }
  

  
// class Game extends React.Component {
//   state = {
//     lat: 57.74,
//     lng: 11.94,
//     zoom: 15,
//   }

//   render() {
//     const position = [this.state.lat, this.state.lng]
//     return (
//       <Map center={position} zoom={this.state.zoom} id="mapid">
//         <TileLayer
//           attribution= 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
//           url="https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}"
//           accessToken="pk.eyJ1IjoiZGFuaWxvc2ljIiwiYSI6ImNrMW54OHY5cTBnOXUzbXEzazRxZzg4dXAifQ.dwMFsKzaU7RHsPKcD4aPgA"
//           id="mapbox.satellite"
//         />
//         <Marker position={position}>
//           <Popup>
//             A pretty CSS3 popup. <br /> Easily customizable.
//           </Popup>
//         </Marker>
//       </Map>
//     )
//   }
// }

// // ========================================

// ReactDOM.render(
//   <Game />,
//   document.getElementById('root')
// );
  