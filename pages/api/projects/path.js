import path from "path";
import fs from "fs";

export default function handler(req, res) {
  const files = fs.readdirSync(path.join("projects"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  res.status(200).json(paths);
}
