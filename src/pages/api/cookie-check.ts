// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  const refresh = req.cookies.token;
  // send to beacvkend
  const token = req.cookies.token;
  const newAcces = [""];
  res.status(200).json({ ...req.cookies, token, newAcces });
}
