import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import {store} from './reducer/store';

// import * as serviceWorker from "./serviceWorker";


ReactDOM.render(
  <React.StrictMode>

  <BrowserRouter>
    <Provider store = {store}>
      <App />
    </Provider>
  </BrowserRouter>,
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
// serviceWorker.unregister();


