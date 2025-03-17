"use client"

import { useState } from "react"
import "../styles/Testimonials.css"

const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            name: "María González",
            role: "Paciente",
            image: "/clinica-medica-t-1/images/Testimonios/testimonial-2.avif?height=100&width=100",
            text: "La atención recibida en MediCare superó todas mis expectativas. El personal médico es extremadamente profesional y atento. Me sentí cuidada y en buenas manos durante todo mi tratamiento.",
        },
        {
            id: 2,
            name: "Roberto Pérez",
            role: "Paciente",
            image: "/clinica-medica-t-1/images/Testimonios/testimonial-1.avif?height=100&width=100",
            text: "Excelente servicio y atención. Los médicos se toman el tiempo necesario para explicar detalladamente los diagnósticos y opciones de tratamiento. Las instalaciones son modernas y muy limpias.",
        },
        {
            id: 3,
            name: "Carmen Jiménez",
            role: "Paciente",
            image: "/clinica-medica-t-1/images/Testimonios/testimonial-4.avif?height=100&width=100",
            text: "Llevo años confiando mi salud a MediCare. La calidad de la atención médica y el trato humano son excepcionales. Recomiendo ampliamente esta clínica a todos mis conocidos.",
        },
        {
            id: 4,
            name: "José Luis Morales",
            role: "Paciente",
            image: "/clinica-medica-t-1/images/Testimonios/testimonial-3.avif?height=100&width=100",
            text: "Agradezco enormemente al equipo de MediCare por su profesionalismo y dedicación. Mi recuperación fue mucho más rápida de lo esperado gracias a sus cuidados y seguimiento constante.",
        },
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    const nextTestimonial = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    };

    const prevTestimonial = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
    };

    return (
        <section id="testimonials" className="testimonials">
            <div className="container">
                <div className="section-header">
                    <span className="section-subtitle">Testimonios</span>
                    <h2 className="section-title">Lo que dicen nuestros pacientes</h2>
                </div>

                <div className="testimonials-slider">
                    <div className="testimonial-card">
                        <div className="quote-icon">"</div>
                        <p className="testimonial-text">{testimonials[activeIndex].text}</p>
                        <div className="testimonial-author">
                            <img
                                src={testimonials[activeIndex].image || "/placeholder.svg"}
                                alt={testimonials[activeIndex].name}
                                className="author-image"
                            />
                            <div className="author-info">
                                <h4 className="author-name">{testimonials[activeIndex].name}</h4>
                                <span className="author-role">{testimonials[activeIndex].role}</span>
                            </div>
                        </div>
                    </div>

                    <div className="testimonial-controls">
                        <button className="control-btn prev" onClick={prevTestimonial}>
                            ←
                        </button>
                        <div className="testimonial-dots">
                            {testimonials.map((_, index) => (
                                <span
                                    key={index}
                                    className={`dot ${index === activeIndex ? "active" : ""}`}
                                    onClick={() => setActiveIndex(index)}
                                ></span>
                            ))}
                        </div>
                        <button className="control-btn next" onClick={nextTestimonial}>
                            →
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
