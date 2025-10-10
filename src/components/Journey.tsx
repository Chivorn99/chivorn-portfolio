'use client'

import { useState } from 'react'

const Journey = () => {
    const [hoveredCard, setHoveredCard] = useState<string | null>(null)

    const education = [
        {
            id: 'cs-degree',
            period: '2023 - Present',
            title: 'B.S. in Computer Science',
            institution: 'Paragon Int. University',
            icon: '🎓'
        },
        {
            id: 'fullstack-cert',
            period: '2024',
            title: 'Fullstack Engineer Certification',
            institution: 'Qwasar Silicon Valley',
            icon: '⚡'
        }
    ]

    const experience = [
        {
            id: 'domrey-intern',
            period: '2024 - 2025',
            title: 'Full-stack & Mobile Dev Intern',
            company: 'Domrey (KESKO)',
            icon: '💼',
            responsibilities: [
                'Developed features across web (Laravel, ReactJS) and mobile (React Native).',
                'Collaborated on building backend services and integrating APIs.'
            ]
        },
        {
            id: 'techpreneurship',
            period: '2024 - 2025',
            title: 'Techpreneurship Program',
            company: '9-Month Bootcamp',
            icon: '🚀',
            responsibilities: [
                'Built and pitched multiple startup prototypes using Next.js, NestJS, and Flutter.'
            ]
        }
    ]

    return (
        <section id="journey" className="py-20 bg-theme-primary">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-12 gradient-text opacity-0 animate-fade-in-up">
                    My Journey
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                    {/* Education Column */}
                    <div className="opacity-0 animate-fade-in-up delay-200">
                        <h3 className="text-3xl font-bold mb-6 text-theme-primary flex items-center gap-3">
                            <span className="text-2xl">📚</span>
                            Education
                        </h3>
                        <div className="space-y-6">
                            {education.map((item, index) => (
                                <div 
                                    key={item.id}
                                    className={`
                                        bg-theme-secondary p-6 rounded-lg hover-lift cursor-pointer
                                        transition-all duration-300 border border-transparent
                                        ${hoveredCard === item.id 
                                            ? 'border-accent shadow-lg shadow-accent/20 animate-pulse-glow' 
                                            : 'hover:border-accent/50'
                                        }
                                    `}
                                    style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                                    onMouseEnter={() => setHoveredCard(item.id)}
                                    onMouseLeave={() => setHoveredCard(null)}
                                >
                                    <div className="flex items-start gap-3">
                                        <span className="text-2xl animate-float" style={{ animationDelay: `${index * 0.5}s` }}>
                                            {item.icon}
                                        </span>
                                        <div className="flex-1">
                                            <p className="text-sm text-theme-secondary mb-1">{item.period}</p>
                                            <h4 className="text-xl font-bold text-theme-primary mb-1">{item.title}</h4>
                                            <p className="text-theme-secondary">{item.institution}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Experience Column */}
                    <div className="opacity-0 animate-fade-in-up delay-400">
                        <h3 className="text-3xl font-bold mb-6 text-theme-primary flex items-center gap-3">
                            <span className="text-2xl">💼</span>
                            Experience
                        </h3>
                        <div className="space-y-6">
                            {experience.map((item, index) => (
                                <div 
                                    key={item.id}
                                    className={`
                                        bg-theme-secondary p-6 rounded-lg hover-lift cursor-pointer
                                        transition-all duration-300 border border-transparent
                                        ${hoveredCard === item.id 
                                            ? 'border-accent shadow-lg shadow-accent/20 animate-pulse-glow' 
                                            : 'hover:border-accent/50'
                                        }
                                    `}
                                    style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                                    onMouseEnter={() => setHoveredCard(item.id)}
                                    onMouseLeave={() => setHoveredCard(null)}
                                >
                                    <div className="flex items-start gap-3">
                                        <span className="text-2xl animate-float" style={{ animationDelay: `${index * 0.5}s` }}>
                                            {item.icon}
                                        </span>
                                        <div className="flex-1">
                                            <p className="text-sm text-theme-secondary mb-1">{item.period}</p>
                                            <h4 className="text-xl font-bold text-theme-primary mb-1">{item.title}</h4>
                                            <p className="text-theme-secondary mb-3">{item.company}</p>
                                            {item.responsibilities && (
                                                <ul className="list-disc list-inside text-theme-secondary text-sm space-y-1">
                                                    {item.responsibilities.map((resp, respIndex) => (
                                                        <li key={respIndex} className="hover:accent-color transition-colors duration-200">
                                                            {resp}
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Journey;