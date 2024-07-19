import React from 'react';
import SkillItem from './SkillItem';
import './SkillsList.css';
import skillsData from '../../data/skillsData.json'; // Ajusta la ruta según tu estructura de carpetas

function SkillsList() {
    return (
        <div className='skills-list'>
            {skillsData.map((category, index) => (
                <div className='skills-category' key={index}>
                    <h3>{category.category}</h3>
                    <div className='skills-items'>
                        {category.skills.map((skill, i) => (
                            <SkillItem key={i} name={skill.name} imageUrl={skill.imageUrl} />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default SkillsList;
