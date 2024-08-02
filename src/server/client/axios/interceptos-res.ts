import { InternalAxiosRequestConfig } from "axios";

import { axiosInstance } from "@/nextjs/server/client/axios/instance";

if (axiosInstance) {
  axiosInstance.interceptors.response.use(
    (res) => {
      // console.log("🚀 ~ interceptos-res res:", res.data);
      return res;
    },
    (error) => {
      // Do something with request error
      // console.log("🚀 ~ interceptos-res error:", error);
      return Promise.reject(error);
    },
    {
      synchronous: false,
      runWhen: (config: InternalAxiosRequestConfig): boolean => {
        return config.responseType !== "json";
      },
    },
  );
}
