"use client"

import { useState, useEffect } from "react"
import "../styles/Header.css"

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`header ${isScrolled ? "scrolled" : ""}`}>
            <div className="container">
                <div className="logo">
                    <span className="logo-icon">+</span>
                    <h1>MediCare</h1>
                </div>

                <div
                    className={`mobile-menu-button ${mobileMenuOpen ? "active" : ""}`}
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <nav className={`nav-menu ${mobileMenuOpen ? "open" : ""}`}>
                    <ul>
                        <li>
                            <a href="#home" onClick={() => setMobileMenuOpen(false)}>
                                Inicio
                            </a>
                        </li>
                        <li>
                            <a href="#services" onClick={() => setMobileMenuOpen(false)}>
                                Servicios
                            </a>
                        </li>
                        <li>
                            <a href="#about" onClick={() => setMobileMenuOpen(false)}>
                                Nosotros
                            </a>
                        </li>
                        <li>
                            <a href="#doctors" onClick={() => setMobileMenuOpen(false)}>
                                Especialistas
                            </a>
                        </li>
                        <li>
                            <a href="#testimonials" onClick={() => setMobileMenuOpen(false)}>
                                Testimonios
                            </a>
                        </li>
                        <li>
                            <a href="#contact" onClick={() => setMobileMenuOpen(false)}>
                                Contacto
                            </a>
                        </li>
                    </ul>
                </nav>

                <div className="appointment-button">
                    <button
                        className="btn-appointment"
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        Agendar Cita
                    </button>
                </div>

            </div>
        </header>
    );
};

export default Header;
