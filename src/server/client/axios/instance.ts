import axios, {
  AxiosInstance,
  CreateAxiosDefaults,
  responseEncoding,
  ResponseType,
} from "axios";

import { envConfig } from "@/config/env";

import { ms } from "@/common/functions";

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: envConfig.BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },

  timeout: ms("30 seconds"),
  timeoutErrorMessage: "Timeout error message",

  withCredentials: false,

  responseType: "json" as ResponseType,
  responseEncoding: "utf8" as responseEncoding,

  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",

  maxRedirects: 5,
  socketPath: null,
  decompress: true,

  validateStatus: (status: number): boolean => 200 <= status && status < 300,
} as CreateAxiosDefaults);
