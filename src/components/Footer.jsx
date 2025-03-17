import "../styles/Footer.css"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-top">
                    <div className="footer-column">
                        <div className="footer-logo">
                            <span className="logo-icon">+</span>
                            <h2>MediCare</h2>
                        </div>
                        <p className="footer-description">
                            Ofrecemos atención médica integral con los más altos estándares de calidad y tecnología de vanguardia.
                        </p>
                        <div className="footer-social">
                            <a href="#" className="social-link">
                                f
                            </a>
                            <a href="#" className="social-link">
                                t
                            </a>
                            <a href="#" className="social-link">
                                in
                            </a>
                            <a href="#" className="social-link">
                                ig
                            </a>
                        </div>
                    </div>

                    <div className="footer-column">
                        <h3 className="footer-title">Enlaces rápidos</h3>
                        <ul className="footer-links">
                            <li>
                                <a href="#home">Inicio</a>
                            </li>
                            <li>
                                <a href="#services">Servicios</a>
                            </li>
                            <li>
                                <a href="#about">Nosotros</a>
                            </li>
                            <li>
                                <a href="#doctors">Especialistas</a>
                            </li>
                            <li>
                                <a href="#testimonials">Testimonios</a>
                            </li>
                            <li>
                                <a href="#contact">Contacto</a>
                            </li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h3 className="footer-title">Servicios</h3>
                        <ul className="footer-links">
                            <li>
                                <a href="#">Cardiología</a>
                            </li>
                            <li>
                                <a href="#">Neurología</a>
                            </li>
                            <li>
                                <a href="#">Traumatología</a>
                            </li>
                            <li>
                                <a href="#">Pediatría</a>
                            </li>
                            <li>
                                <a href="#">Odontología</a>
                            </li>
                            <li>
                                <a href="#">Oftalmología</a>
                            </li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h3 className="footer-title">Horario de atención</h3>
                        <ul className="footer-schedule">
                            <li>
                                <span className="day">Lunes - Viernes:</span>
                                <span className="hours">8:00 - 20:00</span>
                            </li>
                            <li>
                                <span className="day">Sábados:</span>
                                <span className="hours">9:00 - 14:00</span>
                            </li>
                            <li>
                                <span className="day">Domingos:</span>
                                <span className="hours">Cerrado</span>
                            </li>
                        </ul>
                        <div className="emergency-contact">
                            <h4>Emergencias 24/7</h4>
                            <p className="emergency-phone">+123 456 7890</p>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p className="copyright">&copy; {new Date().getFullYear()} MediCare. Todos los derechos reservados.</p>
                    <div className="footer-bottom-links">
                        <a href="#">Política de privacidad</a>
                        <a href="#">Términos y condiciones</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
