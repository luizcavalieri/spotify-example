import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import App from './App';

import Callback from './Callback';
import Home from './Home';


/**
 * Stores routing management, this is where we map url path and pages (component container)
 * */
class Routes extends Component {
  static propTypes = {};

  static contextTypes = {};

  componentDidMount() {}

  render() {
    return (
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/callback" exact component={Callback}/>
      </Switch>
    );
  }
}

export default Routes;
