// frontend/src/pages/ContactPage.jsx
import React from 'react';

function ContactPage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-purple-600 mb-4">Contact Us</h1>
      <p className="text-lg text-gray-700 mb-2">
        Have questions? We'd love to hear from you!
        Reach out to us through any of the channels below.
      </p>
      <p className="text-md text-gray-600">
        (Contact form and details coming soon!)
      </p>
      <ul className="mt-4">
        <li className="text-gray-700">Email: contact@example.com (placeholder)</li>
        <li className="text-gray-700">Phone: 123-456-7890 (placeholder)</li>
      </ul>
    </div>
  );
}

export default ContactPage;
