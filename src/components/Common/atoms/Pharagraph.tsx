import React from "react";

const Pharagraph = ({ children }: { children: React.ReactNode }) => {
  return <p className={` text-sm indent-4 font-light my-4`}>{children}</p>;
};

export default Pharagraph;
