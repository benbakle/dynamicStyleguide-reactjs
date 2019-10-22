import React, { Component } from 'react';
import { Router, Route } from "react-router-dom";
import History from './services/history';
import Navigation from './components/Navigation';
import Style from './components/Style';
import Template from './components/Template';
import StyleDisplay from './components/StyleDisplay';
import Colors from './components/Colors';
import './assets/css/style-guide-css.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navExpanded: true,
      selector: ".test",
    }
  }

  toggleNav = () => {
    this.setState({ navExpanded: !this.state.navExpanded });
  }

  setSelector = (selector) => {
    this.setState({ selector: selector });
  }

  render() {
    const { navExpanded, selector } = this.state;
    const { toggleNav, setSelector } = this;

    return (
      <div className={`dsg-app ${navExpanded ? "dsg-nav-expanded" : ""}`}>
        <div className="flex">
          <Router history={History}>

            <div className="dsg-navigation">
              <Navigation selector={selector} />
            </div>

            <div className="dsg-body">

              <button className="dsg-navigation-trigger" onClick={toggleNav}>
                <i className="far fa-caret-square-left"></i>
              </button>

              <Route exact path='/type/:type' component={StyleDisplay} />
              <Route exact path='/colors' component={Colors} />

              <Route exact path='/' render={() => { return (<Template callback={setSelector} />) }} />
            </div>
          </Router>
        </div>

        <Style />
      </div>
    );
  }

}

export default App;
