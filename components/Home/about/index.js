import Image from "next/image";
import styles from "@/styles/components/Home.module.css";

export default function AboutMe() {
  return (
    <section id="about" className={styles.about}>
      <h2 className={`tittle-header ${styles.aboutHeader}`}>About Me</h2>
      <div className={styles.aboutImageContainer}>
        <Image
          className={styles.aboutImage}
          src="/assets/aboutme.webp"
          width={1122}
          height={783}
          alt=""
        />
        <div className={styles.aboutDetails}>
          <p className="paragraph">
            I&#39;m Gohand, a Batam-based creative developer. <span className="highlight">I create visually
            stunning and user-friendly websites</span> that are optimized for seamless
            user experience.
          </p>
        </div>
      </div>
    </section>
  );
}
