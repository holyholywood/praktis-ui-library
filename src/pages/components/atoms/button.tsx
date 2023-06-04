import Button from "@/components/Button";
import PageContentProvider, { pageContent } from "@/components/Common/templates/PageContentProvider";
import Fetch from "@/utils/api/base-client";
import { GetServerSideProps } from "next";
import React, { useEffect, useState } from "react";

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
          Get Parent
        </Button>
        <Button onClick={() => getData2(92332, "Kecantikan")} variant="outline" color="primary">
          Get Child 1
        </Button>
      </div>
    </>
  );
};
const useSelectCategory = (defaultCategoryName?: string) => {
  const [categoryList, setCategoryList] = useState<categoryLevelListType>(defaultCategoryList);
  const [categoryListData, setCategoryListData] = useState<categoryLevelDataListType>(defaultCategoryListData);
  const [FullCategoryName, setFullCategoryName] = useState<string>("");
  const marketplace = "MASTER";

  /**
   * @Helpers
   */
  const parentParams = { marketplace, only_root_category: true };
  const childParamsProvider = (parent_id: number | null, parent_name: string | null) => {
    return { page_number: 1, limit: 10, marketplace, item_category_parent_id: parent_id, name: parent_name };
  };

  /**
   * @Handler
   * @param level
   */

  const getCategoryHandler = async (level: number, parent_id: number | null, parent_name: string | null) => {
    let params = level === 1 ? parentParams : childParamsProvider(parent_id, parent_name);

    const response = await Fetch.get<Category[]>("/itemcategory/v1/", params);

    switch (level) {
      case 1:
        setCategoryListData({ ...categoryListData, level1: response });
        break;

      case 2:
        setCategoryListData({ ...categoryListData, level2: response });
        break;

      case 3:
        setCategoryListData({ ...categoryListData, level3: response });
        break;

      default:
        setCategoryListData({ ...categoryListData, level4: response });
        break;
    }
  };

  const selectCategoryHandler = (level: number, category: Category) => {
    if (category.has_child) {
      getCategoryHandler(level + 1, category.id, category.Name);
    }
    setFullCategoryName(category.FullCategoryName);

    switch (level) {
      case 1:
        setCategoryList({ ...categoryList, level1: category });
        break;

      case 2:
        setCategoryList({ ...categoryList, level2: category });
        break;

      case 3:
        setCategoryList({ ...categoryList, level3: category });
        break;

      default:
        setCategoryList({ ...categoryList, level4: category });
        break;
    }
  };

  /**
   * @Default Value Setter
   */
  useEffect(() => {
    if (defaultCategoryName) setFullCategoryName(defaultCategoryName);
  }, [defaultCategoryName]);

  return { categoryList, categoryListData, FullCategoryName, selectCategoryHandler };
};

const getData = async () => {
  // const response = await Fetch.get("/user/me/");
  const parameter = { marketplace: "MASTER", only_root_category: true };

  const response = await Fetch.get<Category[]>("/itemcategory/v1/", parameter);
  console.info(response);
};
const getData2 = async (parent_id: number, parent_name: string) => {
  const parameter = { page_number: 1, limit: 10, marketplace: "MASTER", item_category_parent_id: parent_id, name: parent_name };

  const response = await Fetch.get<Category[]>(`/itemcategory/v1/`, parameter);

  console.info(response);
};

export default ButtonComponentPage;

const defaultCategoryList: categoryLevelListType = {
  level1: null,
  level2: null,
  level3: null,
  level4: null,
};
const defaultCategoryListData: categoryLevelDataListType = {
  level1: [],
  level2: [],
  level3: [],
  level4: [],
};
type categoryLevelListType = {
  level1: Category | null;
  level2: Category | null;
  level3: Category | null;
  level4: Category | null;
};
type categoryLevelDataListType = {
  level1: Category[];
  level2: Category[];
  level3: Category[];
  level4: Category[];
};
type Category = {
  id: number;
  MarketplaceId: string;
  MarketplaceCategoryId: string;
  Name: string;
  FullCategoryName: string;
  NameLocale: null | string;
  DaysToShipLimit: null | number;
  IsSupportSizeChart: boolean;
  Created_By: null | string;
  Updated_By: null | string;
  Created_On: string;
  Updated_On: string;
  parent: null | string;
  has_child: boolean;
  IsActive: boolean;
};

// 92332
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
/**
 * @APILOOP
 *
 */
