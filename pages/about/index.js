import Image from "next/image";
import Head from "next/head";
import styles from "@/styles/components/About.module.css";
import { sendEmail } from "@/helpers";

export default function About() {
  const pageTitle =
    "About Me | Creative Developer & UI Designer | Gohand Silitonga";
  const pageDesc =
    "Gohand Silitonga is a Batam-based creative web developer specializing in user interface design. With expertise in Next JS, React JS, HTML, CSS, and JavaScript, Gohand creates stunning and responsive websites that engage users and enhance their online experience. Contact him today to bring your web development ideas to life";
  const pageKey =
    "Gohand Silitonga, Creative developer, Batam, Indonesia, About, creative web developer, user interface design, Next JS, React JS, HTML, CSS, JavaScript, responsive websites, engage users";
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{pageTitle}</title>
        <meta property="title" content={pageTitle} />
        <meta property="og:title" content={pageTitle} />
        <meta name="description" content={pageDesc} />
        <meta property="og:description" content={pageDesc} />
        <meta name="keywords" content={pageKey} />
        <meta property="og:image" content="/assets/about.webp" />
        <meta
          property="og:image:alt"
          content="Gohand Silitonga sitting on top of a box"
        />
        <meta
          property="og:url"
          content="https://gohand-silitonga.my.id/about"
        />
        <meta property="og:site_name" content="About Gohand Silitonga" />
        <meta property="og:type" content="website" />
      </Head>
      <section id="intro" className={styles.intro}>
        <Image
          className={styles.introImage}
          src="/assets/about.webp"
          width={389}
          height={605}
          alt=""
        />
        <div className={styles.introDetail}>
          <div>
            <h1 className="page-header animate">
              A CREATIVE developer BASED IN BATAM, INDONESIA
            </h1>
          </div>
          <p className="paragraph">
            Hi, I&#39;m Gohand, a Batam-based developer specializing in Creative
            Development. With a passion for website UI design,{" "}
            <span className="highlight">
              I create clean, responsive, and beautiful websites
            </span>{" "}
            that engage users.
            <br />
            <br /> Currently studying at Batam Institute of Technology, I&#39;m
            always seeking new opportunities and experiences.
          </p>
          <button
            onClick={sendEmail}
            className={`${styles.introCtaButton} primary-button`}
          >
            Contact me
          </button>
        </div>
      </section>
    </>
  );
}
