import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { fetchData } from "@/helpers";
import styles from "@/styles/components/Projects.module.css";
import ProjectsCard from "@/components/ProjectsCard";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export default function Projects({ projects }) {
  return (
    <>
      <Navbar />
      <main className={`${styles.projects} wrapper`}>
        <h1 className={`page-header ${styles.projectsHeadline}`}>Creative Ventures</h1>
        <section className={styles.projectsContainer}>
          {projects?.map((item, index) => {
            return <ProjectsCard key={index} data={item} />;
          })}
        </section>
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

  const shuffledProjects = projects.sort(() => Math.random() - 0.5);
  return {
    props: {
      projects: shuffledProjects,
    },
  };
}
