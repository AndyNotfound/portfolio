import styles from "@/styles/components/ProjectDetail.module.css";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Article({ props }) {
  const {
    frontmatter: { coverImage, fullTitle, by, live },
    content,
  } = props;
  const router = useRouter();
  return (
    <section id="article" className={styles.article}>
      <div className={styles.articleHeaderContainer}>
        <button
          onClick={() => router.back()}
          className={`paragraph ${styles.backButton}`}
        >
          <Image
            className={styles.backButtonIcon}
            src="/assets/arrow-left-solid.svg"
            width={14}
            height={16}
            alt=""
          />
          <span>Go Back</span>
        </button>
        <h1 className={`page-header ${styles.articleHeader}`}>{fullTitle}</h1>
      </div>
      <div className={styles.articleThumbnailContainer}>
        <Image
          className={styles.articleThumbnail}
          src={coverImage}
          width={1050}
          height={638}
          alt=""
        />
        <div className={styles.articleLinkContainer}>
          <p className="paragraph">
            By <span className={styles.author}>{by}</span>
          </p>
          <Link href={live} className={`paragraph ${styles.linkLive}`}>
            Live Preview
            <Image
              className={styles.linkLiveIcon}
              src="/assets/arrow-right-solid.svg"
              width={14}
              height={16}
              alt=""
            />
          </Link>
        </div>
      </div>
      <div className={styles.articleContainer}>
        <p className={`paragraph ${styles.articleText}`}>{content}</p>
      </div>
    </section>
  );
}
