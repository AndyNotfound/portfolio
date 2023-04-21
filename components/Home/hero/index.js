import Image from "next/image";
import styles from "@/styles/components/Home.module.css";
import { downloadCv } from "@/helpers";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="hero" className={`wrapper ${styles.hero}`}>
      <div className={styles.heroContent}>
        <p className={styles.heroSecondHeadline}>Gohand Silitonga</p>
        <div className={styles.headerContainer}>
          <h1 className={`page-header ${styles.heroHeadline}`}>
            A creative developer from indonesia
          </h1>
        </div>
        <Link href="/projects" className="primary-button">
          View Projects
        </Link>
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
