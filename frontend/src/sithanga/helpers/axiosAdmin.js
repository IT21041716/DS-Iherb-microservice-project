import axios from 'axios'
import store from '../store/index'
import {api1} from '../urlConfig'

const token = window.localStorage.getItem("token");

export const axiosInstance = axios.create({
  baseURL: api1,
  headers: {
    Authorization: token ? `Bearer ${token}` : "",
  },
});

axiosInstance.interceptors.request.use((req) => {
  const { auth } = store.getState();
  if (auth.token) {
    req.headers.Authorization = `Bearer ${auth.token}`;
  }
  return req;
});

axiosInstance.interceptors.response.use(
  (res) => {
    return res;
  },
  (error) => {
    console.log(error.response);
    return error.response;
  }
);

export default axiosInstance;