import Button from "@/components/Button";
import Code from "@/components/Common/atoms/Code";
import Heading from "@/components/Common/atoms/Heading";
import Pharagraph from "@/components/Common/atoms/Pharagraph";
import Meta from "@/components/Common/molecules/Meta";
import spreadSheet from "@/lib/helpers/spreadsheet";
import React from "react";
import { AiFillFileExcel } from "react-icons/ai";

const SpreadSheet = () => {
  function handleClick() {
    spreadSheet.export(data, { extension: "xls", fileName: "Bio", sheetName: "Sheet1" });
  }

  return (
    <>
      <Meta title="Spread Sheet" />
      <div className="space-y-8">
        <Heading>Spreadsheet Export</Heading>
        <Heading type="subheading">Usage</Heading>
        <Code code="spreadSheet.export(data, { extension: 'xls', fileName: 'Bio', sheetName: 'Sheet1' });" language="typescript" />
        <Pharagraph>Example Data:</Pharagraph>
        <Code language="json" code={JSON.stringify(data, null, 2)} />
        <Button onClick={handleClick}>
          <AiFillFileExcel size={24} />
          Export To Excel
        </Button>
      </div>
    </>
  );
};

export default SpreadSheet;

const data = [
  {
    name: "Dito",
    age: 20,
    address: "Tangerang",
  },
  {
    name: "Dito",
    age: 20,
    address: "Tangerang",
    beda: "sendiri",
  },
];
