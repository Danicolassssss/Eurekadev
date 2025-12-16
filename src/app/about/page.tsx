import type { Metadata } from "next";
import React from "react";
import { Code, Heart, Lightbulb, Target, Award, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "À Propos - EurekaDev | Nouveau Développeur Web Freelance Haute-Saône",
  description: "Découvrez EurekaDev, développeur web freelance qui démarre son activité en Haute-Saône. Création sites internet modernes à Vesoul, Lure, Gray. Passion, innovation, accompagnement.",
  keywords: "à propos eurekadev, nouveau développeur web freelance haute-saône, création entreprise web vesoul, développeur débutant lure, startup web gray",
  alternates: {
    canonical: "https://eurekadev.fr/about"
  },
  openGraph: {
    title: "À Propos EurekaDev | Nouveau Développeur Web Haute-Saône",
    description: "Développeur web freelance passionné qui démarre son aventure entrepreneuriale en Haute-Saône. Création de sites internet sur mesure avec un accompagnement personnalisé.",
    url: "https://eurekadev.fr/about"
  }
};

export default function AboutPage() {
  const values = [
    {
      icon: <Heart size={32} />,
      title: "Motivation",
      description: "Nouvelle entreprise, nouvelle énergie ! Je m'investis à 100% dans votre projet",
    },
    {
      icon: <Lightbulb size={32} />,
      title: "Technologies modernes",
      description: "Je maîtrise les outils web les plus récents pour des sites performants",
    },
    {
      icon: <Target size={32} />,
      title: "Accompagnement",
      description: "Étant nouveau, je prends le temps d'écouter et de conseiller chaque client",
    },
  ];

  const commitments = [
    { number: "2026", label: "Création d'EurekaDev" },
    { number: "100%", label: "Motivation" },
    { number: "Gratuit", label: "Devis détaillé" },
    { number: "< 24h", label: "Réponse garantie" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1>À propos d'EurekaDev - Nouvelle Aventure Web en Haute-Saône</h1>
              <p className="text-slate-600 mb-6">
                Bonjour ! Je suis le fondateur d'EurekaDev, une toute nouvelle entreprise de développement web
                lancée en 2026 en Haute-Saône. Passionné de technologies web, je me lance dans l'aventure
                entrepreneuriale pour accompagner les entreprises locales dans leur transformation digitale.
              </p>
              <p className="text-slate-600 mb-6">
                Bien que mon entreprise soit récente, je maîtrise les technologies web modernes et j'ai
                la motivation d'un entrepreneur qui démarre. Je mets cette énergie au service des TPE,
                PME et entrepreneurs de Vesoul, Lure, Gray et de toute la Haute-Saône.
              </p>
              <p className="text-slate-600">
                Mon avantage : une approche fraîche, un accompagnement personnalisé et l'envie de
                prouver que même une jeune entreprise peut créer des sites web exceptionnels !
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1748346918817-0b1b6b2f9bab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzY0OTgwNjc4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Professional workspace"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mes engagements */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {commitments.map((commitment, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl text-white mb-2">{commitment.number}</div>
                <p className="text-blue-100">{commitment.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2>Mes valeurs</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Les principes qui guident mon travail au quotidien
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-xl bg-slate-50 hover:shadow-lg transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-4">
                  {value.icon}
                </div>
                <h4>{value.title}</h4>
                <p className="text-slate-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compétences techniques */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2>Expertise technique</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Maîtrise des technologies web modernes pour des sites performants
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h4 className="flex items-center gap-2">
                <Code className="text-blue-600" size={24} />
                Technologies Front-end
              </h4>
              <div className="space-y-4">
                {[
                  "React & Next.js",
                  "HTML5 / CSS3",
                  "Tailwind CSS",
                  "JavaScript / TypeScript",
                ].map((tech, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full" />
                    <span className="text-slate-700">{tech}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-slate-900 mb-6 flex items-center gap-2">
                <Award className="text-blue-600" size={24} />
                Compétences complémentaires
              </h4>
              <div className="space-y-4">
                {["SEO & Optimisation", "Responsive Design", "Performance web", "UI/UX Design"].map((skill, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full" />
                    <span className="text-slate-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pourquoi choisir EurekaDev */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2>Pourquoi choisir EurekaDev ?</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Les atouts d'un partenaire web local et impliqué
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Disponibilité",
                description: "Je suis réactif et disponible pour échanger sur votre projet",
                icon: "⏰"
              },
              {
                title: "Tarifs adaptés",
                description: "Des prestations de qualité à des prix justes et transparents",
                icon: "💰"
              },
              {
                title: "Technologies actuelles",
                description: "Des sites conçus avec des outils modernes et performants",
                icon: "🚀"
              },
              {
                title: "Engagement",
                description: "Votre satisfaction est ma priorité pour construire une relation durable",
                icon: "🤝"
              },
              {
                title: "Relation directe",
                description: "Vous travaillez directement avec le créateur, pas d'intermédiaires",
                icon: "🤝"
              },
              {
                title: "Flexibilité totale",
                description: "Adaptation rapide à vos besoins et demandes spécifiques",
                icon: "🎯"
              }
            ].map((advantage, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4 text-center">{advantage.icon}</div>
                <h4 className="text-center mb-3">{advantage.title}</h4>
                <p className="text-slate-600 text-sm text-center">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approche personnalisée */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Users className="text-blue-600 mx-auto mb-6" size={48} />
          <h2 className="text-slate-900 mb-6">Une approche personnalisée</h2>
          <p className="text-slate-600 mb-6">
            Chaque projet est unique et c'est d'autant plus vrai quand on démarre !
            Je prends le temps de bien comprendre votre activité, vos objectifs et votre cible
            pour créer un site web parfaitement adapté à vos besoins.
          </p>
          <p className="text-slate-600">
            En tant que nouvelle entreprise, je mise tout sur la qualité de la relation client :
            transparence totale, communication régulière et réactivité maximale.
            Vous êtes mon partenaire dans cette aventure !
          </p>
        </div>
      </section>
    </div>
  );
}

