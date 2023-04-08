import path from "path";
import matter from "gray-matter";
import fs from "fs";

export default function handler(req, res) {
  const {
    query: { slug },
  } = req;

  const markdownWithMeta = fs.readFileSync(
    path.join("projects", slug + ".md"),
    "utf-8"
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);

  res.status(200).json({ frontmatter, slug, content });
}
