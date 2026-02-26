if (!process.env.AIRXPAY_SECRET_KEY) {
  throw new Error("AIRXPAY_SECRET_KEY is not defined");
}

if (!process.env.AIRXPAY_CLIENT_KEY) {
  throw new Error("AIRXPAY_CLIENT_KEY is not defined");
}

export const secretKey = process.env.AIRXPAY_SECRET_KEY;
export const clientKey = process.env.AIRXPAY_CLIENT_KEY;