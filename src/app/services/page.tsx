import type { Metadata } from "next";
import React from "react";
import {
  Globe,
  RefreshCw,
  Wrench,
  Rocket,
  Search,
  Smartphone,
  ShoppingCart,
  FileText,
  CheckCircle,
} from "lucide-react";
import { ServicesNavigation } from "../../components/ServicesNavigation";

export const metadata: Metadata = {
  title: "Services Web - EurekaDev | Création Sites Internet Haute-Saône",
  description: "Services développement web en Haute-Saône : création sites vitrine, e-commerce, refonte, SEO. Expertise locale à Vesoul, Lure, Gray. Devis personnalisé gratuit.",
  keywords: "services web haute-saône, création site vitrine vesoul, e-commerce lure, refonte site gray, SEO local haute-saône, maintenance web",
  alternates: {
    canonical: "https://eurekadev.fr/services"
  },
  openGraph: {
    title: "Services Web EurekaDev | Développement Sites Internet Haute-Saône",
    description: "Découvrez tous nos services web : sites vitrine, e-commerce, applications sur mesure. Expertise locale en Haute-Saône.",
    url: "https://eurekadev.fr/services"
  }
};

export default function ServicesPage() {

  const mainServices = [
    {
      icon: <Globe size={40} />,
      title: "Création de sites web",
      description:
        "Conception et développement de sites web sur mesure, adaptés à votre image et vos objectifs.",
      features: [
        "Sites vitrines professionnels",
        "Sites e-commerce performants",
        "Applications web personnalisées",
        "Design moderne et responsive",
      ],
    },
    {
      icon: <RefreshCw size={40} />,
      title: "Refonte de sites existants",
      description:
        "Modernisation de votre site actuel pour améliorer son design, ses performances et son efficacité.",
      features: [
        "Analyse de l'existant",
        "Optimisation UX/UI",
        "Migration de contenu",
        "Amélioration des performances",
      ],
    },
    {
      icon: <Wrench size={40} />,
      title: "Maintenance et support",
      description:
        "Accompagnement continu pour garantir la sécurité, la performance et l'évolution de votre site.",
      features: [
        "Mises à jour régulières",
        "Corrections et améliorations",
        "Support technique réactif",
        "Sauvegardes automatiques",
      ],
    },
  ];

  const additionalServices = [
    {
      icon: <Search size={24} />,
      title: "Optimisation SEO",
      description: "Amélioration du référencement naturel pour plus de visibilité",
    },
    {
      icon: <Smartphone size={24} />,
      title: "Mobile First",
      description: "Design prioritaire pour une expérience mobile optimale",
    },
    {
      icon: <Rocket size={24} />,
      title: "Performance",
      description: "Optimisation de la vitesse de chargement et des performances",
    },
    {
      icon: <ShoppingCart size={24} />,
      title: "E-commerce",
      description: "Solutions complètes pour vendre en ligne efficacement",
    },
    {
      icon: <FileText size={24} />,
      title: "Contenu",
      description: "Rédaction et intégration de contenus optimisés",
    },
    {
      icon: <Globe size={24} />,
      title: "Hébergement",
      description: "Conseils et mise en place d'hébergement performant",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1>Services Web en Haute-Saône | Création Sites Internet Professionnels</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Solutions web complètes pour entreprises de Vesoul, Lure, Gray et toute la Haute-Saône.
            Développement sur mesure, référencement local et accompagnement personnalisé.
          </p>
        </div>
      </section>

      {/* Services principaux */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <div
                key={index}
                className="bg-white border-2 border-slate-200 rounded-xl p-8 hover:border-blue-400 hover:shadow-xl transition-all"
              >
                <div className="text-blue-600 mb-4">{service.icon}</div>
                <h3>{service.title}</h3>
                <p className="text-slate-600 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle
                        size={20}
                        className="text-green-500 flex-shrink-0 mt-0.5"
                      />
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services complémentaires */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2>Services complémentaires pour entreprises Haute-Saône</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Des prestations additionnelles pour un accompagnement complet
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg hover:shadow-md transition-shadow"
              >
                <div className="text-blue-600 mb-3">{service.icon}</div>
                <h5>{service.title}</h5>
                <p className="text-slate-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Processus */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2>Comment ça marche pour votre projet web en Haute-Saône ?</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Un processus simple et transparent du premier contact à la mise en ligne, avec un accompagnement local personnalisé
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  step: "1",
                  title: "Premier contact",
                  description:
                    "Échange gratuit pour comprendre votre projet, vos besoins et vos objectifs. Je vous conseille sur la meilleure solution.",
                },
                {
                  step: "2",
                  title: "Devis personnalisé",
                  description:
                    "Proposition détaillée avec tarif transparent, délais de réalisation et fonctionnalités incluses.",
                },
                {
                  step: "3",
                  title: "Conception",
                  description:
                    "Création des maquettes et du design de votre site. Validation avec vous avant le développement.",
                },
                {
                  step: "4",
                  title: "Développement",
                  description:
                    "Développement de votre site avec des technologies modernes. Vous suivez l'avancement régulièrement.",
                },
                {
                  step: "5",
                  title: "Tests & Validation",
                  description:
                    "Tests complets sur tous les appareils. Ajustements selon vos retours jusqu'à votre validation finale.",
                },
                {
                  step: "6",
                  title: "Mise en ligne",
                  description:
                    "Déploiement de votre site et formation pour que vous puissiez le gérer en autonomie. Support continu assuré.",
                },
              ].map((item, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center">
                    {item.step}
                  </div>
                  <div className="flex-1 pt-1">
                    <h4>{item.title}</h4>
                    <p className="text-slate-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2>
            Discutons de votre projet web en Haute-Saône
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Obtenez un devis gratuit et personnalisé pour votre site web.
            Service local à Vesoul, Lure, Gray et toute la Haute-Saône.
          </p>
          <ServicesNavigation />
        </div>
      </section>
    </div>
  );
}
