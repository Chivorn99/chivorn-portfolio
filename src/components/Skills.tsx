// src/components/Skills.tsx
'use client'

import { useState } from 'react'

const skills = {
    technical: ['Next.js', 'React.js', 'NestJS', 'Laravel', 'Flutter', 'React Native',  'JavaScript', 'PHP', 'Cloud Computing', 'System Management', 'Networking Switching', 'Wireless Networking', 'Figma - Basic UI/UX'],
    professional: ['Leadership', 'Problem-Solving', 'Communication', 'Teamwork']
};

const Skills = () => {
    const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

    return (
        <section id="skills" className="py-20 bg-theme-secondary/30">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-12 gradient-text opacity-0 animate-fade-in-up">
                    My Skills
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                    {/* Technical Skills */}
                    <div className="opacity-0 animate-fade-in-up delay-200">
                        <h3 className="text-2xl font-bold mb-6 text-center md:text-left text-theme-primary flex items-center gap-3 justify-center md:justify-start">
                            <span className="text-2xl">⚡</span>
                            Technical Skills
                        </h3>
                        <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                            {skills.technical.map((skill, index) => (
                                <span 
                                    key={skill} 
                                    className={`
                                        bg-theme-secondary text-theme-primary px-4 py-2 rounded-full font-medium
                                        hover-lift cursor-pointer transition-all duration-300
                                        ${hoveredSkill === skill 
                                            ? 'bg-accent text-white scale-110 animate-pulse-glow' 
                                            : 'hover:bg-accent hover:text-white'
                                        }
                                    `}
                                    style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                                    onMouseEnter={() => setHoveredSkill(skill)}
                                    onMouseLeave={() => setHoveredSkill(null)}
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Professional Skills */}
                    <div className="opacity-0 animate-fade-in-up delay-400">
                        <h3 className="text-2xl font-bold mb-6 text-center md:text-left text-theme-primary flex items-center gap-3 justify-center md:justify-start">
                            <span className="text-2xl">🎯</span>
                            Professional Skills
                        </h3>
                        <ul className="space-y-4">
                            {skills.professional.map((skill, index) => (
                                <li 
                                    key={skill} 
                                    className={`
                                        bg-theme-secondary p-4 rounded-lg hover-lift cursor-pointer
                                        transition-all duration-300 border border-transparent
                                        ${hoveredSkill === skill 
                                            ? 'border-accent shadow-lg shadow-accent/20 animate-pulse-glow' 
                                            : 'hover:border-accent/50'
                                        }
                                    `}
                                    style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                                    onMouseEnter={() => setHoveredSkill(skill)}
                                    onMouseLeave={() => setHoveredSkill(null)}
                                >
                                    <p className="font-semibold text-lg text-theme-primary flex items-center gap-3">
                                        <span className="text-accent animate-float" style={{ animationDelay: `${index * 0.2}s` }}>
                                            {index === 0 ? '👥' : index === 1 ? '🧠' : index === 2 ? '💬' : '🤝'}
                                        </span>
                                        {skill}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Skills;