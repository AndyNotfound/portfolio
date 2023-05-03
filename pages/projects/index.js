import styles from "@/styles/components/Projects.module.css";
import ProjectsCard from "@/components/ProjectsCard";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";

export default function Projects({ projects }) {
  const pageTitle =
    "Creative Projects | Creative Developer & UI Designer | Gohand Silitonga";
  const pageDesc =
    "Explore Gohand Silitonga's portfolio of visually stunning and user-optimized creative ventures, including websites, applications, and web apps. With a focus on responsive design and optimized user experiences, Gohand creates web solutions that engage and delight users. Contact him today to discuss your next project.";
  const pageKey =
    "Gohand Silitonga, Creative developer, Batam, visually stunning, Website, Application, Web App, Projects, Responsive Web Design, User Experience, user-optimized, responsive design, web solutions";
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
          content="https://i.postimg.cc/wMRTD2Zg/Gohand-Silitonga-s-Projects.jpg"
        />
        <meta
          property="og:image:alt"
          content="Gohand Silitonga's overview of his projects collection"
        />
        <meta
          property="og:url"
          content="https://gohand-silitonga.my.id/projects"
        />
        <meta property="og:site_name" content="Gohand Silitonga's Projects" />
        <meta property="og:type" content="website" />
      </Head>
      <div className={`${styles.projects} wrapper`}>
        <div>
          <h1 className={`page-header animate ${styles.projectsHeadline}`}>
            Creative Projects
          </h1>
        </div>
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
