import { AxiosRequestConfig, AxiosResponse } from "axios";

import { axiosInstance } from "@/nextjs/server/client";

export const axiosGenericRequest = async (
  options: AxiosRequestConfig,
): Promise<AxiosResponse<any, any>> => {
  try {
    const res: AxiosResponse<any, any> = await axiosInstance.request(options);
    return res;
  } catch (error) {
    console.error("axiosGenericRequest: Failed to fetch data:", error);
    throw error;
  }
};
