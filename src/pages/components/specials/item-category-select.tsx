import PageContentProvider, { pageContent } from "@/components/Common/templates/PageContentProvider";
import ItemCategorySelect from "@/components/ItemCategorySelect";
import SectionCard from "@/components/SectionCard";
import useSelectCategory from "@/components/SelectCategory/useSelectCategory";
import { GetServerSideProps } from "next";
import React, { useState } from "react";

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch(process.env.BASE_URL + "/api/components/specials/category-selector");
  const result = await response.json();
  return {
    props: {
      pageData: result,
    },
  };
};

const ItemCategorySelectPage = ({ pageData }: { pageData: pageContent }) => {
  const [openSection, setOpenSection] = useState(true);

  const { categoryList, categoryListData, isCategoryListLoading, FullCategoryName, selectCategoryHandler, searchCategory } =
    useSelectCategory("default > category");
  return (
    <>
      {pageData.map((item, index) => {
        return <PageContentProvider key={index} content={item.content} type={item.type} />;
      })}
      <SectionCard>
        <SectionCard.Header sectionTitle="Category Selector" openSection={openSection} setOpenSection={setOpenSection} />
        <SectionCard.Body openSection={openSection} setOpenSection={setOpenSection}>
          <ItemCategorySelect
            categoryListData={categoryListData}
            selectCategoryHandler={selectCategoryHandler}
            searchCategoryHandler={searchCategory}
            isLoading={isCategoryListLoading}
            FullCategoryName={FullCategoryName}
          />
        </SectionCard.Body>
      </SectionCard>
      <button onClick={() => console.info(categoryList)}>tes</button>
    </>
  );
};

export default ItemCategorySelectPage;
