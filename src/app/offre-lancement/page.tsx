import type { Metadata } from "next";
import React from "react";
import { CheckCircle, Clock, Star, ArrowRight, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Offre de Lancement - Site Web à partir de 990€ | EurekaDev Haute-Saône",
  description: "Profitez de notre offre de lancement exceptionnelle ! Site web professionnel à partir de 990€. Développeur web freelance en Haute-Saône. Devis gratuit, création rapide.",
  keywords: "offre lancement site web, promotion site internet haute-saône, site web 990 euros, développeur web pas cher vesoul, création site discount lure",
  alternates: {
    canonical: "https://eurekadev.fr/offre-lancement"
  },
  openGraph: {
    title: "🎉 Offre de Lancement - Site Web à partir de 990€ | EurekaDev",
    description: "Nouvelle entreprise, tarifs exceptionnels ! Site web professionnel complet à partir de 990€. Saisissez cette opportunité unique en Haute-Saône.",
    url: "https://eurekadev.fr/offre-lancement"
  }
};

export default function OffreLancementPage() {
  const packages = [
    {
      name: "Site Vitrine Essentiel",
      price: "990€",
      originalPrice: "1490€",
      description: "Parfait pour débuter votre présence en ligne",
      features: [
        "Design moderne et responsive",
        "3-5 pages (Accueil, Services, À propos, Contact)",
        "Optimisation SEO de base",
        "Formulaire de contact",
        "Intégration Google Maps",
        "Certificat SSL inclus",
        "1 mois de support gratuit"
      ],
      popular: false,
    },
    {
      name: "Site Pro Complet",
      price: "1490€",
      originalPrice: "2290€",
      description: "Solution complète pour entreprises ambitieuses",
      features: [
        "Tout du pack Essentiel",
        "Jusqu'à 10 pages",
        "Blog intégré",
        "Galerie photos/portfolio",
        "Optimisation SEO avancée",
        "Intégration réseaux sociaux",
        "Statistiques de visite",
        "3 mois de support gratuit",
        "Formation à l'administration"
      ],
      popular: true,
    },
    {
      name: "E-commerce Starter",
      price: "2490€",
      originalPrice: "3490€",
      description: "Boutique en ligne prête à vendre",
      features: [
        "Tout du pack Pro Complet",
        "Boutique en ligne complète",
        "Jusqu'à 50 produits",
        "Paiements sécurisés",
        "Gestion des stocks",
        "Suivi des commandes",
        "Espace client",
        "6 mois de support gratuit",
        "Formation e-commerce complète"
      ],
      popular: false,
    }
  ];

  const advantages = [
    {
      icon: <Sparkles className="text-yellow-500" size={24} />,
      title: "Offre de démarrage",
      description: "Tarifs spéciaux pour le lancement de l'activité"
    },
    {
      icon: <Clock className="text-blue-500" size={24} />,
      title: "Délais respectés",
      description: "Réalisation dans des délais raisonnables"
    },
    {
      icon: <Star className="text-purple-500" size={24} />,
      title: "Travail soigné",
      description: "Même exigence de qualité que pour tout projet"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-emerald-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center bg-white/20 rounded-full px-4 py-2 mb-6">
            <Sparkles className="mr-2" size={20} />
            <span className="text-sm font-medium">OFFRE DE LANCEMENT EXCEPTIONNELLE</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Site Web Professionnel
            <br />
            <span className="text-yellow-300">à partir de 990€</span>
          </h1>

          <p className="text-xl md:text-2xl text-green-100 mb-8 max-w-3xl mx-auto">
            Nouvelle entreprise = tarifs exceptionnels !
            <br />Profitez de nos prix de lancement en Haute-Saône
          </p>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-md mx-auto mb-8">
            <div className="text-3xl font-bold text-yellow-300 mb-2">
              Économisez jusqu'à 1000€
            </div>
            <p className="text-green-100">
              Par rapport aux tarifs du marché
            </p>
          </div>

          <a
            href="#packages"
            className="inline-flex items-center bg-white text-green-600 px-8 py-4 rounded-full text-lg font-bold hover:bg-green-50 transition-colors"
          >
            Voir les offres
            <ArrowRight className="ml-2" size={20} />
          </a>
        </div>
      </section>

      {/* Avantages */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center p-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-100 rounded-full mb-4">
                  {advantage.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  {advantage.title}
                </h3>
                <p className="text-slate-600">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section id="packages" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Choisissez votre pack de lancement
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Trois formules adaptées à vos besoins, toutes à prix réduit
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-xl shadow-lg p-8 ${
                  pkg.popular ? 'ring-2 ring-green-500 scale-105' : ''
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                      ⭐ PLUS POPULAIRE
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-slate-600 mb-6">
                    {pkg.description}
                  </p>

                  <div className="mb-4">
                    <div className="text-4xl font-bold text-green-600 mb-1">
                      {pkg.price}
                    </div>
                    <div className="text-lg text-slate-400 line-through">
                      au lieu de {pkg.originalPrice}
                    </div>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={16} />
                      <span className="text-slate-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="/contact"
                  className={`block w-full text-center py-3 px-6 rounded-lg font-medium transition-colors ${
                    pkg.popular
                      ? 'bg-green-600 text-white hover:bg-green-700'
                      : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
                  }`}
                >
                  Choisir cette offre
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Questions fréquentes sur notre offre de lancement
            </h2>
          </div>

          <div className="space-y-8">
            {[
              {
                question: "Pourquoi ces tarifs si avantageux ?",
                answer: "En tant que nouvelle entreprise, je propose des tarifs de lancement pour me constituer un portfolio et des références. C'est gagnant-gagnant : vous économisez, j'acquiers de l'expérience client !"
              },
              {
                question: "La qualité est-elle la même ?",
                answer: "Absolument ! Je mets exactement la même énergie et les mêmes compétences dans chaque projet. Seul le tarif change, pas la qualité du service."
              },
              {
                question: "Combien de temps l'offre est-elle valable ?",
                answer: "Cette offre est limitée aux 10 premiers clients ou jusqu'à fin 2026. Une fois cette limite atteinte, je reviendrai aux tarifs standard."
              },
              {
                question: "Que se passe-t-il après la livraison ?",
                answer: "Vous bénéficiez d'une période de support gratuite incluse dans chaque pack. Ensuite, je propose des contrats de maintenance optionnels à tarifs préférentiels."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-slate-50 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-slate-900 mb-3">
                  {faq.question}
                </h4>
                <p className="text-slate-600">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Prêt à saisir cette opportunité unique ?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Contactez-moi dès maintenant pour réserver votre projet au tarif de lancement
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center bg-white text-green-600 px-8 py-4 rounded-lg text-lg font-bold hover:bg-green-50 transition-colors"
            >
              Demander un devis gratuit
              <ArrowRight className="ml-2" size={20} />
            </a>
            <a
              href="tel:+33612345678"
              className="inline-flex items-center justify-center bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-green-800 transition-colors"
            >
              Appeler maintenant
            </a>
          </div>

          <p className="text-sm text-green-200 mt-6">
            ⏰ Plus que quelques places disponibles à ce tarif !
          </p>
        </div>
      </section>
    </div>
  );
}
