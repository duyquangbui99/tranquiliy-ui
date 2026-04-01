import React from 'react';
import './Popup.css';

function Popup({ isOpen, onClose, children }) {
    if (!isOpen) return null;

    return (
        <div className="popup-overlay">
            <div className="popup-box">
                <button className="popup-close" onClick={onClose}>
                    ×
                </button>

                {children}
            </div>
        </div>
    );
}

export default Popup;