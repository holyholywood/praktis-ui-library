type categoryItemType = {
  Name: string;
  id: number;
  has_child: boolean;
};

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  const parent_id = Number(req.query.parent_id);
  let category = [];

  switch (parent_id) {
    case 1:
      category = firstCategory;
      break;

    case 2:
      category = secondCategory;
      break;

    case 3:
      category = thirdCategory;
      break;

    default:
      category = fourthCategory;

      break;
  }
  res.status(200).json({ err_msg: "not error", data: category, meta: null });
}

const firstCategory: categoryItemType[] = [
  {
    Name: "Dasi",
    id: 1,
    has_child: true,
  },
  {
    Name: "Kecantikan",
    id: 2,
    has_child: true,
  },
  {
    Name: "Fashion Wanita",
    id: 3,
    has_child: true,
  },
];
const secondCategory = [
  {
    Name: "Pria",
    id: 1,
    has_child: true,
  },
  {
    Name: "Wanita",
    id: 2,
    has_child: false,
  },
  {
    Name: "Bisex",
    id: 3,
    has_child: true,
  },
];
const thirdCategory = [
  {
    Name: "Formal",
    id: 1,
    has_child: true,
  },
  {
    Name: "Non-Formal",
    id: 2,
    has_child: false,
  },
  {
    Name: "Gaya",
    id: 3,
    has_child: true,
  },
];
const fourthCategory = [
  {
    Name: "Motif",
    id: 1,
    has_child: false,
  },
  {
    Name: "Polos",
    id: 2,
    has_child: false,
  },
  {
    Name: "Polkadot",
    id: 3,
    has_child: false,
  },
];
