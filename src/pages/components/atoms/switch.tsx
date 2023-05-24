import PageContentProvider, { pageContent } from "@/components/Common/templates/PageContentProvider";
import Switch from "@/components/Switch";
import { GetServerSideProps } from "next";
import React, { useState } from "react";

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch(process.env.BASE_URL + "/api/components/atoms/switch");
  const result = await response.json();
  return {
    props: {
      pageData: result,
    },
  };
};

const SwitchComponentPage = ({ pageData }: { pageData: pageContent }) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <>
      {pageData.map((item, index) => {
        return <PageContentProvider key={index} content={item.content} type={item.type} />;
      })}
      <div className="my-4">
        <Switch isChecked={isChecked} setIsCheck={setIsChecked} />
      </div>
    </>
  );
};

export default SwitchComponentPage;
