import { useEffect, useState } from "react";
import Button from "../Button";
import { AiFillCaretDown } from "react-icons/ai";
import Modal from "../Modal";
import { RiSearchLine, RiArrowDropRightLine } from "react-icons/ri";
import { categoryType } from "@/pages/components/specials/category-selector";

type SelectCategoryPropsType = {
  category: categoryType;
  setCategory: React.Dispatch<React.SetStateAction<categoryType>>;
  fullCategoryName: string | null;
};

const SelectCategory = ({ category, setCategory, fullCategoryName }: SelectCategoryPropsType) => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <Button onClick={() => setOpenModal(true)} variant="outline" color="quaternary" className="w-full flex justify-between items-center">
        <span>{fullCategoryName ?? "Select Category"}</span>
        <span>
          <AiFillCaretDown />
        </span>
      </Button>

      <Modal size="lg" title={defaultTitle} isOpen={openModal} onOpen={setOpenModal}>
        <Modal.Body>
          <SelectorBody category={category} setCategory={setCategory} />
          <div className="mt-4">
            <span className="self-start">
              Current Selection :{" "}
              <span className="rounded-3xl px-2 py-0.5 border border-[#3D8DA6] bg-[#D8E8ED] text-[#3D8DA6] w-fit text-sm inline-flex justify-center items-center gap-2">
                {fullCategoryName}
              </span>
            </span>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="flex justify-end">
            <Button className="self-end lg:h-9 lg:px-10">Submit</Button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default SelectCategory;

const defaultTitle = "Select Category";

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
        <button onClick={() => console.log(categoryList)}>cek</button>
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
  const [data, setData] = useState<any | null>(null);
  const [error, setError] = useState(null);
  const [categoryList, setCategoryList] = useState<any[]>();

  useEffect(() => {
    setisLoading(true);
    if (level <= activeLevel) {
      fetch("http://localhost:3000/api/data/category-mapping/" + level)
        .then((response) => response.json())
        .then((result) => {
          setData(result);
          setCategoryList(result.data);
          setisLoading(false);
        })
        .catch((err) => {
          setError(err);
          setisLoading(false);
        });
    }
  }, [activeLevel]);

  const setCategoryPerLevel = (selectedCategory: categoryItemType) => {
    // console.log(categoryName);
    if (level !== 4) {
      setActiveLevel(level + 1);
    }
    console.log(category);
    switch (level) {
      case 1:
        setCategory({ ...category, level1: selectedCategory });
        break;
      case 2:
        setCategory({ ...category, level2: selectedCategory });

        break;
      case 3:
        setCategory({ ...category, level3: selectedCategory });

        break;
      default:
        setCategory({ ...category, level4: selectedCategory });
        break;
    }
  };
  return (
    <ul className="text-sm font-thin">
      {level <= activeLevel &&
        categoryList &&
        categoryList.map((el, i) => {
          return (
            <li key={i}>
              <button
                onClick={() => setCategoryPerLevel(el)}
                className="flex items-center justify-between w-full py-2 px-2 hover:bg-secondary/10"
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
        })}
    </ul>
  );
};

type SelectorBodySectionPropsType = {
  children: React.ReactNode;
};
SelectorBody.Content = (props: SelectorBodySectionPropsType) => {
  return <div className="border h-full w-1/4">{props.children}</div>;
};

type categoryItemType = {
  Name: string;
  id: number;
  has_child: boolean;
};
