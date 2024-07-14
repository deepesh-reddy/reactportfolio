import React, { useState } from "react";
import "./services.css"

const Services = () => {
    const [toggleState, setToggleState] = useState(0);
    const toggleTab = (index) => setToggleState(index);

    const serviceData = [
        {
            title: ["Frontend", "Development"],
            icon: "bi-columns",
            description: "Delivering high-quality, responsive user interfaces for web applications.",
            skills: [
                "Design and implement intuitive user interfaces",
                "Develop responsive web applications",
                "Create interactive and dynamic web pages using modern frameworks",
                "Ensure cross-browser compatibility and mobile responsiveness"
            ]
        },
        {
            title: ["Backend", "Development"],
            icon: "bi-code",
            description: "Building robust and scalable server-side applications to power your web solutions.",
            skills: [
                "Design and implement RESTful APIs",
                "Develop database schemas and optimize queries",
                "Implement user authentication and authorization systems",
                "Create efficient data processing and storage solutions"
            ]
        },
        {
            title: ["Web", "Scraping"],
            icon: "bi-bezier2",
            description: "Extracting valuable data from websites to fuel your business intelligence and research needs using puppeteer.",
            skills: [
                "Develop custom web scrapers for targeted data extraction",
                "Create automated scraping schedules for regular data updates",
                "Clean and structure scraped data for easy analysis"
            ]
        }
    ];

    return (
        <section className="services section" id="services">
            <h2 className="section__title">Services</h2>
            <span className="section__subtitle">What I offer</span>

            <div className="services__container container grid">
                {serviceData.map((service, index) => (
                    <div className="services__content" key={index}>
                        <div>
                            <i className={`bi ${service.icon} services__icon`}></i>
                            <h3 className="services__title">
                                {service.title[0]} <br /> {service.title[1]}
                            </h3>
                        </div>
                        <span className="services__button" onClick={() => toggleTab(index + 1)}>
                            View More <i className="bi bi-arrow-right services__button-icon"></i>
                        </span>
                        
                        <div className={toggleState === index + 1 ? "services__modal active-modal" : "services__modal"}>
                            <div className="services__modal-content">
                                <i onClick={() => toggleTab(0)} className="bi bi-x-lg services__modal-close"></i>
                                <h3 className="services__modal-title">{service.title.join(' ')}</h3>
                                <p className="services__modal-description">{service.description}</p>
                                <ul className="services__modal-services grid">
                                    {service.skills.map((skill, idx) => (
                                        <li className="services__modal-service" key={idx}>
                                            <i className="bi bi-patch-check"></i>
                                            <p className="services__modal-info">{skill}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Services;