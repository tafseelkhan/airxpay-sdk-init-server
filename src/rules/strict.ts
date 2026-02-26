// src/rules/index.ts
export function validateMerchantPhone(phone: string) {
  return /^\d{10,15}$/.test(phone);
}