import Button from "@/components/Button";
import PageContentProvider, { pageContent } from "@/components/Common/templates/PageContentProvider";
import { GetServerSideProps } from "next";
import React from "react";

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch(process.env.BASE_URL + "/api/components/atoms/button");
  const result = await response.json();
  return {
    props: {
      pageData: result,
    },
  };
};

const ButtonComponentPage = ({ pageData }: { pageData: pageContent }) => {
  return (
    <>
      {pageData.map((item, index) => {
        return <PageContentProvider key={index} content={item.content} type={item.type} />;
      })}
      <div>
        <Button variant="outline" color="primary">
          Hello World
        </Button>
      </div>
    </>
  );
};

export default ButtonComponentPage;
