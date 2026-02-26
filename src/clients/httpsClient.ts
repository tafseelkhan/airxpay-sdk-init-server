// src/clients/httpClient.ts
import axios, { AxiosInstance } from "axios";

export function createHttpClient(baseURL: string): AxiosInstance {
  return axios.create({ baseURL });
}