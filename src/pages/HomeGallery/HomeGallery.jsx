import React, { useState } from 'react';
import Navigation from '../../components/Navigation/Navigation';
import Footer from '../../components/Footer/Footer';
import './HomeGallery.css';

const HomeGallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    // Sample gallery items - you can replace these with your actual images
    const galleryItems = [
        {
            id: 1,
            src: 'path_to_image1.jpg',
            alt: 'Nail Art Design 1',
            category: 'nail-art'
        },
        // Add more gallery items here
    ];

    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    return (
        <div className="home-gallery">
            <Navigation />

            {/* Fixed Call Us Button */}
            <div className="call-us-fixed">
                <a href="tel:+19185742700" className="call-us-btn" aria-label="Call Tranquility Nails & Spa">
                    <i className="fas fa-phone"></i>
                    <span className="call-text">Call Us</span>
                </a>
            </div>

            {/* Gallery Header */}
            <div id="gallery" className="gallery-header2">
                <span className="sub-heading">Our Gallery</span>
                <h1>Beautiful Nail Art & Designs</h1>
                <p>Explore our collection of stunning nail designs and transformations</p>
            </div>

            {/* Gallery Grid */}
            <div className="container">
                <div className="gallery-grid">
                    {galleryItems.map((item) => (
                        <div
                            key={item.id}
                            className="gallery-item"
                            onClick={() => handleImageClick(item)}
                        >
                            <img src={item.src} alt={item.alt} loading="lazy" />
                            <div className="gallery-item-overlay">
                                <i className="fas fa-search-plus"></i>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Image Modal */}
                {selectedImage && (
                    <div className="gallery-modal" onClick={closeModal}>
                        <div className="modal-content">
                            <span className="close-modal">&times;</span>
                            <img src={selectedImage.src} alt={selectedImage.alt} />
                        </div>
                    </div>
                )}

                {/* Call to Action */}
                <div className="gallery-cta">
                    <h3>Love What You See?</h3>
                    <p>Book your appointment today and let us create your perfect look</p>
                    <a href="tel:+19185742700" className="cta-button">
                        <i className="fas fa-phone"></i>
                        Call (918) 574-2700
                    </a>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default HomeGallery; 