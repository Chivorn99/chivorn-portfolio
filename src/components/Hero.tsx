// src/components/Hero.tsx
'use client'

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope, FaPhone, FaMapMarkerAlt, FaTelegram, FaTimes } from 'react-icons/fa';

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

    // Quote animation with random font and animation
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
                    // Randomize font and animation for next quote
                    setCurrentFont(Math.floor(Math.random() * fonts.length));
                    setCurrentAnimation(Math.floor(Math.random() * animations.length));
                }
            }
        }, isQuoteDeleting ? 30 : 80);

        return () => clearTimeout(timeout);
    }, [currentQuoteText, currentQuoteIndex, isQuoteDeleting, quotes, fonts.length, animations.length]);

    return (
        <>
            <section id="home" className="min-h-screen flex items-center pt-24 pb-12 bg-theme-primary">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">

                        {/* Left Side: Information */}
                        <div className="md:w-1/2 text-center md:text-left opacity-0 animate-fade-in-up">
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

                        {/* Right Side: Image & Quote */}
                        <div className="md:w-1/2 flex flex-col items-center md:items-end opacity-0 animate-slide-in-right delay-500">
                            <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-accent shadow-2xl hover-lift animate-float mb-8">
                                <Image
                                    src="/images/g1_new.jpg"
                                    alt="Norakchivorn Nhoung"
                                    width={360}
                                    height={360}
                                    className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
                                    priority={true}
                                />
                            </div>

                            {/* Animated Quote */}
                            <div className="text-center md:text-right max-w-sm opacity-0 animate-fade-in-up delay-700">
                                <div className="relative">
                                    {/* Quote marks */}
                                    <span className="absolute -top-2 -left-2 text-4xl text-accent/30 font-serif">"</span>
                                    <span className="absolute -bottom-4 -right-2 text-4xl text-accent/30 font-serif">"</span>
                                    
                                    {/* Quote text with dynamic styling */}
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
                                
                                {/* Quote indicator dots */}
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
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
                        onClick={() => setShowTelegramModal(false)}
                    />

                    {/* Modal Content - Adjusted for portrait image */}
                    <div className="relative bg-theme-secondary rounded-2xl p-6 max-w-md w-full shadow-2xl border border-accent/20 animate-fade-in-up">
                        {/* Close Button */}
                        <button
                            onClick={() => setShowTelegramModal(false)}
                            className="absolute top-4 right-4 text-theme-secondary hover:accent-color transition-colors duration-300 hover:scale-110 z-10"
                            aria-label="Close modal"
                        >
                            <FaTimes className="w-5 h-5" />
                        </button>

                        {/* Modal Header */}
                        <div className="text-center mb-4">
                            <div className="flex items-center justify-center gap-3 mb-3">
                                <FaTelegram className="text-3xl accent-color" />
                                <h3 className="text-xl font-bold text-theme-primary">Telegram</h3>
                            </div>
                            <p className="text-theme-secondary text-sm">Scan QR code to connect with me on Telegram</p>
                        </div>

                        {/* QR Code - Adjusted for your image dimensions */}
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

                        {/* Instructions */}
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

            {/* Custom CSS for additional animations */}
            <style jsx>{`
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