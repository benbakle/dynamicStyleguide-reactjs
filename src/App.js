import React, { Component } from 'react';
import { Router, Route } from "react-router-dom";
import History from './services/history';
import Navigation from './components/Navigation';
import Style from './components/Style';
import './assets/css/app.scss';
import Template from './components/Template';
import StyleDisplay from './components/StyleDisplay';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="app">
        <Router history={History}>
          <Navigation />
          <div className="app-body">
            <Route exact path='/' component={Template} />
            <Route exact path='/type/typography' render={()=><StyleDisplay type="typography" />} />
            <Route exact path='/type/button' render={()=><StyleDisplay type="button" />} />
            <Route exact path='/type/heading' render={()=><StyleDisplay type="heading" />} />
          </div>
        </Router>
        <div className="style-console">
          <Style />
        </div>
      </div>
    );
  }

}

export default App;
