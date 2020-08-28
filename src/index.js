import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import store from "./resources/scripts/store";

import { Provider } from "react-redux";

import { freeSet } from "@coreui/icons";

React.icons = freeSet;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
