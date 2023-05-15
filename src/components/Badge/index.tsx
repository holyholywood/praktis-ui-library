import React from "react";
import colorProvider, { colorType } from "../utils/ColorProvider";

interface BadgePropsInterface {
  text: string | React.ReactNode;
  size?: "sm" | "default" | "lg";
  color?: colorType;
}

const Badge = ({ text, size = "default", color = "primary" }: BadgePropsInterface) => {
  return <div className={`w-fit px-4 py-1 text-center ${colorProvider(color)} rounded text-xs font-light shadow-sm`}>{text}</div>;
};

export default Badge;
