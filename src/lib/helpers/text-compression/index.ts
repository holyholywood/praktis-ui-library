import { deflate, inflate, Data } from "pako";

class TextCompression {
  public static compress(data: string): string {
    return TextCompression.uint8ArrayToString(deflate(data, { level: 2 }));
  }
  public static decompress(data: string): string {
    const dataToCompress = TextCompression.stringToUint8Array(data);
    return inflate(dataToCompress, { to: "string" });
  }

  private static uint8ArrayToString(uint8Array: Uint8Array): string {
    let encodedString = "";
    for (let i = 0; i < uint8Array.length; i++) {
      encodedString += String.fromCharCode(uint8Array[i]);
    }
    return encodedString;
  }

  private static stringToUint8Array(encodedString: string): Uint8Array {
    const uint8Array = new Uint8Array(encodedString.length);
    for (let i = 0; i < encodedString.length; i++) {
      uint8Array[i] = encodedString.charCodeAt(i);
    }
    return uint8Array;
  }
}

export default TextCompression;
