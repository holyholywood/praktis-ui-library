import React, { useState, useEffect } from "react";
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
  const [isCategoryListLoading, setCategoryListLoading] = useState([false, false, false, false]);
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
  const getCategoryHandler = async (level: number, parent_id?: number | null, parent_name?: string | null) => {
    let params = level === 1 ? parentParams : childParamsProvider(parent_id ?? null, parent_name ?? null);

    setLoading(level - 1, true);
    const response = await Fetch.get<Category[]>("/itemcategory/v1/", params);
    setLoading(level - 1, false);

    switch (level) {
      case 1:
        setCategoryListData({ ...categoryListData, level1: response, level2: [], level3: [], level4: [] });
        break;

      case 2:
        setCategoryListData({ ...categoryListData, level2: response, level3: [], level4: [] });
        break;

      case 3:
        setCategoryListData({ ...categoryListData, level3: response, level4: [] });
        break;
      case 4:
        setCategoryListData({ ...categoryListData, level4: response });
        break;

      default:
        break;
    }
  };

  /**
   * categoryHandler()
   * Handling category setter either data or selected
   * @param level
   * @param category
   */
  const selectCategoryHandler = (level: number, category: Category) => {
    if (category.has_child) {
      getCategoryHandler(level + 1, category.id, category.Name);
    }
    setFullCategoryName(category.FullCategoryName);

    switch (level) {
      case 1:
        setCategoryList({ ...categoryList, level1: category, level2: null, level3: null, level4: null });
        break;

      case 2:
        setCategoryList({ ...categoryList, level2: category, level3: null, level4: null });
        break;

      case 3:
        setCategoryList({ ...categoryList, level3: category, level4: null });
        break;

      case 4:
        setCategoryList({ ...categoryList, level4: category });
        break;

      default:
        break;
    }
  };

  /**
   *
   */

  const searchCategory = async (name: string) => {
    const searchParams = {
      marketplace,
      only_root_category: true,
      name,
    };
    // Delay the execution of the Fetch method by 3000 ms
    const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
    await delay(1500);

    const response = await Fetch.get<Category[]>("/itemcategory/v1/", searchParams);
    setCategoryListData({ ...categoryListData, level1: response });
  };

  /**
   * @Loading State
   */
  const setLoading = (index: number, val: boolean) => {
    const loading = isCategoryListLoading;
    loading[index] = val;
  };
  /**
   * @Default Value Setter
   */
  useEffect(() => {
    getCategoryHandler(1);
    setCategoryListLoading([false, false, false, false]);
  }, []);
  useEffect(() => {
    if (defaultCategoryName) setFullCategoryName(defaultCategoryName);
  }, [defaultCategoryName]);

  return { categoryList, categoryListData, isCategoryListLoading, FullCategoryName, selectCategoryHandler, searchCategory };
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
