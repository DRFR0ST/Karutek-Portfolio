import React, { Component } from 'react';
import { BrowserRouter as Router, Route, withRouter, Switch, matchPat } from 'react-router-dom';

import '../styles/general.css';

import { Home } from '../pages';
import { Wrong } from '../pages/special';
 
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route component={Wrong} />
        </Switch>
      </Router>
    );
  }
}

export default App;
