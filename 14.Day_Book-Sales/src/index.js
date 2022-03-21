import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { createStore } from 'redux'
import reducer from "./reducer";
import { Provider } from "react-redux";
import { composeWithDevTools } from '@redux-devtools/extension'

const store = createStore(reducer,composeWithDevTools())

const rootElement = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  rootElement
);