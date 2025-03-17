"use client"

import { useState } from "react"
import "../styles/Contact.css"

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // Aquí iría la lógica para enviar el formulario
        console.log("Formulario enviado:", formData)
        alert("Gracias por contactarnos. Nos comunicaremos contigo pronto.")
        setFormData({
            name: "",
            email: "",
            phone: "",
            service: "",
            message: "",
        })
    }

    return (
        <section id="contact" className="contact">
            <div className="container">
                <div className="contact-wrapper">
                    <div className="contact-info">
                        <span className="section-subtitle">Contacto</span>
                        <h2 className="section-title">Estamos aquí para ayudarte</h2>
                        <p className="contact-description">
                            Completa el formulario y nuestro equipo se pondrá en contacto contigo a la brevedad.
                        </p>

                        <div className="contact-details">
                            <div className="contact-item">
                                <div className="contact-icon">📍</div>
                                <div className="contact-text">
                                    <h4>Dirección</h4>
                                    <p>Av. Principal 123, Ciudad Médica</p>
                                </div>
                            </div>

                            <div className="contact-item">
                                <div className="contact-icon">📞</div>
                                <div className="contact-text">
                                    <h4>Teléfono</h4>
                                    <p>+123 456 7890</p>
                                </div>
                            </div>

                            <div className="contact-item">
                                <div className="contact-icon">✉️</div>
                                <div className="contact-text">
                                    <h4>Email</h4>
                                    <p>info@medicare.com</p>
                                </div>
                            </div>

                            <div className="contact-item">
                                <div className="contact-icon">🕒</div>
                                <div className="contact-text">
                                    <h4>Horario</h4>
                                    <p>Lunes a Viernes: 8:00 - 20:00</p>
                                    <p>Sábados: 9:00 - 14:00</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form-container">
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Nombre completo</label>
                                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Correo electrónico</label>
                                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                            </div>

                            <div className="form-group">
                                <label htmlFor="phone">Teléfono</label>
                                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
                            </div>

                            <div className="form-group">
                                <label htmlFor="service">Servicio de interés</label>
                                <select id="service" name="service" value={formData.service} onChange={handleChange} required>
                                    <option value="">Selecciona un servicio</option>
                                    <option value="cardiologia">Cardiología</option>
                                    <option value="neurologia">Neurología</option>
                                    <option value="traumatologia">Traumatología</option>
                                    <option value="pediatria">Pediatría</option>
                                    <option value="odontologia">Odontología</option>
                                    <option value="oftalmologia">Oftalmología</option>
                                    <option value="otro">Otro</option>
                                </select>
                            </div>

                            <div className="form-group full-width">
                                <label htmlFor="message">Mensaje</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>

                            <button type="submit" className="btn-primary full-width">
                                Enviar mensaje
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
