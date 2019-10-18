import React, { Component } from 'react';
import { Router, Route } from "react-router-dom";
import History from './services/history';
import Navigation from './components/Navigation';
import Style from './components/Style';
import Template from './components/Template';
import StyleDisplay from './components/StyleDisplay';
import Colors from './components/Colors';
import $css from './assets/style-guide-css';
import './assets/css/style-guide-css.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navExpanded: true,
    }
  }

  toggleNav = () => {
    this.setState({ navExpanded: !this.state.navExpanded });
  }

  render() {
    const { navExpanded } = this.state;
    const { toggleNav } = this;

    return (
      <div className={`dsg-app ${navExpanded ? "dsg-nav-expanded" : ""}`}>
        <div className="flex">
          <Router history={History}>

            <div className="dsg-navigation">
              <Navigation />
            </div>

            <div className="dsg-body">

              <button className="dsg-navigation-trigger" onClick={toggleNav}>
                <i className="far fa-caret-square-left"></i>
              </button>

              <Route exact path='/type/:type' component={StyleDisplay} />
              <Route exact path='/colors' component={Colors} />

              <Route exact path='/' component={Template} />
            </div>
          </Router>
        </div>

        <Style />
      </div>
    );
  }

}

export default App;
