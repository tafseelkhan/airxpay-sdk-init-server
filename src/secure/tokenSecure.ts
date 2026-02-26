// src/secureServices/tokenService.ts
import axios from "axios";
import { secretKey, clientKey } from "../dev/keys";

let token: string | null = null;
let expiry: number = 0;

export async function getToken() {
  const now = Date.now();
  if (token && now < expiry) return token;

  // Automatic refresh token call internally
  const res = await axios.post(
    "/api/merchant/refresh-token",
    { merchantId: clientKey },
    { headers: { "x-secret-key": secretKey } }
  );
  token = res.data.token;
  expiry = now + 15 * 60 * 1000; // 15 min example
  return token;
}