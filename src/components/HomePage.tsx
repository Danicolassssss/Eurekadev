"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, Code, Smartphone, Zap, CheckCircle, Star } from "lucide-react";

export function HomePage() {
  const router = useRouter();

  const navigateTo = (page: string) => {
    // Map simple page keys to routes; adjust as needed
    if (page === "contact") router.push("/contact");
    else if (page === "portfolio") router.push("/portfolio");
    else router.push("/");
  };

  const competences = [
    {
      icon: <Code size={32} />,
      title: "Développement sur mesure",
      description: "Sites web et applications personnalisés selon vos besoins",
    },
    {
      icon: <Smartphone size={32} />,
      title: "Design responsive",
      description: "Interface adaptée à tous les appareils et écrans",
    },
    {
      icon: <Zap size={32} />,
      title: "Performance optimale",
      description: "Chargement rapide et optimisation SEO garantis",
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Analyse de vos besoins",
      description: "Discussion approfondie pour comprendre vos objectifs et votre vision",
    },
    {
      number: "02",
      title: "Conception & Développement",
      description: "Création de votre site avec des technologies modernes et fiables",
    },
    {
      number: "03",
      title: "Mise en ligne & Support",
      description: "Déploiement professionnel et accompagnement continu",
    },
  ];

  const testimonials = [
    {
      name: "Sophie Martin",
      company: "Boutique en ligne",
      text: "Un travail exceptionnel ! Mon site e-commerce a dépassé toutes mes attentes. Professionnel et à l'écoute.",
      rating: 5,
    },
    {
      name: "Thomas Dubois",
      company: "Cabinet d'architecture",
      text: "Site vitrine magnifique qui reflète parfaitement notre identité. Les clients nous complimentent régulièrement.",
      rating: 5,
    },
    {
      name: "Marie Lambert",
      company: "Coach sportif",
      text: "Réactif, créatif et très professionnel. Mon site attire maintenant beaucoup plus de clients !",
      rating: 5,
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1>Création de Sites Web en Haute-Saône | Développeur Web Vesoul, Lure, Gray</h1>
              <p className="text-xl text-blue-100 mb-8">
                Développeur web freelance en Haute-Saône. Je crée des sites internet sur mesure
                à Vesoul, Lure, Gray, Luxeuil-les-Bains et Héricourt. Site vitrine, e-commerce,
                référencement SEO inclus pour faire grandir votre entreprise locale.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => navigateTo("contact")}
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors inline-flex items-center justify-center gap-2"
                >
                  Demander un devis
                  <ArrowRight size={20} />
                </button>
                <button
                  onClick={() => navigateTo("portfolio")}
                  className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
                >
                  Voir mes réalisations
                </button>
              </div>
            </div>
            <div className="hidden lg:block">
              <img
                src="https://images.unsplash.com/photo-1759884247173-3db27f7fafef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXZlbG9wbWVudCUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjUwMjkwMzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Workspace"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Compétences clés */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2>Développeur Web Expert en Haute-Saône</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Un savoir-faire technique local au service des entreprises de Vesoul, Lure, Gray et toute la Haute-Saône</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {competences.map((competence, index) => (
              <div key={index} className="bg-slate-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
                <div className="text-blue-600 mb-4">{competence.icon}</div>
                <h4>{competence.title}</h4>
                <p className="text-slate-600">{competence.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Processus de travail */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2>Un processus simple et efficace</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">De votre idée à la mise en ligne, je vous accompagne à chaque étape</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white p-8 rounded-xl shadow-sm">
                  <div className="text-6xl text-blue-100 mb-4">{step.number}</div>
                  <h4>{step.title}</h4>
                  <p className="text-slate-600">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-8 w-8 h-0.5 bg-blue-200" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2>Ce que disent mes clients en Haute-Saône</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Leur satisfaction est ma meilleure récompense</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-50 p-8 rounded-xl">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-700 mb-6">&quot;{testimonial.text}&quot;</p>
                <div>
                  <p className="text-slate-900">{testimonial.name}</p>
                  <p className="text-slate-500 text-sm">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2>Prêt à lancer votre projet web en Haute-Saône ?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Que vous soyez à Vesoul, Lure, Gray ou ailleurs en Haute-Saône,
            discutons ensemble de vos besoins et créons le site web qui fera décoller votre activité locale.
          </p>
          <button
            onClick={() => navigateTo("contact")}
            className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors inline-flex items-center gap-2"
          >
            Devis gratuit Haute-Saône
            <ArrowRight size={20} />
          </button>
        </div>
      </section>
    </div>
  );
}
