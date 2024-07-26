import React from 'react'
import './Header.css'
import StarsBg from './common/StarsBg'

function Header() {
  
    return (
        <header className='header-content'>
            <section class="hero">
                <StarsBg />
                <h1>Bienvenidos a mi Portafolio</h1>
                <p>Desarrolladora Full Stack, Móvil y Analista QA</p>
                <a href="#" class="cta-button">Ver mis proyectos</a>
            </section>
        </header>
    )
}

export default Header