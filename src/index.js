import React from "react";
import ReactDOM from "react-dom/client";

import store from "./redux";
import { Provider } from "react-redux";

import App from "./components/App";

import { GlobalStyle } from "./styles/Global";
import Theme from "./styles/Theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <GlobalStyle />
    <Theme>
      <App />
    </Theme>
  </Provider>
);
