import Hero from "@/components/Home/hero";
import AboutMe from "@/components/Home/about";
import RecentProjects from "@/components/Home/projects";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";

export default function Home({ projects }) {
  return (
    <>
      <Head>
        <title>
          Gohand Silitonga | Creative Developer &amp; UI Designer Batam
        </title>
        <meta charset="UTF-8" />
        <meta
          name="description"
          content="Craft visually stunning, responsive, and user-friendly websites with Gohand Silitonga, a Creative Developer &amp; UI Designer in Batam. Enhance your online presence with optimized user experiences today."
        />
        <meta
          name="keywords"
          content="Gohand Silitonga, Creative Developer, UI Designer, Batam, Frontend Developer, Responsive Web Design, User Experience, Web Development"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Hero />
      <AboutMe />
      <RecentProjects projects={projects} />
    </>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join(process.cwd(), "projects"));

  const projects = files.map((filename) => {
    const slug = filename.replace(".md", "");

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

  const projectsHighLight = projects.slice(0, 4);
  return {
    props: {
      projects: projectsHighLight,
    },
  };
}
