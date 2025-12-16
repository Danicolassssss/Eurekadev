"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";

// Note: Les métadonnées ne peuvent pas être exportées depuis un composant client
// Elles doivent être dans un layout ou un composant serveur parent

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState<null | { title: string; description?: string }>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulation d'envoi de formulaire
    setTimeout(() => {
      setIsSubmitting(false);
      setNotification({
        title: "Message envoyé avec succès !",
        description: "Je vous répondrai dans les plus brefs délais."
      });
      setTimeout(() => setNotification(null), 3500);

      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }, 1500);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      {/* Notification */}
      {notification && (
        <div className="fixed right-4 top-4 z-50 bg-white border border-slate-200 px-4 py-3 rounded-lg shadow-lg">
          <div className="flex items-start gap-2">
            <CheckCircle className="text-green-500" size={20} />
            <div>
              <p className="text-slate-900 font-medium">{notification.title}</p>
              {notification.description && (
                <p className="text-slate-600 text-sm">{notification.description}</p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1>Contactez EurekaDev</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Vous avez un projet ou une question ? N'hésitez pas à me contacter.
            Je suis disponible pour échanger.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Informations de contact */}
            <div>
              <p className="text-slate-600 mb-8">
                Je suis à votre écoute pour discuter de vos besoins en création de site internet.
                Devis gratuit et sans engagement.
              </p>

              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3>Email professionnel</h3>
                    <a
                      href="mailto:contact@eurekadev.fr"
                      className="text-slate-600 hover:text-blue-600 transition-colors"
                    >
                        contact@eurekadev.fr
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3>Téléphone</h3>
                    <a
                      href="tel:+33612345678"
                      className="text-slate-600 hover:text-blue-600 transition-colors"
                    >
                      +33 6 12 34 56 78
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <p className="text-slate-800">Haute-Saône (70)</p>
                    <p className="text-slate-500 text-sm mt-1">
                      Interventions dans toute la Haute-Saône
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 p-6 rounded-xl">
                <div className="space-y-2 text-slate-600">
                  <p>Lundi - Vendredi : 9h00 - 18h00</p>
                  <p className="text-sm text-slate-500 mt-4">
                    Réponse garantie sous 24h ouvrées
                  </p>
                </div>
              </div>
            </div>

            {/* Formulaire */}
            <div>
              <div className="bg-slate-50 p-8 rounded-xl">
                <h2>Envoyez-moi un message</h2>

                <form onSubmit={handleSubmit} className="space-y-6 mt-6">
                  <div>
                    <label
                      className="block text-slate-700 mb-2"
                    >
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Votre nom"
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <label
                      className="block text-slate-700 mb-2"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="votre@email.com"
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <label
                      className="block text-slate-700 mb-2"
                    >
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="+33 6 12 34 56 78"
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <label
                      className="block text-slate-700 mb-2"
                    >
                      Type de projet *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      onChange={handleChange}
                    >
                      <option value="">Sélectionnez une option</option>
                      <option value="creation">Création de site web</option>
                      <option value="refonte">Refonte de site existant</option>
                      <option value="maintenance">Maintenance</option>
                      <option value="autre">Autre demande</option>
                    </select>
                  </div>

                  <div>
                    <label
                      className="block text-slate-700 mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      placeholder="Décrivez votre projet..."
                      rows={5}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        Envoyer le message
                        <Send size={20} />
                      </>
                    )}
                  </button>
                  <p className="text-slate-500 text-sm text-center">
                    * Champs obligatoires
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2>Pourquoi choisir un développeur web en Haute-Saône ?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Devis gratuit",
                description:
                  "Estimation détaillée sans engagement pour votre projet web en Haute-Saône",
              },
              {
                title: "Réponse rapide",
                description: "Je réponds à toutes les demandes sous 24h ouvrées",
              },
              {
                title: "Accompagnement local",
                description:
                  "Conseils personnalisés et support tout au long du projet",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg text-center"
              >
                <CheckCircle className="text-green-500 mx-auto mb-4" size={40} />
                <p className="text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
