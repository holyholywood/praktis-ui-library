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
