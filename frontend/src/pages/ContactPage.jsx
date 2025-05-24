// frontend/src/pages/ContactPage.jsx
import React from 'react';

function ContactPage() {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-teal-700 mb-10">Contactez-Nous</h1>
      
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg p-8 md:p-12">
        <p className="text-lg text-gray-700 mb-6 text-center">
          Nous sommes ravis de discuter de votre projet et de voir comment nous pouvons vous aider.
          N'hésitez pas à nous contacter via les informations ci-dessous ou en remplissant le formulaire de contact (simulation).
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <div className="border p-6 rounded-lg bg-teal-50">
            <h2 className="text-2xl font-semibold text-teal-600 mb-4">Nos Coordonnées</h2>
            <p className="text-gray-700 mb-2">
              <strong>Adresse :</strong> Riviera Palmeraie, Rue Ministre, Abidjan, Côte d'Ivoire (Exemple)
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Téléphone :</strong> +225 0X XX XX XX XX (Exemple)
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Email :</strong> contact@devci.solutions (Exemple)
            </p>
            <p className="text-gray-700">
              <strong>Heures d'ouverture :</strong> Lundi - Vendredi, 9h00 - 18h00
            </p>
          </div>

          <div className="border p-6 rounded-lg bg-orange-50">
            <h2 className="text-2xl font-semibold text-orange-600 mb-4">Formulaire de Contact (Simulation)</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-1">Nom Complet</label>
                <input type="text" id="name" name="name" className="w-full p-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500" placeholder="Votre nom complet"/>
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-1">Email</label>
                <input type="email" id="email" name="email" className="w-full p-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500" placeholder="Votre adresse email"/>
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-1">Message</label>
                <textarea id="message" name="message" rows="4" className="w-full p-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500" placeholder="Votre message"></textarea>
              </div>
              <button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-md w-full transition duration-300">
                Envoyer (Non fonctionnel)
              </button>
            </form>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-md text-gray-600">
            Notre siège social est fièrement basé à <strong>Abidjan, Côte d'Ivoire</strong>.
          </p>
          {/* Placeholder for a map - can be added later */}
          {/* <div className="mt-6 h-64 bg-gray-300 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">(Emplacement pour une carte Google Maps intégrée)</p>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
