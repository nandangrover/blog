import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux';
import DashBoard from './Components/DashBoard';
import PropTypes from "prop-types";
import store from './store';

const App = ({ store }) => (
  <Provider store={store}>
    <Router>
      <div>
        {/* <AppNavBar /> */}
        <Route exact path="/" component={DashBoard} />
        {/* <Route exact path="/App" component={App} /> */}
      </div>
    </Router>
  </Provider>
);

App.propTypes = {
  store: PropTypes.object.isRequired
};

export default App;
