import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import DecimalClock from "./DecimalClock";
import { createStore } from 'redux'
import rootReducer from './reducer'
import { Provider } from 'react-redux'
const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <DecimalClock />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
