// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { user } from "@/types/user";
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

const User: user = {
  id: 1,
  name: "Dito",
  email: "dito@mail.com",
  is_active_user: true,
  is_not_read_notif_count: 1,
  is_supervisor: false,
  username: "ditotisi",
  last_login: new Date(),
  companies: [
    {
      company_name: "Apa Aja ",
      company_id: 1,
      abbreviation: "Apa Aja",
      email_address: "apaaja@mail.com",
      is_active_company: true,
      logo_url: null,
      NPWP: null,
      profile_id: 1,
      profile_is_active: true,
      role_template: [],
    },
  ],
  groups: [],
  roles: [],
};
