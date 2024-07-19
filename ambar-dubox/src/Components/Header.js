import React, {useEffect} from 'react'
import './Header.css'

function Header() {
    useEffect(() => {
        const starsContainer = document.querySelector('.stars');

        for (let i = 0; i < 100; i++) {
            const star = document.createElement('div');
            star.classList.add('star');
            star.style.width = `${Math.random() * 3 + 1}px`; // Ancho aleatorio
            star.style.height = star.style.width;
            star.style.top = `${Math.random() * 100}vh`;
            star.style.left = `${Math.random() * 100}vw`;
            star.style.animationDuration = `${Math.random() * 20 + 10}s`; // Duración aleatoria entre 10s y 30s
            starsContainer.appendChild(star);
        }
    }, []);
    
    return (
        <header className='header-content'>
            <section class="hero">
                <div class="stars"></div>
                <h1>Bienvenidos a mi Portafolio</h1>
                <p>Desarrolladora Full Stack, Móvil y Analista QA</p>
                <a href="#" class="cta-button">Ver mis proyectos</a>
            </section>
        </header>
    )
}

export default Header