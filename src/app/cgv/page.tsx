import React from 'react';

export default function CGV() {
  return (
    <div className="bg-white min-h-screen text-slate-900">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">Conditions Générales de Vente (CGV)</h1>

        <p className="mb-8 text-sm text-slate-600">Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}</p>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">1. Objet et champ d'application</h2>
          <p className="mb-4">
            Les présentes Conditions Générales de Vente (CGV) régissent les relations contractuelles entre <strong>EurekaDev</strong> (ci-après "le Prestataire") et toute personne physique ou morale (ci-après "le Client") souhaitant bénéficier des services de création de sites internet, de développement web et de maintenance proposés par le Prestataire.
          </p>
          <p>
            Toute commande implique l'acceptation sans réserve par le Client des présentes CGV.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">2. Commandes et Devis</h2>
          <p className="mb-4">
            Les prestations font l'objet d'un devis gratuit, valable 30 jours à compter de sa date d'émission.
          </p>
          <p>
            La commande devient ferme et définitive après :
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-2">
            <li>La signature du devis par le Client avec la mention "Bon pour accord".</li>
            <li>Le versement d'un acompte de 30% du montant total du devis (sauf mention contraire).</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">3. Tarifs et Paiement</h2>
          <p className="mb-4">
            Les prix sont indiqués en euros (€).
          </p>
          <p className="mb-4 bg-yellow-50 p-4 border-l-4 border-yellow-400">
            <strong>Note sur la TVA :</strong> En tant que micro-entrepreneur, la TVA est non applicable, article 293 B du CGI. (À confirmer selon votre statut).
          </p>
          <p className="mb-4">
            Le paiement s'effectue selon les modalités suivantes :
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-2">
            <li>30% à la commande (acompte).</li>
            <li>Le solde à la livraison de la prestation.</li>
          </ul>
          <p className="mt-4">
            Moyens de paiement acceptés : Virement bancaire.
          </p>
          <p className="mt-4 text-sm text-slate-600">
            Tout retard de paiement entraînera l'exigibilité de pénalités de retard calculées au taux légal en vigueur, ainsi qu'une indemnité forfaitaire pour frais de recouvrement de 40€.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">4. Réalisation et Livraison</h2>
          <p className="mb-4">
            Le Prestataire s'engage à réaliser la prestation selon les règles de l'art et dans les délais convenus au devis, sous réserve de la remise par le Client de tous les éléments nécessaires (textes, images, accès, etc.).
          </p>
          <p>
            Les délais de livraison sont donnés à titre indicatif. Un retard raisonnable ne peut justifier l'annulation de la commande ni donner lieu à des dommages et intérêts.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">5. Propriété Intellectuelle</h2>
          <p className="mb-4">
            Le transfert de propriété des droits intellectuels sur les créations (design, code spécifique) s'effectue au paiement intégral du prix par le Client.
          </p>
          <p>
            Le Client reste seul propriétaire de ses contenus (textes, images, logos) et garantit qu'il dispose de tous les droits nécessaires à leur utilisation.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">6. Responsabilité</h2>
          <p className="mb-4">
            La responsabilité du Prestataire est limitée au montant de la prestation. Le Prestataire ne saurait être tenu responsable des dommages indirects (perte de chiffre d'affaires, perte de données, etc.).
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">7. Droit de rétractation</h2>
          <p className="mb-4">
            Pour les Clients professionnels, le droit de rétractation ne s'applique pas.
          </p>
          <p>
            Pour les Clients particuliers, conformément à l'article L.221-28 du Code de la consommation, le droit de rétractation ne peut être exercé pour les contrats de fourniture de services pleinement exécutés avant la fin du délai de rétractation et dont l'exécution a commencé après accord préalable exprès du consommateur et renoncement exprès à son droit de rétractation.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">8. Données personnelles</h2>
          <p>
            Les informations recueillies sont nécessaires au traitement de la commande. Elles sont traitées conformément à notre <a href="/politique-confidentialite" className="text-blue-600 hover:underline">Politique de Confidentialité</a>.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">9. Litiges</h2>
          <p>
            Les présentes CGV sont soumises au droit français. En cas de litige, une solution amiable sera recherchée avant toute action judiciaire. À défaut, les tribunaux compétents seront ceux du ressort du siège social du Prestataire.
          </p>
        </section>
      </div>
    </div>
  );
}

