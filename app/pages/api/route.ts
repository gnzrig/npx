import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export default async function POST(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    return res.status(200).json({ message: "reCAPTCHA verification successful" });
  } else {
    res.status(405).end();
  }
}
