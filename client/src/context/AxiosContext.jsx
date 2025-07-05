import React, { createContext } from "react";
import axios from "axios";

export const ApiContext = createContext(null);

export function ApiProvider({ children }) {
  // Create one axios instance for the entire app
  const api = axios.create({
    baseURL: "https://betahousebackend2.onrender.com/api/v1/auth",
    headers: {
      "Content-Type": "application/json",
    },
  });

  // // Automatically attach token from localStorage, if present
  // api.interceptors.request.use(
  //   (config) => {
  //     const token = localStorage.getItem("auth-token");
  //     if (token) config.headers.Authorization = `Bearer ${token}`;
  //     return config;
  //   },
  //   (error) => Promise.reject(error)
  // );

  return <ApiContext.Provider value={api}>{children}</ApiContext.Provider>;
}
