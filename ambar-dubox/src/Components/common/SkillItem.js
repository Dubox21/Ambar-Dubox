import React from 'react';
import './SkillItem.css';

function SkillItem({ name, imageUrl }) {
    return (
        <div className='skill-item'>
            <p>{name}</p>
            <img src={imageUrl} alt={name} />
        </div>
    );
}

export default SkillItem;
