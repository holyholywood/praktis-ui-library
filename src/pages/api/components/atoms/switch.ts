// <Badge text="V 0.0.0.1" color="primary" /> \n<Badge text="May 2023" color="secondary" />
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { pageContent } from "@/components/Common/templates/PageContentProvider";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse<pageContent>) {
  res.status(200).json([
    {
      type: "title",
      content: "Switch",
    },
    {
      type: "heading",
      content: "Switch",
    },
    {
      type: "subheading",
      content: "Example",
    },
  ]);
}
