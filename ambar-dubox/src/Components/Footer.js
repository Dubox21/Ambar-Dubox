import React from 'react'
import './Footer.css'

function Footer() {
    const currentYear = new Date().getFullYear();
  return (
    <div className='footer'>
        <p>© {currentYear} Ambar Dubox. Todos los derechos reservados.</p>
        <div className="logos">
            <a href="https://www.linkedin.com/in/ambar-l-dubox/" target="_blank"><img src="/assets/logos/linkedin.png" alt="LinkedIn"/>  LinkedIn</a>
            <a href="https://github.com/Dubox21" target="_blank"><img class="logo" src="/assets/logos/github.png" alt="GitHub"/>  GitHub</a>
        </div>
    </div>
  )
}

export default Footer