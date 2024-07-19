import React, { useEffect, useState } from 'react';
import { FaBars, FaX } from "react-icons/fa6";
import './NavBar.css';

function NavBar() {
    const [menuVisible, setMenuVisible] = useState(false);

    useEffect(() => {
        const navToggle = document.querySelector(".nav-toggle");

        const handleToggle = () => {
            setMenuVisible(!menuVisible);
        };

        if (navToggle) {
            navToggle.addEventListener("click", handleToggle);
        }

        return () => {
            if (navToggle) {
                navToggle.removeEventListener("click", handleToggle);
            }
        };
    }, [menuVisible]);

    useEffect(() => {
        const navToggle = document.querySelector(".nav-toggle");
        if (navToggle) {
            if (menuVisible) {
                document.querySelector(".nav-menu").classList.add("nav-menu_visible");
                navToggle.setAttribute("aria-label", "Close menu");
            } else {
                document.querySelector(".nav-menu").classList.remove("nav-menu_visible");
                navToggle.setAttribute("aria-label", "Open menu");
            }
        }
    }, [menuVisible]);

    return (
        <div className='NavBar'>
            <nav className="nav">
            <h1>Ambar Dubox</h1>
                <button className="nav-toggle" aria-label="Open menú">
                    <FaBars />
                </button>
                <ul className="nav-menu">
                    <button className="close-menu" onClick={() => setMenuVisible(false)}>
                        <FaX />
                    </button>
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Sobre Mí</a></li>
                    <li><a href="#">Proyectos</a></li>
                    <li><a href="#">Galeria</a></li>
                    <li><a href="#">Contacto</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar