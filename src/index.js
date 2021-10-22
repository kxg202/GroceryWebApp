import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { StateManager } from "./StateManager";
import reducer, { initialState } from "./reducer";

// Wrap the app with StateManager so all the components can access the global state
ReactDOM.render(
  <React.StrictMode>
    <StateManager initialState={initialState} reducer={reducer}>
      <App />
    </StateManager>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
