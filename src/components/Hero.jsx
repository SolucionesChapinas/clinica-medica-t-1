import "../styles/Hero.css"

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="container">
                <div className="hero-content">
                    <h1>Cuidado médico de excelencia para toda la familia</h1>
                    <p>Ofrecemos atención médica integral con los más altos estándares de calidad y tecnología de vanguardia.</p>
                    <div className="hero-buttons">
                        <button
                            className="btn-primary"
                            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            Nuestros Servicios
                        </button>
                        <button
                            className="btn-secondary"
                            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            Conócenos
                        </button>
                    </div>

                    <div className="hero-stats">
                        <div className="stat-item">
                            <span className="stat-number">15+</span>
                            <span className="stat-text">Años de experiencia</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">30+</span>
                            <span className="stat-text">Especialistas</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">5000+</span>
                            <span className="stat-text">Pacientes satisfechos</span>
                        </div>
                    </div>
                </div>

                <div className="hero-image">
                    <img src="/clinica-medica-t-1/images/Inicio/equipo-medico.avif?height=500&width=600" alt="Equipo médico profesional" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
