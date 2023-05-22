import React, { useEffect, useState } from "react";
import { RiArrowDropRightLine } from "react-icons/ri";
import { VscLoading } from "react-icons/vsc";
import { categoryItemType, categoryType, levelKeyType } from "./type";

type categoryListPropsType = {
  categoryList: categoryItemType[] | null; //hide
  category: categoryType;
  setCategory: React.Dispatch<React.SetStateAction<categoryType>>;
  level: 1 | 2 | 3 | 4;
  activeLevel: 1 | 2 | 3 | 4 | number;
  setActiveLevel: React.Dispatch<React.SetStateAction<1 | 2 | 3 | 4 | number>>;
};

const CategoryList = ({ level, activeLevel, setActiveLevel, category, setCategory }: categoryListPropsType) => {
  const [isLoading, setisLoading] = useState(false);
  const [categoryList, setCategoryList] = useState<any[]>();
  const [levelKey, setLevelKey] = useState<levelKeyType>("level1");

  useEffect(() => {
    switch (level) {
      case 1:
        setLevelKey("level1");
        break;
      case 2:
        setLevelKey("level2");
        break;
      case 3:
        setLevelKey("level3");
        break;
      default:
        setLevelKey("level4");
        break;
    }
  }, []);

  useEffect(() => {
    setisLoading(true);
    if (level <= activeLevel) {
      fetch("http://localhost:3000/api/data/category-mapping/" + level)
        .then((response) => response.json())
        .then((result) => {
          setCategoryList(result.data);
          setisLoading(false);
        })
        .catch((err) => {
          setisLoading(false);
        });
    }
  }, [activeLevel]);

  const setCategoryPerLevel = (selectedCategory: categoryItemType) => {
    if (level !== 4) {
      setActiveLevel(level + 1);
    }

    switch (level) {
      case 1:
        setCategory({
          ...category,
          level1: selectedCategory,
          level2: { Name: "", id: null, has_child: true },
          level3: { Name: "", id: null, has_child: false },
          level4: { Name: "", id: null, has_child: true },
        });
        break;
      case 2:
        setCategory({
          ...category,
          level2: selectedCategory,
          level3: { Name: "", id: null, has_child: false },
          level4: { Name: "", id: null, has_child: true },
        });

        break;
      case 3:
        setCategory({ ...category, level3: selectedCategory, level4: { Name: "", id: null, has_child: true } });

        break;
      default:
        setCategory({ ...category, level4: selectedCategory });
        break;
    }
  };
  return (
    <ul className="text-sm font-thin">
      {isLoading && activeLevel === level ? (
        <div className="flex justify-center items-center w-full h-[400px]">
          <Loading />
        </div>
      ) : (
        level <= activeLevel &&
        categoryList &&
        categoryList.map((el, i) => {
          return (
            <li key={i}>
              <button
                onClick={() => setCategoryPerLevel(el)}
                className={`flex items-center justify-between w-full py-2 px-2 hover:bg-secondary/10 ${
                  el.id === category[levelKey].id && "bg-secondary/20"
                }`}
              >
                <span>{el.Name}</span>
                {el.has_child && (
                  <span className="text-xl">
                    <RiArrowDropRightLine />
                  </span>
                )}
              </button>
            </li>
          );
        })
      )}
    </ul>
  );
};

export default CategoryList;

const Loading = () => {
  return (
    <div className="flex gap-2 items-center">
      <VscLoading className="animate-spin font-bold" />
      Loading...
    </div>
  );
};
