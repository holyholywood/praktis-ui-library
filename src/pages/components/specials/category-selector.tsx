import PageContentProvider, { pageContent } from "@/components/Common/templates/PageContentProvider";
import SectionCard from "@/components/SectionCard";
import SelectCategory from "@/components/SelectCategory";
import { categoryType } from "@/components/SelectCategory/type";
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

const categorydefaulValue: categoryType = {
  level1: { Name: "", id: null, has_child: false },
  level2: { Name: "", id: null, has_child: true },
  level3: { Name: "", id: null, has_child: false },
  level4: { Name: "", id: null, has_child: true },
};

const CategorySelectorPage = ({ pageData }: { pageData: pageContent }) => {
  const [openSection, setOpenSection] = useState(true);
  /**
   * @Category
   */
  const [category, setCategory] = useState<categoryType>(categorydefaulValue);
  const [fullCategoryName, setFullCategoryName] = useState<string | null>("Sepatu dan Pakaian Wanita > Pakaian > Atasan > Kaos");

  useEffect(() => {
    const categoryKeys: Array<keyof categoryType> = ["level1", "level2", "level3", "level4"];
    let fullCategoryName = formatCategoryName(categoryKeys.map((key) => category[key].Name));
    setFullCategoryName(fullCategoryName.length < 1 ? "Select Category" : fullCategoryName);
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

const formatCategoryName = (array: string[]) => {
  return array.filter((value) => value !== "").join(" > ");
};
