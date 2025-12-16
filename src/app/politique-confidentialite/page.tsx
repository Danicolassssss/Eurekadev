import React from 'react';

export default function PolitiqueConfidentialite() {
  return (
    <div className="bg-white min-h-screen text-slate-900">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">Politique de Confidentialité</h1>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">1. Collecte des données</h2>
          <p>Nous collectons les informations suivantes via le formulaire de contact :</p>
          <ul className="list-disc pl-5 mt-2 space-y-2">
            <li>Nom et Prénom</li>
            <li>Adresse email</li>
            <li>Numéro de téléphone</li>
            <li>Message</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">2. Utilisation des données</h2>
          <p>Les données collectées sont utilisées uniquement pour :</p>
          <ul className="list-disc pl-5 mt-2 space-y-2">
            <li>Répondre à vos demandes de contact</li>
            <li>Établir des devis</li>
            <li>La relation commerciale</li>
          </ul>
        </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">3. Vos droits</h2>
        <p>Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données. Pour exercer ce droit, contactez-nous à : <a href="mailto:contact@eurekadev.fr" className="text-blue-600 hover:underline">contact@eurekadev.fr</a></p>
      </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">4. Cookies</h2>
          <p>Ce site utilise des cookies pour améliorer l'expérience utilisateur et réaliser des statistiques de visites. ??????? (Préciser les outils utilisés, ex: Google Analytics)</p>
        </section>
      </div>
    </div>
  );
}

