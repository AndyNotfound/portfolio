import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import styles from "@/styles/components/carousels.module.css";
import { Carousel } from "react-responsive-carousel";
import fetchData from "@/helpers/fetch-data";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function ProductCarousel() {
  const [projects, setProjects] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const getProjects = async () => {
      const response = await fetchData({
        url: "api/projects",
      });
      setProjects(response);
    };

    getProjects();
  }, []);

  function nextSlide() {
    if (currentSlide < projects.length - 1) {
      return setCurrentSlide(currentSlide + 1);
    }
  }

  function prevSlide() {
    if (currentSlide > 0) {
      return setCurrentSlide(currentSlide - 1);
    }
  }

  return (
    <div className={styles.carouselContainer}>
      <button
        className={`${
          currentSlide === 0 ? styles.buttonHide : styles.buttonShow
        } ${styles.carouselButtonX} ${styles.carouselButtonLeft}`}
        onClick={prevSlide}
      >
        <Image src="/chevron-left-solid.svg" width={26} height={40} alt="" />
      </button>
      <Carousel
        selectedItem={currentSlide}
        showIndicators={false}
        infiniteLoop={false}
        dynamicHeight={false}
        showThumbs={false}
        showStatus={false}
        showArrows={false}
        swipeable={true}
        useKeyboardArrows
      >
        {projects?.map((item, index) => {
          return (
            <div key={index} className={styles.carousel}>
              <div className={styles.carouselThumbnailHolder}>
                <Image
                  className={styles.carouselThumbnail}
                  src="/easy-bank.webp"
                  fill
                  alt=""
                />
              </div>
              <div className={styles.carouselDetail}>
                <h2>{item.name}</h2>
                <div className={styles.carouselDesc}>
                  <p className="paragraph">{item.description}</p>
                  <div className={styles.carouselButtonGroup}>
                    <Link href={item.repoUrl} className={styles.carouselButton}>
                      <Image
                        className={styles.buttonIcon}
                        src="/paste.svg"
                        width={22}
                        height={22}
                        alt=""
                      />
                      <p className={`paragraph ${styles.buttonText}`}>
                        ViewStudyCase
                      </p>
                    </Link>
                    <Link href={item.liveUrl} className={styles.carouselButton}>
                      <Image
                        className={styles.buttonIcon}
                        src="/link.svg"
                        width={28}
                        height={22}
                        alt=""
                      />
                      <p className={`paragraph ${styles.buttonText}`}>
                        LivePreview
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
      <button
        className={`${
          currentSlide === projects.length - 1
            ? styles.buttonHide
            : styles.buttonShow
        } ${styles.carouselButtonX} ${styles.carouselButtonRight}`}
        onClick={nextSlide}
      >
        <Image src="/chevron-right-solid.svg" width={26} height={40} alt="" />
      </button>
    </div>
  );
}
