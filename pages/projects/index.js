import styles from "@/styles/components/Projects.module.css";
import ProjectsCard from "@/components/ProjectsCard";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";

export default function Projects({ projects }) {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <title>Creative Ventures and Projects | Gohand Silitonga</title>
        <meta
          name="description"
          content="Explore Gohand Silitonga's portfolio of visually stunning and user-optimized creative ventures and projects, including websites, applications, and web apps. Contact him for a seamless user experience today."
        />
        <meta
          name="keywords"
          content="Gohand Silitonga, Creative ventures, visually stunning, Batam, Website, Application, Web App, Projects, Responsive Web Design, User Experience"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          property="og:title"
          content="Creative Ventures and Projects | Gohand Silitonga"
        />
        <meta
          property="og:description"
          content="Explore Gohand Silitonga's portfolio of visually stunning and user-optimized creative ventures and projects, including websites, applications, and web apps. Contact him for a seamless user experience today."
        />
        <meta property="og:image" content="https://i.postimg.cc/wMRTD2Zg/Gohand-Silitonga-s-Projects.jpg" />
        <meta property="og:url" content="https://gohand-silitonga.my.id/projects" />
        <meta property="og:type" content="website" />
      </Head>
      <div className={`${styles.projects} wrapper`}>
        <h1 className={`page-header ${styles.projectsHeadline}`}>
          Creative Ventures
        </h1>
        <section className={styles.projectsContainer}>
          {projects?.map((item, index) => {
            return <ProjectsCard key={index} data={item} />;
          })}
        </section>
      </div>
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

  const shuffledProjects = projects.sort(() => Math.random() - 0.5);
  return {
    props: {
      projects: shuffledProjects,
    },
  };
}
