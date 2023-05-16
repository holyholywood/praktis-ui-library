import React from "react";
import colorProvider, { colorType } from "../utils/ColorProvider";
import { shapeProvider } from "../utils/ShapeProvider";

type customButtonProps = {
  color?: colorType;
  variant?: "default" | "outline" | "rounded";
};
type ButtonUILibPropsInterface = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> &
  customButtonProps;

const Button = ({ color = "primary", variant = "default", ...props }: ButtonUILibPropsInterface) => {
  return (
    <button
      {...props}
      className={`${colorProvider(color, variant === "outline")} ${shapeProvider(
        variant
      )} md:font-bold font-semibold whitespace-nowrap capitalize md:text-sm md:px-4 md:h-9 text-xs px-2 h-7 active:-translate-y-[2px] transition-all duration-300 ease-in-out`}
    />
  );
};

export default Button;
