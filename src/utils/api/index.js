import axios from "axios";
import {
  requestInterceptors,
  responseInterceptors,
} from "../../utils/middlewares/interceptors";

requestInterceptors();
responseInterceptors();

const devURL = "http://admin.kubu.id/api";
const apiUrl = process.env.NODE_ENV === "production" ? devURL : devURL;

// Save Loker
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
