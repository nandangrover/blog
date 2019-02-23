import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux';
import DashBoard from './Components/DashBoard';
import PropTypes from "prop-types";
import store from './store';
import Landing from "./Components/private-route/Landing";
import Register from "./Components/private-route/Register";
import Login from "./Components/private-route/Login";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authAction";
import PrivateRoute from "./Components/PrivateRoute";
import CMS from "./Components/private-route/CMS";
import Article from "./Components/Article";
import SearchPage from "./Components/SearchPage";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./privateroute/avadakedavara/login";
  }
}

const App = ({ store }) => (
  <Provider store={store}>
    <Router>
      <div>
        {/* <AppNavBar /> */}
        <Route exact path="/" component={DashBoard} />
        <Route path="/article" component={Article} />
        <Route path="/search" component={SearchPage} />
        <Route exact path="/privateroute/avadakedavara/landing" component={Landing} />
        <Route exact path="/privateroute/avadakedavara/register" component={Register} />
        <Route exact path="/privateroute/avadakedavara/login" component={Login} />
        <Switch>
          <PrivateRoute exact path="/privateroute/avadakedavara/CMS" component={CMS} />
        </Switch>
        {/* <Route exact path="/App" component={App} /> */}
      </div>
    </Router>
  </Provider>
);

App.propTypes = {
  store: PropTypes.object.isRequired
};

export default App;
