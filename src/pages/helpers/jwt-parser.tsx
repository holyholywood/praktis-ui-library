import React, { useState } from "react";
import Heading from "@/components/Common/atoms/Heading";
import Button from "@/components/Button";
import JWT from "@/lib/helpers/jwt";
import Code from "@/components/Common/atoms/Code";
import QuoteText from "@/components/Common/atoms/QuoteText";
import { temporaryJWTBodyType } from "@/lib/helpers/jwt/jwt";

const JWTParserPage = () => {
  const [token, setToken] = useState<string>(DEFAULT_TOKEN);
  const [parsedToken, setParsedToken] = useState<string>("");

  const handleParsing = () => {
    const parsedBodyToken = JWT.parse<temporaryJWTBodyType>(token);

    setParsedToken(JSON.stringify(parsedBodyToken, null, 2));
  };
  return (
    <div className="space-y-8">
      <Heading>JWT Parser Helpers</Heading>
      <QuoteText>This Helpers only parse body payload of the token</QuoteText>
      <Heading type="subtitle">Example</Heading>
      <Code code={`JWT.parse<T>(token)`} language="typescript" />
      <div className="flex gap-4">
        <div className="w-1/2 space-y-2">
          <label htmlFor="token" className="block">
            Token
          </label>
          <textarea value={token} onChange={(e) => setToken(e.target.value)} id="token" className="border rounded resize-none w-full min-h-[16rem] focus:outline-none px-2 py-1"></textarea>
          <Button className="" onClick={handleParsing}>
            Parse
          </Button>
        </div>
        <div className="w-1/2 space-y-2">
          <label htmlFor="token" className="block">
            Result
          </label>
          <textarea
            value={parsedToken}
            onChange={(e) => setParsedToken(e.target.value)}
            readOnly
            id="token"
            className="border rounded resize-none w-full min-h-[16rem] focus:outline-none px-2 py-1"
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default JWTParserPage;

const DEFAULT_TOKEN = "";
