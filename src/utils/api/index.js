import axios from "axios";
import {
  requestInterceptors,
  responseInterceptors,
} from "../../utils/middlewares/interceptors";

requestInterceptors();
responseInterceptors();

const devURL = "http://admin.kubu.id/api";
const apiUrl = process.env.NODE_ENV === "production" ? devURL : devURL;
const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

// Save Loker
export const serviceGetDataLoker = (payload) =>
  axios.get(`${apiUrl}/loker`, payload);

export const serviceGetAllLoker = (payload) =>
  axios.post(`${apiUrl}/loker/getAllLoker`, payload);

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
export const users = () => axios.get(`${apiUrl}/users`);

export const getDetail = (id_user) =>
  axios.post(`${apiUrl}/users/get_detail`, { id_user }, config);

export const getAllDetail = (page, limit) =>
  axios.post(`${apiUrl}/users/get_all`, { page, limit }, config);

export const getFilterData = (page, gender, age, city, status) =>
  axios.post(
    `${apiUrl}/users/filter`,
    { page, limit: "10", gender, age, city, status },
    config
  );

export const getSearchData = (page, keyword) =>
  axios.post(`${apiUrl}/users/search`, { page, limit: "10", keyword }, config);

// API for DataProyek
export const getDashboardDataProyek = () => axios.post(`${apiUrl}/mytim`);

export const getFilterDataProyek = (
  page,
  category,
  city,
  type,
  status,
  keyword
) =>
  axios.post(
    `${apiUrl}/mytim`,
    {
      page,
      limit: "10",
      category,
      city,
      type,
      status,
      keyword,
    },
    config
  );

export const requestDetail = (id_proyek) =>
  axios.post(`${apiUrl}/mytim/request_detail`, { id_proyek }, config);

export const approved = (id_proyek, action) =>
  axios.post(`${apiUrl}/mytim/approved`, { id_proyek, action }, config);

export const proyekDetail = (id_proyek) =>
  axios.post(`${apiUrl}/mytim/proyek_detail`, { id_proyek }, config);

export const tabTask = (id_proyek) =>
  axios.post(`${apiUrl}/mytim/tab_task`, { id_proyek }, config);

export const tabDiskusiTask = (id_proyek, page) =>
  axios.post(`${apiUrl}/mytim/tab_diskusi_task`, { id_proyek, page }, config);
