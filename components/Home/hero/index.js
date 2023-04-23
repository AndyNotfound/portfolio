import Image from "next/image";
import styles from "@/styles/components/Home.module.css";
import { sendEmail } from "@/helpers";

export default function Hero() {
  return (
    <section id="hero" className={`wrapper ${styles.hero}`}>
      <div className={styles.heroContent}>
        <p className={styles.heroSecondHeadline}>Gohand Silitonga</p>
        <div>
          <h1 className={`page-header ${styles.heroHeadline}`}>
            A creative developer from indonesia
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
        src="/assets/hero.webp"
        width={566}
        height={566}
        alt=""
        priority
      />
    </section>
  );
}
