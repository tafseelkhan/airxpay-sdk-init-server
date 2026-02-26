// src/plugins/index.ts
export interface SDKPlugin {
  onCreateMerchant?: (data: any) => void;
  onGetStatus?: (data: any) => void;
}