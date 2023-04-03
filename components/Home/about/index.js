import Image from "next/image";
import styles from "@/styles/Home.module.css";

export default function AboutMe() {
  return (
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
  );
}
