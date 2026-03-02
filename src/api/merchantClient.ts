// sdk/merchantClient.ts
import axios from "axios";
import { MerchantResponse } from "../types/merchantTypes";
import { defaultOptions } from "../options/sdkOption";

// 🔹 HTTP client with baseURL from SDK options
const httpClient = axios.create({ baseURL: defaultOptions.baseURL });

/**
 * ✅ CREATE MERCHANT
 * Calls company backend /api/merchant/create
 */
export async function createMerchant(payload: any): Promise<MerchantResponse> {
  if (!payload) throw new Error("Payload is required for createMerchant");
  const res = await httpClient.post("/api/merchant/create", payload);
  return res.data;
}

/**
 * ✅ GET MERCHANT STATUS
 * Calls company backend /api/merchant/status
 */
export async function getMerchantStatus(token: string): Promise<any> {
  if (!token) throw new Error("Token is required for getMerchantStatus");

  const res = await httpClient.get("/api/merchant/status", {
    headers: { Authorization: `Bearer ${token}` },
  });

  if (!res.data?.success) {
    throw new Error(res.data?.message || "Failed to fetch merchant status");
  }

  // 🔥 Return only actual merchant data
  return res.data.data;
}