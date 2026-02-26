// src/index.ts
import { merchantService } from "./services/merchantService";
import { validateMerchantData } from "./validations/apiValidate";
import { sdkEvents } from "./events/eventEmitter";
import { MerchantData, MerchantResponse } from "./types/merchantTypes";

export const AirXPay = {
  flixora: {
    async createMerchant(
      publicKey: string,
      data: MerchantData
    ): Promise<MerchantResponse> {
      validateMerchantData(data);
      const response = await merchantService.createMerchant(publicKey, data);
      sdkEvents.emit("merchantCreated", response);
      return response;
    },

    async getMerchantStatus(merchantId: string) {
      const response = await merchantService.getMerchantStatus(merchantId);
      sdkEvents.emit("merchantStatusFetched", response);
      return response;
    },
  },

  events: sdkEvents,
};