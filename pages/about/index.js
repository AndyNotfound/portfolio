import Image from "next/image";
import Head from "next/head";
import styles from "@/styles/components/About.module.css";
import Link from "next/link";

export default function About() {
  return (
    <>
      <Head>
        <title>About Me | Gohand Silitonga</title>
      </Head>
      <section id="intro" className={styles.intro}>
        <Image
          className={styles.introImage}
          src="/assets/about-illustration.webp"
          width={389}
          height={605}
          alt=""
        />
        <div class={styles.introDetail}>
          <h1 className="page-header">A CREATIVE developer BASED IN BATAM, INDONESIA</h1>
          <p className="paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore consequat.
          </p>
          <Link href="/projects" className={`${styles.introCtaButton} primary-button`}>
            View Projects
          </Link>
        </div>
      </section>
    </>
  );
}
