import QuoteText from "@/components/Common/atoms/QuoteText";
import PageContentProvider, { pageContent } from "@/components/Common/templates/PageContentProvider";
import { GetServerSideProps } from "next";
import React from "react";

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch(process.env.BASE_URL + "/api/components/molecules");
  const result = await response.json();
  return {
    props: {
      pageData: result,
    },
  };
};

const MoleculesPage = ({ pageData }: { pageData: pageContent }) => {
  return (
    <>
      {pageData.map((item, index) => {
        return <PageContentProvider key={index} content={item.content} type={item.type} />;
      })}
    </>
  );
};

export default MoleculesPage;
