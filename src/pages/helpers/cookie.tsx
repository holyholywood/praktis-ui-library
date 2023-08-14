import Button from "@/components/Button";
import Heading from "@/components/Common/atoms/Heading";
import Input from "@/components/Input";
import React, { useState } from "react";
import cookie from "@/lib/helpers/cookie";
import Code from "@/components/Common/atoms/Code";
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async ({ req }): Promise<any> => {
  return {
    props: {
      values: "",
    },
  };
};

const CookiesPage = ({ values }: { values: string }) => {
  const [key, setKey] = useState<string>("");
  const [value, setValue] = useState<any>("");
  const [cookieValue, setCookieValue] = useState<any>("");

  const setCookieHandler = () => {
    cookie.set(key, value, { maxAge: 60 * 60, secure: true });
  };

  const getCookieHandler = () => {
    const val = cookie.get(key);
    setCookieValue(val);
  };

  return (
    <div className="space-y-8 mb-8">
      <Heading type="title">Cookies Helpers {values}</Heading>
      <Heading type="subheading">Set Cookie</Heading>
      <Code language="typescript" code={`cookie.set(key, value, options)`} />
      <div className="w-1/2">
        <label htmlFor="key">Key</label>
        <Input id="key" onChange={(e) => setKey(e.target.value)} value={key} />
      </div>
      <div className="w-1/2">
        <label htmlFor="value">Value</label>
        <Input id="value" onChange={(e) => setValue(e.target.value)} value={value} />
      </div>
      <Button onClick={setCookieHandler}>Save</Button>
      <Heading type="subheading">Get Cookie</Heading>
      <Code language="typescript" code={`cookie.get(key)`} />
      <div className="w-1/2">
        <label htmlFor="key">Key</label>
        <Input id="key" onChange={(e) => setKey(e.target.value)} value={key} />
      </div>
      <div className="w-1/2">
        <label htmlFor="result">Result</label>
        <textarea value={cookieValue ?? ""} className="border focus:outline-none resize-none w-full px-2 py-1 rounded" readOnly></textarea>
      </div>
      <Button onClick={getCookieHandler}>Get</Button>
      <Heading type="subheading">Delete Cookie</Heading>
      <Code language="typescript" code={`cookie.delete(key)`} />
      <div className="w-1/2">
        <label htmlFor="key">Key</label>
        <Input id="key" onChange={(e) => setKey(e.target.value)} value={key} />
      </div>
      <Button onClick={() => cookie.delete(key)} color="danger">
        Delete
      </Button>
      <Heading type="subheading">Clear All Cookie</Heading>
      <Code language="typescript" code={`cookie.clear()`} />

      <Button onClick={() => cookie.clear()} color="secondary">
        Clear
      </Button>
    </div>
  );
};

export default CookiesPage;
