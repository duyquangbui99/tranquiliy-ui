import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../../assets/images/logo.png';
import mapImage from '../../assets/images/map.png';
import './Footer.css';

const Footer = () => {
    const handleNavClick = (e, path) => {
        e.preventDefault();

        if (path.includes('#')) {
            const [route, hash] = path.split('#');

            if (route === '/') {
                // Handle home page sections
                if (window.location.pathname !== '/') {
                    window.location.href = path;
                } else {
                    const element = document.getElementById(hash);
                    if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                    }
                }
            } else {
                // Handle other routes with hash - navigate and then scroll
                const targetRoute = route || '/';
                window.location.href = targetRoute;
                setTimeout(() => {
                    const element = document.getElementById(hash);
                    if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                    }
                }, 100);
            }
        } else {
            // Handle routes without hash - smooth scroll to top
            window.location.href = path;
            setTimeout(() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }, 100);
        }
    };

    // Function to handle service category navigation
    const handleServiceNavigation = (category) => {
        sessionStorage.setItem('selectedCategory', category);
        window.location.href = '/services';
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100);
    };

    return (
        <footer className="footer-luxury">
            <div className="container">
                <div className="footer-content-luxury">
                    <div className="footer-main">
                        <div className="footer-logo">
                            <div className="logo">
                                <img src={logoImage} alt="Tranquility Logo" />
                                <div className="logo-text">
                                    <h2>TRANQUILITY</h2>
                                    <p>Nails & Spa</p>
                                </div>
                            </div>
                            <p className="footer-description">Where beauty meets serenity. Experience the ultimate in nail care and relaxation at our luxury spa.</p>
                            <img src={mapImage} alt="Tranquility Location" />
                        </div>
                        <div className="footer-links">
                            <div className="link-group">
                                <h4>Quick Links</h4>
                                <ul>
                                    <li><Link to="/" onClick={(e) => handleNavClick(e, '/#home')}>Home</Link></li>
                                    <li><a href="/#about" onClick={(e) => handleNavClick(e, '/#about')}>About</a></li>
                                    <li><Link to="/services" onClick={(e) => handleNavClick(e, '/services#services')}>Services</Link></li>
                                    <li><Link to="/gallery" onClick={() => setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100)}>Gallery</Link></li>
                                    <li><a href="/#contact" onClick={(e) => handleNavClick(e, '/#contact')}>Contact</a></li>
                                </ul>
                            </div>
                            <div className="link-group">
                                <h4>Services</h4>
                                <ul>
                                    <li><a href="/services" onClick={(e) => { e.preventDefault(); handleServiceNavigation('manicure'); }}>Manicures</a></li>
                                    <li><a href="/services" onClick={(e) => { e.preventDefault(); handleServiceNavigation('pedicure'); }}>Pedicures</a></li>
                                    <li><a href="/services" onClick={(e) => { e.preventDefault(); handleServiceNavigation('acrylic'); }}>Acrylic Nails</a></li>
                                    <li><a href="/services" onClick={(e) => { e.preventDefault(); handleServiceNavigation('solar'); }}>Solar Nails</a></li>
                                    <li><a href="/services" onClick={(e) => { e.preventDefault(); handleServiceNavigation('dipping'); }}>Dipping Powder</a></li>
                                    <li><a href="/services" onClick={(e) => { e.preventDefault(); handleServiceNavigation('waxing'); }}>Waxing & Threading</a></li>
                                </ul>
                            </div>
                            <div className="link-group">
                                <h4>Connect</h4>
                                <div className="social-media">
                                    <a href="https://www.facebook.com/TranquilityNS/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                    <a href="https://www.facebook.com/TranquilityNS/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                    <a href="https://maps.app.goo.gl/15itMo8ZRYiSrA3M8" target="_blank" rel="noopener noreferrer" aria-label="Pinterest">
                                        <i className="fab fa-google"></i>
                                    </a>
                                    <a href="https://www.facebook.com/TranquilityNS/" target="_blank" rel="noopener noreferrer" aria-label="Yelp">
                                        <i className="fab fa-yelp"></i>
                                    </a>
                                </div>
                                <div className="newsletter">
                                    <h5>Stay Updated</h5>
                                    <div className="newsletter-form">
                                        <input type="email" placeholder="Your Email" />
                                        <button type="submit"><i className="fas fa-arrow-right"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2018 Tranquility Nails & Spa. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 