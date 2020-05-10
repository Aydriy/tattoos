import React from "react";
import ReactDOM from "react-dom";
import "./sass/style.sass";
import App from "./app/App.jsx";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
