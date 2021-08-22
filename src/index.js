import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// Edit your Pelcro config in ./.env file

let Pelcro = window.Pelcro || (window.Pelcro = {});

// Your pelcro site ID
Pelcro.siteid = process.env.REACT_APP_PELCRO_SITE_ID;
Pelcro.environment = {
  stripe: process.env.REACT_APP_STRIPE_KEY,
  // 'staging' || 'production'
  domain:
    process.env.REACT_APP_PELCRO_ENVIRONMENT === "production"
      ? "https://www.pelcro.com"
      : "https://staging.pelcro.com",
  // empty as we're using React as the UI bundle
  ui: " ",
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
