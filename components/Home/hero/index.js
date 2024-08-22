import Image from "next/image";
import styles from "@/styles/components/Home.module.css";
import { sendEmail } from "@/helpers";

export default function Hero() {
  return (
    <section id="hero" className={`${styles.hero}`}>
      <div className={styles.heroContent}>
        <p className={styles.heroSecondHeadline}>Gohand Silitonga</p>
        <div>
          <h1 className={`page-header animate ${styles.heroHeadline}`}>
            A Full-Stack developer from indonesia
          </h1>
        </div>
        <button
          onClick={sendEmail}
          className="primary-button"
        >
          Contact me
        </button>
      </div>
      <Image
        className={styles.heroImage}
        src="/assets/banner.svg"
        width={966}
        height={1000}
        alt=""
        priority
      />
    </section>
  );
}
