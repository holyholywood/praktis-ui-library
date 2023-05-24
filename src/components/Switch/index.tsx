import React, { useState } from "react";
import { RiCheckFill, RiCloseFill } from "react-icons/ri";

type switchPropsType = {
  label?: {
    on: string;
    off: string;
  };
  setIsCheck: React.Dispatch<React.SetStateAction<boolean>>;
  isChecked: boolean;
};

const Switch = ({ isChecked, setIsCheck, label }: switchPropsType) => {
  return (
    <label className="relative w-fit inline-flex items-center cursor-pointer gap-2">
      <input type="checkbox" onChange={(e) => setIsCheck(e.target.checked)} className="sr-only peer" />
      <div className="w-11 h-6 flex justify-between items-center px-1 bg-quaternary peer-focus:outline-none rounded-full peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-secondary">
        <RiCheckFill className="text-base-secondary" />
        <RiCloseFill className="text-base-secondary" />
      </div>
      {label && <span className="text-secondary text-sm">{isChecked ? label.on : label.off}</span>}
    </label>
  );
};

export default Switch;
