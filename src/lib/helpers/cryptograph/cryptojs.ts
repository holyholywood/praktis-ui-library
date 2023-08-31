import { enc, AES, mode, pad } from "crypto-js";
import TextCompression from "../text-compression";
class Crypto {
  private static CONFIG = {
    SECRET: process.env.NEXT_PUBLIC_ENCRYPTION_KEY as string,
    IV: process.env.NEXT_PUBLIC_ENCRYPTION_IV as string,
  };

  public static encrypt(data: object | string | any[] | number | boolean) {
    const encrypted = AES.encrypt(JSON.stringify(data), Crypto.CONFIG.SECRET, {
      mode: mode.ECB,
      padding: pad.Pkcs7,
    });
    return encrypted.toString();
  }

  public static decrypt(data: string) {
    const decrypted = AES.decrypt(data, Crypto.CONFIG.SECRET, {
      mode: mode.ECB,
      padding: pad.Pkcs7,
    });
    return JSON.parse(decrypted.toString(enc.Utf8));
  }

  public static encryptWithCompress(data: object | string | any[] | number | boolean) {
    const encrypted = Crypto.encrypt(data);
    const compressed = TextCompression.compress(encrypted);
    return compressed;
  }

  public static decryptWithDecompress(data: string) {
    const decompressed = TextCompression.decompress(data);
    return Crypto.decrypt(decompressed);
  }
}

export default Crypto;
