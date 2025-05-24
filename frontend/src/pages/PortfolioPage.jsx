// frontend/src/pages/PortfolioPage.jsx
import React, { useState, useEffect } from 'react';
import { getProjects } from '../api'; // Assuming api.js is in src/

function PortfolioPage() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const data = await getProjects();
        setProjects(data);
        setError(null);
      } catch (err) {
        setError(err.message);
        setProjects([]); // Clear projects on error
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return <div className="p-6 text-center text-lg">Chargement des projets...</div>;
  }

  if (error) {
    return <div className="p-6 text-center text-red-600">Erreur: {error}</div>;
  }

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="container mx-auto"> {/* Added container for content centering */}
        <h1 className="text-3xl font-bold text-center text-green-700 mb-10">Notre Portfolio</h1>
        {projects.length === 0 ? (
          <p className="text-center text-gray-600 py-10">Aucun projet disponible pour le moment.</p> {/* Added py-10 for empty state */}
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
            <div key={project.id} className="bg-white shadow-xl rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out">
              <img 
                src={project.image_url || 'https://via.placeholder.com/400x250/cccccc/969696?text=Image+Indisponible'} 
                alt={`Placeholder pour ${project.title}`} 
                className="w-full h-48 object-cover" 
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-green-600 mb-3">{project.title}</h2>
                <p className="text-gray-700 text-sm mb-4">{project.description}</p>
                {project.client_name && (
                  <p className="text-gray-600 text-xs mb-1"><strong>Client:</strong> {project.client_name}</p>
                )}
                {project.location && (
                  <p className="text-gray-600 text-xs"><strong>Lieu:</strong> {project.location}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default PortfolioPage;
