import axios from "axios";
import {
  requestInterceptors,
  responseInterceptors,
} from "../../utils/middlewares/interceptors";

requestInterceptors();
responseInterceptors();

const devURL = "http://admin.dev.kubu.id/api";
const apiUrl = process.env.NODE_ENV === "production" ? devURL : devURL;

// Save Loker
export const serviceLogin = (payload) => axios.post(`${apiUrl}/login`, payload);

// Api Dashboard
export const serviceDashboard = (payload) =>
  axios.get(`${apiUrl}/dashboard`, payload);

// Save Loker
export const serviceGetDataLoker = (payload) =>
  axios.get(`${apiUrl}/loker`, payload);

export const serviceApproveLoker = (payload) =>
  axios.post(`${apiUrl}/loker/approved`, payload);

export const serviceGetAllLoker = (payload) =>
  axios.post(`${apiUrl}/loker/getAllLoker`, payload);

export const serviceGetDetailLoker = (payload) =>
  axios.post(`${apiUrl}/loker/getDetail`, payload);

export const serviceLokerFilter = (payload) =>
  axios.post(`${apiUrl}/loker/filter`, payload);

export const serviceLoker = (payload) =>
  axios.post(`${apiUrl}/loker/save`, payload);

export const serviceGetCategory = (payload) =>
  axios.get(`${apiUrl}/loker/getCategory`, payload);

export const serviceGetJobType = (payload) =>
  axios.get(`${apiUrl}/loker/getJobType`, payload);

export const serviceGetProvince = (payload) =>
  axios.get(`${apiUrl}/loker/getProvince`, payload);

export const serviceGetCity = (payload) =>
  axios.post(`${apiUrl}/loker/getCity`, payload);

// Api for pengguna
export const serviceDashboardUsers = (payload) =>
  axios.get(`${apiUrl}/users`, payload);

export const serviceGetDetailDataPengguna = (payload) =>
  axios.post(`${apiUrl}/users/get_detail`, payload);

export const serviceGetAllUsers = (payload) =>
  axios.post(`${apiUrl}/users/get_all`, payload);

export const servicePenggunaFilter = (payload) =>
  axios.post(`${apiUrl}/users/filter`, payload);

export const serviceGetSearchPengguna = (payload) =>
  axios.post(`${apiUrl}/users/search`, payload);

// API for Data Grup
export const serviceGetDashboardGrup = (payload) =>
  axios.get(`${apiUrl}/grup`, payload);

export const serviceGetAllGrup = (payload) =>
  axios.post(`${apiUrl}/grup/get_all`, payload);

export const serviceGetSearchGrup = (payload) =>
  axios.post(`${apiUrl}/grup/search`, payload);

export const serviceGetRequestDetailGrup = (payload) =>
  axios.post(`${apiUrl}/grup/request_detail`, payload);

export const serviceGetDetailGrup = (payload) =>
  axios.post(`${apiUrl}/grup/grup_detail`, payload);

export const serviceGetApprovedGrup = (payload) =>
  axios.post(`${apiUrl}/grup/approved`, payload);

export const serviceGetActionlGrup = (payload) =>
  axios.post(`${apiUrl}/grup/action`, payload);

// API for DataProyek
export const serviceGetDashboardDataProyek = (payload) =>
  axios.get(`${apiUrl}/mytim`, payload);

export const serviceGetFilterDataProyek = (payload) =>
  axios.post(`${apiUrl}/mytim/filter`, payload);

export const serviceRequestDetail = (payload) =>
  axios.post(`${apiUrl}/mytim/request_detail`, payload);

export const serviceApproved = (payload) =>
  axios.post(`${apiUrl}/mytim/approved`, payload);

export const serviceProyekDetail = (payload) =>
  axios.post(`${apiUrl}/mytim/proyek_detail`, payload);

export const serviceTabTask = (payload) =>
  axios.post(`${apiUrl}/mytim/tab_task`, payload);

export const serviceTabDiskusiTask = (payload) =>
  axios.post(`${apiUrl}/mytim/tab_diskusi_task`, payload);
