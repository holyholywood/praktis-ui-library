import { useState } from "react";
import Button from "../Button";
import Modal from "../Modal";
import { AiFillCaretDown } from "react-icons/ai";
import { RiArrowDropRightLine, RiSearchLine } from "react-icons/ri";
import { Category, categoryLevelDataListType } from "./type";
import { VscLoading } from "react-icons/vsc";

type ItemCategorySelectPropsType = {
  categoryListData: categoryLevelDataListType;
  selectCategoryHandler: (level: number, category: Category) => void;
  searchCategoryHandler: (name: string) => Promise<void>;
  isLoading: boolean[];
  FullCategoryName: string;
};

const ItemCategorySelect = ({
  categoryListData,
  selectCategoryHandler,
  isLoading,
  FullCategoryName,
  searchCategoryHandler,
}: ItemCategorySelectPropsType) => {
  const [openModal, setOpenModal] = useState(false);
  const categoryDataIndex: (keyof categoryLevelDataListType)[] = Object.keys(categoryListData) as (keyof categoryLevelDataListType)[];

  return (
    <>
      <Button onClick={() => setOpenModal(true)} variant="outline" color="quaternary" className="w-full flex justify-between items-center">
        <span>{FullCategoryName}</span>
        <span>
          <AiFillCaretDown />
        </span>
      </Button>
      <Modal size="lg" title="Select Category" isOpen={openModal} onOpen={setOpenModal}>
        <Modal.Body>
          {/* Header */}
          <SelectCategoryHeader searchCategoryHandler={searchCategoryHandler} />
          {/* Body */}
          <div className="border text-quaternary overflow-hidden rounded h-[400px] flex w-full bg-base-secondary">
            {categoryDataIndex.map((level, index) => {
              return (
                <div className="border h-full w-1/4">
                  <ul className="text-sm font-thin">
                    {categoryListData[level].length > 0 &&
                      !isLoading[index] &&
                      categoryListData[level].map((categoryData, i) => {
                        return (
                          <li key={i}>
                            <button
                              onClick={() => selectCategoryHandler(index + 1, categoryData)}
                              className="flex items-center justify-between w-full py-2 px-2 hover:bg-secondary/10"
                            >
                              <span>{categoryData.Name}</span>
                              {categoryData.has_child && (
                                <span className="text-xl">
                                  <RiArrowDropRightLine />
                                </span>
                              )}
                            </button>
                          </li>
                        );
                      })}
                    {isLoading[index] && <Loading />}
                  </ul>
                </div>
              );
            })}
          </div>
          {/* Footer */}
          <SelectCategoryFooter FullCategoryName={FullCategoryName} />
        </Modal.Body>
        <Modal.Footer>
          <div className="flex justify-end">
            <Button className="self-end lg:h-9 lg:px-10" onClick={() => setOpenModal(false)}>
              Submit
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ItemCategorySelect;

const SelectCategoryHeader = ({ searchCategoryHandler }: { searchCategoryHandler: (name: string) => Promise<void> }) => {
  const [keyword, setSearchKeyword] = useState<string>("");
  const [searchHistory, setSearchHistory] = useState<string[]>([]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(e.target.value);
    /**
     * Search Category
     */
    searchCategoryHandler(e.target.value);
  };

  return (
    <>
      <div className="w-1/2 text-quaternary border h-8 rounded-lg border-quaternary flex items-center overflow-hidden pr-2">
        <input
          type="text"
          value={keyword}
          onChange={handleSearch}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setSearchHistory([...searchHistory, keyword]);
            }
          }}
          placeholder="Search Category"
          className="w-full text-quaternary pl-2 text-sm focus:outline-none"
        />
        <RiSearchLine className="text-lg ml-auto text-quaternary" />
      </div>
      <div className="mt-2 mb-4 text-xs text-quaternary flex gap-2">
        <span>Recently used : </span>
        {searchHistory.map((name, i) => {
          return (
            <button
              onClick={() => {
                searchCategoryHandler(name);
                setSearchKeyword(name);
              }}
              key={i}
              className={`border ${
                i === 0 ? "bg-secondary/20 border-secondary text-secondary" : "border-quaternary text-quaternary "
              } px-2 rounded-full`}
            >
              {name}
            </button>
          );
        })}
      </div>
    </>
  );
};

const SelectCategoryFooter = ({ FullCategoryName }: { FullCategoryName: string }) => {
  return (
    <div className="mt-4">
      <div className="self-start w-fit text-quaternary">
        <span className="mr-2">Current Selection :</span>
        {FullCategoryName && (
          <span className="rounded-3xl px-4 py-0.5 border border-[#3D8DA6] bg-[#D8E8ED] text-[#3D8DA6] w-fit text-sm inline-flex justify-center items-center gap-2">
            {FullCategoryName}
          </span>
        )}
      </div>
    </div>
  );
};

const Loading = () => {
  return (
    <div className="flex justify-center items-center w-full h-[400px]">
      <div className="flex gap-2 items-center">
        <VscLoading className="animate-spin font-bold" />
        Loading...
      </div>
    </div>
  );
};
