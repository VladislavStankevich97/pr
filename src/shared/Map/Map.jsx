import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { compose, lifecycle, withState } from "recompose";
import "./styleMap.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "@geoman-io/leaflet-geoman-free";
import "@geoman-io/leaflet-geoman-free/dist/leaflet-geoman.css";
import L from "leaflet";
import { GeoSearchControl, OpenStreetMapProvider } from "leaflet-geosearch";
import { isEqual } from "lodash";
import { pointOnFeature, bboxPolygon } from "@turf/turf";
import { setLocation } from "../../redux/actions/actions";

console.log(pointOnFeature);
let geoMap = [];

const Map = (props) => {
  const [MapLeaflet, setMapLeaflet] = useState(null);
  const position = [51.505, -0.09];
  console.log(geoMap);

  // useEffect(() => {
  //   props.setLocation({ value: geoMap, type: "map" });
  // }, [geoMap.length]);

  return (
    <>
      <div id="mapid" style={{backgroundColor:'red !important'}} />
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    setLocation: (value) => {
      dispatch(setLocation(value));
    },
  };
};

export default compose(
  withState("MapLeaflet", "setMapLeaflet", null),
  connect(null, mapDispatchToProps),
  lifecycle({
    componentDidMount() {
      var mymap = L.map("mapid").setView([51.505, -0.09], 13);
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 18,
        id: "mapbox/streets-v11",
        tileSize: 512,
        zoomOffset: -1,
        accessToken: "your.mapbox.access.token",
        scrollWheelZoom: false,
      }).addTo(mymap);

      mymap.pm.addControls({
        position: "topleft",
        drawCircle: false,
        drawMarker: false,
        drawCircleMarker: false,
        drawPolyline: false,
        drawRectangle: false,
        editMode: false,
        dragMode: false,
        cutPolygon: false,
        scrollWheelZoom: false,
      });
      mymap.pm.setLang("ru");
      mymap.pm.getGeomanLayers(true);
      mymap.on("pm:create", ({ shape, layer, ...aa }) => {
        geoMap.push(layer.toGeoJSON()); //layer._map.pm.Toolbar.getBlockPositions())
        // geoMap.push(layer.toGeoJSON().geometry.coordinates); //layer._map.pm.Toolbar.getBlockPositions())
        this.props.setLocation({ value: geoMap, type: "map" });
        console.log(layer.toGeoJSON())
      });
      mymap.on("pm:remove", ({ shape, layer, ...aa }) => {
        console.log("delete", shape, layer.toGeoJSON());
        geoMap = geoMap.reduce((acc, item) => {
          if (!isEqual(item, layer.toGeoJSON())) {
            acc.push(item);
          }
          return acc;
        }, []);
        this.props.setLocation({ value: geoMap, type: "map" });
      });
      const search = new GeoSearchControl({
        style: "bar",
        provider: new OpenStreetMapProvider(),
      });
      this.props.setMapLeaflet(mymap);
      mymap.addControl(search);
      mymap.on("mouseout", function () {
        mymap.scrollWheelZoom.disable();
      });
      //console.log(mymap.pm.Toolbar.getBlockPositions())
    },
    componentDidUpdate() {
      // if(this.props.MapLeaflet){
      //   new L.Map('mapid')
      // }
    },
  })
)(Map);
