'use client'

import { useState } from 'react'
import Image from 'next/image'
import { FaTimes } from 'react-icons/fa'

const Journey = () => {
    const [selectedCertificate, setSelectedCertificate] = useState<string | null>(null)

    const education = [
        {
            id: 'hs-bacii',
            period: '2019 - 2022',
            title: 'High School BACII',
            institution: 'E2STEM Preah Yukumthor High School',
            icon: '🎓',
            certificate: null
        },
        {
            id: 'cs-degree',
            period: '2023 - Present',
            title: 'B.S. in Computer Science',
            institution: 'Paragon Int. University',
            icon: '🎓',
            certificate: null
        },
        {
            id: 'fullstack-cert',
            period: '2025',
            title: 'Fullstack Engineer Certification',
            institution: 'Qwasar Silicon Valley',
            icon: '⚡',
            certificate: '/images/full-stack-cert.png',
            certificateLabel: 'View Certificate'
        },
        // {
        //     id: 'techpreneur-cert',
        //     period: '2025',
        //     title: 'Techpreneur Certification',
        //     institution: 'Dichin Academy',
        //     icon: '⚡',
        //     certificate: '/images/techpreneur-cert.png',
        //     certificateLabel: 'View Certificate'
        // }
    ]

    const experience = [
        {
            id: 'freelance-dev',
            period: '2023 - Present',
            title: 'Freelance Full-Stack Developer',
            company: 'Self-Employed',
            description: 'Building custom web and mobile applications for clients using modern technologies.',
            icon: '💼'
        },
        {
            id: 'tech-intern',
            period: '2023',
            title: 'Software Development Intern',
            company: 'Tech Startup',
            description: 'Contributed to developing scalable web applications and learned industry best practices.',
            icon: '🚀'
        }
    ]

    const [hoveredItem, setHoveredItem] = useState<string | null>(null)

    const TimelineCard = ({ item, index, type }: { item: any, index: number, type: 'education' | 'experience' }) => {
        const isHovered = hoveredItem === item.id
        const hasCertificate = item.certificate

        return (
            <div
                className={`
                    bg-theme-secondary p-6 rounded-lg hover-lift cursor-pointer
                    transition-all duration-300 border border-transparent
                    ${isHovered
                        ? 'border-accent shadow-lg shadow-accent/20 animate-pulse-glow scale-105'
                        : 'hover:border-accent/50'
                    }
                    ${hasCertificate ? 'relative' : ''}
                `}
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
                onClick={() => hasCertificate && setSelectedCertificate(item.id)}
            >
                {/* Certificate Badge */}
                {hasCertificate && (
                    <div className="absolute -top-2 -right-2 bg-accent text-white rounded-full p-2 shadow-lg animate-bounce">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                            <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                        </svg>
                    </div>
                )}

                <div className="flex items-start gap-4">
                    <div className="text-3xl animate-float" style={{ animationDelay: `${index * 0.2}s` }}>
                        {item.icon}
                    </div>
                    <div className="flex-1">
                        <span className="text-accent text-sm font-medium">{item.period}</span>
                        <h3 className="text-xl font-bold text-theme-primary mt-1 mb-1">{item.title}</h3>
                        <p className="text-theme-secondary font-medium mb-2">
                            {type === 'education' ? item.institution : item.company}
                        </p>
                        {item.description && (
                            <p className="text-theme-secondary text-sm leading-relaxed">
                                {item.description}
                            </p>
                        )}
                        {hasCertificate && (
                            <div className="mt-3 flex items-center gap-2 text-accent text-sm font-medium hover:underline">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                                {item.certificateLabel}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        )
    }

    return (
        <>
            <section id="journey" className="py-20 bg-theme-secondary/30">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-12 gradient-text opacity-0 animate-fade-in-up">
                        My Journey
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Education */}
                        <div className="opacity-0 animate-fade-in-up delay-200">
                            <h3 className="text-2xl font-bold mb-6 text-center md:text-left text-theme-primary flex items-center gap-3 justify-center md:justify-start">
                                <span className="text-2xl">📚</span>
                                Education
                            </h3>
                            <div className="space-y-4">
                                {education.map((item, index) => (
                                    <TimelineCard key={item.id} item={item} index={index} type="education" />
                                ))}
                            </div>
                        </div>

                        {/* Experience */}
                        <div className="opacity-0 animate-fade-in-up delay-400">
                            <h3 className="text-2xl font-bold mb-6 text-center md:text-left text-theme-primary flex items-center gap-3 justify-center md:justify-start">
                                <span className="text-2xl">💼</span>
                                Experience
                            </h3>
                            <div className="space-y-4">
                                {experience.map((item, index) => (
                                    <TimelineCard key={item.id} item={item} index={index} type="experience" />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Certificate Modal */}
            {selectedCertificate && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <div
                        className="absolute inset-0 bg-black bg-opacity-75 backdrop-blur-sm"
                        onClick={() => setSelectedCertificate(null)}
                    />

                    <div className="relative bg-theme-secondary rounded-2xl p-4 max-w-4xl w-full shadow-2xl border border-accent/20 animate-fade-in-up">
                        <button
                            onClick={() => setSelectedCertificate(null)}
                            className="absolute top-4 right-4 z-10 bg-theme-primary/80 hover:bg-theme-primary text-theme-secondary hover:accent-color p-2 rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm"
                            aria-label="Close certificate"
                        >
                            <FaTimes className="w-5 h-5" />
                        </button>

                        {/* Certificate Header */}
                        <div className="text-center mb-4">
                            <div className="flex items-center justify-center gap-3 mb-2">
                                <span className="text-3xl">⚡</span>
                                <h3 className="text-2xl font-bold text-theme-primary">Fullstack Engineer Certification</h3>
                            </div>
                            <p className="text-theme-secondary">Qwasar Silicon Valley • 2024</p>
                        </div>

                        {/* Certificate Image */}
                        <div className="relative w-full h-[60vh] bg-theme-primary/10 rounded-lg overflow-hidden">
                            <Image
                                src={education.find(e => e.id === selectedCertificate)?.certificate || ''}
                                alt="Fullstack Engineer Certification"
                                fill
                                className="object-contain p-4"
                                quality={100}
                                priority
                            />
                        </div>

                        {/* Download/View Actions
                        <div className="flex justify-center gap-4 mt-4">
                            <a
                                href={education.find(e => e.id === selectedCertificate)?.certificate || ''}
                                download="Fullstack_Engineer_Certificate_Norakchivorn_Nhoung.jpg"
                                className="flex items-center gap-2 bg-accent text-white px-6 py-3 rounded-lg hover:bg-accent-hover transition-colors duration-300 font-medium"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                </svg>
                                Download Certificate
                            </a>
                            <a
                                href={education.find(e => e.id === selectedCertificate)?.certificate || ''}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 border border-accent text-accent px-6 py-3 rounded-lg hover:bg-accent hover:text-white transition-all duration-300 font-medium"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                                Open in New Tab
                            </a>
                        </div> */}
                    </div>
                </div>
            )}
        </>
    );
};

export default Journey;