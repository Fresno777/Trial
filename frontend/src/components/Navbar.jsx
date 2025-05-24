// frontend/src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="text-xl font-bold hover:text-gray-300">MyLogo</Link>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="hover:text-gray-300">Home</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-gray-300">About</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-gray-300">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
