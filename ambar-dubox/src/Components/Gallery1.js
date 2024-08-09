import React, { useState, useEffect } from 'react';
import Modal from './common/Modal';
import './Gallery.css'; 
import { AiOutlineReload } from "react-icons/ai";

const initialImages = [
  '/assets/social-card.png',
  '/assets/blog-cafe.png',
  '/assets/birthday-reminder.png',
  '/assets/store.png',
  '/assets/pojobox.png',
  '/assets/matematicas.png',
  '/assets/portafolio-challenge.png',
  '/assets/calculator.png',
  '/assets/figma.png',
];

const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');
  const [visibleImages, setVisibleImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [imageIndex, setImageIndex] = useState(0); // Indice de la imagen actual

  const imagesPerPage = 3; // Número de imágenes a mostrar por clic

  // Inicializa las imágenes visibles
  useEffect(() => {
    setVisibleImages(initialImages.slice(0, imagesPerPage));
    setImageIndex(imagesPerPage);
  }, []);

  const openModal = (src) => {
    setCurrentImage(src);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const fetchMoreData = () => {
    if (imageIndex >= initialImages.length) {
      return; // No hay más imágenes para cargar
    }

    setLoading(true);
    setTimeout(() => {
      const nextIndex = imageIndex + imagesPerPage;
      const newImages = initialImages.slice(imageIndex, nextIndex);

      setVisibleImages((prevImages) => [...prevImages, ...newImages]);
      setImageIndex(nextIndex);
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="gradient-background">
      <h2>Galería</h2>
      <div className="gallery">
        {visibleImages.map((src, index) => (
          <div key={index} className="gallery-item" onClick={() => openModal(src)}>
            <img src={src} alt={`Imagen ${index + 1}`} />
          </div>
        ))}
      </div>

      {loading && (
        <div className="loader">
          <AiOutlineReload className="reload-icon" />
        </div>
      )}

      {!loading && imageIndex < initialImages.length && (
        <div className='view-more'>
          <button className="view-more-button" onClick={fetchMoreData}>
            Ver más
          </button>
        </div>
      )}

      <Modal isOpen={isOpen} onClose={closeModal}>
        <img src={currentImage} alt="Imagen ampliada" />
      </Modal>
    </div>
  );
};

export default Gallery;
