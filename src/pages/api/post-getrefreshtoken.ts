// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  if (req.method !== "POST") {
    res.status(405).send({ message: "Only POST requests allowed" });
    return;
  }
  //   const token = req.cookies.token;

  // res.setHeader("Set-Cookie", "myCookieName=myCookieValue; HttpOnly; Secure; SameSite=None; Path=/; Max-Age=3600");
  const token = process.env.NEXT_PRIVATE_JWT_SIGN;
  res.status(200).json({ ...req.cookies, token });
}
