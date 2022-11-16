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
} from "../../config/routes";

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
        {AppRoutes.map((route) => (
          <Route key={route.id} {...route} />
        ))}
      </PageContainer>
      <Redirect from="/" to="/design-system" />
      <Redirect from="*" to="/error-404" />
    </Switch>
  </Router>
);

export default App;
