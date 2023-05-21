export type shapeVariantType = "default" | "outline" | "rounded";

const baseShapeVariant = {
  default: {
    className: "md:rounded-lg rounded-md",
  },
  outline: {
    className: "md:rounded-lg rounded-md border",
  },
  rounded: {
    className: "rounded-full",
  },
};
export const shapeProvider = (variant: shapeVariantType) => {
  return baseShapeVariant[variant].className;
};
