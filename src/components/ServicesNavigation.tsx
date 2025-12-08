"use client";

import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

interface ServicesNavigationProps {}

export function ServicesNavigation({}: ServicesNavigationProps) {
  const router = useRouter();

  const onNavigate = (page: string) => {
    const route = page === "contact" ? "/contact" : `/${page}`;
    router.push(route);
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <button
        onClick={() => onNavigate("contact")}
        className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center justify-center gap-2"
      >
        Demander un devis
        <ArrowRight size={20} />
      </button>
      <button
        onClick={() => onNavigate("portfolio")}
        className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors"
      >
        Voir mes réalisations
      </button>
    </div>
  );
}
