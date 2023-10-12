import React, { useEffect } from "react";
import hljs from "highlight.js/lib/core";
import "highlight.js/styles/default.css"; // You can choose a different stylesheet

// Import languages you want to support for syntax highlighting
import javascript from "highlight.js/lib/languages/javascript";
import typescript from "highlight.js/lib/languages/typescript";
import json from "highlight.js/lib/languages/json";
import { copyToClipboard } from "@/utils/helpers";
import { IoClipboardOutline } from "react-icons/io5";
import { BsFiletypeJson } from "react-icons/bs";
import { SiJavascript, SiTypescript } from "react-icons/si";

// Register the languages you imported
hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("typescript", typescript);
hljs.registerLanguage("json", json);

interface CodeProps {
  language: "javascript" | "typescript" | "json";
  code: string;
}

const Code: React.FC<CodeProps> = ({ language = "typescript", code }) => {
  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <div className="space-y-1 border rounded overflow-hidden">
      <div className="bg-white pb-1 pt-2 px-3 flex justify-between items-center">
        <CodeIcon language={language} />
        <button onClick={() => copyToClipboard(code)} className="flex items-center gap-2 text-sm">
          <IoClipboardOutline /> Copy
        </button>
      </div>
      <pre>
        <code className={`hljs ${language}`}>{code}</code>
      </pre>
    </div>
  );
};

export default Code;

type CodeIconProps = {
  language: CodeProps["language"];
};

const Icons = {
  json: BsFiletypeJson,
  typescript: SiTypescript,
  javascript: SiJavascript,
};
const iconStyle = {
  json: "text-orange-300",
  typescript: "text-blue-600",
  javascript: "text-yellow-400",
};
const CodeIcon = ({ language }: CodeIconProps) => {
  const Icon = Icons[language];
  return (
    <span className={`${iconStyle[language]}`}>
      <Icon />
    </span>
  );
};
