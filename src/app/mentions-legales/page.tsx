import React from 'react';

export default function MentionsLegales() {
  return (
    <div className="bg-white min-h-screen text-slate-900">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">Mentions Légales</h1>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">1. Éditeur du site</h2>
          <p>Le site EurekaDev est édité par :</p>
          <ul className="list-disc pl-5 mt-2 space-y-2">
            <li><strong>Nom commercial :</strong> EurekaDev</li>
            <li><strong>Statut juridique :</strong> ??????? (ex: Auto-entrepreneur / EI)</li>
            <li><strong>Siège social :</strong> ??????? (Adresse complète)</li>
            <li><strong>SIRET :</strong> ???????</li>
            <li><strong>Directeur de la publication :</strong> ??????? (Votre Nom Prénom)</li>
          <li><strong>Email :</strong> <a href="mailto:contact@eurekadev.fr" className="text-blue-600 hover:underline">contact@eurekadev.fr</a></li>
          <li><strong>Téléphone :</strong> <a href="tel:+33641086631" className="text-blue-600 hover:underline">+33 6 41 08 66 31</a></li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">2. Hébergement</h2>
          <p>Le site est hébergé par :</p>
          <ul className="list-disc pl-5 mt-2 space-y-2">
            <li><strong>Nom de l'hébergeur :</strong> ??????? (ex: Vercel Inc.)</li>
            <li><strong>Adresse :</strong> ???????</li>
            <li><strong>Téléphone :</strong> ???????</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">3. Propriété intellectuelle</h2>
          <p>L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.</p>
        </section>
      </div>
    </div>
  );
}

