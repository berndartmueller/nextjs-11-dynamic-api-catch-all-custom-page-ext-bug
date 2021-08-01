import type { NextApiRequest, NextApiResponse } from "next";

export default async function test(_req: NextApiRequest, res: NextApiResponse) {
  return res.status(200).json({ message: "Works!" });
}
