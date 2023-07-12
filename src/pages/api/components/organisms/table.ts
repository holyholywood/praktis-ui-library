// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { pageContent } from "@/components/Common/templates/PageContentProvider";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse<pageContent>) {
  res.status(200).json([
    {
      type: "title",
      content: "Table",
    },
    {
      type: "heading",
      content: "Table",
    },
  ]);
}
