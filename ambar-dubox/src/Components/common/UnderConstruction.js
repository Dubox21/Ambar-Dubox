import React, { useEffect, useState } from "react";
import "./UnderConstruction.css";
import { FaHammer } from "react-icons/fa";
import StarsBg from "./StarsBg";

const text = "En Construcción";
const numDots = 3; // Número de puntos a mostrar

const UnderConstruction = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showHammer, setShowHammer] = useState(false);
  const [hammerPosition, setHammerPosition] = useState(0);
  const [showDots, setShowDots] = useState(false);
  const [waitingForDots, setWaitingForDots] = useState(false); // Nuevo estado para la pausa

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setShowHammer(true); // Muestra el martillo

        // Ajusta la posición horizontal del martillo
        setHammerPosition(currentIndex);

        const letterTimer = setTimeout(() => {
          setDisplayedText((prev) => prev + text[currentIndex]);
          setCurrentIndex((prev) => prev + 1);
          setShowHammer(false); // Oculta el martillo después de colocar la letra
        }, 300); // Tiempo del martillo antes de mostrar la letra

        return () => clearTimeout(letterTimer);
      }, 300); // Tiempo entre letras

      return () => clearTimeout(timer);
    } else {
      // Pausa el retraso de la letra
      setWaitingForDots(true);

      const dotsTimer = setTimeout(() => {
        setWaitingForDots(false);
        setShowDots(true);

        const resetTimer = setTimeout(() => {
          setDisplayedText("");
          setCurrentIndex(0);
          setShowDots(false);
        }, 1000); // Tiempo de repetición completa

        return () => clearTimeout(resetTimer);
      }, 500); // Tiempo de espera antes de mostrar los puntos

      return () => clearTimeout(dotsTimer);
    }
  }, [currentIndex]);

  // Generar los puntos dinámicamente
  const dotsArray = Array.from({ length: numDots }, (_, i) => i);

  return (
    <div className="under-construction">
        <StarsBg />
      <div className="text-container">
        {Array.from(displayedText).map((char, index) => (
          <span key={index} className="letter">
            {char}
          </span>
        ))}
        {showHammer && (
          <div className="hammer-container" style={{ left: `${hammerPosition * 2}rem` }}>
            <FaHammer className="hammer" />
            <span className="dot">•</span>
          </div>
        )}
        {showDots && (
          <div className="dots-container">
            {dotsArray.map((dotIndex) => (
              <span key={dotIndex} className="dot">.</span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default UnderConstruction;
