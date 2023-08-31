import Button from "@/components/Button";
import Heading from "@/components/Common/atoms/Heading";
import Meta from "@/components/Common/molecules/Meta";
import Input from "@/components/Input";
import Cryptograph from "@/lib/helpers/cryptograph";
import Crypto from "@/lib/helpers/cryptograph/cryptojs";
import React, { useState } from "react";

const CryptoPage = () => {
  const [data, setData] = useState("");
  function calculateByteSize(str: string) {
    // Convert the string to a UTF-8 encoded byte array
    const utf8Bytes = new TextEncoder().encode(str);

    // Return the length of the byte array
    return utf8Bytes.length;
  }
  function encryptOld() {
    console.clear();
    const TobeEncrypted = loginData;
    const encrypted = Crypto.encrypt(TobeEncrypted);
    const decrypted = Crypto.decrypt(encrypted);
    console.info("===================================================================");
    // console.info("encrypted :", encrypted);
    console.info("before encrypted Size:", calculateByteSize(JSON.stringify(TobeEncrypted)) + " KB");
    console.info("encrypted Size:", calculateByteSize(encrypted) + " KB");
    // console.info("decrypted :", decrypted);
    // console.info("typeof decrypted :", typeof decrypted);
  }
  return (
    <>
      <Meta title="Cryptograph" />
      <div className="space-y-8">
        <Heading>Cryptograph Helpers</Heading>
        <Heading type="subtitle">Example</Heading>
        <BasicEncryptionSection />
        <Heading type="subtitle">Example Using CryptoJS</Heading>
        <Button
          className="ml-auto md:ml-0 block"
          onClick={() => {
            const TobeEncrypted = loginData;

            const encryptWithCompress = Crypto.encryptWithCompress(TobeEncrypted);
            const encrypted = Crypto.encrypt(TobeEncrypted);
            const decryptedWithCompress = Crypto.decryptWithDecompress(encryptWithCompress);

            console.info("Size Of encryptWithCompress data", calculateByteSize(encryptWithCompress) + " KB");
            console.info("Size Of encrypted data", calculateByteSize(encrypted) + " KB");
          }}
        >
          Encrypt
        </Button>
      </div>
    </>
  );
};

