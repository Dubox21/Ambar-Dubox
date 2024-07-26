import React from 'react';
import ProjectsList from './common/ProjectsList';
import StarsBg from './common/StarsBg'; // Ajusta la ruta según tu estructura de carpetas
import './Projects.css';

function Projects() {
    return (
        <div className='projects-container'>
            <h2>Proyectos</h2>
            <div className='projects'>
                <div className='project'>
                    <StarsBg />
                    <ProjectsList />
                </div>
            </div>
        </div>
    );
}

export default Projects;
