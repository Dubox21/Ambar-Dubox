import React from 'react'
import './Contact.css'

function Contact() {
    return (
        <div>
            <h2>Contáctame</h2>
            <div className="contact-form">
                <form action="" className='contact'>
                    <p>Si necesitas mas información, no dude en contactarme</p>
                    <div className='form-inputs'>
                        <div className="form-group">
                            <label htmlFor="name">Nombre</label>
                            <input type="text" id="name" className='form-input' />
                        </div>
                        <div className="form-group">
                            <label htmlFor='last-name'>Apellido</label>
                            <input type="text" id="last-name" className='form-input' />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" className='form-input' />
                    </div>
                    <div className="form-group">
                        <label htmlFor="subject">Asunto</label>
                        <input type="text" id="subject" className='form-input' />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Mensage</label>
                        <textarea id="message" className='form-textarea' />
                    </div>
                    <div className="form-group" >
                        <label htmlFor='schedule-contact' >Horario de contacto</label>
                        <div className='form-schedule'>
                            <div className='form-schedule-option'>
                                <input
                                    type="radio"
                                    id="option1"
                                    name="options"
                                    value="opcion1"
                                />
                                <label htmlFor="option1">9hs a 12hs</label>
                            </div>
                            <div className='form-schedule-option'>
                                <input
                                    type="radio"
                                    id="option2"
                                    name="options"
                                    value="opcion2"
                                />
                                <label htmlFor="option2">13hs a 18hs</label>
                            </div>
                        </div>
                    </div>
                    <div className="btn-container"><button type="submit" className="form-submit">Enviar</button></div>
                </form>
            </div>
        </div>
    )
}

export default Contact