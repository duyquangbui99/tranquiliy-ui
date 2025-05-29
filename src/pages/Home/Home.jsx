import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navigation from '../../components/Navigation/Navigation';
import Footer from '../../components/Footer/Footer';
import './Home.css';

// Import all images
import chairsImage from '../../assets/images/chairs.png';
import pedicureImage from '../../assets/images/pedicure.png';
import manicureImage from '../../assets/images/manicure.png';
import nailEnhanceImage from '../../assets/images/nailenhance.png';
import nailArtImage from '../../assets/images/nailart.png';
import waxingImage from '../../assets/images/waxing.png';
import packageImage from '../../assets/images/package.png';
import nail1Image from '../../assets/images/gallery/gallery1.png';
import nail2Image from '../../assets/images/gallery/gallery2.png';
import nail3Image from '../../assets/images/gallery/gallery3.png';
import nail4Image from '../../assets/images/gallery/gallery4.png';
import nail5Image from '../../assets/images/gallery/gallery5.png';
import nail6Image from '../../assets/images/gallery/gallery6.png';
import nail8Image from '../../assets/images/gallery/gallery8.png';
import nail9Image from '../../assets/images/gallery/gallery9.png';


const Home = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const navigate = useNavigate();

    const testimonials = [
        {
            id: 1,
            text: "I've been coming to Tranquility for 3 years and they never disappoint! The gel manicures last for weeks and the staff always remembers my preferences. It's my monthly self-care ritual!",
            name: "Jessica Martinez"
        },
        {
            id: 2,
            text: "Best pedicure in Tulsa! The massage chairs are so relaxing and they take their time with the cuticle work. My feet feel amazing after every visit. Highly recommend!",
            name: "Amanda Thompson"
        },
        {
            id: 3,
            text: "The nail art here is incredible! I brought in a Pinterest photo and they recreated it perfectly. The attention to detail is amazing and the colors are so vibrant.",
            name: "Rachel Kim"
        }, {
            id: 4,
            text: "Clean, professional, and friendly service every time. I love that they sterilize everything properly and the salon always smells fresh. My nails grow so much healthier since coming here.",
            name: "Lisa Chen"
        },
        {
            id: 5,
            text: "The dip powder manicures here last me almost a month! Great value for the quality. The technicians are skilled and the atmosphere is so calming. Perfect place to unwind.",
            name: "Maria Garcia"
        },
        {
            id: 6,
            text: "I'm so picky about my nails but this place gets it right every time. They listen to what you want and give honest advice about what will work best. Love the results!",
            name: "Ashley Williams"
        }
    ];

    const services = [
        {
            id: 1,
            name: "Classic Manicure",
            image: manicureImage,
            description: "Professional nail care with cuticle treatment and polish application",
            category: "manicure"
        },
        {
            id: 2,
            name: "Luxury Pedicure",
            image: pedicureImage,
            description: "Relaxing foot treatment with exfoliation and massage",
            category: "pedicure"
        },
        {
            id: 3,
            name: "Acrylic Nails",
            image: nailEnhanceImage,
            description: "Long-lasting acrylic nail extensions with perfect finish",
            category: "acrylic"
        },
        {
            id: 4,
            name: "Solar Nails (Acrylic)",
            image: nailArtImage,
            description: "Durable solar nail extensions with natural pink and white finish",
            category: "solar"
        },
        {
            id: 5,
            name: "Dipping Powder",
            image: packageImage,
            description: "Long-lasting dipping powder nails with vibrant colors and strength",
            category: "dipping"
        },
        {
            id: 6,
            name: "Waxing & Threading",
            image: waxingImage,
            description: "Professional hair removal services for smooth skin",
            category: "waxing"
        },

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

    // Function to handle service navigation
    const handleServiceNavigation = (category) => {
        // Store the category in sessionStorage so HomeServices can read it
        sessionStorage.setItem('selectedCategory', category);
        navigate('/services');
        // Scroll to top after navigation with smooth behavior
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100);
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
            <Navigation />

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
                                        <i className="fas fa-map-marker-alt"></i>
                                        <span>4012 S Yale Ave, Tulsa, OK 74135</span>
                                    </div>
                                </div>
                                <div className="about-features">
                                    <div className="feature">
                                        <i className="fas fa-heart"></i>
                                        <span>Personalized Care</span>
                                    </div>
                                    <div className="feature">
                                        <i className="fas fa-clock"></i>
                                        <span>Mon-Sat: 9:30AM - 7:30PM<br />Sunday: 11:30AM - 6:00PM</span>
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
                                    <Link to="/services" className="view-more-btn" onClick={() => handleServiceNavigation(service.category)}>
                                        View Details <i className="fas fa-arrow-right"></i>
                                    </Link>
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

                    <div className="home-gallery-cta">
                        <Link to="/gallery#gallery" className="view-gallery-btn" onClick={() => {
                            setTimeout(() => {
                                const galleryElement = document.getElementById('gallery');
                                if (galleryElement) {
                                    galleryElement.scrollIntoView({ behavior: 'smooth' });
                                } else {
                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                }
                            }, 100);
                        }}>
                            View Full Gallery
                            <i className="fas fa-arrow-right"></i>
                        </Link>
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
            <Footer />
        </div>
    );
};

export default Home;
