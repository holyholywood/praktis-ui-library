import React from "react";

const QuoteText = ({ children }: { children: React.ReactNode }) => {
  return <blockquote className="bg-tertiary py-1 px-2 rounded my-4 italic text-sm">{children}</blockquote>;
};

export default QuoteText;
