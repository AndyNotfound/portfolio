import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/components/ProjectsCard.module.css";
import { useRouter } from "next/router";


export default function ProjectsCard({ data }) {
  const router = useRouter();

  const {slug, frontmatter: {coverImage, title, excerpt, live}} = data;
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
            <button
              className={`paragraph ${styles.buttonText} ${styles.productCardButton}`}
              onClick={() => router.push(`/projects/${slug}`)}
            >
              <Image
                className={styles.buttonIcon}
                src="/assets/paste.svg"
                width={22}
                height={22}
                alt=""
              />
              View&nbsp;Study&nbsp;Case
            </button>
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
