import Hero from "@/components/Home/hero";
import AboutMe from "@/components/Home/about";
import RecentProjects from "@/components/Home/projects";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";

export default function Home({ projects }) {
  const pageTitle =
    "Gohand Silitonga | Creative Developer &amp; UI Designer Batam";
  const pageDesc =
    "Craft stunning and responsive websites with Gohand Silitonga, a creative developer and UI designer in Batam. Enhance your online presence with optimized user experiences today. Contact Gohand to discuss your web development needs and bring your vision to life.";
  const pageKey =
    "Gohand Silitonga, Creative Developer, UI Designer, Batam, Frontend Developer, Responsive Web Design, User Experience, Web Development, optimized user experiences, Batam-based";
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{pageTitle}</title>
        <meta property="title" content={pageTitle} />
        <meta property="og:title" content={pageTitle} />
        <meta name="description" content={pageDesc} />
        <meta property="og:description" content={pageDesc} />
        <meta name="keywords" content={pageKey} />
        <meta
          property="og:image"
          content="https://i.postimg.cc/3NVnWr5n/Gohand-Siitonga.jpg"
        />
        <meta property="og:image:alt" content="Gohand Silitonga smiling face" />
        <meta property="og:url" content="https://gohand-silitonga.my.id/" />
        <meta property="og:site_name" content="Gohand Silitonga" />
        <meta property="og:type" content="website" />
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
