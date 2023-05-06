import styles from "@/styles/components/Certificates.module.css";
import Image from "next/image";
import Head from "next/head";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ImageViewer from "react-simple-image-viewer";
import { useState, useCallback, useEffect } from "react";

export default function Certificates({ certificates }) {
  const pageTitle =
    "Certification | Creative Developer & UI Designer | Gohand Silitonga";
  const pageDesc =
    "Explore Gohand Silitonga's portfolio of certifications showcasing expertise in web development, programming, design, and project management. Browse through a collection of achievements reflecting Gohand's dedication to continuous growth and professional development. Discover the depth of Gohand's skills and commitment to excellence in the field.";
  const pageKey =
    "Gohand Silitonga, Creative Developer, Batam, portfolio, certifications, web development, programming, design, project management, skills, achievements, professional development, growth";

  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [viewerImages, setViewerImages] = useState([]);

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  useEffect(() => {
    const viewerImages = certificates.map(
      (certificate) => certificate.coverImage
    );
    setViewerImages(viewerImages);
  }, [certificates]);

  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{pageTitle}</title>
        <meta property="title" content={pageTitle} />
        <meta property="og:title" content={pageTitle} />
        <meta name="description" content={pageDesc} />
        <meta property="og:description" content={pageDesc} />
        <meta name="keywords" content={pageKey} />
        <meta
          property="og:image"
          content="https://i.postimg.cc/GmHBnkfX/Anime-Whats-App-DP-for-Boys-2.jpg"
        />
        <meta
          property="og:image:alt"
          content="Gohand Silitonga's list of certification to showcase his achievements"
        />
        <meta
          property="og:url"
          content="https://gohand-silitonga.my.id/certificates"
        />
        <meta
          property="og:site_name"
          content="Gohand Silitonga's Certification"
        />
        <meta property="og:type" content="website" />
      </Head>
      <div className={`wrapper ${styles.certificate}`}>
        <div>
          <h1 className={`page-header ${styles.certificateHeadline} animate`}>
            Certificates
          </h1>
        </div>
        <section className={styles.certificateContainer}>
          {certificates?.map((item, index) => {
            const { coverImage, title, by } = item;
            return (
              <div key={index} className={styles.certificateItem}>
                <div className={styles.certificateThumbnailHolder}>
                  <Image
                    className={styles.certificateThumbnail}
                    src={coverImage}
                    alt={`${title} Certification by ${by}`}
                    fill
                    key={index}
                    onClick={() => openImageViewer(index)}
                  />
                </div>
                <div className={styles.certificateDetail}>
                  <h2 className={styles.certificateTitle}>{title}</h2>
                  <p className={`${styles.certificateAuthor} paragraph`}>
                    By {by}
                  </p>
                </div>
              </div>
            );
          })}
        </section>
        {isViewerOpen && (
          <ImageViewer
            src={viewerImages}
            currentIndex={currentImage}
            onClose={closeImageViewer}
            disableScroll={false}
            backgroundStyle={{
              backgroundColor: "rgba(0,0,0,0.9)",
            }}
            closeOnClickOutside={true}
          />
        )}
      </div>
    </>
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
      certificates: certificates.sort((a, b) => {
        return b.level - a.level;
      }),
    },
  };
}
