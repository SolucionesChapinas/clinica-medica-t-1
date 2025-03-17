import "../styles/Doctors.css"

const Doctors = () => {
    const doctors = [
        {
            id: 1,
            name: "Dra. Ana Martínez",
            specialty: "Cardiología",
            image: "/clinica-medica-t-1/images/Doctores/Doctor-1.webp?height=300&width=300",
            description: "Especialista en cardiología intervencionista con más de 10 años de experiencia.",
        },
        {
            id: 2,
            name: "Dr. Carlos Rodríguez",
            specialty: "Neurología",
            image: "/clinica-medica-t-1/images/Doctores/Doctor-2.webp?height=300&width=300",
            description: "Neurólogo especializado en trastornos del sueño y enfermedades neurodegenerativas.",
        },
        {
            id: 3,
            name: "Dra. Laura Sánchez",
            specialty: "Pediatría",
            image: "/clinica-medica-t-1/images/Doctores/Doctor-3.webp?height=300&width=300",
            description: "Pediatra con enfoque en desarrollo infantil y medicina preventiva.",
        },
        {
            id: 4,
            name: "Dr. Miguel Fernández",
            specialty: "Traumatología",
            image: "/clinica-medica-t-1/images/Doctores/Doctor-4.webp?height=300&width=300",
            description: "Especialista en cirugía ortopédica y medicina deportiva.",
        },
    ];

    return (
        <section id="doctors" className="doctors">
            <div className="container">
                <div className="section-header">
                    <span className="section-subtitle">Nuestro Equipo</span>
                    <h2 className="section-title">Especialistas Médicos</h2>
                    <p className="section-description">
                        Contamos con un equipo de profesionales altamente calificados y comprometidos con su salud.
                    </p>
                </div>

                <div className="doctors-grid">
                    {doctors.map((doctor) => (
                        <div className="doctor-card" key={doctor.id}>
                            <div className="doctor-image">
                                <img src={doctor.image || "/placeholder.svg"} alt={doctor.name} />
                            </div>
                            <div className="doctor-info">
                                <h3 className="doctor-name">{doctor.name}</h3>
                                <span className="doctor-specialty">{doctor.specialty}</span>
                                <p className="doctor-description">{doctor.description}</p>
                                <div className="doctor-social">
                                    <a href="#" className="social-icon">
                                        in
                                    </a>
                                    <a href="#" className="social-icon">
                                        f
                                    </a>
                                    <a href="#" className="social-icon">
                                        t
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="doctors-cta">
                    <p>¿Buscas un especialista específico?</p>
                    <button className="btn-secondary">Ver todos los especialistas</button>
                </div>
            </div>
        </section>
    );
};

export default Doctors;
