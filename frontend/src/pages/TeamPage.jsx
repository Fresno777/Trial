// frontend/src/pages/TeamPage.jsx
import React, { useState, useEffect } from 'react';
import { getTeamMembers } from '../api'; // Assuming api.js is in src/

function TeamPage() {
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        setLoading(true);
        const data = await getTeamMembers();
        setTeamMembers(data);
        setError(null);
      } catch (err) {
        setError(err.message);
        setTeamMembers([]); // Clear members on error
      } finally {
        setLoading(false);
      }
    };

    fetchTeamMembers();
  }, []);

  if (loading) {
    return <div className="p-6 text-center text-lg">Chargement de l'équipe...</div>;
  }

  if (error) {
    return <div className="p-6 text-center text-red-600">Erreur: {error}</div>;
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="container mx-auto"> {/* Added container for content centering */}
        <h1 className="text-3xl font-bold text-center text-purple-700 mb-10">Notre Équipe</h1>
        {teamMembers.length === 0 ? (
          <p className="text-center text-gray-600 py-10">Aucun membre de l'équipe disponible pour le moment.</p> {/* Added py-10 for empty state */}
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
            <div key={member.id} className="bg-white shadow-lg rounded-lg text-center p-6 transform hover:shadow-xl transition-shadow duration-300">
              <img
                src={member.profile_image_url || 'https://via.placeholder.com/150/cccccc/969696?text=Photo'}
                alt={`Placeholder pour ${member.name}`}
                className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-purple-200 object-cover"
              />
              <h2 className="text-xl font-semibold text-purple-600 mb-1">{member.name}</h2>
              <p className="text-md text-gray-700 font-medium mb-2">{member.role}</p>
              <p className="text-sm text-gray-600">{member.bio}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default TeamPage;
