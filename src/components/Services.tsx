// src/components/Services.tsx
'use client'

import { useState } from 'react'
import { FaCode, FaBullseye, FaMobileAlt } from 'react-icons/fa';

const ServiceCard = ({ 
    icon, 
    title, 
    children, 
    index, 
    isHovered, 
    onHover, 
    onLeave 
}: { 
    icon: React.ReactNode, 
    title: string, 
    children: React.ReactNode,
    index: number,
    isHovered: boolean,
    onHover: () => void,
    onLeave: () => void
}) => (
    <div 
        className={`
            bg-theme-secondary p-8 rounded-lg text-center h-full hover-lift cursor-pointer
            transition-all duration-300 border border-transparent group
            ${isHovered 
                ? 'border-accent shadow-lg shadow-accent/20 animate-pulse-glow scale-105' 
                : 'hover:border-accent/50'
            }
        `}
        style={{ animationDelay: `${0.2 + index * 0.1}s` }}
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
    >
        <div className={`
            text-4xl inline-block mb-4 transition-all duration-300 animate-float
            ${isHovered ? 'accent-color scale-110' : 'text-theme-secondary group-hover:accent-color'}
        `}
        style={{ animationDelay: `${index * 0.3}s` }}
        >
            {icon}
        </div>
        <h3 className="text-2xl font-bold mb-3 text-theme-primary">{title}</h3>
        <p className="text-theme-secondary leading-relaxed">{children}</p>
    </div>
);

const Services = () => {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null)

    const services = [
        {
            icon: <FaCode />,
            title: "Frontend Development",
            description: "I build responsive and dynamic user interfaces with modern JavaScript frameworks like Next.js and React.js."
        },
        {
            icon: <FaBullseye />,
            title: "Backend Development", 
            description: "I specialize in creating robust, scalable, and secure server-side applications and APIs using Laravel and NestJS."
        },
        {
            icon: <FaMobileAlt />,
            title: "Mobile Development",
            description: "I develop cross-platform mobile applications for both Android and iOS using Flutter from a single codebase."
        }
    ]

    return (
        <section id="services" className="py-20 bg-theme-primary">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-4xl font-bold mb-12 gradient-text opacity-0 animate-fade-in-up">
                    What I Build
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 opacity-0 animate-fade-in-up delay-200">
                    {services.map((service, index) => (
                        <ServiceCard 
                            key={index}
                            icon={service.icon} 
                            title={service.title}
                            index={index}
                            isHovered={hoveredCard === index}
                            onHover={() => setHoveredCard(index)}
                            onLeave={() => setHoveredCard(null)}
                        >
                            {service.description}
                        </ServiceCard>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;