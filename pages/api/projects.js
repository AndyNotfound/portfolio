import fs from "fs";
import path from "path";
import matter from "gray-matter";

export default async function handler(req, res) {
  // let projects = [];

  // //reading the records from the JSON file
  // try {
  //   projects = JSON.parse(
  //     fs.readFileSync(path.join(process.cwd(), "data/projects-data.json"))
  //   );
  // } catch (err) {
  //   console.log(err);
  // }

  // if (req.method === "GET") {
  //   res.status(200).json(projects); //sending the response
  // }
  
  // Get files from the projects directory
  const files = fs.readdirSync(path.join(process.cwd(), "projects"));

  // Get slug and frontmatter from projects
  const projects = files.map((filename) => {
    // Create slug
    const slug = filename.replace(".md", "");

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join(process.cwd(), "projects", filename),
      "utf-8"
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });

  res.status(200).json(projects);
}
