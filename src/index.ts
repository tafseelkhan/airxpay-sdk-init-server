// sdk/airXPay.ts
import * as merchantApi from "./api/merchantClient";
import { MerchantData, MerchantResponse } from "./types/merchantTypes";
import { EventEmitter } from "events";

// 🔔 Event emitter for SDK events
export const sdkEvents = new EventEmitter();

export const AirXPay = {
  flixora: {
    /**
     * ✅ CREATE MERCHANT
     * frontend publicKey + full merchant data + backend keys (clientKey + secretKey)
     */
    async createMerchant(
      publicKey: string,
      fullData: MerchantData & { clientKey: string; secretKey: string },
    ): Promise<MerchantResponse> {
      if (!publicKey) throw new Error("publicKey is required");
      if (!fullData.clientKey) throw new Error("clientKey is required");
      if (!fullData.secretKey) throw new Error("secretKey is required");

      const { clientKey, secretKey, ...merchantData } = fullData;

      const payload = {
        ...merchantData,
        publicKey,
        clientKey,
        secretKey,
      };

      const result = await merchantApi.createMerchant(payload);

      // 🔔 Emit event for listeners
      sdkEvents.emit("merchantCreated", result);

      return result;
    },

    /**
     * ✅ GET MERCHANT STATUS
     * Only token is needed
     */
    async getMerchantStatus(token: string): Promise<any> {
      if (!token) throw new Error("token is required");

      const merchantData = await merchantApi.getMerchantStatus(token);

      sdkEvents.emit("merchantStatusFetched", merchantData);

      return merchantData; // 🔥 clean data only
    },
  },

  events: sdkEvents,
};
