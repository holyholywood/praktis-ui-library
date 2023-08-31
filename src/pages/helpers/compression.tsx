import Button from "@/components/Button";
import Heading from "@/components/Common/atoms/Heading";
import Meta from "@/components/Common/molecules/Meta";
import TextCompression from "@/lib/helpers/text-compression";
import React from "react";
import { loginData } from "./cryptograph";
import cookie from "@/lib/helpers/cookie";

const CompressionPage = () => {
  return (
    <>
      <Meta title="Compression" />
      <div className="space-y-8">
        <Heading>Compression</Heading>
        <Button
          onClick={() => {
            const test = JSON.stringify(loginData);

            const compressed = TextCompression.compress(test);
            const encodedCompressed = encodeURIComponent(compressed);
            const decompress = TextCompression.decompress(compressed);
            console.clear();
            cookie.set("baru", encodedCompressed, {
              domain: "localhost",
              httpOnly: false,
              secure: false,
              maxAge: 60 * 60,
              path: "/",
              sameSite: "none",
            });
          }}
        >
          Compress
        </Button>
        <Button
          onClick={() => {
            const fromCOokie = decodeURIComponent(cookie.get("baru"));
            console.info(JSON.parse(TextCompression.decompress(fromCOokie)));
            console.info(loginData);
          }}
        >
          Get
        </Button>
      </div>
    </>
  );
};

export default CompressionPage;

// Function to convert Uint8Array to string
function uint8ArrayToString(uint8Array: Uint8Array): string {
  let encodedString = "";
  for (let i = 0; i < uint8Array.length; i++) {
    encodedString += String.fromCharCode(uint8Array[i]);
  }
  return encodedString;
}

// Function to convert string back to Uint8Array
function stringToUint8Array(encodedString: string): Uint8Array {
  const uint8Array = new Uint8Array(encodedString.length);
  for (let i = 0; i < encodedString.length; i++) {
    uint8Array[i] = encodedString.charCodeAt(i);
  }
  return uint8Array;
}
function sizeCheck(str: string) {
  // Convert the string to a UTF-8 encoded byte array
  const utf8Bytes = new TextEncoder().encode(str);

  // Return the length of the byte array
  return utf8Bytes.length;
}
