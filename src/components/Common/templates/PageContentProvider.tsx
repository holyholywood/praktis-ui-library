import React from "react";
import Meta from "../molecules/Meta";
import Heading from "../atoms/Heading";
import QuoteText from "../atoms/QuoteText";
import PreText from "../molecules/PreText";
import Pharagraph from "../atoms/Pharagraph";
import List from "../molecules/List";

export type pageContentItem = {
  type: "title" | "heading" | "subheading" | "quote" | "code" | "paragraph" | "list";
  content: any;
};

export type pageContent = pageContentItem[];

const PageContentProvider = ({ type, content }: pageContentItem) => {
  switch (type) {
    case "title":
      return <Meta title={content} />;
    case "heading":
      return <Heading type="heading">{content}</Heading>;
    case "subheading":
      return <Heading type="subheading">{content}</Heading>;
    case "quote":
      return <QuoteText>{content}</QuoteText>;
    case "paragraph":
      return <Pharagraph>{content}</Pharagraph>;
    case "code":
      return <PreText code={content} />;
    case "list":
      return <List list={content} isOrdered />;

    default:
      return <Meta title={content} />;
  }
};

export default PageContentProvider;
