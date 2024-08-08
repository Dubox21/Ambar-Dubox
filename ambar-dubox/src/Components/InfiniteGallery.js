import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import './InfiniteGallery.css'; // Archivo de estilos CSS

const initialImages = [
  '/assets/blog-cafe.png',
  '/assets/calculator.png',
  '/assets/social-card.png',
  '/assets/birthday-reminder.png',
  '/assets/store.png',
  '/assets/portafolio-challenge.png',
  '/assets/pojobox.png',
  '/assets/matematicas.png',
  '/assets/figma.png',
];

const InfiniteGallery = () => {
  const [images, setImages] = useState(initialImages);
  const [hasMore, setHasMore] = useState(true);

  const fetchMoreData = () => {
    setTimeout(() => {
      // Simulación de carga de más imágenes. Puedes reemplazar esto con una llamada a un API real.
      const moreImages = []; // No hay más imágenes para cargar
      if (moreImages.length === 0) {
        setHasMore(false); // Detener el Infinite Scroll
      }
      setImages((prevImages) => [...prevImages, ...moreImages]);
    }, 1500);
  };

  return (
    <div className="masonry-container">
    <InfiniteScroll
      dataLength={images.length}
      next={fetchMoreData}
      hasMore={hasMore}
      loader={<h4>Loading...</h4>}
      endMessage={<p style={{ textAlign: 'center' }}>No more images to show</p>}
      className="infinite-scroll"
    >
      <div className="grid">
        {images.map((src, index) => (
          <div key={index} className="grid-item">
            <img src={src} alt={`Image ${index}`} />
          </div>
        ))}
      </div>
    </InfiniteScroll>
  </div>
  );
};

export default InfiniteGallery;
