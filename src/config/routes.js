import { DesignSystem, Login, ForgotPassword } from "../container/pages";
import Dashboard from "../container/pages/Dashboard";
import DataLoker from "../container/pages/DataLoker";

export const DesignSystemRoutes = [
  {
    id: 1,
    path: "/design-system",
    component: DesignSystem,
    exact: true,
  },
];

export const BeforeLogin = [
  {
    id: 1,
    path: "/nakerweb/log-in",
    component: Login,
    exact: true,
  },
  {
    id: 2,
    path: "/nakerweb/forgot-password",
    component: ForgotPassword,
    exact: true,
  },
];

const AppRoutes = [
  {
    id: 1,
    path: "/nakerweb/dashboard",
    component: Dashboard,
    exact: true,
  },
  {
    id: 2,
    path: "/nakerweb/data-loker",
    component: DataLoker,
    exact: true,
  },
];

export default AppRoutes;
