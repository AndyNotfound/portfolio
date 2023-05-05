import styles from "@/styles/components/Certificates.module.css";
import Image from "next/image";
import Head from "next/head";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export default function Certificates({ certificates }) {
  return (
    <div className={`wrapper ${styles.certificate}`}>
      <div>
        <h1 className={`page-header ${styles.certificateHeadline} animate`}>
          Certificates
        </h1>
      </div>
      <section className={styles.certificateContainer}>
        {certificates?.map((item, index) => {
          const { coverImage, title, by, date } = item;
          return (
            <div key={index} className={styles.certificateItem}>
              <div className={styles.certificateThumbnailHolder}>
                <Image
                  className={styles.certificateThumbnail}
                  src={coverImage}
                  fill
                  alt=""
                />
              </div>
              <div className={styles.certificateDetail}>
                <h2 className={styles.certificateTitle}>{title}</h2>
                <p className="paragraph">
                  By {by} on {date}
                </p>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join(process.cwd(), "certificates"));

  const certificates = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join(process.cwd(), "certificates", filename),
      "utf-8"
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    return frontmatter;
  });

  return {
    props: {
      certificates,
    },
  };
}
