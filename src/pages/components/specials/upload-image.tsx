import PageContentProvider, { pageContent } from "@/components/Common/templates/PageContentProvider";
import UploadImage from "@/components/UploadImage";
import { GetServerSideProps } from "next";
import React from "react";

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch(process.env.BASE_URL + "/api/components/specials/upload-image");
  const result = await response.json();
  return {
    props: {
      pageData: result,
    },
  };
};

const UploadImageComponentPage = ({ pageData }: { pageData: pageContent }) => {
  return (
    <>
      {pageData.map((item, index) => {
        return <PageContentProvider key={index} content={item.content} type={item.type} />;
      })}
      <UploadImage />
    </>
  );
};

export default UploadImageComponentPage;
