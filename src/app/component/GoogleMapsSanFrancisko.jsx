import React, { useState, useEffect } from "react";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";
import mapStyles from "./mapStyles.js";

// const style = {
//   width: "702px",
//   height: "761px",
// };

function Map() {
  const [selectedPark, setSelectedPark] = useState(null);

  useEffect(() => {
    const listener = (e) => {
      if (e.key === "Escape") {
        setSelectedPark(null);
      }
    };
    window.addEventListener("keydown", listener);

    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, []);

  return (
    <GoogleMap
      defaultZoom={13}
      defaultCenter={{ lat: 37.7877401, lng: -122.420743 }}
      defaultOptions={{ styles: mapStyles }}
    ></GoogleMap>
  );
}

const MapWrapped = withScriptjs(withGoogleMap(Map));

export default function GoogleMapsLosAngeles() {
  return (
    <div>
      <MapWrapped
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyBLcuIjzC9KWhUvjDF-mqlR_QYGG_JCN4Q`}
        loadingElement={<div className="mapLoad" />}
        containerElement={<div className="mapClass" />}
        mapElement={<div className="mapClassEl" />}
      />
    </div>
  );
}
