import PageContentProvider, { pageContent } from "@/components/Common/templates/PageContentProvider";
import SectionCard from "@/components/SectionCard";
import SelectCategory from "@/components/SelectCategory";
import { GetServerSideProps } from "next";
import React, { useEffect, useState } from "react";

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch(process.env.BASE_URL + "/api/components/specials/category-selector");
  const result = await response.json();
  return {
    props: {
      pageData: result,
    },
  };
};
export type categoryItemType = {
  Name: string;
  id: number;
  has_child: boolean;
};
export type categoryType = {
  level1: categoryItemType;
  level2: categoryItemType;
  level3: categoryItemType;
  level4: categoryItemType;
};

const categorydefaulValue: categoryType = {
  level1: { Name: "Dasi", id: 1, has_child: false },
  level2: { Name: "Kecantikan", id: 2, has_child: true },
  level3: { Name: "Fashion Wanita", id: 3, has_child: false },
  level4: { Name: "Dasi", id: 4, has_child: true },
};

const CategorySelectorPage = ({ pageData }: { pageData: pageContent }) => {
  const [openSection, setOpenSection] = useState(true);
  /**
   * @Category
   */
  const [category, setCategory] = useState<categoryType>(categorydefaulValue);
  const [fullCategoryName, setFullCategoryName] = useState<string | null>("Sepatu dan Pakaian Wanita > Pakaian > Atasan > Kaos");

  useEffect(() => {
    console.log(category);
    console.log("changes");
  }, [category.level1, category.level2, category.level3, category.level4]);
  return (
    <>
      {pageData.map((item, index) => {
        return <PageContentProvider key={index} content={item.content} type={item.type} />;
      })}
      <SectionCard>
        <SectionCard.Header sectionTitle="Category Selector" openSection={openSection} setOpenSection={setOpenSection} />
        <SectionCard.Body openSection={openSection} setOpenSection={setOpenSection}>
          <SelectCategory category={category} setCategory={setCategory} fullCategoryName={fullCategoryName} />
        </SectionCard.Body>
      </SectionCard>
    </>
  );
};

export default CategorySelectorPage;
