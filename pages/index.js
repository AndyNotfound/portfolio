import Navbar from "@/components/Navbar";
import Hero from "@/components/Home/hero";
import AboutMe from "@/components/Home/about";
import RecentProjects from "@/components/Home/projects";
import Footer from "@/components/Footer";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export default function Home({ projects }) {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutMe />
        <RecentProjects projects={projects} />
      </main>
      <Footer />
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
