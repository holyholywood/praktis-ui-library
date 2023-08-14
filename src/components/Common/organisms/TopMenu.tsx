import React from "react";
import { HiLibrary } from "react-icons/hi";
import { AiFillGithub } from "react-icons/ai";
import { IoMoonSharp } from "react-icons/io5";
import Link from "next/link";
import Button from "@/components/Button";
const TopMenu = () => {
  return (
    <div className="sticky top-0 bg-white z-10">
      <nav className="w-full max-w-7xl mx-auto flex justify-between h-16 py-4">
        <div className="flex items-center text-xl gap-2">
          <HiLibrary className="text-primary text-4xl" />
          <Link href={"/"} className="text-quinary">
            UI Library
          </Link>
        </div>
        <input type="text" className=" rounded shadow-lg text-primary w-full max-w-xl px-4 py-1 focus:outline-none focus:ring focus:ring-primary" placeholder="Search" />
        <ul className="flex gap-4 items-center">
          <li>
            <Link href={"https://github.com/holyholywood/praktis-ui-library"} target="_blank">
              <AiFillGithub className="text-2xl" />
            </Link>
          </li>
          <li>
            <IoMoonSharp className="text-2xl" />
          </li>
        </ul>
        <Button>Login</Button>
      </nav>
    </div>
  );
};

export default TopMenu;
