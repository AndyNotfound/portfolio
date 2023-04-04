import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/components/footer.module.css"
import downloadCv from "@/helpers/download-cv";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Image
        className={styles.footerImage}
        src="/assets/pattern.webp"
        width={1440}
        height={970}
        alt=""
      />
      <div className={styles.cta}>
        <h2 className={`tittle-header ${styles.ctaHeader}`}>LET’S WORK TOGERTHER</h2>
        <button onClick={downloadCv} className="primary-button">Download Cv</button>
      </div>
      <div className={styles.footerLinks}>
        <div className={styles.link}>
          <p className={styles.linkTitle}>Contact</p>
          <p className="paragraph" href="">+62 895-2272-6477</p>
        </div>
        <div className={styles.link}>
          <p className={styles.linkTitle}>Enquiries</p>
          <p className="paragraph" href="">Andy.Notfound@gmail.com</p>
        </div>
        <div className={styles.link}>
          <p className={styles.linkTitle}>Address</p>
          <p className="paragraph" href="">Marina city Street, Batam.</p>
        </div>
        <div className={styles.link}>
          <p className={styles.linkTitle}>Social Links</p>
          <div className={styles.socialLinks}>
            <Link className={`${styles.linkTarget} paragraph`} href="https://github.com/AndyNotfound">Git</Link>
            <Link className={`${styles.linkTarget} paragraph`} href="https://www.linkedin.com/in/lassitudeas/">In</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
