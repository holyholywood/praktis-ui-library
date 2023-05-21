import React, { useState } from "react";
import ModalContext from "@/store/ModalStore";

const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <ModalContext.Provider value={{ showModal, setShowModal }}>{children}</ModalContext.Provider>
    </>
  );
};

export default ModalProvider;
