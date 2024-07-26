import React from 'react';
import './StarsBg.css';

function StarsBg() {
    const starElements = Array.from({ length: 100 }).map((_, index) => {
        const size = `${Math.random() * 3 + 1}px`;
        const top = `${Math.random() * 100}%`;
        const left = `${Math.random() * 100}%`;
        const duration = `${Math.random() * 20 + 10}s`;

        return (
            <div
                key={index}
                className="star"
                style={{
                    width: size,
                    height: size,
                    top,
                    left,
                    animationDuration: duration,
                }}
            />
        );
    });

    return (
        <div className="stars">
            {starElements}
        </div>
    );
}

export default StarsBg;
