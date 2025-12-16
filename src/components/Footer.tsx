"use client";

import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Coordonnées */}
          <div>
            <h5 className="text-white mb-4">EurekaDev - Contact</h5>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-blue-400" />
                <a href="mailto:contact@eurekadev.fr" className="text-slate-300 hover:text-blue-400 transition-colors">
                  contact@eurekadev.fr
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-blue-400" />
                <a href="tel:+33641086631" className="text-slate-300 hover:text-blue-400 transition-colors">
                  +33 6 41 08 66 31
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={18} className="text-blue-400" />
                <span className="text-slate-300">Haute-Saône (70)</span>
              </div>
              <div className="text-sm text-slate-400 mt-4">
                <p>Lun-Ven : 9h-18h</p>
                <p>Sam : Sur rendez-vous</p>
              </div>
            </div>
          </div>

          {/* Liens rapides */}
          <div>
            <h5 className="text-white mb-4">Navigation</h5>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-slate-300 hover:text-blue-400 transition-colors">
                  Accueil
                </a>
              </li>
              <li>
                <a href="/services" className="text-slate-300 hover:text-blue-400 transition-colors">
                  Services Web
                </a>
              </li>
              <li>
                <a href="/portfolio" className="text-slate-300 hover:text-blue-400 transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="/about" className="text-slate-300 hover:text-blue-400 transition-colors">
                  À propos
                </a>
              </li>
              <li>
                <a href="/contact" className="text-slate-300 hover:text-blue-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Zone d'intervention */}
          <div>
            <h5 className="text-white mb-4">Zone d'intervention</h5>
            <div className="text-slate-300 space-y-2">
              <p className="text-sm">Développeur web freelance en Haute-Saône</p>
              <ul className="text-sm space-y-1">
                <li>• Vesoul & agglomération</li>
                <li>• Lure & Luxeuil-les-Bains</li>
                <li>• Gray & secteur sud</li>
                <li>• Héricourt</li>
              </ul>
              <p className="text-xs text-slate-400 mt-3">
                Interventions dans tout le département (70)
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center">
          <div className="flex flex-wrap justify-center gap-4 mb-4 text-sm text-slate-400">
            <a href="/mentions-legales" className="hover:text-blue-400 transition-colors">Mentions Légales</a>
            <a href="/politique-confidentialite" className="hover:text-blue-400 transition-colors">Politique de Confidentialité</a>
            <a href="/cgu" className="hover:text-blue-400 transition-colors">CGU</a>
            <a href="/cgv" className="hover:text-blue-400 transition-colors">CGV</a>
          </div>
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} EurekaDev. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}

