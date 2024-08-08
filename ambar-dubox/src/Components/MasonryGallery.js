import React from 'react';
import Masonry from 'react-masonry-css';
import './MasonryGallery.css';

const images = [
  { src: '/assets/blog-cafe.png', alt: 'blog cafe' },
  { src: '/assets/calculator.png', alt: 'calculator' },
  { src: '/assets/social-card.png', alt: 'social card' },
  { src: '/assets/birthday-reminder.png', alt: 'birthday reminder'},
  { src: '/assets/store.png', alt: 'store' },

  { src: '/assets/pojobox.png', alt: 'landing page' },
  { src: '/assets/matematicas.png', alt: 'landing page' },
  { src: '/assets/portafolio-challenge.png', alt: 'multi landing' },

];

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  768: 2,
  500: 2
};

const MasonryGallery = () => (
  <div>
    <h2>Galería</h2>
    <div className="gradient-background">
      <div className="masonry-container">
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {images.map((image, index) => (
            <div key={index} className="gallery-item">
              <img src={image.src} alt={image.alt} />
            </div>
          ))}
        </Masonry>
      </div>
    </div>
  </div>
);

export default MasonryGallery;
