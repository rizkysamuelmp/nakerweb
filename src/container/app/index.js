import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import PageContainer from "../../components/PageContainer";
import AppRoutes, {
  BeforeLogin,
  DesignSystemRoutes,
  User,
} from "../../config/routes";
import LiveChat from "../pages/LiveChat";

const App = () => (
  <Router>
    <Switch>
      {DesignSystemRoutes.map((route) => (
        <Route key={route.id} {...route} />
      ))}

      {BeforeLogin.map((route) => (
        <Route key={route.id} {...route} />
      ))}

      <PageContainer>
        <Route key="live" path="/nakerweb/live-chat" component={LiveChat} />
        {AppRoutes.map((route) => (
          <Route key={route.id} {...route} />
        ))}
        {User.map((route) => (
          <Route key={route.id} {...route} />
        ))}
      </PageContainer>

      <Redirect from="/" to="/design-system" />
      <Redirect from="*" to="/error-404" />
    </Switch>
  </Router>
);

export default App;
