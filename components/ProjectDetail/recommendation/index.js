import styles from "@/styles/components/ProjectDetail.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Recommendation({ props }) {
  return (
    <section id="recommendation">
      <h2 className={`tittle-header ${styles.recomendationHeader}`}>
        More Creative Project
      </h2>
      <div className={styles.recomendationContainer}>
        {props?.map((item, index) => {
          const {
            slug,
            frontmatter: { coverImage },
          } = item;
          return (
            <Link href={slug} key={index} className={styles.recomendationImageContainer}>
              <Image src={coverImage} width={320} height={322} alt="" className={styles.recomendationImage} />
            </Link>
          );
        })}
      </div>
    </section>
  );
}
