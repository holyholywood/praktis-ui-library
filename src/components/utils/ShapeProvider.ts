export type shapeVariantType = "default" | "outline" | "rounded";

const baseShapeVariant = {
  default: {
    className: "md:rounded-lg rounded-md",
  },
  outline: {
    className: "md:rounded-lg rounded-md border-2 border-transparent",
  },
  rounded: {
    className: "rounded-full",
  },
};
export const shapeProvider = (variant: shapeVariantType) => {
  return baseShapeVariant[variant].className;
};
