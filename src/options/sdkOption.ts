export interface SDKOptions {
  autoRefreshToken?: boolean;
}

export const defaultOptions: SDKOptions & { baseURL: string } = {
  baseURL: "http://172.20.10.12:7000",
  autoRefreshToken: true,
};