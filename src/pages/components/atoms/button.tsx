import Button from "@/components/Button";
import PageContentProvider, { pageContent } from "@/components/Common/templates/PageContentProvider";
import Fetch from "@/utils/api/base-client";
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
        <Button onClick={getData} variant="outline" color="primary">
          Hello World
        </Button>
      </div>
    </>
  );
};

const getData = async () => {
  const response = await Fetch.get("/user/me/");
  console.info(response);
};

/**
 * URL :
 * parent - /itemcategory/v1
 * possibility Params:
 *
 * Parent Only Params:
 * - only_root_category: boolean
 * - marketplace: 'MASTER'
 *
 *  Child params:
 * - page_number:number
 * - marketplace: 'MASTER'
 * - name: string
 * - item_category_parent_id: number
 * - limit: number
 */
export default ButtonComponentPage;
