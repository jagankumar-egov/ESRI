import React from "react";
import Map from "../Map";

const App = () => {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch"
      }}
    >
      <h2>Test Map</h2>
      <Map />
    </div>
  );
};

export default App;
