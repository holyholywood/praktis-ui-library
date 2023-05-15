import { copyToClipboard } from "@/utils/helpers";
import React, { useState } from "react";
import { IoClipboardOutline } from "react-icons/io5";

const PreText = ({ code }: { code: string }) => {
  return (
    <div className="bg-gray-200  shadow rounded-sm">
      <div className="flex px-4 justify-end py-2">
        <Tooltips text="Copy">
          <button onClick={() => copyToClipboard(code)}>
            <IoClipboardOutline />
          </button>
        </Tooltips>
      </div>
      <pre className="bg-black text-lime-400 px-2 py-4 rounded-sm">{code}</pre>
    </div>
  );
};

const Tooltips = ({
  children,
  text,
  position = "bottom",
  containerDisplay = "inline",
}: {
  children: React.ReactNode;
  text: string;
  position?: "bottom";
  containerDisplay?: string;
}) => {
  const [showTooltip, setShowTooltip] = useState(false);
  return (
    <div
      style={{ display: containerDisplay }}
      className="relative"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {children}
      {showTooltip && (
        <div className="absolute top-full  border rounded px-4 py-1 bg-gray-500 text-white p-1 text-xs font-extralight">{text}</div>
      )}
    </div>
  );
};
export default PreText;
