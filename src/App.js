import React from 'react';
import { Router, Route } from "react-router-dom";
import History from './services/history';
import Navigation from './components/Navigation';
import Headings from './components/Headings';
import Style from './components/Style';
import Buttons from './components/Buttons';
import './assets/css/app.scss';
import Template from './components/Template';
import Typography from './components/Typography';

function App() {
  return (
    <div className="app">
      <Router history={History}>
        <Navigation />
        <div className="app-body">
          <Route exact path='/typography' component={Typography} />
          <Route exact path='/headings' component={Headings} />
          <Route exact path='/buttons' component={Buttons} />
          <Route exact path='/template' component={Template} />
        </div>
      </Router>
      <div className="style-console">
        <Style />
      </div>
    </div>
  );
}

export default App;
