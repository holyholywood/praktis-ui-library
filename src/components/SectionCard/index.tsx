import React, { useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";

/**
 * Section Card Props Type
 */

type sectionCardPropsType = {
  children: React.ReactNode;
};

/**
 * Section Body Type
 */

type sectionCardBodyPropsType = {
  setOpenSection: React.Dispatch<React.SetStateAction<boolean>>;
  openSection: boolean;
  children: React.ReactNode;
};

/**
 * Section Header Type
 */

type sectionHeaderPropsType = {
  setOpenSection: React.Dispatch<React.SetStateAction<boolean>>;
  openSection: boolean;
  sectionTitle: string;
  children?: React.ReactNode;
  option?: {
    toggleShow: boolean;
  };
};

const SectionCard = ({ children }: sectionCardPropsType) => {
  return (
    <section className="border transition-all scroll-smooth border-[#8C9196] rounded-lg flex flex-col w-full mt-2 overflow-hidden">
      {children}
    </section>
  );
};

export default SectionCard;

/**
 * Section Body
 */

SectionCard.Body = ({ setOpenSection, openSection, children }: sectionCardBodyPropsType) => {
  return <div className={`${!openSection && "hidden"} rounded-b-lg bg-base-primary py-2 px-4`}>{children}</div>;
};

/**
 * Section Header
 */

SectionCard.Header = ({ setOpenSection, openSection, sectionTitle, children, option = { toggleShow: true } }: sectionHeaderPropsType) => {
  return (
    <div
      className={`
        w-full flex justify-between items-center px-4 py-2
        ${openSection && "border-b border-[#C9CCCF]"}
      `}
    >
      <span className="text-[#3D8DA6] flex items-center gap-4">
        <h4 className="font-bold text-xl">{sectionTitle}</h4>
      </span>
      <div className="flex items-center gap-2">
        {children}
        {option?.toggleShow && (
          <button onClick={() => setOpenSection((prevState) => !prevState)}>
            <RiArrowDownSLine
              className={`text-[#4F4E4E] text-xl duration-200
              ${openSection && "rotate-180"} `}
            />
          </button>
        )}
      </div>
    </div>
  );
};
