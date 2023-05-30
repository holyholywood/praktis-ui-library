import { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import SelectorBody from "./SelectorBody";
import { categoryType } from "./type";
import Button from "../Button";
import Modal from "../Modal";

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
        <span>{fullCategoryName ?? defaultTitle}</span>
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
              <span className="rounded-3xl px-4 py-0.5 border border-[#3D8DA6] bg-[#D8E8ED] text-[#3D8DA6] w-fit text-sm inline-flex justify-center items-center gap-2">
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
