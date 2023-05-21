import { Context, Dispatch, SetStateAction, createContext } from "react";

type ModalContextType = {
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
};

const defaultModalContext: ModalContextType = {
  showModal: false,
  setShowModal: () => {},
};

const ModalContext: Context<ModalContextType> = createContext(defaultModalContext);

export default ModalContext;
