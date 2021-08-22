import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

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
