import type { Metadata } from "next";
import React from "react";
import { ExternalLink } from "lucide-react";
import { ServicesNavigation } from "../../components/ServicesNavigation";

export const metadata: Metadata = {
  title: "Portfolio - EurekaDev | Réalisations Web Haute-Saône | Sites Internet",
  description: "Découvrez mes réalisations web en Haute-Saône : sites vitrine, e-commerce, applications. Portfolio développeur freelance Vesoul, Lure, Gray. Projets clients réels.",
  keywords: "portfolio développeur web haute-saône, réalisations sites internet vesoul, exemples projets web lure, références développeur gray, travaux web luxeuil",
  alternates: {
    canonical: "https://eurekadev.fr/portfolio"
  },
  openGraph: {
    title: "Portfolio EurekaDev | Réalisations Web Haute-Saône",
    description: "Découvrez mes créations web : sites vitrine, e-commerce, applications sur mesure. Portfolio développeur freelance en Haute-Saône.",
    url: "https://eurekadev.fr/portfolio"
  }
};

export default function PortfolioPage() {

  const projects = [
    {
      title: "Boutique en ligne - Mode",
      category: "E-commerce",
      description:
        "Site e-commerce complet avec système de paiement sécurisé et gestion des stocks.",
      image:
        "https://images.unsplash.com/photo-1690192699379-fb68bb749eaa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNwb25zaXZlJTIwd2Vic2l0ZSUyMG1vY2t1cHxlbnwxfHx8fDE3NjUwMjkwMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["React", "E-commerce", "Responsive"],
    },
    {
      title: "Cabinet d'Architecture",
      category: "Site vitrine",
      description:
        "Site vitrine élégant avec portfolio de projets et formulaire de contact.",
      image:
        "https://images.unsplash.com/photo-1710799885122-428e63eff691?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBwb3J0Zm9saW98ZW58MXx8fHwxNzY0OTQyNjAyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Design moderne", "Portfolio", "SEO"],
    },
    {
      title: "Restaurant gastronomique",
      category: "Site vitrine",
      description:
        "Site avec réservation en ligne, menu interactif et galerie photos.",
      image:
        "https://images.unsplash.com/photo-1758518732175-5d608ba3abdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWFtJTIwbWVldGluZ3xlbnwxfHx8fDE3NjQ5OTg5NTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Réservation", "Mobile first", "Performance"],
    },
    {
      title: "Coach sportif",
      category: "Landing page",
      description:
        "Page de vente avec présentation des services et prise de rendez-vous.",
      image:
        "https://images.unsplash.com/photo-1693159682660-c125e71844d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHdvcmtzcGFjZSUyMGRlc2t8ZW58MXx8fHwxNzY0OTM1MDkxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Conversion", "Responsive", "Rapide"],
    },
    {
      title: "Agence immobilière",
      category: "Application web",
      description:
        "Plateforme avec recherche avancée, filtres et gestion des annonces.",
      image:
        "https://images.unsplash.com/photo-1759884247173-3db27f7fafef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXZlbG9wbWVudCUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjUwMjkwMzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Application", "Base de données", "Interface complexe"],
    },
    {
      title: "Blog lifestyle",
      category: "Blog",
      description:
        "Blog personnel avec système de commentaires et newsletter.",
      image:
        "https://images.unsplash.com/photo-1748346918817-0b1b6b2f9bab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzY0OTgwNjc4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Blog", "Content", "Social"],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1>Portfolio EurekaDev | Réalisations Web en Haute-Saône</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Découvrez mes réalisations web pour entreprises de Haute-Saône :
            sites vitrine, e-commerce, applications sur mesure. Projets clients réels à Vesoul, Lure, Gray.
          </p>
        </div>
      </section>

      {/* Projets */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow group"
              >
                <div className="relative overflow-hidden h-64">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6">
                    <button className="bg-white text-blue-600 px-6 py-2 rounded-lg inline-flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                      Voir le projet
                      <ExternalLink size={16} />
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-blue-600 text-sm mb-2">
                    {project.category}
                  </div>
                  <h4>{project.title}</h4>
                  <p className="text-slate-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Témoignage */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 md:p-12 rounded-xl shadow-lg">
            <div className="text-center">
              <div className="text-6xl text-blue-600 mb-4">&quot;</div>
              <p className="text-xl text-slate-700 mb-6">
                Chaque projet est une nouvelle opportunité de créer quelque chose
                d&apos;unique. Je mets un point d&apos;honneur à comprendre les besoins
                spécifiques de chaque client pour livrer un site web qui dépasse
                leurs attentes.
              </p>
              <div className="w-16 h-1 bg-blue-600 mx-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2>Technologies web modernes pour projets en Haute-Saône</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Outils performants et éprouvés pour créer des sites web de qualité professionnelle
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {["React", "Next.js", "Tailwind", "TypeScript", "Node.js", "WordPress"].map(
              (tech, index) => (
                <div
                  key={index}
                  className="bg-slate-50 p-6 rounded-lg text-center hover:bg-blue-50 transition-colors"
                >
                  <p className="text-slate-800">{tech}</p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2>Votre projet web en Haute-Saône sera le prochain ?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Créons ensemble un site web professionnel qui développe votre activité
            à Vesoul, Lure, Gray et dans toute la Haute-Saône
          </p>
          <ServicesNavigation />
        </div>
      </section>
    </div>
  );
}
