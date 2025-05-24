// frontend/src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ServicesPage from './pages/ServicesPage'; // New import
import PortfolioPage from './pages/PortfolioPage'; // New import
import TeamPage from './pages/TeamPage'; // New import
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow"> {/* Added flex-grow to push footer down */}
          <div className="container mx-auto p-4">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} /> {/* New route */}
              <Route path="/portfolio" element={<PortfolioPage />} /> {/* New route */}
              <Route path="/team" element={<TeamPage />} /> {/* New route */}
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </div>
        </main>
        {/* Optional: Add a Footer component here later if desired */}
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
