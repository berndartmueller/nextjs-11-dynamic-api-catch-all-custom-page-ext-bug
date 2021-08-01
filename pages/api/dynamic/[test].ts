import type { NextApiRequest, NextApiResponse } from "next";

export default async function test(req: NextApiRequest, res: NextApiResponse) {
  const { test } = req.query

  return res.status(200).json({ message: "Dynamic api route works!", test });
}
