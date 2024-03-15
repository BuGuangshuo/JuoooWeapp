// api.js
import axios from "axios";
import { TaroAdapter } from "axios-taro-adapter";

const API_URL = "https://api.juooo.com";
const instance = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  adapter: TaroAdapter, // add this line，添加这一行使用taroAdapter
});

// interceptors for request
instance.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// interceptors for response
instance.interceptors.response.use(
  function (response) {
    if (response.data.code !== "200") {
      return Promise.reject(response.data);
    } else {
      return response.data;
    }
  },
  function (error) {
    return Promise.reject(error.message);
  }
);

export default instance;
