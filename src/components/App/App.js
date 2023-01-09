import React from "react";
import { StyledApp, StyledH3 } from "./App-styled";
import Map from "../Map";

const App = () => {
  return (
    <StyledApp>
      <StyledH3>Test Map</StyledH3>
      <Map />
    </StyledApp>
  );
};

export default App;
