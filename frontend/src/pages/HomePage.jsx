// frontend/src/pages/HomePage.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getServices, getProjects } from '../api'; // To fetch a few items

function HomePage() {
  const [featuredServices, setFeaturedServices] = useState([]);
  const [featuredProjects, setFeaturedProjects] = useState([]);
  // You might want loading/error states if fetching data here, but keeping it simple for now
  // For a more robust implementation, add loading/error handling like in other pages.

  useEffect(() => {
    const fetchFeaturedData = async () => {
      try {
        const allServices = await getServices();
        setFeaturedServices(allServices.slice(0, 2)); // Take first 2 services

        const allProjects = await getProjects();
        setFeaturedProjects(allProjects.slice(0, 2)); // Take first 2 projects
      } catch (error) {
        console.error("Erreur de chargement des données pour la page d'accueil:", error);
        // Not setting error state for users here to keep UI cleaner on homepage,
        // but logging it. For a real app, consider user feedback.
      }
    };
    fetchFeaturedData();
  }, []);

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-700 text-white py-20 md:py-32">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            DevCI Solutions: Votre Partenaire Numérique en Côte d'Ivoire
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Nous transformons vos idées en solutions digitales innovantes. Applications web, mobiles, design UI/UX et stratégie digitale pour propulser votre entreprise.
          </p>
          <Link 
            to="/contact" 
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300 transform hover:scale-105"
          >
            Parlons de Votre Projet
          </Link>
        </div>
      </section>

      {/* Featured Services Section */}
      {featuredServices.length > 0 && (
        <section className="py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Nos Services Clés</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredServices.map(service => (
                <div key={service.id} className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
                  <h3 className="text-2xl font-semibold text-blue-600 mb-3">{service.name}</h3>
                  <p className="text-gray-700 mb-4 line-clamp-3">{service.description}</p>
                  <Link to="/services" className="text-blue-500 hover:text-blue-700 font-medium">
                    En savoir plus &rarr;
                  </Link>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link 
                to="/services"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
              >
                Voir Tous Nos Services
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Featured Projects Section */}
      {featuredProjects.length > 0 && (
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Quelques Réalisations</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredProjects.map(project => (
                <div key={project.id} className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
                   <img 
                    src={project.image_url || 'https://via.placeholder.com/400x250/cccccc/969696?text=Image+Projet'} 
                    alt={`Placeholder pour ${project.title}`} 
                    className="w-full h-40 object-cover rounded-md mb-4" 
                  />
                  <h3 className="text-xl font-semibold text-green-600 mb-2">{project.title}</h3>
                  <p className="text-gray-600 text-sm mb-1"><strong>Client:</strong> {project.client_name}</p>
                  <p className="text-gray-600 text-sm mb-3"><strong>Lieu:</strong> {project.location}</p>
                  <p className="text-gray-700 text-sm mb-4 line-clamp-2">{project.description}</p>
                  <Link to="/portfolio" className="text-green-500 hover:text-green-700 font-medium">
                    Voir le projet &rarr;
                  </Link>
                </div>
              ))}
            </div>
             <div className="text-center mt-12">
              <Link 
                to="/portfolio"
                className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
              >
                Découvrir Notre Portfolio Complet
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Call to Action Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Prêt à Démarrer Votre Projet ?</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-xl mx-auto">
            Contactez-nous dès aujourd'hui pour une consultation gratuite et découvrez comment nous pouvons vous aider à atteindre vos objectifs numériques.
          </p>
          <Link 
            to="/contact"
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300 transform hover:scale-105"
          >
            Contactez-Nous
          </Link>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
