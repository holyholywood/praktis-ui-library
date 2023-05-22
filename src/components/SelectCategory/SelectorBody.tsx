import React, { useState } from "react";
import CategoryList from "./CategoryList";
import { RiSearchLine } from "react-icons/ri";
import { categoryType } from "./type";

type SelectBodyCategoryPropsType = {
  category: categoryType;
  setCategory: React.Dispatch<React.SetStateAction<categoryType>>;
};

const SelectorBody = ({ category, setCategory }: SelectBodyCategoryPropsType) => {
  const [activeLevel, setActiveLevel] = useState<1 | 2 | 3 | 4 | number>(1);
  const [categoryList, setCategoryList] = useState<any>();

  return (
    <div className="border overflow-hidden rounded h-[400px] flex w-full bg-base-secondary">
      <SelectorBody.Content>
        <div className="flex items-center mx-2 px-2 gap-2 border border-quaternary ring ring-quinary/10 rounded-lg py-1 mt-2 mb-4">
          <input type="text" placeholder="Search Parent Category" className="w-52 text-sm focus:outline-none" />
          <RiSearchLine className="text-lg" />
        </div>
        <CategoryList
          level={1}
          activeLevel={activeLevel}
          setActiveLevel={setActiveLevel}
          categoryList={categoryList}
          category={category}
          setCategory={setCategory}
        />
      </SelectorBody.Content>
      <SelectorBody.Content>
        <CategoryList
          level={2}
          activeLevel={activeLevel}
          setActiveLevel={setActiveLevel}
          categoryList={null}
          category={category}
          setCategory={setCategory}
        />
      </SelectorBody.Content>
      <SelectorBody.Content>
        <CategoryList
          level={3}
          activeLevel={activeLevel}
          setActiveLevel={setActiveLevel}
          categoryList={null}
          category={category}
          setCategory={setCategory}
        />
      </SelectorBody.Content>
      <SelectorBody.Content>
        <CategoryList
          level={4}
          activeLevel={activeLevel}
          setActiveLevel={setActiveLevel}
          categoryList={null}
          category={category}
          setCategory={setCategory}
        />
      </SelectorBody.Content>
    </div>
  );
};

export default SelectorBody;

type SelectorBodySectionPropsType = {
  children: React.ReactNode;
};

SelectorBody.Content = (props: SelectorBodySectionPropsType) => {
  return <div className="border h-full w-1/4">{props.children}</div>;
};
