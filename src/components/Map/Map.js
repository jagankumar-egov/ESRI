import React from "react";
import { StyledMap, MapContainer } from "./Map-styled";
import MapManager from "./MapManager";

const neverUpdate = (a, b) => {
  return true;
};

const EsriMap = React.memo(props => {
  const mapManager = new MapManager({ container: "viewDiv" });

  if (!mapManager) {
    console.warn("Map Error, EsriMap() in Map.js");
  }
  return <StyledMap id="viewDiv" />;
}, neverUpdate);

const Map = () => {
  return (
    <MapContainer>
      <EsriMap />
    </MapContainer>
  );
};

export default Map;