export default CryptoPage;
export const loginData = [
  {
    company_id: 280,
    company_name: "Okta Brand",
    profile_id: 224,
    profile_is_active: true,
    is_active_company: false,
    abbreviation: "Okk",
    email_address: "maria.oktarise@praktis.co",
    NPWP: "-",
    logo_url: "https://s3.ap-southeast-3.amazonaws.com/omspts.dev.public/default-profile_G1uGGy7.png",
    role_template: {
      name: "TEST OBJECT PERMISSION",
      permission: [
        {
          role: "inbound",
          permission_level: "write",
          group: null,
          object_permission_level: null,
          object_groups: [],
        },
      ],
    },
  },
  {
    company_id: 1,
    company_name: "Apa Aja",
    profile_id: 201,
    profile_is_active: true,
    is_active_company: true,
    abbreviation: "AJA",
    email_address: null,
    NPWP: "-",
    logo_url: "https://s3.ap-southeast-3.amazonaws.com/omspts.dev.public/Test_pNopznN.html",
    role_template: {
      name: "Super Admin 2",
      permission: [
        {
          role: "PURCHASEORDER",
          permission_level: "WRITE",
          group: null,
          object_permission_level: null,
          object_groups: [],
        },
        {
          role: "PURCHASEORDER",
          permission_level: "EDIT",
          group: null,
          object_permission_level: null,
          object_groups: [],
        },
        {
          role: "PURCHASEORDER",
          permission_level: "UPDATE",
          group: null,
          object_permission_level: null,
          object_groups: [],
        },
        {
          role: "PURCHASEORDER",
          permission_level: "DELETE",
          group: null,
          object_permission_level: null,
          object_groups: [],
        },
        {
          role: "SALESORDER",
          permission_level: "WRITE",
          group: null,
          object_permission_level: null,
          object_groups: [],
        },
        {
          role: "SALESORDER",
          permission_level: "UPDATE",
          group: null,
          object_permission_level: null,
          object_groups: [],
        },
        {
          role: "WITHDRAWALREQUEST",
          permission_level: "WRITE",
          group: null,
          object_permission_level: null,
          object_groups: [],
        },
        {
          role: "WITHDRAWALREQUEST",
          permission_level: "UPDATE",
          group: null,
          object_permission_level: null,
          object_groups: [],
        },
        {
          role: "ITEM",
          permission_level: "WRITE",
          group: null,
          object_permission_level: null,
          object_groups: [],
        },
        {
          role: "ITEM",
          permission_level: "EDIT",
          group: null,
          object_permission_level: null,
          object_groups: [],
        },
        {
          role: "TRANSFERREQUEST",
          permission_level: "WRITE",
          group: null,
          object_permission_level: null,
          object_groups: [],
        },
        {
          role: "TRANSFERREQUEST",
          permission_level: "UPDATE",
          group: null,
          object_permission_level: null,
          object_groups: [],
        },
        {
          role: "WAREHOUSE",
          permission_level: "WRITE",
          group: null,
          object_permission_level: null,
          object_groups: [],
        },
        {
          role: "WAREHOUSE",
          permission_level: "EDIT",
          group: null,
          object_permission_level: null,
          object_groups: [],
        },
        {
          role: "WAREHOUSE",
          permission_level: "DELETE",
          group: null,
          object_permission_level: null,
          object_groups: [],
        },
        {
          role: "USER",
          permission_level: "WRITE",
          group: null,
          object_permission_level: null,
          object_groups: [],
        },
        {
          role: "USER",
          permission_level: "EDIT",
          group: null,
          object_permission_level: null,
          object_groups: [],
        },
        {
          role: "USER",
          permission_level: "DELETE",
          group: null,
          object_permission_level: null,
          object_groups: [],
        },
        {
          role: "ROLE",
          permission_level: "EDIT",
          group: null,
          object_permission_level: null,
          object_groups: [],
        },
        {
          role: "INTEGRATION",
          permission_level: "WRITE",
          group: null,
          object_permission_level: null,
          object_groups: [],
        },
        {
          role: "INTEGRATION",
          permission_level: "EDIT",
          group: null,
          object_permission_level: null,
          object_groups: [],
        },
        {
          role: "CATEGORYMANAGEMENT",
          permission_level: "WRITE",
          group: null,
          object_permission_level: null,
          object_groups: [],
        },
        {
          role: "CATEGORYMANAGEMENT",
          permission_level: "EDIT",
          group: {
            name: "CATEGORYMANAGEMENT_EDIT",
            permissions: [],
          },
          object_permission_level: null,
          object_groups: [],
        },
        {
          role: "CATEGORYMANAGEMENT",
          permission_level: "EDIT",
          group: {
            name: "CATEGORYMANAGEMENT_EDIT",
            permissions: [],
          },
          object_permission_level: null,
          object_groups: [],
        },
        {
          role: "CATEGORYMANAGEMENT",
          permission_level: "DELETE",
          group: null,
          object_permission_level: null,
          object_groups: [],
        },
      ],
    },
  },
  {
    company_id: 237,
    company_name: "Company Dummy",
    profile_id: 200,
    profile_is_active: true,
    is_active_company: true,
    abbreviation: "CDM",
    email_address: null,
    NPWP: "-",
    logo_url: "https://s3.ap-southeast-3.amazonaws.com/omspts.dev.public/logo-lnw-big-1-1536x349.png",
    role_template: {
      name: "TEST OBJECT PERMISSION",
      permission: [
        {
          role: "inbound",
          permission_level: "write",
          group: null,
          object_permission_level: null,
          object_groups: [],
        },
      ],
    },
  },
  {
    company_id: 268,
    company_name: "WhatsApp",
    profile_id: 212,
    profile_is_active: true,
    is_active_company: false,
    abbreviation: "WA",
    email_address: "masNizar@praktis.sc",
    NPWP: "-",
    logo_url: "https://s3.ap-southeast-3.amazonaws.com/omspts.dev.public/whatsapp_YPe8fLS.png",
    role_template: {
      name: "TEST OBJECT PERMISSION",
      permission: [
        {
          role: "inbound",
          permission_level: "write",
          group: null,
          object_permission_level: null,
          object_groups: [],
        },
      ],
    },
  },
  {
    company_id: 280,
    company_name: "Okta Brand",
    profile_id: 224,
    profile_is_active: true,
    is_active_company: false,
    abbreviation: "Okk",
    email_address: "maria.oktarise@praktis.co",
    NPWP: "-",
    logo_url: "https://s3.ap-southeast-3.amazonaws.com/omspts.dev.public/default-profile_G1uGGy7.png",
    role_template: {
      name: "TEST OBJECT PERMISSION",
      permission: [
        {
          role: "inbound",
          permission_level: "write",
          group: null,
          object_permission_level: null,
          object_groups: [],
        },
      ],
    },
  },
  {
    company_id: 1,
    company_name: "Apa Aja",
    profile_id: 201,
    profile_is_active: true,
    is_active_company: true,
    abbreviation: "AJA",
    email_address: null,
    NPWP: "-",
    logo_url: "https://s3.ap-southeast-3.amazonaws.com/omspts.dev.public/Test_pNopznN.html",
    role_template: {
      name: "Super Admin 2",
      permission: [
        {
          role: "PURCHASEORDER",
          permission_level: "WRITE",
          group: null,
          object_permission_level: null,
          object_groups: [],
        },
        {
          role: "PURCHASEORDER",
          permission_level: "EDIT",
          group: null,
          object_permission_level: null,
          object_groups: [],
        },
        {
          role: "PURCHASEORDER",
          permission_level: "UPDATE",
          group: null,
          object_permission_level: null,
          object_groups: [],
        },
        {
          role: "PURCHASEORDER",
          permission_level: "DELETE",
          group: null,
          object_permission_level: null,
          object_groups: [],
        },
        {
          role: "SALESORDER",
          permission_level: "WRITE",
          group: null,
          object_permission_level: null,
          object_groups: [],
        },
        {
          role: "SALESORDER",
          permission_level: "UPDATE",
          group: null,
          object_permission_level: null,
          object_groups: [],
        },
        {
          role: "WITHDRAWALREQUEST",
          permission_level: "WRITE",
          group: null,
          object_permission_level: null,
          object_groups: [],
        },
        {
          role: "WITHDRAWALREQUEST",
          permission_level: "UPDATE",
          group: null,
          object_permission_level: null,
          object_groups: [],
        },
        {
          role: "ITEM",
          permission_level: "WRITE",
          group: null,
          object_permission_level: null,
          object_groups: [],
        },
        {
          role: "ITEM",
          permission_level: "EDIT",
          group: null,
          object_permission_level: null,
          object_groups: [],
        },
        {
          role: "TRANSFERREQUEST",
          permission_level: "WRITE",
          group: null,
          object_permission_level: null,
          object_groups: [],
        },
        {
          role: "TRANSFERREQUEST",
          permission_level: "UPDATE",
          group: null,
          object_permission_level: null,
          object_groups: [],
        },
        {
          role: "WAREHOUSE",
          permission_level: "WRITE",
          group: null,
          object_permission_level: null,
          object_groups: [],
        },
        {
          role: "WAREHOUSE",
          permission_level: "EDIT",
          group: null,
          object_permission_level: null,
          object_groups: [],
        },
        {
          role: "WAREHOUSE",
          permission_level: "DELETE",
          group: null,
          object_permission_level: null,
          object_groups: [],
        },
        {
          role: "USER",
          permission_level: "WRITE",
          group: null,
          object_permission_level: null,
          object_groups: [],
        },
        {
          role: "USER",
          permission_level: "EDIT",
          group: null,
          object_permission_level: null,
          object_groups: [],
        },
        {
          role: "USER",
          permission_level: "DELETE",
          group: null,
          object_permission_level: null,
          object_groups: [],
        },
        {
          role: "ROLE",
          permission_level: "EDIT",
          group: null,
          object_permission_level: null,
          object_groups: [],
        },
        {
          role: "INTEGRATION",
          permission_level: "WRITE",
          group: null,
          object_permission_level: null,
          object_groups: [],
        },
        {
          role: "INTEGRATION",
          permission_level: "EDIT",
          group: null,
          object_permission_level: null,
          object_groups: [],
        },
        {
          role: "CATEGORYMANAGEMENT",
          permission_level: "WRITE",
          group: null,
          object_permission_level: null,
          object_groups: [],
        },
        {
          role: "CATEGORYMANAGEMENT",
          permission_level: "EDIT",
          group: {
            name: "CATEGORYMANAGEMENT_EDIT",
            permissions: [],
          },
          object_permission_level: null,
          object_groups: [],
        },
        {
          role: "CATEGORYMANAGEMENT",
          permission_level: "EDIT",
          group: {
            name: "CATEGORYMANAGEMENT_EDIT",
            permissions: [],
          },
          object_permission_level: null,
          object_groups: [],
        },
        {
          role: "CATEGORYMANAGEMENT",
          permission_level: "DELETE",
          group: null,
          object_permission_level: null,
          object_groups: [],
        },
      ],
    },
  },
  {
    company_id: 237,
    company_name: "Company Dummy",
    profile_id: 200,
    profile_is_active: true,
    is_active_company: true,
    abbreviation: "CDM",
    email_address: null,
    NPWP: "-",
    logo_url: "https://s3.ap-southeast-3.amazonaws.com/omspts.dev.public/logo-lnw-big-1-1536x349.png",
    role_template: {
      name: "TEST OBJECT PERMISSION",
      permission: [
        {
          role: "inbound",
          permission_level: "write",
          group: null,
          object_permission_level: null,
          object_groups: [],
        },
      ],
    },
  },
  {
    company_id: 268,
    company_name: "WhatsApp",
    profile_id: 212,
    profile_is_active: true,
    is_active_company: false,
    abbreviation: "WA",
    email_address: "masNizar@praktis.sc",
    NPWP: "-",
    logo_url: "https://s3.ap-southeast-3.amazonaws.com/omspts.dev.public/whatsapp_YPe8fLS.png",
    role_template: {
      name: "TEST OBJECT PERMISSION",
      permission: [
        {
          role: "inbound",
          permission_level: "write",
          group: null,
          object_permission_level: null,
          object_groups: [],
        },
      ],
    },
  },
  {
    company_id: 280,
    company_name: "Okta Brand",
    profile_id: 224,
    profile_is_active: true,
    is_active_company: false,
    abbreviation: "Okk",
    email_address: "maria.oktarise@praktis.co",
    NPWP: "-",
    logo_url: "https://s3.ap-southeast-3.amazonaws.com/omspts.dev.public/default-profile_G1uGGy7.png",
    role_template: {
      name: "TEST OBJECT PERMISSION",
      permission: [
        {
          role: "inbound",
          permission_level: "write",
          group: null,
          object_permission_level: null,
          object_groups: [],
        },
      ],
    },
  },
  {
    company_id: 1,
    company_name: "Apa Aja",
    profile_id: 201,
    profile_is_active: true,
    is_active_company: true,
    abbreviation: "AJA",
    email_address: null,
    NPWP: "-",
    logo_url: "https://s3.ap-southeast-3.amazonaws.com/omspts.dev.public/Test_pNopznN.html",
    role_template: {
      name: "Super Admin 2",
      permission: [
        {
          role: "PURCHASEORDER",
          permission_level: "WRITE",
          group: null,
          object_permission_level: null,
          object_groups: [],
        },
        {
          role: "PURCHASEORDER",
          permission_level: "EDIT",
          group: null,
          object_permission_level: null,
          object_groups: [],
        },
        {
          role: "PURCHASEORDER",
          permission_level: "UPDATE",
          group: null,
          object_permission_level: null,
          object_groups: [],
        },
        {
          role: "PURCHASEORDER",
          permission_level: "DELETE",
          group: null,
          object_permission_level: null,
          object_groups: [],
        },
        {
          role: "SALESORDER",
          permission_level: "WRITE",
          group: null,
          object_permission_level: null,
          object_groups: [],
        },
        {
          role: "SALESORDER",
          permission_level: "UPDATE",
          group: null,
          object_permission_level: null,
          object_groups: [],
        },
        {
          role: "WITHDRAWALREQUEST",
          permission_level: "WRITE",
          group: null,
          object_permission_level: null,
          object_groups: [],
        },
        {
          role: "WITHDRAWALREQUEST",
          permission_level: "UPDATE",
          group: null,
          object_permission_level: null,
          object_groups: [],
        },
        {
          role: "ITEM",
          permission_level: "WRITE",
          group: null,
          object_permission_level: null,
          object_groups: [],
        },
        {
          role: "ITEM",
          permission_level: "EDIT",
          group: null,
          object_permission_level: null,
          object_groups: [],
        },
        {
          role: "TRANSFERREQUEST",
          permission_level: "WRITE",
          group: null,
          object_permission_level: null,
          object_groups: [],
        },
        {
          role: "TRANSFERREQUEST",
          permission_level: "UPDATE",
          group: null,
          object_permission_level: null,
          object_groups: [],
        },
        {
          role: "WAREHOUSE",
          permission_level: "WRITE",
          group: null,
          object_permission_level: null,
          object_groups: [],
        },
        {
          role: "WAREHOUSE",
          permission_level: "EDIT",
          group: null,
          object_permission_level: null,
          object_groups: [],
        },
        {
          role: "WAREHOUSE",
          permission_level: "DELETE",
          group: null,
          object_permission_level: null,
          object_groups: [],
        },
        {
          role: "USER",
          permission_level: "WRITE",
          group: null,
          object_permission_level: null,
          object_groups: [],
        },
        {
          role: "USER",
          permission_level: "EDIT",
          group: null,
          object_permission_level: null,
          object_groups: [],
        },
        {
          role: "USER",
          permission_level: "DELETE",
          group: null,
          object_permission_level: null,
          object_groups: [],
        },
        {
          role: "ROLE",
          permission_level: "EDIT",
          group: null,
          object_permission_level: null,
          object_groups: [],
        },
        {
          role: "INTEGRATION",
          permission_level: "WRITE",
          group: null,
          object_permission_level: null,
          object_groups: [],
        },
        {
          role: "INTEGRATION",
          permission_level: "EDIT",
          group: null,
          object_permission_level: null,
          object_groups: [],
        },
        {
          role: "CATEGORYMANAGEMENT",
          permission_level: "WRITE",
          group: null,
          object_permission_level: null,
          object_groups: [],
        },
        {
          role: "CATEGORYMANAGEMENT",
          permission_level: "EDIT",
          group: {
            name: "CATEGORYMANAGEMENT_EDIT",
            permissions: [],
          },
          object_permission_level: null,
          object_groups: [],
        },
        {
          role: "CATEGORYMANAGEMENT",
          permission_level: "EDIT",
          group: {
            name: "CATEGORYMANAGEMENT_EDIT",
            permissions: [],
          },
          object_permission_level: null,
          object_groups: [],
        },
        {
          role: "CATEGORYMANAGEMENT",
          permission_level: "DELETE",
          group: null,
          object_permission_level: null,
          object_groups: [],
        },
      ],
    },
  },
  {
    company_id: 237,
    company_name: "Company Dummy",
    profile_id: 200,
    profile_is_active: true,
    is_active_company: true,
    abbreviation: "CDM",
    email_address: null,
    NPWP: "-",
    logo_url: "https://s3.ap-southeast-3.amazonaws.com/omspts.dev.public/logo-lnw-big-1-1536x349.png",
    role_template: {
      name: "TEST OBJECT PERMISSION",
      permission: [
        {
          role: "inbound",
          permission_level: "write",
          group: null,
          object_permission_level: null,
          object_groups: [],
        },
      ],
    },
  },
  {
    company_id: 268,
    company_name: "WhatsApp",
    profile_id: 212,
    profile_is_active: true,
    is_active_company: false,
    abbreviation: "WA",
    email_address: "masNizar@praktis.sc",
    NPWP: "-",
    logo_url: "https://s3.ap-southeast-3.amazonaws.com/omspts.dev.public/whatsapp_YPe8fLS.png",
    role_template: {
      name: "TEST OBJECT PERMISSION",
      permission: [
        {
          role: "inbound",
          permission_level: "write",
          group: null,
          object_permission_level: null,
          object_groups: [],
        },
      ],
    },
  },
  {
    company_id: 280,
    company_name: "Okta Brand",
    profile_id: 224,
    profile_is_active: true,
    is_active_company: false,
    abbreviation: "Okk",
    email_address: "maria.oktarise@praktis.co",
    NPWP: "-",
    logo_url: "https://s3.ap-southeast-3.amazonaws.com/omspts.dev.public/default-profile_G1uGGy7.png",
    role_template: {
      name: "TEST OBJECT PERMISSION",
      permission: [
        {
          role: "inbound",
          permission_level: "write",
          group: null,
          object_permission_level: null,
          object_groups: [],
        },
      ],
    },
  },
];
const BasicEncryptionSection = () => {
  const [key, setKey] = useState("");
  const [data, setData] = useState("");
  const [encryptedData, setEncryptedData] = useState("");
  const [decryptedData, setDecryptedData] = useState("");
  async function handleEncrypt() {
    const encrypted = await Cryptograph.encrypt(key, data);

    setEncryptedData(encrypted);
  }
  async function handleDecrypt() {
    const decoded = dynamicJSON.parse(encryptedData);
    const data = await Cryptograph.decrypt(key, decoded);

    setDecryptedData(data);
  }
  return (
    <>
      <div className="w-1/2 space-y-2">
        <label htmlFor="secretKey">Encryption Key</label>
        <Input value={key} onChange={(e) => setKey(e.target.value)} type="text" id="secretKey" />
      </div>
      <div className="flex gap-4 flex-col md:flex-row">
        <div className=" w-full md:w-1/3 space-y-2">
          <label htmlFor="data" className="block">
            Data
          </label>
          <textarea value={data} onChange={(e) => setData(e.target.value)} id="data" className="border rounded resize-none w-full min-h-[16rem] focus:outline-none px-2 py-1"></textarea>
          <Button onClick={handleEncrypt} className="ml-auto md:ml-0 block">
            Encrypt
          </Button>
        </div>
        <div className=" w-full md:w-1/3 space-y-2">
          <label htmlFor="encryptionResult" className="block">
            Encryption Token
          </label>
          <textarea
            value={encryptedData}
            onChange={(e) => setEncryptedData(e.target.value)}
            id="encryptionResult"
            className="border rounded resize-none w-full min-h-[16rem] focus:outline-none px-2 py-1"
          ></textarea>
          <Button onClick={handleDecrypt} className="block">
            Decrypt
          </Button>
        </div>
        <div className=" w-full md:w-1/3 space-y-2">
          <label htmlFor="encryptionResult" className="block">
            Decryption Result
          </label>
          <textarea value={decryptedData} readOnly id="encryptionResult" className="border rounded resize-none w-full min-h-[16rem] focus:outline-none px-2 py-1"></textarea>
        </div>
      </div>
    </>
  );
};

class dynamicJSON {
  public static parse(data: any) {
    try {
      return JSON.parse(data);
    } catch (error) {
      return data;
    }
  }
  public static stringify(data: any, space: number = 2) {
    return JSON.stringify(data, null, space);
  }
}
