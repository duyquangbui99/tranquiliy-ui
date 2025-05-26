import React from 'react';
import logoImage from '../../assets/images/logo.png';
import mapImage from '../../assets/images/map.png';
import './Footer.css';

const Footer = () => {
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
                                    <li><a href="#home">Home</a></li>
                                    <li><a href="#about">About</a></li>
                                    <li><a href="#services">Services</a></li>
                                    <li><a href="#gallery">Gallery</a></li>
                                    <li><a href="#contact">Contact</a></li>
                                </ul>
                            </div>
                            <div className="link-group">
                                <h4>Services</h4>
                                <ul>
                                    <li><a href="#services">Manicures</a></li>
                                    <li><a href="#services">Pedicures</a></li>
                                    <li><a href="#services">Nail Extensions</a></li>
                                    <li><a href="#services">Nail Art</a></li>
                                    <li><a href="#services">Spa Treatments</a></li>
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
                                    <a href="https://www.facebook.com/TranquilityNS/" target="_blank" rel="noopener noreferrer" aria-label="Pinterest">
                                        <i className="fab fa-pinterest"></i>
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