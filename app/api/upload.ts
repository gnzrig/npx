import { NextApiRequest, NextApiResponse } from "next";
import formidable from "formidable";
import fs from "fs";
import path from "path";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const form = new formidable.IncomingForm();
    form.uploadDir = "./public/uploads";

    form.parse(req, (err, fields, files) => {
      if (err) {
        return res.status(500).json({ error: "Error uploading image" });
      }

      const uploadedFile = files.image as formidable.File;
      const newPath = form.uploadDir + "/" + uploadedFile.originalFilename;

      fs.rename(uploadedFile.path, newPath, (err) => {
        if (err) {
          return res.status(500).json({ error: "Error moving file" });
        }

        return res.status(200).json({ success: true });
      });
    });
  } else {
    res.status(405).end();
  }
};
