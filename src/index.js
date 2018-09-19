import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import "./index.css";
import Root from "./components/root";
import registerServiceWorker from "./registerServiceWorker";
import ProjectsContent from "./Content/projectsContent";

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");

  ReactDOM.render(<Root />, root);
});
registerServiceWorker();
