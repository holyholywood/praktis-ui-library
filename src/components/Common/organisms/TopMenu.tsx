import React, { useState } from "react";
import { HiLibrary } from "react-icons/hi";
import { AiFillGithub } from "react-icons/ai";
import { IoMoonSharp } from "react-icons/io5";
import Link from "next/link";
import Button from "@/components/Button";
import Modal from "@/components/Modal";
import Input from "@/components/Input";
import Heading from "../atoms/Heading";
import Fetch from "@/utils/api/base-client";
const TopMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const handleLogin = async () => {
    const result = await Fetch.post("/user/login/", {
      username,
      password,
      rememberMe,
    });

    console.info(result);
  };
  return (
    <>
      <div className="sticky top-0 bg-white z-10">
        <nav className="w-full max-w-7xl mx-auto flex justify-between h-16 py-4 pr-4 md:pr-0">
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
          <Button onClick={() => setIsOpen(true)}>Login</Button>
        </nav>
      </div>
      <Modal isOpen={isOpen} onOpen={setIsOpen} id="modal-1" title="Login">
        <Modal.Body>
          <div className="space-y-4 max-w-sm mx-auto">
            <Heading type="subheading" className="text-center">
              Please Enter your Credential
            </Heading>
            <div className="space-y-2">
              <label htmlFor="username">Username</label>
              <Input id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div className="space-y-2">
              <label htmlFor="password">Password</label>
              <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="space-x-2 flex justify-end">
              <label htmlFor="remember" className="text-sm">
                Remember Me
              </label>
              <input id="remember" type="checkbox" checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="max-w-sm mx-auto pb-4">
            <Button className="mx-auto block w-full" onClick={handleLogin}>
              Submit
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default TopMenu;
