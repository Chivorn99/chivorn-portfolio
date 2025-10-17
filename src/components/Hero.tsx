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

    const greetings = [
        "Hello I'm",
        "សួស្តី ខ្ញុំឈ្មោះ",
        "你好，我是",
        "こんにちは、私は",
        "Hola, soy",
        "Bonjour, je suis",
    ];

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

                        {/* Right Side: Image */}
                        <div className="md:w-1/2 flex justify-center md:justify-end opacity-0 animate-slide-in-right delay-500">
                            <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-accent shadow-2xl hover-lift animate-float">
                                <Image
                                    src="/images/g1_new.jpg"
                                    alt="Norakchivorn Nhoung"
                                    width={360}
                                    height={360}
                                    className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
                                    priority={true}
                                />
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
        </>
    );
};

export default Hero;