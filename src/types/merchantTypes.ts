// src/types/index.ts
export interface MerchantData {
  merchantName: string;
  merchantEmail: string;
  merchantPhone: string;
  businessName: string;
  businessType: string;
  businessCategory: string;
  country: string;
}

export interface MerchantResponse {
  token: string;
  merchant: {
    merchantId: string;
    airxpayMerchantId: string;
    walletId: string;
    status: string;
    kycStatus: string;
    isKycCompleted: boolean;
    isBankDetailsCompleted: boolean;
    mode: string;
  };
}