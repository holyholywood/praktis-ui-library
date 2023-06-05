import PageContentProvider, { pageContent } from "@/components/Common/templates/PageContentProvider";
import Select from "@/components/Select";
import { GetServerSideProps } from "next";
import React from "react";

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch(process.env.BASE_URL + "/api/components/atoms/select");
  const result = await response.json();
  return {
    props: {
      pageData: result,
    },
  };
};

const SelectComponent = ({ pageData }: { pageData: pageContent }) => {
  return (
    <>
      {pageData.map((item, index) => {
        return <PageContentProvider key={index} content={item.content} type={item.type} />;
      })}
      <Select />
      <h1>Dropdown</h1>
      <div className="dropdown w-full">
        <label tabIndex={0} className="bttn">
          Click
        </label>
        <div tabIndex={0} className=" dropdown-content w-full flex flex-col z-10 absolute shadow bg-base-primary rounded">
          <div className="min-h-min max-h-52 overflow-y-scroll flex flex-col p-2 gap-2 relative">
            <ul className="space-y-2">
              <li>
                <label className="flex items-center gap-1.5 pl-2">
                  <input id={`store-all`} type="checkbox" className="checkbox checkbox-secondary rounded-sm w-5 h-5 border-quaternary" />
                  <span className="text-sm">Unpublished</span>
                </label>
              </li>
              {data.map((el) => {
                return (
                  <li key={el}>
                    <label className="flex items-center gap-1.5 pl-2">
                      <input
                        id={`store-${el}`}
                        type="checkbox"
                        className="checkbox checkbox-secondary rounded-sm w-5 h-5 border-quaternary"
                      />
                      <span className="text-sm">{el}</span>
                    </label>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default SelectComponent;

const data = ["Tokopedia-1", "Shopee-1", "Tokopedia-2", "Shopee-2", "Tokopedia-3", "Shopee-3", "Tokopedia-4"];
