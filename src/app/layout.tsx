import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TopLayout from "../components/TopLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EurekaDev - Création Site Web Haute-Saône | Développeur Web Vesoul, Lure, Gray",
  description: "Développeur web freelance en Haute-Saône. Création de sites internet sur mesure à Vesoul, Lure, Gray, Luxeuil-les-Bains. Devis gratuit, référencement SEO inclus.",
  keywords: "création site web haute-saône, développeur web vesoul, site internet lure, développeur freelance gray, création site luxeuil-les-bains, héricourt web",
  authors: [{ name: "EurekaDev" }],
  creator: "EurekaDev",
  publisher: "EurekaDev",
  robots: "index, follow",
  openGraph: {
    title: "EurekaDev - Création Site Web Haute-Saône | Développeur Web Expert",
    description: "Développeur web freelance spécialisé en Haute-Saône. Sites internet professionnels à Vesoul, Lure, Gray. Performance et référencement garantis.",
    type: "website",
    locale: "fr_FR",
    siteName: "EurekaDev",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "EurekaDev - Développeur Web Haute-Saône"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "EurekaDev - Création Site Web Haute-Saône",
    description: "Développeur web freelance en Haute-Saône. Sites internet sur mesure à Vesoul, Lure, Gray.",
    images: ["/og-image.jpg"]
  },
  alternates: {
    canonical: "https://eurekadev.fr"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://eurekadev.fr/#business",
    "name": "EurekaDev",
    "description": "Développeur web freelance spécialisé dans la création de sites internet sur mesure en Haute-Saône",
    "url": "https://eurekadev.fr",
    "telephone": "+33123456789",
    "email": "contact@eurekadev.fr",
    "foundingDate": "2019",
    "founder": {
      "@type": "Person",
      "name": "EurekaDev"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Vesoul",
      "addressRegion": "Haute-Saône",
      "addressCountry": "FR",
      "postalCode": "70000"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Vesoul"
      },
      {
        "@type": "City",
        "name": "Lure"
      },
      {
        "@type": "City",
        "name": "Gray"
      },
      {
        "@type": "City",
        "name": "Luxeuil-les-Bains"
      },
      {
        "@type": "City",
        "name": "Héricourt"
      },
      {
        "@type": "State",
        "name": "Haute-Saône"
      }
    ],
    "serviceType": [
      "Création de sites web",
      "Développement web",
      "Référencement SEO",
      "E-commerce",
      "Site vitrine",
      "Applications web"
    ],
    "priceRange": "€€",
    "currenciesAccepted": "EUR",
    "paymentAccepted": "Cash, Credit Card, Bank transfer",
    "openingHours": "Mo-Fr 09:00-18:00",
    "sameAs": [
      "https://www.linkedin.com/company/eurekadev",
      "https://github.com/eurekadev"
    ]
  };

  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <TopLayout>{children}</TopLayout>
      </body>
    </html>
  );
}
