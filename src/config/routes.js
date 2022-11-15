import DesignSystem from "../container/pages/DesignSystem";

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
    id: 319,
    path: "/nakerweb/log-in",
    // component: Login,
    exact: true,
  },
  {
    id: 320,
    path: "/nakerweb/forgot-password",
    // component: ForgotPassword,
    exact: true,
  },
];

const AppRoutes = [
  {
    id: 319,
    path: "/nakerweb/dashboard",
    // component: Dashboard,
    exact: true,
  },
];

export default AppRoutes;