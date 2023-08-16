import { defaultPositionType, defaultSizeType } from "@/type/GlobalStyleType";
import React, { ReactNode } from "react";
import { createPortal } from "react-dom";
import { AiOutlineClose } from "react-icons/ai";

type ModalPropsType = {
  title: string | number;
  size?: defaultSizeType;
  position?: defaultPositionType;
  children: ReactNode;
  id?: string;
  option?: {
    withBackdrop?: boolean;
  };
  isOpen: boolean;
  onOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const modalSizeProvider = {
  sm: { className: "w-[90vh] max-w-md lg:w-full " },
  default: { className: "w-[90vh] max-w-xl lg:w-full " },
  md: { className: "w-[90vh] max-w-4xl lg:w-full " },
  lg: { className: "w-[90vh] max-w-6xl lg:w-full " },
};

const Modal = ({ isOpen, onOpen, title, size = "default", position = "center", option = { withBackdrop: true }, children }: ModalPropsType) => {
  return (
    <>
      {isOpen &&
        createPortal(
          <div onClick={() => onOpen(false)} className="min-h-screen w-screen absolute  top-0 z-[100] flex justify-center items-center text-black">
            {option.withBackdrop && <Modal.Backdrop />}
            {/* Modal */}
            <div onClick={(e) => e.stopPropagation()} className={`bg-white border shadow ${modalSizeProvider[size].className} relative top-0 z-[100] rounded-xl`}>
              {/* Header */}
              <div className="flex justify-between items-center p-4 border-b-2 border-secondary/20">
                <h1 className="text-lg md:text-2xl">{title}</h1>
                <button onClick={() => onOpen(false)}>
                  <AiOutlineClose className="text-xl" />
                </button>
              </div>

              {/* Content */}
              <div>{children}</div>
            </div>
          </div>,
          //</Modal.Backdrop>
          document.body
        )}
    </>
  );
};

/**
 *
 * Modal Backdrop
 */
Modal.Backdrop = () => {
  return <div className="bg-black/20  min-h-screen w-screen absolute  top-0 z-[99]"></div>;
};

/**
 *
 * Modal Header
 */
Modal.Header = () => {
  return (
    <div className="flex justify-between items-center p-4 border-b-2 border-secondary/20">
      <h1 className="text-lg md:text-2xl">Modal title</h1>
      <button>
        <AiOutlineClose className="text-xl" />
      </button>
    </div>
  );
};

/**
 *
 * Modal Body
 *
 */

Modal.Body = ({ ...props }: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => {
  return (
    <div {...props} className={`p-4 my-2 ${props.className ?? ""}`}>
      {props.children}
    </div>
  );
};

/**
 *
 * ModalFooter
 *
 */
Modal.Footer = ({ children }: { children: ReactNode }) => {
  return <div className="px-4 py-4">{children}</div>;
};

export default Modal;
