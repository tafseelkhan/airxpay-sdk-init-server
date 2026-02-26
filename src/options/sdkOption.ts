// src/options/index.ts
export interface SDKOptions {
  autoRefreshToken?: boolean;
}

// Default backend URL (SDK ke andar hardcoded)
export const defaultOptions: SDKOptions & { baseURL: string } = {
  baseURL: "http://172.20.10.12:7000", // 🔥 developer ko URL nahi dena padega
  autoRefreshToken: true,
};