import React, { Component } from 'react';
import { Router, Route } from "react-router-dom";
import History from './services/history';
import Navigation from './components/Navigation';
import Style from './components/Style';
import './assets/css/app.scss';
import Template from './components/Template';
import StyleDisplay from './components/StyleDisplay';

class App extends Component {
  render() {
    return (
      <div className="app flex">
        <Router history={History}>
          <Navigation />
          <div className="app-body">
            <Route exact path='/' component={Template} />
            <Route exact path='/type/typography' render={()=><StyleDisplay type="typography" />} />
            <Route exact path='/type/button' render={()=><StyleDisplay type="button" />} />
            <Route exact path='/type/heading' render={()=><StyleDisplay type="heading" />} />
            <Route exact path='/type/form-control' render={()=><StyleDisplay type="form-control" />} />
          </div>
        </Router>
          <Style />
      </div>
    );
  }

}

export default App;
