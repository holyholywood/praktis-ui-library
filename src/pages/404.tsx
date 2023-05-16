import React from "react";
import { NextPageCustom } from "./_app";
import { FcCancel } from "react-icons/fc";
import { useRouter } from "next/router";
const Error404Page: NextPageCustom = () => {
  const router = useRouter();
  return (
    <main className="flex items-center justify-center flex-col min-h-screen">
      <FcCancel className="text-7xl mb-2" />
      <div className="select-none">404 | Not Found</div>
      <button onClick={router.back} className="text-quaternary/50 duration-500 hover:text-quaternary mt-20 underline">
        Go Back
      </button>
    </main>
  );
};

Error404Page.woLayout = true;

export default Error404Page;
