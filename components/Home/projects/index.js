import { useRouter } from "next/router";
import ProductCarousel from "@/components/carousels";
import styles from "@/styles/components/Home.module.css";

export default function RecentProjects() {
  const router = useRouter();
  return (
    <section id="projects" className={`${styles.projects}`}>
      <div className={styles.projectsHeader}>
        <h2 className="tittle-header">Recent Projects</h2>
        <button
          className="primary-button"
          onClick={() => router.push("/projects")}
        >
          View All
        </button>
      </div>
      <div className={styles.projectsList}>
        <ProductCarousel />
      </div>
    </section>
  );
}