import React, { useState, useEffect, useRef } from "react";
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";
import projectsData from "../../data/projectsData.json";
import './ProjectsList.css';
import ProjectItem from "./ProjectItem";

function ProjectsList() {
  const [itemsPerSlide, setItemsPerSlide] = useState(1);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);
  const carouselRef = useRef(null);

  useEffect(() => {
    const carouselElement = carouselRef.current;
    const handleScroll = () => {
      if (carouselElement) {
        const totalItems = carouselElement.querySelectorAll('.carousel-item').length;
        const activeIndex = Array.from(carouselElement.querySelectorAll('.carousel-item')).findIndex(item => item.classList.contains('active'));

        setCanScrollPrev(activeIndex > 0);
        setCanScrollNext(activeIndex < totalItems - 1);
      }
    };

    handleScroll(); // Inicializar el estado
    carouselElement.addEventListener('slid.bs.carousel', handleScroll);
    
    return () => {
      if (carouselElement) {
        carouselElement.removeEventListener('slid.bs.carousel', handleScroll);
      }
    };
  }, [carouselRef]);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1200) { // Desktop
        setItemsPerSlide(3);
      } else if (width >= 768) { // Tablet
        setItemsPerSlide(2);
      } else { // Mobile
        setItemsPerSlide(1);
      }
    };

    handleResize(); // Initial call
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const groupProjects = (data) => {
    const result = [];
    for (let i = 0; i < data.length; i += itemsPerSlide) {
      result.push(data.slice(i, i + itemsPerSlide));
    }
    return result;
  };

  const groupedProjects = groupProjects(projectsData);
  
  return (
    <div
      id="projectsCarousel"
      className="carousel slide" // Asegúrate de no tener data-bs-ride="carousel"
      ref={carouselRef}
    >
      <div className="carousel-inner">
        {groupedProjects.map((group, index) => (
          <div
            key={index}
            className={`carousel-item ${index === 0 ? "active" : ""}`}
          >
            <div className="container">
              <div className="row">
                {group.map((project, subIndex) => (
                  <div key={subIndex} className={`col-${12 / itemsPerSlide}`}>
                    <ProjectItem title={project.title} imageUrl={project.imageUrl} urlRepo={project.urlRepo} urlGit={project.urlGit}/>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <a
        className={`carousel-control-prev ${!canScrollPrev ? 'disabled' : ''}`}
        href="#projectsCarousel"
        role="button"
        data-bs-slide="prev"
      >
        <span className="carousel-prev-icon icon-large">
          <IoIosArrowDropleftCircle />
        </span>
        <span className="visually-hidden">Previous</span>
      </a>
      <a
        className={`carousel-control-next ${!canScrollNext ? 'disabled' : ''}`}
        href="#projectsCarousel"
        role="button"
        data-bs-slide="next"
      >
        <span className="carousel-next-icon icon-large">
          <IoIosArrowDroprightCircle />
        </span>
        <span className="visually-hidden">Next</span>
      </a>
    </div>
  );
}

export default ProjectsList;
