import Button from "@/components/Button";
import Heading from "@/components/Common/atoms/Heading";
import Input from "@/components/Input";
import React, { useState } from "react";
import cookie from "@/lib/helpers/cookie";
import Code from "@/components/Common/atoms/Code";
import { GetServerSideProps } from "next";
import { SameSiteOption, cookieConfigOption } from "@/lib/helpers/cookie/cookie";
import Meta from "@/components/Common/molecules/Meta";

export const getServerSideProps: GetServerSideProps = async ({ req }): Promise<any> => {
  return {
    props: {
      values: "",
    },
  };
};

const CookiesPage = ({ values }: { values: string }) => {
  const [option, setOption] = useState<cookieConfigOption>({
    domain: "localhost",
    httpOnly: false,
    secure: false,
    maxAge: 60 * 60,
    path: "/",
    sameSite: "none",
  });
  const [key, setKey] = useState<string>("");
  const [value, setValue] = useState<any>("");
  const [cookieValue, setCookieValue] = useState<any>("");

  const setCookieHandler = () => {
    cookie.set(key, value, option);
  };

  const getCookieHandler = () => {
    const val = cookie.get(key);
    console.info(typeof val);
    setCookieValue(val);
  };

  return (
    <>
      <Meta title="Cookies" />
      <div className="space-y-8 mb-8">
        <Heading type="title">Cookies Helpers {values}</Heading>
        <Heading type="subheading">Set Cookie</Heading>
        <Code language="typescript" code={`cookie.set(key, value, options)`} />
        <div className=" flex flex-col-reverse md:flex-row  gap-4">
          <div className="w-full space-y-4">
            <Heading type="subheading">Key & Values</Heading>
            <label htmlFor="key" className="block">
              Key
            </label>
            <Input id="key" onChange={(e) => setKey(e.target.value)} value={key} />
            <label htmlFor="value" className="block">
              Value
            </label>
            <Input id="value" onChange={(e) => setValue(e.target.value)} value={value} />
            <div>
              <Button onClick={setCookieHandler} className="mt-8 block">
                Save
              </Button>
            </div>
          </div>
          <CookieOptionForm option={option} setOption={setOption} />
        </div>
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
    </>
  );
};

export default CookiesPage;

type CookieOptionFormPropsType = {
  option: cookieConfigOption;
  setOption: React.Dispatch<React.SetStateAction<cookieConfigOption>>;
};

const CookieOptionForm = ({ option, setOption }: CookieOptionFormPropsType) => {
  return (
    <div className="w-full space-y-4">
      <Heading type="subheading">Option</Heading>
      <div className="grid grid-cols-2 gap-y-5 gap-x-4 pt-2">
        <div className="space-y-2 [&>label]:block">
          <label htmlFor="maxAge">MaxAge</label>
          <Input type="number" id="maxAge" value={option.maxAge} onChange={(e) => setOption({ ...option, maxAge: Number(e.target.value) })} />
        </div>
        <div className="space-y-2 [&>label]:block">
          <label htmlFor="path">Path</label>
          <Input type="text" id="path" value={option.path} onChange={(e) => setOption({ ...option, path: e.target.value })} />
        </div>
        <div className="space-y-2 [&>label]:block">
          <label htmlFor="sameSite">SameSite</label>
          <select
            name="sameSite"
            id="sameSite"
            className="border bg-white w-full px-2 py-2 rounded"
            value={option.sameSite}
            onChange={(e) => setOption({ ...option, sameSite: e.target.value as SameSiteOption })}
          >
            <option value="lax">lax</option>
            <option value="none">none</option>
            <option value="strict">strict</option>
          </select>
        </div>
        <div className="space-y-2 [&>label]:block">
          <label htmlFor="domain">Domain</label>
          <Input type="text" id="domain" value={option.domain} onChange={(e) => setOption({ ...option, domain: e.target.value })} />
        </div>
        <div className="space-x-2 ">
          <label htmlFor="httpOnly">HttpOnly</label>
          <input type="checkbox" id="httpOnly" checked={option.httpOnly} onChange={(e) => setOption({ ...option, httpOnly: e.target.checked })} />
        </div>
        <div className="space-x-2">
          <label htmlFor="secure">Secure</label>
          <input type="checkbox" id="secure" checked={option.secure} onChange={(e) => setOption({ ...option, secure: e.target.checked })} />
        </div>
      </div>
    </div>
  );
};
