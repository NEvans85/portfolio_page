import React from "react";
import { HashRouter } from "react-router-dom";

import App from "./app";

const Root = ({ store }) => (
  <HashRouter>
    <App store={store} />
  </HashRouter>
);

export default Root;
