import React, { useState, useRef } from 'react';
import Navigation from '../../components/Navigation/Navigation';
import Footer from '../../components/Footer/Footer';
import './HomeServices.css';

const HomeServices = () => {
    // Check if there's a selected category from navigation
    const initialCategory = sessionStorage.getItem('selectedCategory') || 'pedicure';
    const [activeCategory, setActiveCategory] = useState(initialCategory);
    const servicesMainRef = useRef(null);

    // Clear the sessionStorage after reading it and scroll to top
    React.useEffect(() => {
        // Scroll to top when component mounts
        window.scrollTo(0, 0);

        if (sessionStorage.getItem('selectedCategory')) {
            sessionStorage.removeItem('selectedCategory');
        }
    }, []);

    const handleCategoryClick = (categoryId) => {
        setActiveCategory(categoryId);
        // Scroll to the top of services section with offset for header
        if (servicesMainRef.current) {
            const yOffset = -100; // Offset to account for fixed header
            const element = servicesMainRef.current;
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    const categories = [
        {
            id: 'pedicure',
            name: 'Pedicure Services',
            icon: 'fas fa-spa',
            description: 'Luxurious foot treatments for ultimate relaxation'
        },
        {
            id: 'manicure',
            name: 'Manicure Services',
            icon: 'fas fa-hand-sparkles',
            description: 'Professional nail care with elegant finishing'
        },
        {
            id: 'acrylic',
            name: 'Acrylic Nails',
            icon: 'fas fa-magic',
            description: 'Long-lasting acrylic nail extensions'
        },
        {
            id: 'gel',
            name: 'Gel Nails',
            icon: 'fas fa-star',

            description: 'Durable gel polish and nail enhancements'
        },
        {
            id: 'dipping',
            name: 'Dipping Powder',
            icon: 'fas fa-palette',

            description: 'Modern dipping powder nail treatments'
        },
        {
            id: 'waxing',
            name: 'Waxing & Threading',
            icon: 'fas fa-gem',

            description: 'Complete manicure and pedicure combinations'
        },
        {
            id: 'kids',
            name: "Kid's Menu",
            icon: 'fas fa-heart',

            description: 'Special services designed for children'
        }
    ];

    const services = {
        pedicure: [
            {
                name: 'Classic Pedicure',
                description: 'Salt soak, toenails trim, cuticle care, callus removal, leg massage, hot towel finish.',
                price: '$30'
            },
            {
                name: 'Hot Stone Pedicure',
                description: 'Salt soak, toenails trim, cuticle care, callus removal followed with a leg massage. You will also be pampered with hot stone to help melt away tension, eases muscle stiffness, and increase circulation.',
                price: '$33'
            },
            {
                name: 'Pamper Me Pedicure',
                description: 'Salt soak, toenails trim, exfoliating sugar scrub, callus removal, leg massage, and hot stone.',
                price: '$40'
            },
            {
                name: 'Tranquility Signature Pedicure',
                description: 'Salt soak, toenails trim, exfoliating sugar scrub, callus removal, leg mud mask treatment wrapped with hot towel, leg massage with hot stone finish.',
                price: '$45'
            },
            {
                name: 'Paradise Pedicure',
                description: 'We randomly pick the fragrance to surprise you with a wonderful feeling of paradise breeze. Salt soak, exfoliating sugar scrub, callus care, mask on feet and cooling gel on legs, massage with hot towel finish.',
                price: '$55'
            },
            {
                name: 'Hot Spring Pedicure',
                description: 'Hot springs salt, scrub with sea salt, mask wrap on feet and cooling gel on legs. Massage feet and legs with cream hot stone and complete with cream to keep your legs moisturized.',
                price: '$60'
            },
            {
                name: 'Chamomile Pedicure',
                description: 'Chamomile soak, scrub with sea salt, mask wrap on feet and cooling gel on legs. Massage feet and legs with cream to keep your legs moisturized. Finished with hot stone and paraffin wax.',
                price: '$65'
            },
            {
                name: 'Detox Volcano Pedicure',
                description: 'Detox volcano crystal, detox volcano activator to begin the bubbling volcano eruption, exfoliating sugar scrub, collagen cream wrap on feet and cooling gel on legs, collagen massage lotion on legs and feet finished with hot stone and paraffin wax.',
                price: '$70'
            },
            {
                name: 'Galaxy Spa Pedicure',
                description: 'Jelly spa bath soak, hydrating cleanser, sugar scrub for exfoliating nourishing mask on feet and cooling gel on legs, massage cream and hot stone, paraffin wax finish, plus relaxing arm and shoulder massage.',
                price: '$75'
            },
            {
                name: "Kid's Pedicure",
                description: 'Salt soak, toenail trim, cuticle care, foot massage with warm towel finish. (10 yrs & under)',
                price: '$25'
            }
        ],
        manicure: [
            {
                name: 'Classic Manicure',
                description: 'Salt soak, finger nails trim, cuticle care, hand and arm massage with regular color finish.',
                price: '$20'
            },
            {
                name: 'Pamper Me Manicure',
                description: 'Salt soak, finger nails trim, cuticle care, hand and arm massage followed with hot stone finish.',
                price: '$28'
            },
            {
                name: 'Tranquility Signature Manicure',
                description: 'Salt soak, finger nails trim, exfoliating sugar scrub, hand and arm massage followed with hot stone. Finished with paraffin wax to soften your hands.',
                price: '$38'
            },
            {
                name: "Kid's Manicure",
                description: 'Salt soak, finger nails trims, cuticle care, hand and arm massage followed with hot stone. Finished with paraffin to soften your hands.',
                price: '$15'
            }
        ],
        acrylic: [
            {
                name: 'Regular Color - Full Set',
                price: '$45+'
            },
            {
                name: 'Regular Color - Fill',
                price: '$30+'
            },
            {
                name: 'Gel Polish (Shellac) - Full Set',
                price: '$50+'
            },
            {
                name: 'Gel Polish (Shellac) - Fill',
                price: '$35+'
            },
            {
                name: 'Regular Feet',
                price: '$60+'
            },
            {
                name: 'Color Powder',
                price: '$60+'
            },
            {
                name: 'Gel X',
                price: '$55+'
            }
        ],
        gel: [
            {
                name: 'Solar Nails - Clear Pink Solar - Full Set',
                price: '$50+'
            },
            {
                name: 'Solar Nails - Clear Pink Solar - Fill',
                price: '$35+'
            },
            {
                name: 'Gel Polish (Shellac) - Full Set',
                price: '$50+'
            },
            {
                name: 'Gel Polish (Shellac) - Fill',
                price: '$40+'
            },
            {
                name: 'Pink & White - Full Set',
                price: '$55+'
            },
            {
                name: 'Pink & White - Fill',
                price: '$40+'
            }
        ],
        dipping: [
            {
                name: 'Color - Full Set',
                price: '$40+'
            },
            {
                name: 'Color - Tip Extension',
                price: '$45+'
            },
            {
                name: 'Pink & White - Full Set',
                price: '$50+'
            },
            {
                name: 'Pink & White - Tip Extension',
                price: '$55+'
            },
            {
                name: 'Ombre - Full Set',
                price: '$50+'
            },
            {
                name: 'Ombre - Tip Extension',
                price: '$55+'
            }
        ],
        waxing: [
            {
                name: 'Eye Brow',
                price: '$12 & up'
            },
            {
                name: 'Lip',
                price: '$6'
            },
            {
                name: 'Chin',
                price: '$15 & up'
            },
            {
                name: 'Sideburn',
                price: '$20'
            },
            {
                name: 'Full Face',
                price: '$40 & up'
            },
            {
                name: 'Half Arm',
                price: '$30 & up'
            },
            {
                name: 'Full Arm',
                price: '$60 & up'
            },
            {
                name: 'Underarm',
                price: '$30 & up'
            },
            {
                name: 'Half Leg',
                price: '$40 & up'
            },
            {
                name: 'Full Leg',
                price: '$70 & up'
            },
            {
                name: 'Eyebrow Threading',
                price: '$12'
            },
            {
                name: 'Eyebrow Tinting',
                price: '$18'
            }
        ],
        kids: [
            {
                name: "Kid's Manicure",
                description: 'Salt soak, finger nails trims, cuticle care, hand and arm massage followed with hot stone. Finished with paraffin to soften your hands.',
                price: '$15'
            },
            {
                name: "Kid's Pedicure",
                description: 'Salt soak, toenail trim, cuticle care, foot massage with warm towel finish. (10 yrs & under)',
                price: '$25'
            },
            {
                name: "Kid's Shellac",
                description: 'Professional gel polish application for kids.',
                price: '$12 (10 yrs & under)'
            }
        ]
    };

    const addOns = [
        { name: 'Shellac Color', price: '$15' },
        { name: 'Shellac French', price: '$20' },
        { name: 'French Tip', price: '$5 & up' },
        { name: 'Kids Shellac', price: '$12 (10 yrs & under)' },
        { name: 'Designs', price: '$8 & up' },
        { name: 'Paraffin Wax', price: '$7 extra' },
        { name: 'Extra Massage', price: '$1/minute' }
    ];

    return (
        <div className="home-services">
            {/* Navigation */}
            <Navigation />
            {/* Fixed Call Us Button */}
            <div className="call-us-fixed">
                <a href="tel:+19185742700" className="call-us-btn" aria-label="Call Tranquility Nails & Spa">
                    <i className="fas fa-phone"></i>
                    <span className="call-text">Call Us</span>
                </a>
            </div>
            {/* Header */}
            <div id="services" className="services-header2">
                <span className="sub-heading">Our Services</span>
                <h1>Premium Nail & Spa Treatments</h1>
                <p>Experience our comprehensive range of professional services designed to enhance your natural beauty and provide ultimate relaxation</p>
            </div>

            <div className="container">
                {/* Main Content Layout */}
                <div className="services-layout">
                    {/* Category Navigation - Left Side */}
                    <div className="services-sidebar">
                        <div className="category-navigation">
                            {categories.map((category) => (
                                <div
                                    key={category.id}
                                    className={`category-item ${activeCategory === category.id ? 'active' : ''}`}
                                    onClick={() => handleCategoryClick(category.id)}
                                >
                                    <div className="category-icon">
                                        <i className={category.icon}></i>
                                    </div>
                                    <span className="category-name">{category.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Services Content - Right Side */}
                    <div className="services-main" ref={servicesMainRef}>
                        <div className="services-content">
                            <div className="services-grid">
                                {services[activeCategory]?.map((service, index) => (
                                    <div key={index} className="service-item">
                                        <div className="service-header2">
                                            <h3 className="service-name">{service.name}</h3>
                                            <span className="service-price">{service.price}</span>
                                        </div>
                                        {service.description && (
                                            <p className="service-description">{service.description}</p>
                                        )}
                                    </div>
                                ))}
                            </div>

                            {/* Add-ons Section */}
                            {activeCategory !== 'kids' && activeCategory !== 'waxing' && (
                                <div className="add-ons-section">
                                    <h3>Add-Ons</h3>
                                    <div className="add-ons-grid">
                                        {addOns.map((addon, index) => (
                                            <div key={index} className="addon-item">
                                                <span className="addon-name">{addon.name}</span>
                                                <span className="addon-price">{addon.price}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                <div id="contact" className="services-cta">
                    <h3>Ready to Book Your Appointment?</h3>
                    <p>Call us today to schedule your perfect nail and spa experience</p>
                    <a href="tel:+19185742700" className="cta-button">
                        <i className="fas fa-phone"></i>
                        Call (918) 574-2700
                    </a>
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default HomeServices; 