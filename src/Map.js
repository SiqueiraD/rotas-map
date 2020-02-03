import React, { Component, createRef } from "react";
import L from "leaflet";
import { Map, TileLayer, withLeaflet, MapControl, Marker, Popup, useLeaflet } from "react-leaflet";
import Routing from "./RoutingMachine";
import queryString from 'query-string';
import "leaflet-control-geocoder";

class MapComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      lat: -22.901438856736206,
      lng: -43.12915921211243,
      zoom: 9,
      isMapInit: false
    };
  }

  saveMap = map => {
    this.map = map;
    this.setState({
      isMapInit: true
    });
  };

  componentDidMount() {
    const parsed = queryString.parse(this.props.location.search);
    this.id = parsed.id;
  }
  
  
  render() {
    const { lat, lng, zoom } = this.state;
    const position = [lat, lng];
    const marker = this.state.hasLocation ? (
      <Marker position={this.state.latlng}>
      <Popup>You are here</Popup>
      </Marker>
      ) : null
      
      return (
        <Map id="mapid" center={position} zoom={zoom} ref={this.saveMap}>
        <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'/>
        {this.state.isMapInit && <Routing map={this.map} id={this.id} />}
        {marker}
        </Map>
        );
      }
    }
    
    export default MapComponent;
    