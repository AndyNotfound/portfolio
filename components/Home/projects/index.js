import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { fetchData } from "@/helpers";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import ProjectsCard from "@/components/ProjectsCard";
import styles from "@/styles/components/Home.module.css";

export default function RecentProjects() {
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

  const router = useRouter();

  return (
    <section id="projects" className={`${styles.projects}`}>
      <div className={styles.projectsHeader}>
        <h2 className="tittle-header">Recent Projects</h2>
        <button
          className="primary-button"
          onClick={() => router.push("/projects")}
        >
          View All
        </button>
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
              currentSlide === projects.length - 1
                ? styles.buttonHide
                : styles.buttonShow
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
