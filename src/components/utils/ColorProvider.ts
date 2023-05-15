export type colorType = "primary" | "secondary" | "dark" | "light";

const baseColor = {
  primary: {
    className: "bg-primary text-white",
  },
  secondary: {
    className: "bg-secondary text-white",
  },
  dark: {
    className: "bg-maindark text-white",
  },
  light: {
    className: "bg-white text-maindark",
  },
};

const colorProvider = (color: colorType) => {
  return baseColor[color].className;
};

export default colorProvider;
