import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import HomeServices from './pages/HomeServices/HomeServices';
import HomeGallery from './pages/HomeGallery/HomeGallery';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
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
