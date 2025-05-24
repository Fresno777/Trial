// frontend/src/pages/ServicesPage.jsx
import React, { useState, useEffect } from 'react';
import { getServices } from '../api'; // Assuming api.js is in src/

function ServicesPage() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        setLoading(true);
        const data = await getServices();
        setServices(data);
        setError(null);
      } catch (err) {
        setError(err.message);
        setServices([]); // Clear services on error
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []); // Empty dependency array means this effect runs once on mount

  if (loading) {
    return <div className="p-6 text-center text-lg">Chargement des services...</div>;
  }

  if (error) {
    return <div className="p-6 text-center text-red-600">Erreur: {error}</div>;
  }

  return (
    <div className="p-6 min-h-screen bg-gray-50"> {/* Added min-h-screen and bg-gray-50 for consistency */}
      <div className="container mx-auto"> {/* Added container for content centering */}
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-8">Nos Services</h1>
        {services.length === 0 ? (
          <p className="text-center text-gray-600 py-10">Aucun service disponible pour le moment.</p> {/* Added py-10 for empty state */}
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service) => (
              <div key={service.id} className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
                <h2 className="text-2xl font-semibold text-blue-600 mb-3">{service.name}</h2>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ServicesPage;
