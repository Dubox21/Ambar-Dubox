import React, { useState, useEffect, useRef } from 'react';
import Packery from 'packery';
import Draggabilly from 'draggabilly';
import Modal from 'react-modal';
import './PackeryGrid.css';

// Configura el modal
Modal.setAppElement('#root');

const PackeryGrid = () => {
  const gridRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');
  const [images] = useState([
    '/assets/social-card.png',
    '/assets/blog-cafe.png',
    '/assets/birthday-reminder.png',
    '/assets/store.png',
    '/assets/pojobox.png',
    '/assets/matematicas.png',
    '/assets/portafolio-challenge.png',
    '/assets/calculator.png'
  ]);

  useEffect(() => {
    // Inicializar Packery
    const pckry = new Packery(gridRef.current, {
      itemSelector: '.grid-item',
      gutter: 10, // Espacio entre elementos
    });

    // Hacer que los elementos sean arrastrables
    const items = gridRef.current.querySelectorAll('.grid-item');
    items.forEach(item => {
      const draggie = new Draggabilly(item);
      pckry.bindDraggabillyEvents(draggie);
    });

    // Limpieza al desmontar el componente
    return () => {
      pckry.destroy();
    };
  }, []);

  const openModal = (src) => {
    setCurrentImage(src);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <h2>Galería</h2>
      <div className="grid gradient-background" ref={gridRef}>
        {images.map((src, index) => (
          <div
            key={index}
            className="grid-item"
            onClick={() => openModal(src)}
          >
            <img src={src} alt={`Imagen ${index + 1}`} />
          </div>
        ))}
      </div>

      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Imagen Lightbox"
        className="modal"
        overlayClassName="overlay"
      >
        <button onClick={closeModal} className="modal-close">Cerrar</button>
        <img src={currentImage} alt="Imagen ampliada" className="modal-image" />
      </Modal>
    </div>
  );
};

export default PackeryGrid;
