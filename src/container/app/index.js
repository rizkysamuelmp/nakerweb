import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { BeforeLogin, DesignSystemRoutes } from "../../config/routes";

const App = () => (
  <Router>
    <Switch>
      {DesignSystemRoutes.map((route) => (
        <Route key={route.id} {...route} />
      ))}
      {BeforeLogin.map((route) => (
        <Route key={route.id} {...route} />
      ))}
      {/* <PageContainer
        usingHeader
        usingSidebar
        // isShowChangeAuth={false}
        // profilePhoto={ProfilePicture}
        isLoggedIn
        typeSideBar={"userSingle"}
        userName={"Muhammad Nur Hidayat"}
        headerImage={btnLong}
        type="block"
        handleProfile={() => {
          console.warn("click profile");
        }}
        // listPrivilage={listPrivilage}
      >
        {AppRoutes.map((route) => (
          <Route key={route.id} {...route} />
        ))}
      </PageContainer> */}
      <Redirect from="/" to="/design-system" />
      <Redirect from="*" to="/error-404" />
    </Switch>
  </Router>
);

export default App;
