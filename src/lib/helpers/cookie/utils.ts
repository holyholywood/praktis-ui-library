import { cookieConfigOption } from "./cookie";

export function cookieValueAdapter(value: any) {
  if (typeof value === "object") {
    return JSON.stringify(value);
  }

  return value;
}

export function generateCookieConfig(option: cookieConfigOption) {
  const keys: any[] = Object.keys(option);
  return keys
    .map((key: keyof cookieConfigOption) => `${generateCookieOptionValue(GenerateKey(key), option[key])}`)
    .filter((item) => !!item)
    .join(";");
}

export function generateCookieOptionValue(key: any, value: any) {
  switch (key) {
    case "httpOnly":
      if (!value) {
        return "";
      }
      return `httpOnly`;
    case "Secure":
      if (!value) {
        return "";
      }
      return `secure`;
    default:
      return `${key}=${value}`;
  }
}

export function GenerateKey(key: keyof cookieConfigOption) {
  switch (key) {
    case "maxAge":
      return "max-age";
    case "secure":
      return "Secure";
    case "sameSite":
      return "SameSite";

    default:
      return key;
  }
}
