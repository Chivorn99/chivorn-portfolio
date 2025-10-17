'use client'

import { useState } from 'react'
import Image from 'next/image'
import { FaGithub, FaExternalLinkAlt, FaCode, FaEye, FaStar } from 'react-icons/fa'

const Projects = () => {
    const [hoveredProject, setHoveredProject] = useState<string | null>(null)

    const projects = [
        {
            id: 'ecommerce-platform',
            title: 'E-Commerce Platform',
            description: 'Full-stack e-commerce solution with Next.js, NestJS, and PostgreSQL.',
            image: '/images/g1_pic.png', 
            techStack: ['Next.js', 'NestJS', 'PostgreSQL', 'Stripe', 'Tailwind CSS'],
            githubUrl: 'https://github.com/vG1v',
            liveUrl: null, 
            featured: true,
            status: 'In Progress'
        },
        {
            id: 'task-management',
            title: 'Task Management App',
            description: 'Collaborative task management application built with React Native and Laravel. Real-time updates, team collaboration, and progress tracking.',
            image: '/images/projects/task-app.png',
            techStack: ['React Native', 'Laravel', 'MySQL', 'Socket.io', 'Redux'],
            githubUrl: 'https://github.com/vG1v/task-management',
            liveUrl: null,
            featured: true,
            status: 'In Progress'
        },
        {
            id: 'portfolio-website',
            title: 'Personal Portfolio',
            description: 'Modern, responsive portfolio website with dark/light mode, animations, and interactive elements. Built with Next.js and TypeScript.',
            image: '/images/projects/portfolio.png',
            techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
            githubUrl: 'https://github.com/vG1v/portfolio',
            liveUrl: 'https://your-portfolio.vercel.app',
            featured: false,
            status: 'Completed'
        },
        {
            id: 'chat-application',
            title: 'Real-time Chat App',
            description: 'Modern chat application with real-time messaging, file sharing, and group chats. Built with Flutter and Firebase.',
            image: '/images/projects/chat-app.png',
            techStack: ['Flutter', 'Firebase', 'WebRTC', 'Cloud Functions'],
            githubUrl: 'https://github.com/vG1v/chat-app',
            liveUrl: null,
            featured: false,
            status: 'Completed'
        }
    ]

    const ProjectCard = ({ project, index }: { project: any, index: number }) => {
        const isHovered = hoveredProject === project.id

        return (
            <div 
                className={`
                    bg-theme-secondary rounded-xl overflow-hidden hover-lift cursor-pointer
                    transition-all duration-300 border border-transparent
                    ${isHovered 
                        ? 'border-accent shadow-lg shadow-accent/20 animate-pulse-glow scale-105' 
                        : 'hover:border-accent/50'
                    }
                    ${project.featured ? 'md:col-span-2' : ''}
                `}
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
            >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent z-10" />
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        onError={(e) => {
                            // Fallback to gradient background if image fails
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
                <div className="p-6">
                    <h3 className="text-xl font-bold text-theme-primary mb-2">{project.title}</h3>
                    <p className="text-theme-secondary text-sm mb-4 leading-relaxed">
                        {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                        {project.techStack.map((tech: string) => (
                            <span 
                                key={tech} 
                                className="bg-theme-primary/10 text-theme-secondary px-2 py-1 rounded text-xs font-medium"
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
                            className="flex items-center gap-2 bg-accent text-white px-4 py-2 rounded-lg hover:bg-accent-hover transition-colors duration-300 text-sm font-medium"
                        >
                            <FaGithub className="w-4 h-4" />
                            Code
                        </a>
                        {project.liveUrl && (
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 border border-accent text-accent px-4 py-2 rounded-lg hover:bg-accent hover:text-white transition-all duration-300 text-sm font-medium"
                            >
                                <FaExternalLinkAlt className="w-4 h-4" />
                                Live Demo
                            </a>
                        )}
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

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 opacity-0 animate-fade-in-up delay-300">
                    {projects.map((project, index) => (
                        <ProjectCard 
                            key={project.id} 
                            project={project} 
                            index={index} 
                        />
                    ))}
                </div>

                {/* GitHub Profile Link */}
                <div className="text-center mt-12 opacity-0 animate-fade-in-up delay-500">
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
                </div>
            </div>
        </section>
    )
}

export default Projects