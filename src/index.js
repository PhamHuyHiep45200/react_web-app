// Import React and ReactDOM
import React from "react";
import ReactDOM from "react-dom";

// Import Framework7
import Framework7 from "framework7/framework7.esm.bundle";

// Import Framework7-React plugin
import Framework7React from "framework7-react";

// Import main App component
import App from "./App.jsx";

// Framework7 styles
import "framework7/css/framework7.min.css";

// Custom app styles
import "./css/index.scss";

import "react-hot-loader/patch";
import { AppContainer } from "react-hot-loader";
import { Provider } from "react-redux";
import { store } from "./store/index.js";

// Init Framework7-React plugin
Framework7.use(Framework7React);

// Mount React App
const rootElement = document.getElementById("app");
ReactDOM.render(
  <AppContainer>
    <Provider store={store}>
      <App />
    </Provider>
  </AppContainer>,
  rootElement
);

if (module.hot) {
  module.hot.accept("./components/App", () => {
    const NextApp = require("./App.jsx").default;
    ReactDOM.render(
      <AppContainer>
        <NextApp />
      </AppContainer>,
      rootElement
    );
  });
}
