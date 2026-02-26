import axios from "axios";
import { getToken } from "../secure/tokenSecure";
import { defaultOptions } from "../options/sdkOption";

const httpClient = axios.create({ baseURL: defaultOptions.baseURL });

export async function createMerchant(publicKey: string, merchantData: any) {
  const res = await httpClient.post(
    "/api/merchant/create",
    { ...merchantData, publicKey },
    { headers: { "x-client-key": process.env.AIRXPAY_CLIENT_KEY } }
  );
  return res.data;
}

export async function getMerchantStatus(merchantId: string) {
  const token = await getToken();
  const res = await httpClient.get(`/api/merchant/${merchantId}/status`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
}