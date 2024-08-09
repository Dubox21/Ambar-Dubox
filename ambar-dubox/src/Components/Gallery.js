import React, { useState, useEffect } from 'react'
import './Gallery.css'
import Modal from './common/Modal';

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

function Gallery() {
  const [visibleImages, setVisibleImages] = useState(initialImages);
  const [currentImage, setCurrentImage] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const openModal = (src) => {
    setCurrentImage(src);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className='gallery'>
      <h2>Galería</h2>
      <div className='gradient-background'>
        <div className='gallery-container'>
          {visibleImages.map((src, index) => (
            <div className='image-container' onClick={() => openModal(src)}>
              <img src={src} alt={`Imagen ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
      <Modal isOpen={isOpen} onClose={closeModal}>
        <img src={currentImage} alt="Imagen ampliada" />
      </Modal>
    </div>
  )
}

export default Gallery