import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useState } from "react";
import Image from "next/image";
import ProjectsCard from "@/components/ProjectsCard";
import styles from "@/styles/components/Home.module.css";
import Link from "next/link";

export default function RecentProjects({ projects }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  function nextSlide() {
    if (currentSlide < 4) {
      return setCurrentSlide(currentSlide + 1);
    }
  }

  function prevSlide() {
    if (currentSlide > 0) {
      return setCurrentSlide(currentSlide - 1);
    }
  }

  return (
    <section id="projects" className={`${styles.projects}`}>
      <div className={styles.projectsHeader}>
        <h2 className="tittle-header">Selected Projects</h2>
        <Link href="/projects" className="primary-button">
          View All
        </Link>
      </div>
      <div className={styles.projectsList}>
        <div className={styles.carouselContainer}>
          <button
            className={`${
              currentSlide === 0 ? styles.buttonHide : styles.buttonShow
            } ${styles.carouselButtonX} ${styles.carouselButtonLeft}`}
            onClick={prevSlide}
          >
            <Image
              src="/assets/carousel-left.svg"
              width={56}
              height={56}
              alt=""
            />
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
              return <ProjectsCard key={index} data={item} />;
            })}
          </Carousel>
          <button
            className={`${
              currentSlide === 3 ? styles.buttonHide : styles.buttonShow
            } ${styles.carouselButtonX} ${styles.carouselButtonRight}`}
            onClick={nextSlide}
          >
            <Image
              src="/assets/carousel-right.svg"
              width={56}
              height={56}
              alt=""
            />
          </button>
        </div>
      </div>
    </section>
  );
}
