import fs from "fs";
import path from "path";
import multer from "multer";

const upload = multer({ dest: "public/uploads/" });

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  try {
    upload.single("image")(req, res, async (err) => {
      if (err instanceof multer.MulterError) {
        return res.status(400).json({ error: "File upload error." });
      } else if (err) {
        return res.status(500).json({ error: "An error occurred." });
      }

      return res.status(200).end();
    });
  } catch (error) {
    console.error("Error uploading image:", error);
    return res.status(500).end();
  }
}
