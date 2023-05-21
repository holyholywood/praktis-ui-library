export type colorType = "primary" | "secondary" | "dark" | "light" | "danger" | "tertiary" | "quaternary" | "quinary";

const baseColor = {
  primary: {
    className: "bg-primary text-white",
    outlined: "bg-base-primary border-primary text-primary",
  },
  secondary: {
    className: "bg-secondary text-white",
    outlined: "border-secondary text-secondary",
  },
  dark: {
    className: "bg-maindark text-white",
    outlined: "border-maindark text-white",
  },
  light: {
    className: "bg-white text-maindark",
    outlined: "border-white text-maindark",
  },
  danger: {
    className: "bg-danger text-white",
    outlined: "border-danger text-white",
  },
  tertiary: {
    className: "bg-tertiary text-maindark",
    outlined: "border-tertiary text-maindark",
  },
  quaternary: {
    className: "bg-quaternary text-white",
    outlined: "border-quaternary text-quartenary",
  },
  quinary: {
    className: "bg-quinary text-maindark",
    outlined: "border-quinary text-maindark",
  },
};

const colorProvider = (color: colorType, isOutline: boolean = false) => {
  return baseColor[color][`${isOutline ? "outlined" : "className"}`];
};

export default colorProvider;
