import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import AppRoutes, {
  BeforeLogin,
  DesignSystemRoutes,
  LokerPublic,
  User,
} from "../../config/routes";
import { Login } from "../pages";
import LiveChat from "../pages/LiveChat";

const App = () => (
  <Router>
    <Switch>
      {DesignSystemRoutes.map((route) => (
        <Route key={route.id} {...route} />
      ))}

      {LokerPublic.map((route) => (
        <Route key={route.id} {...route} />
      ))}

      {BeforeLogin.map((route) => (
        <Route key={route.id} {...route} />
      ))}

      <Route key="live" path="/nakerweb/live-chat" component={LiveChat} />
      {AppRoutes.map((route) => (
        <Route key={route.id} {...route} />
      ))}
      {User.map((route) => (
        <Route key={route.id} {...route} />
      ))}

      <Route exact path="/">
        <Redirect to="/nakerweb/login" /> : <Login />
      </Route>

      {/* <Redirect from="/" to="/nakerweb/login" /> */}
      {/* <Redirect from="*" to="/error-404" /> */}
    </Switch>
  </Router>
);

export default App;
