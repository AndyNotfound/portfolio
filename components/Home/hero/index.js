import Image from "next/image";
import styles from "@/styles/components/Home.module.css";
import { downloadCv } from "@/helpers";

export default function Hero() {
  return (
    <section id="hero" className={`wrapper ${styles.hero}`}>
      <div className={styles.heroContent}>
        <p className={styles.heroSecondHeadline}>Gohand Silitonga</p>
        <h1 className={`page-header ${styles.heroHeadline}`}>
          A creative developer from indonesia
        </h1>
        <button onClick={downloadCv} className="primary-button">
          Download CV
        </button>
      </div>
      <Image
        className={styles.heroImage}
        src="/assets/hero-illustration.webp"
        width={566}
        height={566}
        alt=""
        priority
      />
    </section>
  );
}
