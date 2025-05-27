import React, { useState } from 'react';
import Navigation from '../../components/Navigation/Navigation';
import Footer from '../../components/Footer/Footer';
import nail1Image from '../../assets/images/gallery/gallery1.png';
import nail2Image from '../../assets/images/gallery/gallery2.png';
import nail3Image from '../../assets/images/gallery/gallery3.png';
import nail4Image from '../../assets/images/gallery/gallery4.png';
import nail5Image from '../../assets/images/gallery/gallery5.png';
import nail6Image from '../../assets/images/gallery/gallery6.png';
import nail8Image from '../../assets/images/gallery/gallery8.png';
import nail9Image from '../../assets/images/gallery/gallery9.png';
import nail10Image from '../../assets/images/gallery/gallery10.png';
import nail11Image from '../../assets/images/gallery/gallery11.png';
import nail12Image from '../../assets/images/gallery/gallery12.png';
import nail13Image from '../../assets/images/gallery/gallery13.png';
import nail14Image from '../../assets/images/gallery/gallery14.png';
import nail15Image from '../../assets/images/gallery/gallery15.png';
import nail16Image from '../../assets/images/gallery/gallery16.png';
import nail17Image from '../../assets/images/gallery/gallery17.png';
import nail18Image from '../../assets/images/gallery/gallery18.png';
import './HomeGallery.css';

const HomeGallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [showAll, setShowAll] = useState(false);

    // Handle navigation to gallery section
    React.useEffect(() => {
        // Check if there's a hash in the URL
        if (window.location.hash === '#gallery') {
            setTimeout(() => {
                const galleryElement = document.getElementById('gallery');
                if (galleryElement) {
                    galleryElement.scrollIntoView({ behavior: 'smooth' });
                }
            }, 300);
        } else {
            // Default scroll to top if no hash
            setTimeout(() => {
                window.scrollTo({ top: 0, behavior: 'instant' });
            }, 100);
        }
    }, []);

    // Sample gallery items - you can replace these with your actual images
    const galleryItems = [
        {
            id: 1,
            src: nail1Image,
            alt: 'Nail Art Design 1',
            category: 'nail-art'
        },
        {
            id: 2,
            src: nail2Image,
            alt: 'Nail Art Design 2',
            category: 'nail-art'
        },
        {
            id: 3,
            src: nail3Image,
            alt: 'Nail Art Design 3',
            category: 'nail-art'
        },
        {
            id: 4,
            src: nail4Image,
            alt: 'Nail Art Design 4',
            category: 'nail-art'
        },
        {
            id: 5,
            src: nail5Image,
            alt: 'Nail Art Design 5',
            category: 'nail-art'
        },
        {
            id: 6,
            src: nail6Image,
            alt: 'Nail Art Design 6',
            category: 'nail-art'
        },
        {
            id: 7,
            src: nail8Image,
            alt: 'Nail Art Design 7',
            category: 'nail-art'
        },
        {
            id: 8,
            src: nail9Image,
            alt: 'Nail Art Design 8',
            category: 'nail-art'
        },
        {
            id: 9,
            src: nail9Image,
            alt: 'Nail Art Design 9',
            category: 'nail-art'
        },
        {
            id: 10,
            src: nail10Image,
            alt: 'Nail Art Design 10',
            category: 'nail-art'
        },
        {
            id: 11,
            src: nail11Image,
            alt: 'Nail Art Design 11',
            category: 'nail-art'
        },
        {
            id: 12,
            src: nail12Image,
            alt: 'Nail Art Design 12',
            category: 'nail-art'
        },
        {
            id: 13,
            src: nail13Image,
            alt: 'Nail Art Design 13',
            category: 'nail-art'
        },
        {
            id: 14,
            src: nail14Image,
            alt: 'Nail Art Design 14',
            category: 'nail-art'
        },
        {
            id: 15,
            src: nail15Image,
            alt: 'Nail Art Design 15',
            category: 'nail-art'
        },
        {
            id: 16,
            src: nail16Image,
            alt: 'Nail Art Design 16',
            category: 'nail-art'
        },
        {
            id: 17,
            src: nail17Image,
            alt: 'Nail Art Design 17',
            category: 'nail-art'
        },
        {
            id: 18,
            src: nail18Image,
            alt: 'Nail Art Design 18',
            category: 'nail-art'
        }

        // Add more gallery items here
    ];

    // Determine which items to display
    const displayedItems = showAll ? galleryItems : galleryItems.slice(0, 9);

    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    const handleViewMore = () => {
        setShowAll(true);
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
                    {displayedItems.map((item) => (
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

                {/* View More Button */}
                {!showAll && (
                    <div className="view-more-container">
                        <button className="view-more-button" onClick={handleViewMore}>
                            View More
                        </button>
                    </div>
                )}

                {/* Call to Action */}
                <div id="contact" className="gallery-cta">
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