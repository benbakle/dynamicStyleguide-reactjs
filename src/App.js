import React from 'react';
import { Router, Route } from "react-router-dom";
import History from './services/history';
import Navigation from './components/Navigation';
import Headings from './components/Headings';
import StyleList from './components/StyleList';
import Buttons from './components/Buttons';
import './assets/css/app.scss';

function App() {
  return (
    <div className="app">
      <StyleList /> 
      <Router history={History}>
        <Navigation />
        <div className="app-body">
          <Route exact path='/headings' component={Headings} />
          <Route exact path='/buttons' component={Buttons} />
        </div>
      </Router>
    </div>
  );
}

export default App;
