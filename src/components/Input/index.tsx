import React from "react";

type InputPropsType = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
const Input = ({ ...props }: InputPropsType) => {
  return <input {...props} className={`font-inter input text-base bg-white pr-8 h-9 text-quaternary border w-full border-gray-300 focus:border-gray-400 ${props.className}`} />;
};

export default Input;
