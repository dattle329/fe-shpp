import axios from "axios";

axios.interceptors.request.use(async (config) => {
  const accessToken = localStorage.getItem("accesstoken");

  config.headers.Authorization = `Bearer ${accessToken}`;

  return config;
});
