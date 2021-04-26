import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/home';
import About from './pages/about';
import Data from './pages/data';
import Statistics from './pages/statistics';

import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route exact path='/' component={Home} />
      <Route exact path="/home" component={Home} /> 
      <Route exact path="/about" component={About} />
      <Route exact path="/data" component={Data} />
      <Route exact path="/statistics" component={Statistics} />
    </Router>,
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
