import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logoImage from '../../assets/images/logo.png';
import './Navigation.css';

const Navigation = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const navigate = useNavigate();

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

    const handleNavClick = (e, path) => {
        e.preventDefault();
        const currentPath = window.location.pathname;

        if (path.includes('#')) {
            const [route, hash] = path.split('#');

            if (route === '/') {
                // Handle home page sections
                if (currentPath !== '/') {
                    navigate('/');
                    setTimeout(() => {
                        const element = document.getElementById(hash);
                        if (element) {
                            element.scrollIntoView({ behavior: 'smooth' });
                        }
                    }, 100);
                } else {
                    const element = document.getElementById(hash);
                    if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                    }
                }
            } else {
                // Handle other routes with hash (like /services#services)
                navigate(route);
                setTimeout(() => {
                    const element = document.getElementById(hash);
                    if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                    }
                }, 100);
            }
        } else {
            // Handle routes without hash
            navigate(path);
        }
        setIsMobileMenuOpen(false);
    };

    return (
        <nav className="navbar">
            <div className="container">
                <Link to="/#home" onClick={(e) => handleNavClick(e, '/#home')} className="logo">
                    <img src={logoImage} alt="Tranquility Logo" />
                    <div className="logo-text">
                        <h1>TRANQUILITY</h1>
                        <p>Nails & Spa</p>
                    </div>
                </Link>
                <div className="nav-items">
                    <ul className="menu">
                        <li><Link to="/#home" onClick={(e) => handleNavClick(e, '/#home')}>Home</Link></li>
                        <li><a href="/#about" onClick={(e) => handleNavClick(e, '/#about')}>About</a></li>
                        <li><Link to="/services" onClick={(e) => handleNavClick(e, '/services#services')}>Services</Link></li>
                        <li><a href="/#gallery" onClick={(e) => handleNavClick(e, '/#gallery')}>Gallery</a></li>
                        <li><a href="#contact" onClick={(e) => handleNavClick(e, '#contact')}>Contact</a></li>
                    </ul>
                    <a href="#contact" className="book-btn">Book Appointment</a>
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
                    <div>
                        <div className='logo'>
                            <div className="logo-text">
                                <h1>TRANQUILITY</h1>
                                <p>Nails & Spa</p>
                            </div>
                        </div>
                        <div
                            className="close-menu"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            <i className="fas fa-times"></i>
                        </div>
                    </div>
                    <ul className="menu">
                        <li><a href="/#home" onClick={(e) => handleNavClick(e, '/#home')}>Home</a></li>
                        <li><a href="/#about" onClick={(e) => handleNavClick(e, '/#about')}>About</a></li>
                        <li><Link to="/services" onClick={(e) => handleNavClick(e, '/services#services')}>Services</Link></li>
                        <li><a href="/#gallery" onClick={(e) => handleNavClick(e, '/#gallery')}>Gallery</a></li>
                        <li><a href="/#contact" onClick={(e) => handleNavClick(e, '/#contact')}>Contact</a></li>
                    </ul>
                    <a href="#contact" className="book-btn" onClick={() => setIsMobileMenuOpen(false)}>Book Appointment</a>
                </div>
            )}
        </nav>
    );
};

export default Navigation; 