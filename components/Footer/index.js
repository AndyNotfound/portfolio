import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/components/Footer.module.css";
import { downloadCv } from "@/helpers";

export default function Footer() {
  const socialLinks = [
    {
      logo: "instagram.svg",
      platform: "Instagram",
      link: "https://www.instagram.com/lassitudeas/",
    },
    {
      logo: "linkedin.svg",
      platform: "Linked In",
      link: "https://www.linkedin.com/in/lassitudeas/",
    },
    {
      logo: "dribbble.svg",
      platform: "Dribbble",
      link: "https://dribbble.com/LassitudeAs",
    },
    {
      logo: "github.svg",
      platform: "Github",
      link: "https://github.com/AndyNotfound",
    },
  ];
  return (
    <footer className={styles.footer}>
      <Image
        className={styles.footerImage}
        src="/assets/pattern.webp"
        width={1622}
        height={1177}
        alt=""
        priority
      />
      <div className={styles.cta}>
        <h2 className={`tittle-header ${styles.ctaHeader}`}>
          LET’S WORK TOGERTHER
        </h2>
        <button onClick={downloadCv} className="primary-button">
          Download Cv
        </button>
      </div>
      <div className={styles.footerLinks}>
        <div className={styles.link}>
          <p className={styles.linkTitle}>Contact</p>
          <p className="paragraph" href="">
            (+62) 895-2272-6477
          </p>
        </div>
        <div className={styles.link}>
          <p className={styles.linkTitle}>Enquiries</p>
          <p className="paragraph" href="">
            Andy.Notfound@gmail.com
          </p>
        </div>
        <div className={styles.link}>
          <p className={styles.linkTitle}>Address</p>
          <p className="paragraph">Marina City Street, Batam</p>
        </div>
        <div className={styles.link}>
          <p className={styles.linkTitle}>Social Links</p>
          <div className={styles.socialLinks}>
            {socialLinks?.map((item, index) => {
              const { platform: name, logo, link } = item;
              return (
                <Link
                  key={index}
                  className={`${styles.linkTarget} paragraph`}
                  href={link}
                >
                  <Image
                    src={`/assets/${logo}`}
                    width={22}
                    height={22}
                    alt={name}
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
