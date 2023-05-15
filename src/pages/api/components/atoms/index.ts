// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { pageContent } from "@/components/Common/templates/PageContentProvider";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse<pageContent>) {
  res.status(200).json([
    {
      type: "title",
      content: "Atoms",
    },
    {
      type: "heading",
      content: "Atoms Component Meaning",
    },
    {
      type: "quote",
      content:
        "Atoms are the basic building blocks of all matter. Each chemical element has distinct properties, and they can’t be broken down further without losing their meaning. (Yes, it’s true atoms are composed of even smaller bits like protons, electrons, and neutrons, but atoms are the smallest functional unit.)",
    },
  ]);
}
