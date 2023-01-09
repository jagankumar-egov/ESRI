import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./styles.css"
import { setDefaultOptions } from "esri-loader";
setDefaultOptions({ css: true });

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
