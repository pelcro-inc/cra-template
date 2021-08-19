import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

let Pelcro = window.Pelcro || (window.Pelcro = {});
// Your pelcro site ID
Pelcro.siteid = "374";
Pelcro.environment = {
  // Replace with a real stripe key once on production
  stripe: "pk_test_aThAAdvPHgIdAziZweywBWNk",
  // Use "https://pelcro.com" for the production account
  domain: "https://staging.pelcro.com",
  // empty as we're using React as the UI bundle
  ui: " ",
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
