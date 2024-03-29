import {
  DesignSystem,
  Login,
  ForgotPassword,
  DataGroup,
  DataProyek,
  DataMyTeam,
} from "../container/pages";
import Dashboard from "../container/pages/Dashboard";
import DataLoker from "../container/pages/DataLoker";
import Notifikasi from "../container/pages/Notifikasi";
import DataPostingan from "../container/pages/DataPostingan";
import DataTiket from "../container/pages/DataTiket";
import DataPengguna from "../container/pages/DataPengguna";
import LoginMyTeam from "../container/pages/LoginMyTeam";
import PengaturanSistem from "../container/pages/PengaturanSystem";
import LokerFormPublic from "../container/pages/LokerFormPublic";

export const DesignSystemRoutes = [
  {
    id: 1,
    path: "/design-system",
    component: DesignSystem,
    exact: true,
  },
];

export const LokerPublic = [
  {
    id: 1,
    path: "/loker",
    component: LokerFormPublic,
    exact: true,
  },
];

export const User = [
  {
    id: 1,
    nameComponent: "Data My Team",
    path: "/nakerweb/my-team",
    component: DataMyTeam,
    exact: true,
  },
];

export const BeforeLogin = [
  {
    id: 1,
    path: "/nakerweb/login",
    component: Login,
    exact: true,
  },
  {
    id: 2,
    path: "/nakerweb/forgot-password",
    component: ForgotPassword,
    exact: true,
  },
  {
    id: 3,
    path: "/nakerweb/login-myteam",
    component: LoginMyTeam,
    exact: true,
  },
];

const AppRoutes = [
  {
    id: 1,
    nameComponent: "Dasboard",
    path: "/nakerweb/dashboard",
    component: Dashboard,
    exact: true,
  },
  {
    id: 2,
    nameComponent: "Data Pengguna",
    path: "/nakerweb/data-pengguna",
    component: DataPengguna,
    exact: true,
  },
  {
    id: 3,
    nameComponent: "Data Grup",
    path: "/nakerweb/data-grup",
    component: DataGroup,
    exact: true,
  },
  {
    id: 4,
    nameComponent: "Data Loker",
    path: "/nakerweb/data-loker",
    component: DataLoker,
    exact: true,
  },
  {
    id: 5,
    nameComponent: "Data Proyek",
    path: "/nakerweb/data-proyek",
    component: DataProyek,
    exact: true,
  },
  {
    id: 6,
    nameComponent: "Data Postingan",
    path: "/nakerweb/data-postingan",
    component: DataPostingan,
    exact: true,
  },
  {
    id: 7,
    nameComponent: "Data Tiket",
    path: "/nakerweb/data-tiket",
    component: DataTiket,
    exact: true,
  },
  {
    id: 8,
    nameComponent: "Notifikasi",
    path: "/nakerweb/notifikasi",
    component: Notifikasi,
    exact: true,
  },
  {
    id: 9,
    nameComponent: "Pengaturan System",
    path: "/nakerweb/pengaturan",
    component: PengaturanSistem,
    exact: true,
  },
];

export default AppRoutes;
