import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

const Modal = ({ isOpen, onClose, children }) => {
  const [zoom, setZoom] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleWheel = (e) => {
    e.preventDefault();
    setZoom((prevZoom) => Math.min(Math.max(prevZoom + e.deltaY * -0.001, 1), 3));
  };

  const handleStart = (clientX, clientY) => {
    if (zoom > 1) {
      setDragging(true);
      setStartPos({ x: clientX - position.x, y: clientY - position.y });
    }
  };

  const handleMove = (clientX, clientY) => {
    if (!dragging) return;
    setPosition({
      x: clientX - startPos.x,
      y: clientY - startPos.y,
    });
  };

  const handleMouseDown = (e) => handleStart(e.pageX, e.pageY);
  const handleMouseMove = (e) => handleMove(e.pageX, e.pageY);
  const handleMouseUp = () => setDragging(false);

  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    handleStart(touch.pageX, touch.pageY);
  };
  const handleTouchMove = (e) => {
    const touch = e.touches[0];
    handleMove(touch.pageX, touch.pageY);
  };
  const handleTouchEnd = () => setDragging(false);

  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        onWheel={handleWheel}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{
          transform: `scale(${zoom}) translate(${position.x / zoom}px, ${position.y / zoom}px)`,
          cursor: zoom > 1 ? 'grab' : 'auto',
        }}
      >
        <button className="modal-close" onClick={onClose}>&times;</button>
        {children}
      </div>
    </div>,
    document.getElementById('modal-root')
  );
};

export default Modal;
