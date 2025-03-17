import "../styles/Services.css"

const Services = () => {
    const services = [
        {
            id: 1,
            icon: "🫀",
            title: "Cardiología",
            description: "Diagnóstico y tratamiento de enfermedades cardiovasculares con tecnología de última generación.",
        },
        {
            id: 2,
            icon: "🧠",
            title: "Neurología",
            description: "Atención especializada para trastornos del sistema nervioso central y periférico.",
        },
        {
            id: 3,
            icon: "🦴",
            title: "Traumatología",
            description: "Tratamiento de lesiones y enfermedades del sistema músculo-esquelético.",
        },
        {
            id: 4,
            icon: "👶",
            title: "Pediatría",
            description: "Cuidado integral de la salud de bebés, niños y adolescentes.",
        },
        {
            id: 5,
            icon: "🦷",
            title: "Odontología",
            description: "Servicios dentales completos para toda la familia con enfoque preventivo.",
        },
        {
            id: 6,
            icon: "👁️",
            title: "Oftalmología",
            description: "Diagnóstico y tratamiento de enfermedades oculares con equipos de alta precisión.",
        },
    ]

    return (
        <section id="services" className="services">
            <div className="container">
                <div className="section-header">
                    <span className="section-subtitle">Nuestros Servicios</span>
                    <h2 className="section-title">Especialidades Médicas</h2>
                    <p className="section-description">
                        Ofrecemos una amplia gama de servicios médicos especializados para cuidar de su salud y la de su familia.
                    </p>
                </div>

                <div className="services-grid">
                    {services.map((service) => (
                        <div className="service-card" key={service.id}>
                            <div className="service-icon">{service.icon}</div>
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-description">{service.description}</p>
                            <a href="#" className="service-link">
                                Saber más
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Services
