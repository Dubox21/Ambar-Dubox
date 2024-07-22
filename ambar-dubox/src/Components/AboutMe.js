import React from 'react';
import SkillsList from './common/SkillsList';
import './AboutMe.css';

function AboutMe() {
    return (
        <div className='about-me-container'>
            <h2>Sobre mi</h2>
            <div className='about-me'>
                <div className='about-me-text'>
                    <p>Hola, soy una desarrolladora Full Stack, Móvil y QA apasionada por crear aplicaciones web y móviles intuitivas y eficientes.
                        Me encanta transformar ideas en realidades digitales, trabajando en el diseño y la implementación de soluciones que faciliten
                        la vida de los usuarios. En este portafolio, podrás explorar algunos de mis trabajos más destacados y conocer más sobre mi
                        enfoque hacia el desarrollo y la tecnología.</p>
                    <p>Además, continúo mejorando mis habilidades a través de diversos cursos y capacitaciones. Puedes ver una lista de mis cursos
                        y certificaciones <a href='#' className='link'>aquí</a></p>
                </div>
                <div className='about-me-skills'>
                    <h3>Habilidades</h3>
                        <SkillsList />
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
