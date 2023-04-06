import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { fetchData } from "@/helpers";
import styles from "@/styles/components/Projects.module.css";
import ProjectsCard from "@/components/ProjectsCard";
import { useState, useEffect } from "react";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    const getProjects = async () => {
      const response = await fetchData({
        url: "api/projects",
      });
      setProjects(response);
    };

    getProjects();
  }, []);
  return (
    <>
      <Navbar />
      <main className={`${styles.projects} wrapper`}>
        <h1 className={styles.projectsHeadline}>Creative Ventures</h1>
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
