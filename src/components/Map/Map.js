import React from "react";
import MapManager from "./MapManager";

const neverUpdate = (a, b) => {
  return true;
};

const EsriMap = React.memo((props) => {
  const mapManager = new MapManager({ container: "viewDiv" });

  if (!mapManager) {
    console.warn("Map Error, EsriMap() in Map.js");
  }
  return (
    <div
      style={{ height: "100%", width: "100%", position: "absolute" }}
      id="viewDiv"
    ></div>
  );
}, neverUpdate);

const Map = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        position: "relative",
      }}
    >
      <EsriMap />
    </div>
  );
};

export default Map;
