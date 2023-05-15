import React from "react";
import Meta from "../molecules/Meta";
import Heading from "../atoms/Heading";
import QuoteText from "../atoms/QuoteText";
import PreText from "../molecules/PreText";

export type pageContentItem = {
  type: "title" | "heading" | "quote" | "code";
  content: any;
};

export type pageContent = pageContentItem[];

const PageContentProvider = ({ type, content }: pageContentItem) => {
  switch (type) {
    case "title":
      return <Meta title={content} />;
    case "heading":
      return <Heading type="heading">{content}</Heading>;
    case "quote":
      return <QuoteText>{content}</QuoteText>;
    case "code":
      return <PreText code={content} />;

    default:
      return <Meta title={content} />;
  }
};

export default PageContentProvider;
