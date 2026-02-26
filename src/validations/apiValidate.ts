// src/validations/index.ts
import { MerchantData } from "../types/merchantTypes";

export function validateMerchantData(data: MerchantData) {
  if (!data.merchantName) throw new Error("Merchant name required");
  if (!data.merchantEmail) throw new Error("Merchant email required");
  if (!data.merchantPhone) throw new Error("Merchant phone required");
  return true;
}