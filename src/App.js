import React, { Component } from 'react';
import { Router, Route } from "react-router-dom";
import History from './services/history';
import Navigation from './components/Navigation';
import Style from './components/Style';
import './assets/css/app.scss';
import Template from './components/Template';
import StyleDisplay from './components/StyleDisplay';
import Colors from './components/Colors';

class App extends Component {

  render() {
    return (
      <div className="app">
        <div className="flex">
          <Router history={History}>
            <Navigation />
            <div className="app-body">
              <Route exact path='/' component={Template} />
              <Route exact path='/type/:type' component={StyleDisplay} />
              <Route exact path='/colors' component={Colors} />
            </div>
          </Router>
        </div>

        <Style />
      </div>
    );
  }

}

export default App;
