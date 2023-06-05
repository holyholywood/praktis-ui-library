import React from "react";
import SelectComp, { MultiValue } from "react-select";

const Select = () => {
  const onChangeHandler = (
    e: MultiValue<{
      value: string;
      label: string;
    }>
  ) => {
    console.info(e);
  };
  return <SelectComp onChange={onChangeHandler} isMulti options={defaultOption} placeholder="Select Variant Option" styles={selectStyle} />;
};

export default Select;

const defaultOption = [
  { value: "dog", label: "Dog" },
  { value: "cat", label: "Cat" },
  { value: "lion", label: "Lion" },
  { value: "elephant", label: "Elephant" },
  { value: "tiger", label: "Tiger" },
  { value: "bear", label: "Bear" },
  { value: "giraffe", label: "Giraffe" },
  { value: "monkey", label: "Monkey" },
  { value: "zebra", label: "Zebra" },
  { value: "penguin", label: "Penguin" },
];

const selectStyle = {
  control: (baseStyles: any) => ({
    ...baseStyles,
    boxShadow: "none",
    minHeight: "fit-content",
    height: "fit-content",
    padding: "0",
    backgroundColor: "white",
    border: "1px solid rgb(209 213 219)",
    borderRadius: "0.5rem",
    color: "inherit",
    "&:hover": {
      border: "1px solid rgb(209 213 219)",
    },
  }),
  multiValue: (baseStyles: any) => ({
    ...baseStyles,
    backgroundColor: "white",
    borderRadius: "999px",
    paddingInline: "0.3rem",
    border: "1px solid #3d8da6",
  }),
  multiValueLabel: (baseStyles: any) => ({
    ...baseStyles,
    color: "#3d8da6",
  }),
  multiValueRemove: (baseStyles: any) => ({
    ...baseStyles,
    color: "#3d8da6",
    ":hover": {
      color: "#DE593D",
    },
  }),
  dropdownIndicator: () => ({
    display: "none",
  }),
};
