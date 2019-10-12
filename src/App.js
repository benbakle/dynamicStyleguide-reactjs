import React from 'react';
import { Router, Route } from "react-router-dom";
import History from './services/history';
import Navigation from './components/Navigation';
import Headings from './components/Headings';
import Style from './components/Style';
import Buttons from './components/Buttons';
import './assets/css/app.scss';

function App() {
  return (
    <div className="app">
      <Router history={History}>
        <Navigation />
        <div className="app-body">
          <Route exact path='/headings' component={Headings} />
          <Route exact path='/buttons' component={Buttons} />
        </div>
      </Router>
      <div className="style-console">
        <Style /> 
      </div>
    </div>
  );
}

export default App;
