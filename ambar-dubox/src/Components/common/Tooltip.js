import React from 'react';
import './Tooltip.css';

const Tooltip = ({ children, content }) => {
    return (
        <div className="tooltip-container">
            {children}
            {content && (
                <div className="tooltip-content">
                    <p>Tecnologías Usadas:</p>
                    {content.map((item, index) => (
                        <div key={index} className="tooltip-item">
                            {item}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Tooltip;
