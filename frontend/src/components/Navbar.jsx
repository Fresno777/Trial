// frontend/src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold hover:text-gray-300">
          DevCI Solutions {/* Example Company Name/Logo */}
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">Accueil</Link> {/* Home */}
          </li>
          <li>
            <Link to="/about" className="hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">À Propos</Link> {/* About */}
          </li>
          <li>
            <Link to="/services" className="hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">Services</Link>
          </li>
          <li>
            <Link to="/portfolio" className="hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">Portfolio</Link>
          </li>
          <li>
            <Link to="/team" className="hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">Notre Équipe</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
