// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  res.setHeader("Set-Cookie", "token=xxxx; HttpOnly; Secure; SameSite=None; Path=/; Max-Age=3600");
  res.status(200).json({ message: "success setted Token" });
}
