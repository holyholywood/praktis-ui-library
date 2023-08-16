export type cookieConfigOption = {
  path?: string;
  maxAge?: number;
  domain?: string;
  secure?: boolean;
  httpOnly?: boolean;
  sameSite?: SameSiteOption;
};

export type SameSiteOption = "none" | "lax" | "strict";
