import axios, { AxiosInstance } from "axios";
import { defaultOptions } from "../options/sdkOption";

export function createHttpClient(): AxiosInstance {
  return axios.create({
    baseURL: defaultOptions.baseURL,
    headers: {
      "Content-Type": "application/json",
    },
  });
}