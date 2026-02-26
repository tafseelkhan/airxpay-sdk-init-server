// src/errors/sdkErrors.ts
export class AirXPayError extends Error {
  constructor(message: string, public code?: string) {
    super(message);
    this.name = "AirXPayError";
  }
}