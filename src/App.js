import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import HomeServices from './pages/HomeServices/HomeServices';
import HomeGallery from './pages/HomeGallery/HomeGallery';
import Popup from './components/Popup/Popup';
import easterImg from './assets/images/popup/easter-update.webp';
import './App.css';

function App() {
  const [showPopup, setShowPopup] = useState(true);

  return (
    <div className="App">
      <Router>
        <Popup isOpen={showPopup} onClose={() => setShowPopup(false)}>
          <img
            src={easterImg}
            alt="Easter Hours"
            style={{ width: '100%' }}
          />
        </Popup>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<HomeServices />} />
          <Route path="/gallery" element={<HomeGallery />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
