// src/components/About.tsx
'use client'

import { useState } from 'react'

const About = () => {
    const skills = ['Next.js', 'React.js', 'Laravel', 'NestJS', 'Flutter', 'Cloud Computing'];
    const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

    return (
        <section id="about" className="py-20 bg-theme-secondary/30">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-6 text-theme-primary gradient-text opacity-0 animate-fade-in-up">
                        About Me
                    </h2>
                    <p className="text-lg text-theme-secondary leading-relaxed opacity-0 animate-fade-in-up delay-200">
                        I'm a driven Full-Stack Developer and a Computer Science student at Paragon International
                        University. My passion lies in building practical, high-quality digital solutions that make
                        a real difference. I combine technical expertise with creative problem-solving to deliver
                        exceptional user experiences.
                    </p>
                    
                    <div className="flex flex-wrap justify-center gap-3 mt-8 opacity-0 animate-fade-in-up delay-300">
                        {skills.map((skill, index) => (
                            <span 
                                key={skill} 
                                className={`
                                    bg-theme-secondary text-theme-primary px-4 py-2 rounded-full text-sm font-medium
                                    hover-lift cursor-pointer transition-all duration-300
                                    ${hoveredSkill === skill 
                                        ? 'bg-accent text-white scale-110 animate-pulse-glow' 
                                        : 'hover:bg-accent hover:text-white'
                                    }
                                `}
                                style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                                onMouseEnter={() => setHoveredSkill(skill)}
                                onMouseLeave={() => setHoveredSkill(null)}
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                    
                    <div className="opacity-0 animate-fade-in-up delay-500">
                        <a
                            href="/docs/nhoung_norakchivorn_cv.pdf"
                            download="Norakchivorn_Nhoung_CV.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                                mt-10 inline-block bg-accent text-white font-bold py-3 px-8 rounded-full 
                                hover:bg-accent-hover transition-all duration-300 hover-lift
                                shadow-lg hover:shadow-xl hover:scale-105 active:scale-95
                                relative overflow-hidden group
                            "
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                Download CV
                                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-1" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </span>
                            
                            {/* Animated background on hover */}
                            <div className="absolute inset-0 bg-gradient-to-r from-accent to-accent-hover opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;