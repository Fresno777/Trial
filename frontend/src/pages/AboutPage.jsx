// frontend/src/pages/AboutPage.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link

function AboutPage() {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg p-8 md:p-12">
        <h1 className="text-3xl font-bold text-center text-indigo-700 mb-8">À Propos de DevCI Solutions</h1>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-indigo-600 mb-3">Notre Mission</h2>
          <p className="text-gray-700 leading-relaxed">
            Chez DevCI Solutions, notre mission est de propulser les entreprises et organisations en Côte d'Ivoire et en Afrique de l'Ouest grâce à des solutions logicielles innovantes et sur mesure. Nous nous engageons à transformer vos idées en réalité digitale, en fournissant des applications web et mobiles performantes, ainsi qu'un design UI/UX exceptionnel qui captive et engage vos utilisateurs.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-indigo-600 mb-3">Notre Vision</h2>
          <p className="text-gray-700 leading-relaxed">
            Nous aspirons à devenir le partenaire technologique de référence en Côte d'Ivoire, reconnu pour notre expertise, notre intégrité et notre capacité à livrer des projets qui génèrent un impact positif et mesurable. Nous croyons au potentiel du numérique pour façonner un avenir meilleur pour l'Afrique.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-indigo-600 mb-3">Pourquoi Nous Choisir ?</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Expertise Locale, Standards Internationaux:</strong> Une compréhension profonde du marché ivoirien combinée à une maîtrise des meilleures pratiques mondiales.</li>
            <li><strong>Approche Centrée Client:</strong> Nous plaçons vos besoins au cœur de notre processus de développement, assurant des solutions parfaitement alignées avec vos objectifs.</li>
            <li><strong>Équipe Passionnée et Qualifiée:</strong> Nos développeurs, designers et stratèges sont dédiés à l'excellence et à l'innovation continue. (Vous pouvez <Link to="/team" className="text-indigo-500 hover:underline">rencontrer notre équipe ici</Link>.)</li>
            <li><strong>Solutions Durables:</strong> Nous construisons des applications robustes, évolutives et faciles à maintenir.</li>
          </ul>
        </section>
        
        <section className="text-center mt-10">
          <p className="text-lg text-gray-800 font-semibold">
            DevCI Solutions - Votre partenaire pour l'innovation numérique à Abidjan, Côte d'Ivoire.
          </p>
        </section>
      </div>
    </div>
  );
}

export default AboutPage;
