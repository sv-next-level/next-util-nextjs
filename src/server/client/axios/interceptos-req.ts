import { InternalAxiosRequestConfig } from "axios";

import { axiosInstance } from "@/nextjs/server/client/axios/instance";

if (axiosInstance) {
  // Add the authorization token to the authorization request object
  axiosInstance.interceptors.request.use(
    (req: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
      // console.log("🚀 ~ interceptos-req req:", req);

      // TODO: do not store token on localstorage!!!
      // const token = window.localStorage.getItem("token");
      // req.headers.Authorization = token;
      return req;
    },
    (error) => {
      // console.log("🚀 ~ interceptos-req error:", error);
      // Do something with request error
      return Promise.reject(error);
    },
    {
      synchronous: false,
      runWhen: (config: InternalAxiosRequestConfig) => {
        // Authorization is falsy in headers
        return !config.headers.Authorization;
      },
    },
  );
}
