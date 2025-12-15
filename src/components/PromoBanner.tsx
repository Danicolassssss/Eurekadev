"use client";

import React, { useState } from "react";
import { X, Sparkles } from "lucide-react";
import Link from "next/link";

export function PromoBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white py-2 px-4 relative">
      <div className="max-w-7xl mx-auto flex items-center justify-center text-sm font-medium">
        <Sparkles className="mr-2" size={16} />
        <span className="mr-2">🎉 OFFRE DE LANCEMENT :</span>
        <span className="font-bold">Site web professionnel à partir de 990€</span>
        <span className="ml-2 hidden sm:inline">- Profitez de nos tarifs de lancement !</span>
        <Link
          href="/offre-lancement"
          className="ml-4 bg-white text-green-600 px-3 py-1 rounded-full text-xs font-bold hover:bg-green-50 transition-colors"
        >
          Voir l'offre
        </Link>
      </div>
      <button
        onClick={() => setIsVisible(false)}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white hover:text-green-200 transition-colors"
        aria-label="Fermer la bannière"
      >
        <X size={16} />
      </button>
    </div>
  );
}
