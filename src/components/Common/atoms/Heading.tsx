import React from "react";

interface headingPropsInterface extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
  type?: "title" | "subtitle" | "heading" | "subheading";
}

const headingStyle = {
  title: {
    className: "font-bold text-2xl",
  },
  subtitle: {
    className: "font-semibold text-lg",
  },
  heading: {
    className: "font-bold text-lg",
  },
  subheading: {
    className: "font-semibold",
  },
};

const Heading = ({ type = "title", ...props }: headingPropsInterface) => {
  return (
    <h1 {...props} className={`${props.className} ${headingStyle[type].className}`}>
      {props.children}
    </h1>
  );
};

export default Heading;
