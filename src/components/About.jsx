import "../styles/About.css"

const About = () => {
    return (
        <section id="about" className="about">
            <div className="container">
                <div className="about-content">
                    <div className="about-image">
                        <img src="/images/SobreNosotros/clinica-medica.avif?height=600&width=500" alt="Instalaciones de la clínica" />
                        <div className="experience-badge">
                            <span className="years">15</span>
                            <span className="text">Años de excelencia médica</span>
                        </div>
                    </div>

                    <div className="about-text">
                        <span className="section-subtitle">Sobre Nosotros</span>
                        <h2 className="section-title">Comprometidos con su salud desde 2009</h2>

                        <p>
                            En MediCare, nos dedicamos a proporcionar atención médica de la más alta calidad en un ambiente acogedor y
                            centrado en el paciente. Nuestro equipo de profesionales altamente calificados trabaja con dedicación para
                            ofrecer soluciones médicas integrales.
                        </p>

                        <div className="about-features">
                            <div className="feature">
                                <div className="feature-icon">✓</div>
                                <div className="feature-text">
                                    <h4>Tecnología de vanguardia</h4>
                                    <p>Equipos médicos de última generación para diagnósticos precisos.</p>
                                </div>
                            </div>

                            <div className="feature">
                                <div className="feature-icon">✓</div>
                                <div className="feature-text">
                                    <h4>Profesionales certificados</h4>
                                    <p>Médicos especialistas con amplia experiencia y formación continua.</p>
                                </div>
                            </div>

                            <div className="feature">
                                <div className="feature-icon">✓</div>
                                <div className="feature-text">
                                    <h4>Atención personalizada</h4>
                                    <p>Tratamientos adaptados a las necesidades específicas de cada paciente.</p>
                                </div>
                            </div>
                        </div>

                        <button className="btn-primary">Conoce nuestra historia</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;
