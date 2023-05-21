import ModalContext from "@/store/ModalStore";
import React, { useContext } from "react";

const useModal = (id?: string): [boolean, React.Dispatch<React.SetStateAction<boolean>>, string?] => {
  const { showModal, setShowModal } = useContext(ModalContext);

  return [showModal, setShowModal, id];
};

export default useModal;
