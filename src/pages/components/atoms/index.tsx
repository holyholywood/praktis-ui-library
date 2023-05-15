import QuoteText from "@/components/Common/atoms/QuoteText";
import PageContentProvider, { pageContent } from "@/components/Common/templates/PageContentProvider";
import { GetServerSideProps } from "next";
import React from "react";

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch("http://localhost:3000/api/components/atoms");
  const result = await response.json();
  return {
    props: {
      pageData: result,
    },
  };
};

const AtomsPage = ({ pageData }: { pageData: pageContent }) => {
  return (
    <>
      {pageData.map((item, index) => {
        return <PageContentProvider key={index} content={item.content} type={item.type} />;
      })}
    </>
  );
};

export default AtomsPage;
