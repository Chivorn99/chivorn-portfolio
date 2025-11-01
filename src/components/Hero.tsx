// src/components/Hero.tsx
'use client'

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope, FaPhone, FaMapMarkerAlt, FaTelegram, FaTimes } from 'react-icons/fa';
import { SiNextdotjs, SiReact, SiHtml5, SiCss3, SiJavascript, SiTypescript, SiTailwindcss, SiFirebase, SiLaravel, SiFlutter, SiNestjs, SiPostgresql } from 'react-icons/si';

const Hero = () => {
    const [showTelegramModal, setShowTelegramModal] = useState(false);
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    
    // Quote animation states
    const [currentQuoteText, setCurrentQuoteText] = useState('');
    const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
    const [isQuoteDeleting, setIsQuoteDeleting] = useState(false);
    const [currentFont, setCurrentFont] = useState(0);
    const [currentAnimation, setCurrentAnimation] = useState(0);

    const greetings = [
        "Hello I'm",
        "សួស្តី ខ្ញុំឈ្មោះ",
        "你好，我是",
        "こんにちは、私は",
        "Hola, soy",
        "Bonjour, je suis",
    ];

    const quotes = [
        "Code is poetry written in logic",
        "Every bug is a lesson in disguise",
        "Dream big, code bigger",
        "Turning coffee into code since 2023",
        "Building the future, one line at a time",
        "Innovation through dedication",
        "Making impossible possible with code",
        "Crafting digital experiences that matter",
        "Passion drives perfection",
        "Code with purpose, build with passion"
    ];

    const fonts = [
        'font-mono text-green-400',
        'font-serif text-purple-400 italic',
        'font-sans text-blue-400 font-bold',
        'text-yellow-400 font-extrabold tracking-wider',
        'text-pink-400 font-light italic',
        'text-cyan-400 font-semibold',
        'text-orange-400 font-bold tracking-wide',
        'text-red-400 font-medium italic',
        'text-indigo-400 font-black',
        'text-emerald-400 font-thin tracking-widest'
    ];

    const animations = [
        'animate-bounce',
        'animate-pulse',
        'animate-ping opacity-75',
        'hover:animate-spin transition-transform',
        'animate-wiggle',
        'animate-glow',
        'animate-typewriter',
        'animate-fade-slide-up',
        'animate-zoom-in',
        'animate-rainbow-text'
    ];

    const orbitingTechs = [
        // { icon: SiNextdotjs, name: 'Next.js', color: '#000000' },
        { icon: SiReact, name: 'React', color: '#61DAFB' },
        { icon: SiHtml5, name: 'HTML5', color: '#E34F26' },
        { icon: SiCss3, name: 'CSS3', color: '#1572B6' },
        { icon: SiJavascript, name: 'JavaScript', color: '#F7DF1E' },
        { icon: SiTypescript, name: 'TypeScript', color: '#3178C6' },
        { icon: SiTailwindcss, name: 'Tailwind', color: '#06B6D4' },
        { icon: SiFirebase, name: 'Firebase', color: '#FFCA28' },
        { icon: SiLaravel, name: 'Laravel', color: '#FF2D20' },
        { icon: SiFlutter, name: 'Flutter', color: '#02569B' },
        { icon: SiNestjs, name: 'NestJS', color: '#E0234E' },
        { icon: SiPostgresql, name: 'PostgreSQL', color: '#4169E1' },
    ];

    // Greeting animation
    useEffect(() => {
        const timeout = setTimeout(() => {
            const current = greetings[currentIndex];

            if (!isDeleting) {
                if (currentText.length < current.length) {
                    setCurrentText(current.substring(0, currentText.length + 1));
                } else {
                    setTimeout(() => setIsDeleting(true), 2000);
                }
            } else {
                if (currentText.length > 0) {
                    setCurrentText(current.substring(0, currentText.length - 1));
                } else {
                    setIsDeleting(false);
                    setCurrentIndex((prevIndex) => (prevIndex + 1) % greetings.length);
                }
            }
        }, isDeleting ? 50 : 100);

        return () => clearTimeout(timeout);
    }, [currentText, currentIndex, isDeleting, greetings]);

    useEffect(() => {
        const timeout = setTimeout(() => {
            const currentQuote = quotes[currentQuoteIndex];

            if (!isQuoteDeleting) {
                if (currentQuoteText.length < currentQuote.length) {
                    setCurrentQuoteText(currentQuote.substring(0, currentQuoteText.length + 1));
                } else {
                    setTimeout(() => setIsQuoteDeleting(true), 3000);
                }
            } else {
                if (currentQuoteText.length > 0) {
                    setCurrentQuoteText(currentQuote.substring(0, currentQuoteText.length - 1));
                } else {
                    setIsQuoteDeleting(false);
                    setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
                    setCurrentFont(Math.floor(Math.random() * fonts.length));
                    setCurrentAnimation(Math.floor(Math.random() * animations.length));
                }
            }
        }, isQuoteDeleting ? 30 : 80);

        return () => clearTimeout(timeout);
    }, [currentQuoteText, currentQuoteIndex, isQuoteDeleting, quotes, fonts.length, animations.length]);

    return (
        <>
            <section id="home" className="min-h-screen flex items-center pt-24 pb-12 bg-theme-primary relative overflow-hidden">
                {/* Space background effects */}
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-20 left-10 w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    <div className="absolute top-40 left-1/4 w-1 h-1 bg-white rounded-full animate-pulse delay-100"></div>
                    <div className="absolute top-60 right-1/4 w-2 h-2 bg-white rounded-full animate-pulse delay-200"></div>
                    <div className="absolute bottom-40 left-1/3 w-1 h-1 bg-white rounded-full animate-pulse delay-300"></div>
                    <div className="absolute bottom-20 right-1/3 w-2 h-2 bg-white rounded-full animate-pulse delay-400"></div>
                </div>

                <div className="container mx-auto px-4">
                    <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">

                        {/* Left Side: Information */}
                        <div className="md:w-1/2 text-center md:text-left opacity-0 animate-fade-in-up z-10">
                            {/* Animated Greeting */}
                            <div className="text-xl text-theme-secondary h-8 flex items-center justify-center md:justify-start">
                                <span className="inline-block min-w-0">
                                    {currentText}
                                    <span className="animate-pulse ml-1 text-accent">|</span>
                                </span>
                            </div>

                            <h1 className="text-5xl md:text-7xl font-bold text-theme-primary mt-2 gradient-text">
                                Norakchivorn Nhoung
                            </h1>
                            <h3 className="text-2xl text-theme-secondary mt-4 opacity-0 animate-fade-in-up delay-200">
                                Full-Stack Developer
                            </h3>

                            <ul className="mt-8 space-y-2 text-lg inline-block text-left opacity-0 animate-fade-in-up delay-300">
                                <li className="flex items-center gap-3 hover-lift">
                                    <FaEnvelope className="accent-color" />
                                    <a
                                        href="mailto:nhoungnchivorn99@gmail.com"
                                        className="text-theme-secondary hover:accent-color transition-colors duration-300"
                                    >
                                        nhoungnchivorn99@gmail.com
                                    </a>
                                </li>
                                <li className="flex items-center gap-3 hover-lift">
                                    <FaPhone className="accent-color" />
                                    <a
                                        href="tel:+85598417240"
                                        className="text-theme-secondary hover:accent-color transition-colors duration-300"
                                    >
                                        +855 98 417 240 or +855 99 951 500
                                    </a>
                                </li>
                                <li className="flex items-center gap-3">
                                    <FaMapMarkerAlt className="accent-color" />
                                    <span className="text-theme-secondary">Phnom Penh, Cambodia</span>
                                </li>
                            </ul>

                            <div className="flex justify-center md:justify-start gap-6 mt-8 opacity-0 animate-fade-in-up delay-400">
                                <a
                                    href="https://github.com/vG1v"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-3xl text-theme-secondary hover:accent-color hover:scale-110 transition-all duration-300 animate-pulse-glow"
                                >
                                    <FaGithub />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/norakchivorn-nhoung-159b74204"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-3xl text-theme-secondary hover:accent-color hover:scale-110 transition-all duration-300 animate-pulse-glow"
                                >
                                    <FaLinkedin />
                                </a>
                                <a
                                    href="https://www.facebook.com/ah.chivornkh?mibextid=PtKPJ9"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-3xl text-theme-secondary hover:accent-color hover:scale-110 transition-all duration-300 animate-pulse-glow"
                                >
                                    <FaFacebook />
                                </a>
                                <button
                                    onClick={() => setShowTelegramModal(true)}
                                    className="text-3xl text-theme-secondary hover:accent-color hover:scale-110 transition-all duration-300 animate-pulse-glow"
                                    aria-label="Show Telegram QR Code"
                                >
                                    <FaTelegram />
                                </button>
                            </div>
                        </div>

                        {/* Right Side: Image */}
                        <div className="md:w-1/2 flex flex-col items-center md:items-end opacity-0 animate-slide-in-right delay-500 z-10">
                            <div className="relative w-[500px] h-[500px] flex items-center justify-center mb-8">
                                <div className="relative z-10 w-80 h-80 rounded-full overflow-hidden border-4 border-accent shadow-2xl hover-lift animate-float">
                                    <Image
                                        src="/images/g1_new.jpg"
                                        alt="Norakchivorn Nhoung"
                                        width={360}
                                        height={360}
                                        className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
                                        priority={true}
                                    />
                                    {/* <div className="absolute inset-0 rounded-full bg-accent opacity-20 blur-xl animate-pulse"></div> */}
                                </div>

                                {/* Tech Stack Icons */}
                                {orbitingTechs.map((tech, index) => {
                                    const Icon = tech.icon;
                                    const totalIcons = orbitingTechs.length;
                                    const angle = (360 / totalIcons) * index;
                                    const animationDelay = -(index * (20 / totalIcons));
                                    
                                    return (
                                        <div
                                            key={tech.name}
                                            className="absolute orbit-path"
                                            style={{
                                                animation: `orbit 20s linear infinite`,
                                                animationDelay: `${animationDelay}s`,
                                            }}
                                        >
                                            <div 
                                                className="tech-icon-container group"
                                                style={{
                                                    transform: `rotate(-${angle}deg)`,
                                                }}
                                            >
                                                <div className="relative">
                                                    <div 
                                                        className="absolute inset-0 rounded-full blur-md opacity-50"
                                                        style={{ backgroundColor: tech.color }}
                                                    ></div>
                                                    <div className="relative bg-theme-secondary p-3 rounded-full shadow-lg border border-accent/30 transition-all duration-300 group-hover:scale-125 group-hover:border-accent">
                                                        <Icon 
                                                            className="w-6 h-6 transition-transform duration-300 group-hover:rotate-12"
                                                            style={{ color: tech.color }}
                                                        />
                                                    </div>
                                                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-theme-primary text-theme-secondary text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                                                        {tech.name}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                                {/* Orbit rings */}
                                <div className="absolute inset-0 border border-accent/10 rounded-full pointer-events-none"></div>
                                <div className="absolute inset-8 border border-accent/5 rounded-full pointer-events-none"></div>
                            </div>

                            {/* Animated Quote */}
                            <div className="text-center md:text-right max-w-sm opacity-0 animate-fade-in-up delay-700">
                                <div className="relative">
                                    <span className="absolute -top-2 -left-2 text-4xl text-accent/30 font-serif">"</span>
                                    <span className="absolute -bottom-4 -right-2 text-4xl text-accent/30 font-serif">"</span>
                                    <p className={`
                                        text-lg md:text-xl leading-relaxed px-4 py-2 min-h-[3rem] flex items-center justify-center
                                        ${fonts[currentFont]} ${animations[currentAnimation]}
                                        transition-all duration-500 transform-gpu
                                    `}>
                                        <span className="inline-block">
                                            {currentQuoteText}
                                            <span className="animate-pulse ml-1 text-accent">|</span>
                                        </span>
                                    </p>
                                </div>

                                <div className="flex justify-center md:justify-end gap-1 mt-4">
                                    {quotes.map((_, index) => (
                                        <div
                                            key={index}
                                            className={`
                                                w-2 h-2 rounded-full transition-all duration-300
                                                ${index === currentQuoteIndex 
                                                    ? 'bg-accent animate-pulse' 
                                                    : 'bg-theme-secondary/30'
                                                }
                                            `}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Telegram QR Modal */}
            {showTelegramModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <div
                        className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
                        onClick={() => setShowTelegramModal(false)}
                    />
                    <div className="relative bg-theme-secondary rounded-2xl p-6 max-w-md w-full shadow-2xl border border-accent/20 animate-fade-in-up">
                        <button
                            onClick={() => setShowTelegramModal(false)}
                            className="absolute top-4 right-4 text-theme-secondary hover:accent-color transition-colors duration-300 hover:scale-110 z-10"
                            aria-label="Close modal"
                        >
                            <FaTimes className="w-5 h-5" />
                        </button>
                        <div className="text-center mb-4">
                            <div className="flex items-center justify-center gap-3 mb-3">
                                <FaTelegram className="text-3xl accent-color" />
                                <h3 className="text-xl font-bold text-theme-primary">Telegram</h3>
                            </div>
                            <p className="text-theme-secondary text-sm">Scan QR code to connect with me on Telegram</p>
                        </div>

                        <div className="flex justify-center mb-4">
                            <div className="bg-white p-3 rounded-lg shadow-lg">
                                <div className="relative w-60 h-80 overflow-hidden rounded">
                                    <Image
                                        src="/images/g1-tele-qr.jpg"
                                        alt="Telegram QR Code"
                                        width={476}
                                        height={633}
                                        className="w-full h-full object-cover"
                                        quality={90}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="text-center">
                            <p className="text-theme-secondary text-sm mb-3">
                                Open Telegram and scan this QR code to start chatting or click on the link below!
                            </p>
                            <p className="text-accent text-xs font-medium">
                                <a 
                                    href="https://t.me/Chi111111" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="hover:underline transition-all duration-300 hover:scale-105 inline-block"
                                >
                                    @Chi111111
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            )}

            <style jsx>{`
                @keyframes orbit {
                    from {
                        transform: rotate(0deg) translateX(250px) rotate(0deg);
                    }
                    to {
                        transform: rotate(360deg) translateX(250px) rotate(-360deg);
                    }
                }

                .orbit-path {
                    position: absolute;
                    width: 0;
                    height: 0;
                    left: 50%;
                    top: 50%;
                }

                .tech-icon-container {
                    position: absolute;
                    left: 0;
                    top: 0;
                }

                @keyframes wiggle {
                    0%, 7% { transform: rotateZ(0); }
                    15% { transform: rotateZ(-15deg); }
                    20% { transform: rotateZ(10deg); }
                    25% { transform: rotateZ(-10deg); }
                    30% { transform: rotateZ(6deg); }
                    35% { transform: rotateZ(-4deg); }
                    40%, 100% { transform: rotateZ(0); }
                }
                
                @keyframes glow {
                    0%, 100% { text-shadow: 0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor; }
                    50% { text-shadow: 0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor; }
                }
                
                @keyframes rainbow-text {
                    0% { color: #ff0000; }
                    16% { color: #ff8000; }
                    32% { color: #ffff00; }
                    48% { color: #00ff00; }
                    64% { color: #0080ff; }
                    80% { color: #8000ff; }
                    100% { color: #ff0000; }
                }
                
                @keyframes fade-slide-up {
                    0% { opacity: 0; transform: translateY(20px); }
                    100% { opacity: 1; transform: translateY(0); }
                }
                
                @keyframes zoom-in {
                    0% { transform: scale(0.8); }
                    50% { transform: scale(1.05); }
                    100% { transform: scale(1); }
                }
                
                .animate-wiggle { animation: wiggle 2s ease-in-out infinite; }
                .animate-glow { animation: glow 2s ease-in-out infinite; }
                .animate-rainbow-text { animation: rainbow-text 3s linear infinite; }
                .animate-fade-slide-up { animation: fade-slide-up 1s ease-out; }
                .animate-zoom-in { animation: zoom-in 1s ease-out; }
            `}</style>
        </>
    );
};

export default Hero;