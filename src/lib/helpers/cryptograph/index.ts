class Cryptograph {
  private static iteration = 10;

  // algorithm - AES 256 GCM Mode
  private static encryptionAlgorithm = "AES-GCM";

  // random initialization vector length
  private static ivLength = 12;

  // random salt length
  private static saltLength = 16;

  // digest: It is a digest algorithms of string type.
  private static digest = "SHA-256";

  // text encoder
  private static enc = new TextEncoder();

  // text decoder
  private static dec = new TextDecoder();

  /**
   *
   * @param u8
   * @returns
   */
  private static base64Encode(u8: Uint8Array): string {
    return btoa(String.fromCharCode.apply(undefined, [...u8]));
  }

  /**
   *
   * @param str
   * @returns
   */
  private static base64Decode(str: string): Uint8Array {
    return Uint8Array.from(atob(str), (c) => c.charCodeAt(0));
  }

  /**
   *
   * @param secretKey
   * @returns
   */
  private static getPasswordKey(secretKey: string): Promise<CryptoKey> {
    return window.crypto.subtle.importKey("raw", Cryptograph.enc.encode(secretKey), "PBKDF2", false, ["deriveKey"]);
  }

  /**
   *
   * @param passwordKey
   * @param salt
   * @param iteration
   * @param digest
   * @param encryptionAlgorithm
   * @param keyUsage
   * @returns
   */
  private static deriveKey(passwordKey: CryptoKey, salt: Uint8Array, iteration: number, digest: string, encryptionAlgorithm: string, keyUsage: ["encrypt"] | ["decrypt"]): Promise<CryptoKey> {
    return window.crypto.subtle.deriveKey(
      {
        name: "PBKDF2",
        salt,
        iterations: iteration,
        hash: digest,
      },
      passwordKey,
      {
        name: encryptionAlgorithm,
        length: 256,
      },
      false,
      keyUsage
    );
  }

  /**
   *
   * @param secretKey
   * @param data
   * @returns
   */
  public static async encrypt(secretKey: string, data: string): Promise<string> {
    try {
      const salt = window.crypto.getRandomValues(new Uint8Array(Cryptograph.saltLength));
      const iv = window.crypto.getRandomValues(new Uint8Array(Cryptograph.ivLength));

      const passwordKey = await Cryptograph.getPasswordKey(secretKey);
      const aesKey = await Cryptograph.deriveKey(passwordKey, salt, Cryptograph.iteration, Cryptograph.digest, Cryptograph.encryptionAlgorithm, ["encrypt"]);
      const encryptedContent = await window.crypto.subtle.encrypt(
        {
          name: Cryptograph.encryptionAlgorithm,
          iv,
        },
        aesKey,
        Cryptograph.enc.encode(data)
      );

      const encryptedContentArr: Uint8Array = new Uint8Array(encryptedContent);

      const buff: Uint8Array = new Uint8Array(salt.byteLength + iv.byteLength + encryptedContentArr.byteLength);

      buff.set(salt, 0);

      buff.set(iv, salt.byteLength);
      buff.set(encryptedContentArr, salt.byteLength + iv.byteLength);
      const base64Buff: string = Cryptograph.base64Encode(buff);
      return base64Buff;
    } catch (error) {
      console.error(`Error - ${error}`);
      return "";
    }
  }

  /**
   *
   * @param secretKey
   * @param ciphertext
   * @returns
   */
  public static async decrypt(secretKey: string, ciphertext: string) {
    try {
      const encryptedDataBuff = Cryptograph.base64Decode(ciphertext);
      const salt = encryptedDataBuff.slice(0, Cryptograph.saltLength);
      const iv = encryptedDataBuff.slice(Cryptograph.saltLength, Cryptograph.saltLength + Cryptograph.ivLength);
      const data = encryptedDataBuff.slice(Cryptograph.saltLength + Cryptograph.ivLength);
      const passwordKey = await Cryptograph.getPasswordKey(secretKey);

      const aesKey = await Cryptograph.deriveKey(passwordKey, salt, Cryptograph.iteration, Cryptograph.digest, Cryptograph.encryptionAlgorithm, ["decrypt"]);
      const decryptedContent = await window.crypto.subtle.decrypt(
        {
          name: Cryptograph.encryptionAlgorithm,
          iv,
        },
        aesKey,
        data
      );

      return Cryptograph.dec.decode(decryptedContent);
    } catch (error) {
      console.error(`Error - ${error}`);
      return "";
    }
  }
}

export default Cryptograph;
