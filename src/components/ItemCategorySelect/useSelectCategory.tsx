import { useState, useEffect } from "react";
import { Category, categoryLevelDataListType, categoryLevelListType } from "./type";
import Fetch from "@/utils/api/base-client";

/**
 * Hooks for selecting category
 * @param defaultCategoryName (Optional)
 * @returns
 */
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

export default useSelectCategory;

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
