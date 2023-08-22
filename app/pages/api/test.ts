import { NextApiRequest, NextApiResponse } from "next";

export function config() {
  return {
    api: {
      bodyParser: false, // Disable automatic body parsing
    },
  };
}

export function getHandler(req: NextApiRequest, res: NextApiResponse) {
  // Handle GET request here
  res.status(200).json({ message: "GET request handled" });
}

export function postHandler(req: NextApiRequest, res: NextApiResponse) {
  // Handle POST request here
  res.status(200).json({ message: "POST request handled" });
}
