// frontend/src/pages/HomePage.jsx
import React, { useState, useEffect } from 'react';

function HomePage() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/api/data') // Proxied by Vite dev server or handled by Flask in production
      .then(response => response.json())
      .then(data => setMessage(data.message))
      .catch(error => console.error('Error fetching data:', error));
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">Welcome to Our Awesome Website!</h1>
      <p className="text-lg text-gray-700 mb-2">
        This is the home page. We are excited to have you here.
        Explore our site to learn more about what we do.
      </p>
      <p className="text-md text-gray-600">
        We are currently building out our features. Check back soon for more updates!
      </p>
      {message && (
        <div className="mt-6 p-4 bg-gray-100 border border-gray-300 rounded">
          <h2 className="text-xl font-semibold text-gray-800">Message from Backend:</h2>
          <p className="text-gray-700">{message}</p>
        </div>
      )}
    </div>
  );
}

export default HomePage;
