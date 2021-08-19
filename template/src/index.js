import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const pelcroDomain =
  process.env.PELCRO_ENVIRONMENT === "production"
    ? "https://pelcro.com"
    : "https://staging.pelcro.com";

let Pelcro = window.Pelcro || (window.Pelcro = {});
// Your pelcro site ID
Pelcro.siteid = process.env.PELCRO_SITE_ID;
Pelcro.environment = {
  // Replace with a real stripe key once on production
  stripe: process.env.STRIPE_KEY,
  // Use "https://pelcro.com" for the production account
  domain: pelcroDomain,
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
