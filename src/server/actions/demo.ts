"use server";

import { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

import { axiosGenericRequest } from "@/nextjs/server/client";

import { METHOD } from "@/common/api/method";

export async function fetchData(data: any) {
  try {
    const options: AxiosRequestConfig = {
      method: METHOD.GET,
      params: data,
      url: "todos/1",
    };
    const response: AxiosResponse<any, any> =
      await axiosGenericRequest(options);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error("AxiosError fetching data:", error);
    } else if (error instanceof Error) {
      console.error("Error fetching data:", error);
    } else {
      console.error("UnknownError fetching data:", error);
    }
    return { error: "Failed to fetch data" };
  }
}
