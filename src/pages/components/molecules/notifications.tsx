import React, { useContext, useState } from "react";
import PageContentProvider, { pageContent } from "@/components/Common/templates/PageContentProvider";
import { GetServerSideProps } from "next";
import ModalContext from "@/store/ModalStore";
import Button from "@/components/Button";

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch(process.env.BASE_URL + "/api/components/molecules/notifications");
  const result = await response.json();
  return {
    props: {
      pageData: result,
    },
  };
};
const NotificationsComponentPage = ({ pageData }: { pageData: pageContent }) => {
  return (
    <>
      {pageData.map((item, index) => {
        return <PageContentProvider key={index} content={item.content} type={item.type} />;
      })}
      <div>
        <Button>Open Notification</Button>
      </div>
    </>
  );
};
export default NotificationsComponentPage;
