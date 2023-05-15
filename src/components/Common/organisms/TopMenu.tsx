import React from "react";
import { BsFillCaretRightSquareFill } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { IoMoonSharp } from "react-icons/io5";
import Link from "next/link";
const TopMenu = () => {
  return (
    <div className="mb-10">
      <nav className="w-full max-w-7xl mx-auto flex justify-between h-16 py-4">
        <div className="flex items-center text-xl gap-2">
          <BsFillCaretRightSquareFill className="text-primary" />
          <Link href={"/"} className="text-quinary">
            UI Library
          </Link>
        </div>
        <input
          type="text"
          className=" rounded shadow-lg text-primary w-full max-w-xl px-4 py-1 focus:outline-none focus:ring focus:ring-primary"
          placeholder="Search"
        />
        <ul className="flex gap-4 items-center">
          <li>
            <AiFillGithub className="text-2xl" />
          </li>
          <li>
            <IoMoonSharp className="text-2xl" />
          </li>
        </ul>
        <button className="bg-primary text-white rounded px-4 py-1 text-sm font-semibold">Login</button>
      </nav>
    </div>
  );
};

export default TopMenu;
