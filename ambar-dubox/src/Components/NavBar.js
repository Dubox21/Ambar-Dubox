import React, { useState } from 'react';
import { FaBars, FaX } from "react-icons/fa6";
import { Link } from 'react-scroll';
import './NavBar.css';

function NavBar() {
    const [menuVisible, setMenuVisible] = useState(false);

    return (
        <div className='NavBar'>
            <nav className="nav">
                <h1>Ambar Dubox</h1>
                <button className="nav-toggle" aria-label="Open menu" onClick={() => setMenuVisible(!menuVisible)}>
                    <FaBars />
                </button>
                <ul className={`nav-menu ${menuVisible ? 'nav-menu_visible' : ''}`}>
                    <button className="close-menu" onClick={() => setMenuVisible(false)}>
                        <FaX />
                    </button>
                    <li className="item"><Link to='home' smooth={true} offset={-70} duration={500} onClick={() => setMenuVisible(false)}>Inicio</Link></li>
                    <li className="item"><Link to='about-me' smooth={true} offset={-130} duration={500} onClick={() => setMenuVisible(false)}>Sobre Mí</Link></li>
                    <li className="item"><Link to='projects' smooth={true} offset={-130} duration={500} onClick={() => setMenuVisible(false)}>Proyectos</Link></li>
                    <li className="item"><Link to='gallery' smooth={true} offset={-70} duration={500} onClick={() => setMenuVisible(false)}>Galería</Link></li>
                    <li className="item"><Link to='contact' smooth={true} offset={-70} duration={500} onClick={() => setMenuVisible(false)}>Contacto</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;
