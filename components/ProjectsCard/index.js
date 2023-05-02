import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/components/ProjectsCard.module.css";

export default function ProjectsCard({ data }) {

  const {
    slug,
    frontmatter: { coverImage, title, excerpt, live },
  } = data;
  return (
    <div className={styles.productCard}>
      <div className={styles.productCardThumbnailHolder}>
        <Image
          className={styles.productCardThumbnail}
          src={coverImage}
          fill
          alt=""
        />
      </div>
      <div className={styles.productCardDetail}>
        <h2>{title}</h2>
        <div className={styles.productCardDesc}>
          <p className="paragraph">{excerpt}</p>
          <div className={styles.productCardButtonGroup}>
            <Link
              className={`paragraph ${styles.buttonText} ${styles.productCardButton}`}
              href={`/projects/${slug}`}
            >
              <Image
                className={styles.buttonIcon}
                src="/assets/paste.svg"
                width={22}
                height={22}
                alt=""
              />
              View&nbsp;Study&nbsp;Case
            </Link>
            {live !== "" && live !== null ? (
              <Link href={live} className={styles.productCardButton}>
                <Image
                  className={styles.buttonIcon}
                  src="/assets/link.svg"
                  width={28}
                  height={22}
                  alt=""
                />
                <p className={`paragraph ${styles.buttonText}`}>
                  Live&nbsp;Preview
                </p>
              </Link>
            ) : (
              <div> </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
