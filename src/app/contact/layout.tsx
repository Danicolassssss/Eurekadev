import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - EurekaDev | Développeur Web Haute-Saône | Devis Gratuit",
  description: "Contactez EurekaDev pour votre projet web en Haute-Saône. Devis gratuit, conseil personnalisé. Basé à Vesoul, intervention Lure, Gray, Luxeuil. Réponse rapide garantie.",
  keywords: "contact développeur web haute-saône, devis gratuit site internet vesoul, conseil web lure, contact freelance gray, projet web luxeuil",
  alternates: {
    canonical: "https://eurekadev.fr/contact"
  },
  openGraph: {
    title: "Contact EurekaDev | Votre Projet Web en Haute-Saône",
    description: "Discutons de votre projet web ! Devis gratuit et conseils personnalisés pour votre site internet en Haute-Saône.",
    url: "https://eurekadev.fr/contact"
  }
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
