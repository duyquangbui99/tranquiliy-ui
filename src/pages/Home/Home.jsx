import React, { useState, useEffect } from 'react';
import './Home.css';

// Import all images
//import tiemImage from '../assets/images/tiem.png';
import logoImage from '../../assets/images/logo.png';
import chairsImage from '../../assets/images/chairs.png';
import pedicureImage from '../../assets/images/pedicure.png';
import manicureImage from '../../assets/images/manicure.png';
import nailEnhanceImage from '../../assets/images/nailenhance.png';
import nailArtImage from '../../assets/images/nailart.png';
import waxingImage from '../../assets/images/waxing.png';
import packageImage from '../../assets/images/package.png';
import nail1Image from '../../assets/images/nail1.png';
import nail2Image from '../../assets/images/nail2.png';
import nail3Image from '../../assets/images/nail3.png';
import nail4Image from '../../assets/images/nail4.png';
import nail5Image from '../../assets/images/nail5.png';
import nail6Image from '../../assets/images/nail6.png';
import nail8Image from '../../assets/images/nail8.png';
import nail9Image from '../../assets/images/nail9.png';
import mapImage from '../../assets/images/map.png';

const Home = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const testimonials = [
        {
            id: 1,
            text: "The atmosphere at Tranquility is so peaceful and relaxing. My nails have never looked better, and the staff is incredibly professional. I look forward to my monthly visits!",
            name: "Sarah Johnson"
        },
        {
            id: 2,
            text: "I've been coming here for over a year, and the service is consistently excellent. The attention to detail makes me feel pampered every time.",
            name: "Michael Chen"
        },
        {
            id: 3,
            text: "Their nail art is absolutely stunning! The technicians are true artists who listen to what you want and deliver beyond expectations.",
            name: "John Doe"
        }, {
            id: 4,
            text: "The atmosphere at Tranquility is so peaceful and relaxing. My nails have never looked better, and the staff is incredibly professional. I look forward to my monthly visits!",
            name: "John Smith"
        },
        {
            id: 5,
            text: "I've been coming here for over a year, and the service is consistently excellent. The attention to detail makes me feel pampered every time.",
            name: "John Cena"
        },
        {
            id: 6,
            text: "Their nail art is absolutely stunning! The technicians are true artists who listen to what you want and deliver beyond expectations.",
            name: "Emily Rodriguez"
        }
    ];

    const services = [
        {
            id: 1,
            name: "Classic Manicure",
            image: manicureImage,
            description: "Professional nail care with cuticle treatment and polish application"
        },
        {
            id: 2,
            name: "Luxury Pedicure",
            image: pedicureImage,
            description: "Relaxing foot treatment with exfoliation and massage"
        },
        {
            id: 3,
            name: "Acrylic Nails",
            image: nailEnhanceImage,
            description: "Long-lasting acrylic nail extensions with perfect finish"
        },
        {
            id: 4,
            name: "Nail Art Design",
            image: nailArtImage,
            description: "Custom artistic designs created by our skilled technicians"
        },
        {
            id: 5,
            name: "Waxing Services",
            image: waxingImage,
            description: "Professional hair removal services for smooth skin"
        },
        {
            id: 6,
            name: "Spa Packages",
            image: packageImage,
            description: "Complete wellness packages for ultimate relaxation"
        }
    ];

    const galleryImages = [
        nail1Image,
        nail2Image,
        nail3Image,
        nail4Image,
        nail5Image,
        nail6Image,
        nail9Image,
        nail8Image
    ];

    // Create a circular array of testimonials for smooth infinite scrolling
    const extendedTestimonials = [...testimonials, ...testimonials, ...testimonials];

    // Testimonial slider functions
    const nextSlide = () => {
        setCurrentSlide((prev) => {
            const next = prev + 1;
            // Reset to first set of duplicates when reaching the end
            if (next >= testimonials.length * 2) {
                return testimonials.length;
            }
            return next;
        });
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => {
            const next = prev - 1;
            // Reset to second set of duplicates when reaching the start
            if (next < 0) {
                return testimonials.length - 1;
            }
            return next;
        });
    };


    // Calculate slide offset for CSS variable
    const slideOffset = currentSlide;

    // Sticky navbar effect
    useEffect(() => {
        const handleScroll = () => {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 100) {
                navbar.style.padding = '10px 0';
                navbar.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
            } else {
                navbar.style.padding = '15px 0';
                navbar.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.05)';
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Form submission handler
    const handleFormSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);

        // Basic validation
        const requiredFields = ['name', 'email', 'phone', 'service', 'date', 'time'];
        const isValid = requiredFields.every(field => data[field]);

        if (isValid) {
            alert('Thank you for booking with us! We will contact you shortly to confirm your appointment.');
            e.target.reset();
        } else {
            alert('Please fill out all required fields.');
        }
    };

    return (
        <div className="home">
            {/* Fixed Call Us Button */}
            <div className="call-us-fixed">
                <a href="tel:+19185742700" className="call-us-btn" aria-label="Call Tranquility Nails & Spa">
                    <i className="fas fa-phone"></i>
                    <span className="call-text">Call Us</span>
                </a>
            </div>

            {/* Navigation */}
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

            {/* Hero Section */}
            <section id="home" className="hero">
                <div className="hero-background-image"></div>
                <div className="hero-overlay"></div>
                <div className="container">
                    <div className="hero-content">
                        <div className="hero-text-center">
                            <h1>Tranquility Nails and Spa</h1>
                            <p className="hero-subtitle">Where Beauty Meets Serenity</p>
                            <a href="#services" className="cta-btn">Discover Our Services</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="about-luxury">
                <div className="container">
                    <div className="about-content-luxury">
                        <div className="about-text-luxury">
                            <span className="sub-heading">Our Mission</span>
                            <h2>Experience Sanctuary of Beauty and Serenity</h2>
                            <p>Our skilled team is committed to providing personalized care, leaving you refreshed and your nails flawless after every visit. We prioritize both the elegance of your nails and your overall well-being.</p>
                            <p>Whether you're here for a quick touch-up, a luxurious manicure, or a creative nail design, our experts go above and beyond to exceed your expectations with every detail.</p>
                            <div className="about-info">
                                <div className="about-features">
                                    <div className="feature">
                                        <i className="fas fa-award"></i>
                                        <span>Professional Excellence</span>
                                    </div>
                                    <div className="feature">
                                        <i className="fas fa-heart"></i>
                                        <span>Personalized Care</span>
                                    </div>
                                    <div className="feature">
                                        <i className="fas fa-leaf"></i>
                                        <span>Premium Products</span>
                                    </div>
                                </div>
                                <div className="location-item">
                                    <div className="location-icon">
                                        <i className="fas fa-map-marker-alt"></i>
                                    </div>
                                    <div className="location-details">
                                        <h4>Visit Us</h4>
                                        <p>4012 S Yale Ave, Tulsa, OK 74135</p>
                                    </div>
                                </div>
                                <div className="location-item">
                                    <div className="location-icon">
                                        <i className="fas fa-clock"></i>
                                    </div>
                                    <div className="location-details">
                                        <h4>Open Hours</h4>
                                        <p>Mon-Sat: 9:30AM - 7:30PM<br />Sunday: 11:30AM - 6:00PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="about-image-luxury">
                            <div className="image-container">
                                <img src={chairsImage} alt="Tranquility Spa Interior" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="services-luxury">
                <div className="container">
                    <div className="services-header">
                        <span className="sub-heading">Our Services</span>
                        <h2>Premium Nail & Spa Treatments</h2>
                        <p>Experience our comprehensive range of professional services designed to enhance your natural beauty</p>
                    </div>

                    <div className="services-grid-luxury">
                        {services.map((service) => (
                            <div key={service.id} className="service-card-luxury">
                                <div className="service-image-luxury">
                                    <img src={service.image} alt={`${service.name} services`} />
                                </div>
                                <div className="service-content">
                                    <h3>{service.name}</h3>
                                    <p>{service.description}</p>
                                    <a href="#booking" className="view-more-btn">
                                        View Details <i className="fas fa-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            <section id="gallery" className="gallery-luxury">
                <div className="container">
                    <div className="gallery-header">
                        <span className="sub-heading">Our Work</span>
                        <h2>Portfolio of Excellence</h2>
                        <p>Browse our collection of stunning nail designs created by our talented artists</p>
                    </div>

                    <div className="gallery-grid-luxury">
                        {galleryImages.map((image, index) => (
                            <div key={index} className="gallery-item-luxury">
                                <img src={image} alt={`Nail Design ${index + 1}`} />
                                <div className="gallery-overlay">
                                    <i className="fas fa-search-plus"></i>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="gallery-cta">
                        <a href="#contact" className="view-gallery-btn">
                            View Full Gallery
                            <i className="fas fa-arrow-right"></i>
                        </a>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="testimonials-luxury">
                <div className="container">
                    <div className="testimonials-header">
                        <span className="sub-heading">Client Reviews</span>
                        <h2>What Our Clients Say</h2>
                    </div>

                    <div className="testimonials-slider">
                        <div
                            className="testimonials-container"
                            style={{ '--slide-offset': slideOffset }}
                        >
                            {extendedTestimonials.map((testimonial, index) => (
                                <div
                                    key={`${testimonial.id}-${index}`}
                                    className="testimonial-luxury"
                                >
                                    <div className="stars">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                    <p>"{testimonial.text}"</p>
                                    <div className="client-info">
                                        <div className="client-name">{testimonial.name}</div>
                                        <div className="client-title">Valued Client</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="slider-controls">
                        <button className="prev-btn" onClick={prevSlide} aria-label="Previous testimonial">
                            <i className="fas fa-chevron-left"></i>
                        </button>
                        <button className="next-btn" onClick={nextSlide} aria-label="Next testimonial">
                            <i className="fas fa-chevron-right"></i>
                        </button>
                    </div>
                </div>
            </section>

            {/* Contact & Booking Section */}
            <section id="contact" className="contact-luxury">
                <div className="container">
                    <div className="contact-content-luxury">
                        <div className="contact-info-luxury">
                            <span className="sub-heading">Book Your Appointment</span>
                            <h2>Call Us Today</h2>
                            <p className="contact-description">
                                For the best service and immediate booking, we prefer you call us directly.
                                Our friendly staff will help you schedule the perfect appointment.
                            </p>

                            {/* Prominent Phone CTA */}
                            <div className="phone-cta">
                                <div className="phone-number">
                                    <i className="fas fa-phone"></i>
                                    <a href="tel:+19185742700">(918) 574-2700</a>
                                </div>
                                <p className="phone-subtitle">Call now for instant booking</p>
                            </div>

                            <div className="info-grid">
                                <div className="info-item-luxury">
                                    <div className="info-icon">
                                        <i className="fas fa-map-marker-alt"></i>
                                    </div>
                                    <div className="info-text">
                                        <h4>Location</h4>
                                        <p>4012 S Yale Ave, Tulsa, OK 74135</p>
                                    </div>
                                </div>
                                <div className="info-item-luxury">
                                    <div className="info-icon">
                                        <i className="fas fa-clock"></i>
                                    </div>
                                    <div className="info-text">
                                        <h4>Hours</h4>
                                        <p>Mon-Sat: 9:30AM - 7:30PM<br />Sunday: 11:30AM - 6:00PM</p>
                                    </div>
                                </div>
                                <div className="info-item-luxury">
                                    <div className="info-icon">
                                        <i className="fab fa-facebook-f"></i>
                                    </div>
                                    <div className="info-text">
                                        <h4>Facebook</h4>
                                        <p><a href="https://www.facebook.com/TranquilityNS/" target="_blank" rel="noopener noreferrer">Tranquility Nails & Spa</a></p>
                                    </div>
                                </div>
                                <div className="info-item-luxury">
                                    <div className="info-icon">
                                        <i className="fas fa-comments"></i>
                                    </div>
                                    <div className="info-text">
                                        <h4>Walk-ins Welcome</h4>
                                        <p>Subject to availability</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="booking-form-luxury" id="booking">
                            <form onSubmit={handleFormSubmit}>
                                <h3>Or Send Us a Message</h3>
                                <p className="form-subtitle">Can't call right now? Send us your details and we'll contact you.</p>
                                <div className="form-row">
                                    <div className="form-group">
                                        <input type="text" name="name" placeholder="Full Name" required />
                                    </div>
                                    <div className="form-group">
                                        <input type="email" name="email" placeholder="Email Address" required />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group">
                                        <input type="tel" name="phone" placeholder="Phone Number" required />
                                    </div>
                                    <div className="form-group">
                                        <select name="service" required>
                                            <option value="">Select Service</option>
                                            <option value="manicure">Classic Manicure</option>
                                            <option value="pedicure">Luxury Pedicure</option>
                                            <option value="nail-extensions">Acrylic Nails</option>
                                            <option value="nail-art">Nail Art Design</option>
                                            <option value="waxing">Waxing Services</option>
                                            <option value="spa-package">Spa Package</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group">
                                        <input type="date" name="date" required />
                                    </div>
                                    <div className="form-group">
                                        <input type="time" name="time" required />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <textarea name="requests" placeholder="Special Requests (Optional)" rows="4"></textarea>
                                </div>
                                <button type="submit" className="submit-btn">Book Appointment</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
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
        </div>
    );
};

export default Home;
