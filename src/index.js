import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Root from "./components/root";
import configureStore from "./store";
import registerServiceWorker from "./registerServiceWorker";

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  let store = {};
  //  if (window.currentUser) {
  //    const preloadedState = { session: { currentUser: window.currentUser } };
  //    store = configureStore(preloadedState);
  //    delete window.currentUser;
  //  } else {
  //    store = configureStore();
  //  }
  ReactDOM.render(<Root store={store} />, root);
});
registerServiceWorker();
