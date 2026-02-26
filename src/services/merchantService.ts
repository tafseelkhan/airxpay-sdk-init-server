// src/services/merchantService.ts
import * as api from "../api/merchantClient";
export const merchantService = {
  createMerchant: api.createMerchant,
  getMerchantStatus: api.getMerchantStatus,
};