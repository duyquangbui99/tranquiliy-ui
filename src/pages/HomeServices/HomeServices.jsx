import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../../components/Navigation/Navigation';
import Footer from '../../components/Footer/Footer';
import menuPedicuresImage from '../../assets/images/menu/menu-pedicures.png';
import menuManicuresImage from '../../assets/images/menu/menu-manicures.png';
import menuAcrylicDipImage from '../../assets/images/menu/menu-acrylicdip.png';
import menuAdditionalServicesImage from '../../assets/images/menu/menu-additonalServices.png';
import menuComplementaryImage from '../../assets/images/menu/menu-complementary.png';
import './HomeServices.css';

const HomeServices = () => {
    const [activeCategory, setActiveCategory] = useState('pedicure');

    const categories = [
        {
            id: 'pedicure',
            name: 'Pedicure Services',
            icon: 'fas fa-spa',
            image: menuPedicuresImage,
            description: 'Luxurious foot treatments for ultimate relaxation'
        },
        {
            id: 'manicure',
            name: 'Manicure Services',
            icon: 'fas fa-hand-sparkles',
            image: menuManicuresImage,
            description: 'Professional nail care with elegant finishing'
        },
        {
            id: 'combo',
            name: 'Combo Packages',
            icon: 'fas fa-gem',
            image: menuComplementaryImage,
            description: 'Complete manicure and pedicure combinations'
        },
        {
            id: 'acrylic',
            name: 'Acrylic Nails',
            icon: 'fas fa-magic',
            image: menuAcrylicDipImage,
            description: 'Long-lasting acrylic nail extensions'
        },
        {
            id: 'gel',
            name: 'Gel Nails',
            icon: 'fas fa-star',
            image: menuAcrylicDipImage,
            description: 'Durable gel polish and nail enhancements'
        },
        {
            id: 'dipping',
            name: 'Dipping Powder',
            icon: 'fas fa-palette',
            image: menuAcrylicDipImage,
            description: 'Modern dipping powder nail treatments'
        },
        {
            id: 'kids',
            name: "Kid's Menu",
            icon: 'fas fa-heart',
            image: menuAdditionalServicesImage,
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
                name: 'Jelly Spa Pedicure',
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
        combo: [
            {
                name: 'Classic Combo',
                description: 'Classic Manicure + Classic Pedicure',
                price: '$45'
            },
            {
                name: 'Pamper Me Combo',
                description: 'Pamper Me Manicure + Pamper Me Pedicure',
                price: '$65'
            },
            {
                name: 'Signature Combo',
                description: 'Tranquility Signature Manicure + Tranquility Signature Pedicure',
                price: '$80'
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
            {/* Header */}
            <div className="services-header">
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
                                    onClick={() => setActiveCategory(category.id)}
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
                    <div className="services-main">
                        <div className="services-content">
                            <div className="services-grid">
                                {services[activeCategory]?.map((service, index) => (
                                    <div key={index} className="service-item">
                                        <div className="service-header">
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
                            {activeCategory !== 'kids' && (
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
                <div className="services-cta">
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