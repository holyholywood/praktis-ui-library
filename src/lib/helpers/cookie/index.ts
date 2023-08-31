import { cookieConfigOption } from "./cookie";
import { cookieValueAdapter, generateCookieConfig } from "./utils";

class cookie {
  static get(key: string) {
    const cookieValue = document.cookie
      .split("; ")
      .find((row) => row.startsWith(`${key}=`))
      ?.split("=")[1];
    let returnedData = null;
    if (cookieValue) {
      try {
        returnedData = JSON.parse(cookieValue);
      } catch (error: any) {
        returnedData = cookieValue;
      }
    }

    return returnedData;
  }

  static set(key: string, value: any, { domain = window.location.hostname, httpOnly = false, maxAge = 60 * 60 * 24, secure = false, path = "/", sameSite = "lax" }: cookieConfigOption) {
    const cookieString = `${key}=${cookieValueAdapter(value)};${generateCookieConfig({
      domain,
      httpOnly,
      maxAge,
      secure,
      path,
      sameSite,
    })}`;

    document.cookie = cookieString;
  }

  static delete(key: string) {
    cookie.set(key, "", {
      maxAge: 0,
    });
  }

  static clear() {
    const cookies = document.cookie.split("; ");

    for (const cookie of cookies) {
      const [name] = cookie.split("=");
      document.cookie = `${name}=; max-age=0;`;
    }
  }
}

export default cookie;
