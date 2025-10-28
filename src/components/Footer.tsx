'use client'

import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope, FaHeart } from 'react-icons/fa'
import { FaTelegram } from 'react-icons/fa6';

const Footer = () => {
    return (
        <footer className="border-t border-theme-secondary/20 mt-20 bg-theme-secondary/10">
            <div className="container mx-auto px-4 py-12">
                
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    
                    {/* Brand & Description */}
                    <div className="text-center md:text-left opacity-0 animate-fade-in-up">
                        <h3 className="text-2xl font-bold gradient-text mb-3">G1</h3>
                        <p className="text-theme-secondary leading-relaxed">
                            Building digital solutions that make a difference. 
                            Let's create something amazing together.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="text-center opacity-0 animate-fade-in-up delay-200">
                        <h4 className="text-lg font-semibold text-theme-primary mb-4">Quick Links</h4>
                        <nav className="flex flex-col space-y-2">
                            {['About', 'Services', 'Skills', 'Projects', 'Journey'].map((link, index) => (
                                <a 
                                    key={link}
                                    href={`#${link.toLowerCase()}`}
                                    className="text-theme-secondary hover:accent-color transition-colors duration-300 hover:scale-105 inline-block"
                                    style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                                >
                                    {link}
                                </a>
                            ))}
                        </nav>
                    </div>

                    {/* Contact & Social */}
                    <div className="text-center md:text-right opacity-0 animate-fade-in-up delay-400">
                        <h4 className="text-lg font-semibold text-theme-primary mb-4">Let's Connect</h4>
                        <div className="flex justify-center md:justify-end gap-4 mb-4">
                            {[
                                { icon: <FaGithub />, href: 'https://github.com/vG1v', label: 'GitHub' },
                                { icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/norakchivorn-nhoung-159b74204', label: 'LinkedIn' },
                                { icon: <FaFacebook />, href: 'https://www.facebook.com/ah.chivornkh?mibextid=PtKPJ9', label: 'Facebook' },
                                { icon: <FaTelegram />, href: 'https://t.me/Chi111111', label: 'Telegram' },
                                { icon: <FaEnvelope />, href: 'mailto:nhoungnchivorn99@gmail.com', label: 'Email' }
                            ].map((social, index) => (
                                <a 
                                    key={social.label}
                                    href={social.href}
                                    target={social.href.startsWith('http') ? '_blank' : undefined}
                                    rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                    className="text-2xl text-theme-secondary hover:accent-color hover:scale-110 transition-all duration-300 animate-pulse-glow"
                                    aria-label={social.label}
                                    style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                        <p className="text-theme-secondary text-sm">
                            nhoungnchivorn99@gmail.com
                        </p>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-theme-secondary/20 pt-6 opacity-0 animate-fade-in-up delay-600">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        
                        <p className="text-theme-secondary text-sm">
                            © {new Date().getFullYear()} Norakchivorn Nhoung. All Rights Reserved.
                        </p>

                        {/* <p className="text-theme-secondary text-sm flex items-center gap-2">
                            Made with 
                            <FaHeart className="text-red-500 animate-pulse" /> 
                            in Cambodia
                        </p> */}
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;