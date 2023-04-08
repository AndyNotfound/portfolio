import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { fetchData } from "@/helpers";
import styles from "@/styles/components/Projects.module.css";
import ProjectsCard from "@/components/ProjectsCard";

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
  const projects = await fetchData({
    url: "api/projects",
  });
  return { props: { projects } };
}
