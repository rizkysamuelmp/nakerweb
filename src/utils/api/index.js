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

export const serviceApproveLoker = (payload) =>
  axios.post(`${apiUrl}/loker/approved`, payload);

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
