import Image from "next/image";
import { useRouter } from "next/router";
import styles from "@/styles/Home.module.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import downloadCv from "@/helpers/download-cv";
import ProductCarousel from "@/components/carousels";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <Navbar />
      <main>
        <section id="hero" className={`wrapper ${styles.hero}`}>
          <div className={styles.heroContent}>
            <p className={styles.heroSecondHeadline}>Gohand Silitonga</p>
            <h1 className={styles.heroHeadline}>
              A creative developer from indonesia
            </h1>
            <button onClick={downloadCv} className="primary-button">
              Download CV
            </button>
          </div>
          <Image
            className={styles.heroImage}
            src="/hero-Illustration.webp"
            width={566}
            height={566}
            alt=""
          />
        </section>
        <section id="about" className={styles.about}>
          <h2 className={`tittle-header ${styles.aboutHeader}`}>About Me</h2>
          <div className={styles.aboutImageContainer}>
            <Image
              className={styles.aboutImage}
              src="/AboutMe-Illustration.webp"
              width={1122}
              height={783}
              alt=""
            />
            <div className={styles.aboutDetails}>
              <p className="paragraph">
                I create visually stunning and user-friendly websites that are
                responsive and optimized for a seamless user experience.
              </p>
            </div>
          </div>
        </section>
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
      </main>
      <Footer />
    </>
  );
}
