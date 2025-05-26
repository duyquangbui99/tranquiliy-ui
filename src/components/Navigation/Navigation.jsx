import React, { useState, useEffect } from 'react';
import logoImage from '../../assets/images/logo.png';
import './Navigation.css';

const Navigation = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Sticky navbar effect
    useEffect(() => {
        const handleScroll = () => {
            const navbar = document.querySelector('.navbar');
            if (navbar) {
                if (window.scrollY > 100) {
                    navbar.style.padding = '10px 0';
                    navbar.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
                } else {
                    navbar.style.padding = '15px 0';
                    navbar.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.05)';
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className="navbar">
            <div className="container">
                <div className="logo">
                    <img src={logoImage} alt="Tranquility Logo" />
                    <div className="logo-text">
                        <h1>TRANQUILITY</h1>
                        <p>Nails & Spa</p>
                    </div>
                </div>
                <div className="nav-items">
                    <ul className="menu">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#gallery">Gallery</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                    <a href="#booking" className="book-btn">Book Appointment</a>
                    <div
                        className="mobile-menu-btn"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <i className="fas fa-bars"></i>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="mobile-menu active">
                    <div
                        className="close-menu"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        <i className="fas fa-times"></i>
                    </div>
                    <ul className="menu">
                        <li><a href="#home" onClick={() => setIsMobileMenuOpen(false)}>Home</a></li>
                        <li><a href="#about" onClick={() => setIsMobileMenuOpen(false)}>About</a></li>
                        <li><a href="#services" onClick={() => setIsMobileMenuOpen(false)}>Services</a></li>
                        <li><a href="#gallery" onClick={() => setIsMobileMenuOpen(false)}>Gallery</a></li>
                        <li><a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</a></li>
                    </ul>
                    <a href="#booking" className="book-btn" onClick={() => setIsMobileMenuOpen(false)}>Book Appointment</a>
                </div>
            )}
        </nav>
    );
};

export default Navigation; 