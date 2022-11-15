/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { DesignSystemRoutes } from "../../config/routes";

function App() {
  return (
    <Router>
      <Switch>
        {DesignSystemRoutes.map((route) => (
          <Route key={route.id} exact={route.exact} path={route.path}>
            {route.component}
          </Route>
        ))}
        {/* {BeforeLogin.map((route) => (
          <Route key={route.id} exact={route.exact} path={route.path}>
            {route.component}
          </Route>
        ))} */}
        {/* <PageContainer
          usingHeader
          usingSidebar
          isLoggedIn
          typeSideBar={"userSingle"}
          userName={"Muhammad Nur Hidayat"}
          // headerImage={btnLong}
          type="block"
          handleProfile={() => {
            console.warn("click profile");
          }}
        >
          {AppRoutes.map((route) => (
            <Route key={route.id} exact={route.exact} path={route.path}>
              {route.component}
            </Route>
          ))}
        </PageContainer> */}
        <Route exact path="/">
          <Redirect to="/design-system" />
        </Route>
        <Redirect from="*" to="/error-404" />
      </Switch>
    </Router>
  );
}

export default App;
