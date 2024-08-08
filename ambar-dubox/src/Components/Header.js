import React from 'react'
import './Header.css'
import StarsBg from './common/StarsBg'
import { Link } from 'react-scroll';

function Header() {
  
    return (
        <header className='header-content'>
            <section class="hero">
                <StarsBg />
                <h1>Bienvenidos a mi Portafolio</h1>
                <p>Desarrolladora Full Stack, Móvil y Analista QA</p>
                <button className="cta-button">
                    <Link to="projects" smooth={true} offset={-95} duration={500}>
                        Ver mis proyectos
                    </Link>
                </button>
            </section>
        </header>
    )
}

export default Header