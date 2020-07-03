import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

axios.interceptors.request.use(
  req => {
    console.log(req)
    // to edit req config (add header,...)
    return req
  },
  err => {
    console.log(err)
    return Promise.reject(err)
  }  
)

axios.interceptors.response.use(
  res => {
    console.log(res)
    // to edit res config (add header,...)
    return res
  },
  err => {
    console.log(err)
    return Promise.reject(err)
  }
)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
