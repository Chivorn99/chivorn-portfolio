'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { FaGithub, FaExternalLinkAlt, FaStar, FaChevronLeft, FaChevronRight, FaPause, FaPlay } from 'react-icons/fa'

const Projects = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isAutoPlaying, setIsAutoPlaying] = useState(true)
    const [hoveredProject, setHoveredProject] = useState<string | null>(null)
    const intervalRef = useRef<NodeJS.Timeout | null>(null)

    const projects = [
        {
            id: 'crime-mapping-tool',
            title: 'Crime Mapping Tool',
            description: 'Full-stack e-commerce solution with Next.js, NestJS, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.',
            image: '/images/crime-homepage.png', 
            techStack: ['Laravel', 'NestJS', 'MySQL', 'Tailwind CSS', 'Leaflet JS'],
            githubUrl: 'https://github.com/Chivorn99/crime-mappingtool-project.git',
            liveUrl: null, 
            featured: true,
            status: 'Completed'
        },
        {
            id: 'clinex-application',
            title: 'Clinex Application',
            description: 'A full-stack web application designed to automate data extraction from medical reports for lab technicians. It leverages Google\'s Document AI to process bulk PDF uploads, significantly increasing workflow efficiency and reducing manual errors.',
            image: '/images/clinex-homepage.png',
            techStack: ['Next JS', 'Laravel', 'MySQL', 'Google Document AI', 'Redis', 'Tailwind CSS', 'Laravel Reverb'],
            githubUrl: 'https://github.com/Chivorn99/Clinex-Application-.git',
            liveUrl: null,
            featured: true,
            status: 'In Progress'
        },
        // {
        //     id: 'portfolio-website',
        //     title: 'Personal Portfolio',
        //     description: 'Modern, responsive portfolio website with dark/light mode, animations, and interactive elements. Built with Next.js and TypeScript.',
        //     image: '/images/g1_pic.png',
        //     techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
        //     githubUrl: 'https://github.com/vG1v',
        //     liveUrl: null,
        //     featured: false,
        //     status: 'Completed'
        // },
        // {
        //     id: 'chat-application',
        //     title: 'Real-time Chat App',
        //     description: 'Modern chat application with real-time messaging, file sharing, and group chats. Built with Flutter and Firebase.',
        //     image: '/images/g1_pic.png',
        //     techStack: ['Flutter', 'Firebase', 'WebRTC', 'Cloud Functions'],
        //     githubUrl: 'https://github.com/vG1v',
        //     liveUrl: null,
        //     featured: false,
        //     status: 'Completed'
        // }
    ]

    // Auto-play functionality
    useEffect(() => {
        if (isAutoPlaying) {
            intervalRef.current = setInterval(() => {
                setCurrentIndex((prev) => (prev + 1) % projects.length)
            }, 4000) // Change slide every 4 seconds
        }

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current)
            }
        }
    }, [isAutoPlaying, projects.length])

    const goToSlide = (index: number) => {
        setCurrentIndex(index)
        setIsAutoPlaying(false)
        setTimeout(() => setIsAutoPlaying(true), 8000)
    }

    const goToPrevious = () => {
        const newIndex = currentIndex === 0 ? projects.length - 1 : currentIndex - 1
        goToSlide(newIndex)
    }

    const goToNext = () => {
        const newIndex = (currentIndex + 1) % projects.length
        goToSlide(newIndex)
    }

    const toggleAutoPlay = () => {
        setIsAutoPlaying(!isAutoPlaying)
    }

    const ProjectCard = ({ project, isActive }: { project: any, isActive: boolean }) => {
        const isHovered = hoveredProject === project.id

        return (
            <div 
                className={`
                    bg-theme-secondary rounded-xl overflow-hidden cursor-pointer
                    transition-all duration-500 border border-transparent max-w-4xl mx-auto
                    ${isActive 
                        ? 'opacity-100 scale-100 border-accent shadow-lg shadow-accent/20' 
                        : 'opacity-50 scale-95'
                    }
                    ${isHovered && isActive ? 'animate-pulse-glow' : ''}
                `}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
            >
                <div className="grid md:grid-cols-2 gap-0">
                    {/* Project Image */}
                    <div className="relative h-64 md:h-80 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent z-10" />
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover transition-transform duration-500 hover:scale-110"
                            onError={(e) => {
                                e.currentTarget.style.display = 'none'
                            }}
                        />
                        {/* Fallback gradient background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-accent to-accent-hover" />
                        
                        {/* Status Badge */}
                        <div className={`
                            absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium
                            ${project.status === 'Completed' 
                                ? 'bg-green-500 text-white' 
                                : 'bg-yellow-500 text-black'
                            }
                        `}>
                            {project.status}
                        </div>

                        {/* Featured Badge */}
                        {project.featured && (
                            <div className="absolute top-4 left-4 bg-accent text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                                <FaStar className="w-3 h-3" />
                                Featured
                            </div>
                        )}
                    </div>

                    {/* Project Content */}
                    <div className="p-8 flex flex-col justify-center">
                        <h3 className="text-2xl font-bold text-theme-primary mb-3">{project.title}</h3>
                        <p className="text-theme-secondary mb-6 leading-relaxed">
                            {project.description}
                        </p>

                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-2 mb-6">
                            {project.techStack.map((tech: string) => (
                                <span 
                                    key={tech} 
                                    className="bg-theme-primary/10 text-theme-secondary px-3 py-1 rounded-full text-xs font-medium"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-3">
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 bg-accent text-white px-6 py-3 rounded-lg hover:bg-accent-hover transition-colors duration-300 font-medium"
                            >
                                <FaGithub className="w-4 h-4" />
                                View Code
                            </a>
                            {project.liveUrl && (
                                <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 border border-accent text-accent px-6 py-3 rounded-lg hover:bg-accent hover:text-white transition-all duration-300 font-medium"
                                >
                                    <FaExternalLinkAlt className="w-4 h-4" />
                                    Live Demo
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <section id="projects" className="py-20 bg-theme-primary">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-6 gradient-text opacity-0 animate-fade-in-up">
                        My Projects
                    </h2>
                    <p className="text-theme-secondary max-w-2xl mx-auto opacity-0 animate-fade-in-up delay-200">
                        Here are some of the projects I've worked on. Each one represents a learning journey 
                        and showcases different aspects of my development skills.
                    </p>
                </div>

                {/* Carousel Container */}
                <div className="relative opacity-0 animate-fade-in-up delay-300">
                    
                    {/* Navigation Arrows */}
                    <button
                        onClick={goToPrevious}
                        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-theme-secondary/80 hover:bg-theme-secondary text-theme-primary p-3 rounded-full hover-lift transition-all duration-300 backdrop-blur-sm"
                        aria-label="Previous project"
                    >
                        <FaChevronLeft className="w-5 h-5" />
                    </button>

                    <button
                        onClick={goToNext}
                        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-theme-secondary/80 hover:bg-theme-secondary text-theme-primary p-3 rounded-full hover-lift transition-all duration-300 backdrop-blur-sm"
                        aria-label="Next project"
                    >
                        <FaChevronRight className="w-5 h-5" />
                    </button>

                    {/* Project Cards */}
                    <div className="overflow-hidden">
                        <div 
                            className="flex transition-transform duration-700 ease-in-out"
                            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                        >
                            {projects.map((project, index) => (
                                <div key={project.id} className="w-full flex-shrink-0 px-4">
                                    <ProjectCard 
                                        project={project} 
                                        isActive={index === currentIndex}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Carousel Controls */}
                    <div className="flex items-center justify-center gap-6 mt-8">
                        <div className="flex gap-2">
                            {projects.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => goToSlide(index)}
                                    className={`
                                        w-3 h-3 rounded-full transition-all duration-300
                                        ${index === currentIndex 
                                            ? 'bg-accent scale-125' 
                                            : 'bg-theme-secondary hover:bg-accent/50'
                                        }
                                    `}
                                    aria-label={`Go to project ${index + 1}`}
                                />
                            ))}
                        </div>

                        {/* Play/Pause Button */}
                        {/* <button
                            onClick={toggleAutoPlay}
                            className="bg-theme-secondary text-theme-primary p-2 rounded-full hover:bg-accent hover:text-white transition-all duration-300"
                            aria-label={isAutoPlaying ? 'Pause autoplay' : 'Start autoplay'}
                        >
                            {isAutoPlaying ? <FaPause className="w-4 h-4" /> : <FaPlay className="w-4 h-4" />}
                        </button> */}
                    </div>

                    {/* Progress Bar */}
                    {/* <div className="w-full bg-theme-secondary/30 h-1 rounded-full mt-4 overflow-hidden">
                        <div 
                            className="h-full bg-accent transition-all duration-100 ease-linear"
                            style={{ 
                                width: isAutoPlaying ? '100%' : '0%',
                                animation: isAutoPlaying ? 'progress 4s linear infinite' : 'none'
                            }}
                        />
                    </div> */}
                </div>

                {/* GitHub Profile Link */}
                {/* <div className="text-center mt-12 opacity-0 animate-fade-in-up delay-500">
                    <a
                        href="https://github.com/vG1v"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-theme-secondary text-theme-primary px-6 py-3 rounded-lg hover:bg-accent hover:text-white transition-all duration-300 hover-lift"
                    >
                        <FaGithub className="w-5 h-5" />
                        View All Projects on GitHub
                        <FaExternalLinkAlt className="w-4 h-4" />
                    </a>
                </div> */}
            </div>

            <style jsx>{`
                @keyframes progress {
                    from { width: 0%; }
                    to { width: 100%; }
                }
            `}</style>
        </section>
    )
}

export default Projects