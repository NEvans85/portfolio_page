import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Root from "./components/root";
import registerServiceWorker from "./registerServiceWorker";

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");

  ReactDOM.render(<Root />, root);
});
registerServiceWorker();
