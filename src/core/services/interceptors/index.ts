// lib/axiosInstance.js
import axios from "axios";
import { logout } from "../common/logout.services";
import { getItem } from "../common/storage.services";

const axiosInstance = axios.create({
  baseURL: "https://delta-project.liara.run", // Replace with your API base URL
  // timeout: 1000,
  headers: { "Content-Type": "application/json" },
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  function (config) {
    // Do something before the request is sent
    const token =getItem("authToken"); // Retrieve auth token from localStorage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    // Handle the error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  function (response) {
    // Do something with the response data
    console.log("Response:", response);
    return response.data;
  },
  function (error) {
    // Handle the response error
    if (error.response && error.response.status === 401) {
      // Handle unauthorized error
      console.error("Unauthorized, logging out...");
      logout();
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
