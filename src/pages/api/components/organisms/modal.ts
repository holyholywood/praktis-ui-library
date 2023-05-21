// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { pageContent } from "@/components/Common/templates/PageContentProvider";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse<pageContent>) {
  res.status(200).json([
    {
      type: "title",
      content: "Modal",
    },
    {
      type: "heading",
      content: "Modal",
    },
    {
      type: "quote",
      content:
        "In the context of design, a modal refers to a graphical user interface (GUI) component that appears on top of the main content and temporarily interrupts the user's workflow to display important information or require user input. It is typically used to present contextual information, gather user input, or confirm an action before proceeding. Modals are often called dialog boxes, pop-ups, or overlays.",
    },
    {
      type: "paragraph",
      content:
        "In atomic design methodology, which is a systematic approach to creating design systems, modals are considered as organisms. Atomic design breaks down user interfaces into five distinct levels: atoms, molecules, organisms, templates, and pages.",
    },
    {
      type: "paragraph",
      content: "",
    },
    {
      type: "paragraph",
      content:
        "Atoms are the basic building blocks of a design system, representing the smallest and most fundamental UI elements like buttons, input fields, or icons. Molecules are combinations of atoms that form more complex components, such as a form input with a label and an error message. Organisms are larger components composed of molecules and/or atoms, like a navigation bar or a modal.",
    },
    {
      type: "paragraph",
      content:
        "Modals, being more complex components, are categorized as organisms in atomic design. They consist of various molecules and atoms, such as a header, content area, buttons, and possibly form elements. Organisms are designed to be reusable across different contexts within a system, and modals follow the same principle. They can be used in various parts of an application or website where a temporary interruption of the user's workflow is required.",
    },
    {
      type: "paragraph",
      content:
        "By considering modals as organisms in atomic design, designers and developers can create a consistent and scalable system where modals are treated as reusable components, allowing for easier maintenance and implementation throughout the design and development process.",
    },
    {
      type: "subheading",
      content: "Usage",
    },
  ]);
}
