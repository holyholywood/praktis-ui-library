export type levelKeyType = "level1" | "level2" | "level3" | "level4";

export type categoryItemType = {
  Name: string;
  id: number | null;
  has_child: boolean;
};
export type categoryType = {
  level1: categoryItemType;
  level2: categoryItemType;
  level3: categoryItemType;
  level4: categoryItemType;
};

export type Category = {
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

export type categoryLevelListType = {
  level1: Category | null;
  level2: Category | null;
  level3: Category | null;
  level4: Category | null;
};
export type categoryLevelDataListType = {
  level1: Category[];
  level2: Category[];
  level3: Category[];
  level4: Category[];
};
