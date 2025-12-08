import type { Metadata } from "next";
import React from "react";
import { Code, Heart, Lightbulb, Target, Award, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "À Propos - EurekaDev | Développeur Web Freelance Haute-Saône",
  description: "Découvrez EurekaDev, développeur web freelance en Haute-Saône. 5+ années d'expérience, spécialisé création sites internet à Vesoul, Lure, Gray. Passion, innovation, résultats.",
  keywords: "à propos eurekadev, développeur web freelance haute-saône, expérience web vesoul, portfolio développeur lure, expertise web gray",
  alternates: {
    canonical: "https://eurekadev.fr/about"
  },
  openGraph: {
    title: "À Propos EurekaDev | Développeur Web Expert Haute-Saône",
    description: "Développeur web freelance passionné basé en Haute-Saône. Plus de 5 ans d'expérience dans la création de sites internet sur mesure.",
    url: "https://eurekadev.fr/about"
  }
};

export default function AboutPage() {
  const values = [
    {
      icon: <Heart size={32} />,
      title: "Passion",
      description: "Passionné par le web, je mets tout mon cœur dans chaque projet",
    },
    {
      icon: <Lightbulb size={32} />,
      title: "Innovation",
      description: "Toujours à la pointe des dernières technologies et tendances",
    },
    {
      icon: <Target size={32} />,
      title: "Résultats",
      description: "Focus sur vos objectifs et la performance de votre site",
    },
  ];

  const stats = [
    { number: "50+", label: "Projets réalisés" },
    { number: "98%", label: "Clients satisfaits" },
    { number: "5+", label: "Années d'expérience" },
    { number: "24/7", label: "Support disponible" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1>À propos d'EurekaDev - Développeur Web en Haute-Saône</h1>
              <p className="text-slate-600 mb-6">
                Développeur web freelance passionné basé en Haute-Saône, je crée des sites internet sur mesure
                qui allient esthétique moderne et performance technique pour les entreprises locales.
              </p>
              <p className="text-slate-600 mb-6">
                Depuis plus de 5 ans, j'aide les entrepreneurs, TPE et PME de Vesoul, Lure, Gray,
                Luxeuil-les-Bains et de toute la Haute-Saône à développer leur présence en ligne
                avec des solutions web adaptées aux spécificités du marché local.
              </p>
              <p className="text-slate-600">
                Mon objectif : vous offrir un site web qui non seulement vous
                ressemble, mais qui devient un véritable outil de développement
                pour votre activité.
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

      {/* Statistiques */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl text-white mb-2">{stat.number}</div>
                <p className="text-blue-100">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2>Mes valeurs en tant que développeur web en Haute-Saône</h2>
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
            <h2>Expertise technique pour vos projets web en Haute-Saône</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Maîtrise des technologies web modernes pour des sites performants et adaptés aux entreprises locales
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

      {/* Approche personnalisée */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Users className="text-blue-600 mx-auto mb-6" size={48} />
          <h2 className="text-slate-900 mb-6">Une approche personnalisée</h2>
          <p className="text-slate-600 mb-6">
            Chaque projet est unique. C&apos;est pourquoi je prends le temps de
            comprendre votre activité, vos objectifs et votre cible pour créer
            un site web parfaitement adapté à vos besoins.
          </p>
          <p className="text-slate-600">
            Transparence, communication régulière et réactivité sont au cœur de
            ma méthode de travail. Vous êtes impliqué à chaque étape du projet
            pour garantir un résultat qui vous correspond vraiment.
          </p>
        </div>
      </section>
    </div>
  );
}

