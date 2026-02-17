import type { Metadata } from "next";
import { Instrument_Sans, Poppins } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-instrument-sans",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://digitalia.agency"),
  title: {
    default: "Digitalia | Agence Digitale au Maroc — Web, IA & Solutions Cloud",
    template: "%s | Digitalia",
  },
  description:
    "Digitalia est une agence digitale basée à Casablanca, spécialisée en création de sites web, développement d'applications, intelligence artificielle, solutions cloud et data analytics. Nous accompagnons les marques ambitieuses au Maroc et à l'international. | Digitalia is a Casablanca-based digital agency specializing in web design, custom software development, AI & machine learning solutions, cloud infrastructure, and data analytics.",
  keywords: [
    // French - Morocco Market
    "agence digitale Maroc",
    "agence digitale Casablanca",
    "création site web Maroc",
    "développement web Casablanca",
    "agence web Maroc",
    "développement application mobile Maroc",
    "intelligence artificielle Maroc",
    "solutions cloud Maroc",
    "transformation digitale Maroc",
    "marketing digital Casablanca",
    "e-commerce Maroc",
    "référencement SEO Maroc",
    "agence communication digitale",
    "développement logiciel sur mesure",
    "data analytics Maroc",
    "machine learning Maroc",
    "consultant digital Casablanca",
    "site web professionnel Maroc",
    "application web Maroc",
    "UX UI design Maroc",
    // English - Worldwide Market
    "digital agency Morocco",
    "web design agency Casablanca",
    "web development Morocco",
    "custom software development",
    "AI solutions Africa",
    "machine learning services",
    "cloud solutions provider",
    "data analytics agency",
    "digital transformation",
    "mobile app development Morocco",
    "e-commerce development",
    "SEO agency Morocco",
    "UI UX design agency",
    "software development company",
    "IT consulting Morocco",
    "digital marketing agency",
    "web application development",
    "enterprise software solutions",
    "startup digital agency",
    "Digitalia",
  ],
  authors: [{ name: "Digitalia", url: "https://digitalia.agency" }],
  creator: "Digitalia",
  publisher: "Digitalia",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://digitalia.agency",
    languages: {
      "fr-MA": "https://digitalia.agency",
      "fr-FR": "https://digitalia.agency",
      "en-US": "https://digitalia.agency",
      "ar-MA": "https://digitalia.agency",
    },
  },
  openGraph: {
    title: "Digitalia | Agence Digitale au Maroc — Web, IA & Cloud",
    description:
      "Agence digitale à Casablanca spécialisée en création de sites web, développement d'applications, IA et solutions cloud. Nous transformons vos idées en expériences digitales performantes.",
    type: "website",
    url: "https://digitalia.agency",
    siteName: "Digitalia",
    locale: "fr_MA",
    alternateLocale: ["en_US", "fr_FR", "ar_MA"],
    images: [
      {
        url: "/images/Banner-Image.jpg",
        width: 1200,
        height: 630,
        alt: "Digitalia — Agence Digitale Casablanca Maroc",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digitalia | Agence Digitale Maroc — Web, IA & Cloud",
    description:
      "Agence digitale à Casablanca: création de sites web, applications, IA et solutions cloud pour les marques ambitieuses.",
    images: ["/images/Banner-Image.jpg"],
    creator: "@digitalia_ma",
    site: "@digitalia_ma",
  },
  // verification: {
  //   google: "ADD_YOUR_GOOGLE_VERIFICATION_CODE_HERE",
  // },
  category: "technology",
  icons: {
    icon: "/images/favicon.ico",
    apple: "/images/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fr"
      className={`${instrumentSans.variable} ${poppins.variable}`}
    >
      <head>
        <link rel="alternate" hrefLang="fr-MA" href="https://digitalia.agency" />
        <link rel="alternate" hrefLang="fr-FR" href="https://digitalia.agency" />
        <link rel="alternate" hrefLang="en" href="https://digitalia.agency" />
        <link rel="alternate" hrefLang="x-default" href="https://digitalia.agency" />
      </head>
      <body className="antialiased">
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://digitalia.agency/#organization",
              name: "Digitalia",
              alternateName: ["Digitalia Agency", "Digitalia Maroc"],
              url: "https://digitalia.agency",
              logo: {
                "@type": "ImageObject",
                url: "https://digitalia.agency/logos/DIGITALIA-DARK.png",
                width: 200,
                height: 60,
              },
              description:
                "Agence digitale à Casablanca spécialisée en création de sites web, développement d'applications, intelligence artificielle, solutions cloud et data analytics.",
              foundingDate: "2024",
              foundingLocation: "Casablanca, Morocco",
              areaServed: [
                { "@type": "Country", name: "Morocco" },
                { "@type": "Country", name: "France" },
                { "@type": "Continent", name: "Africa" },
                { "@type": "Continent", name: "Europe" },
              ],
              address: {
                "@type": "PostalAddress",
                streetAddress: "Casablanca",
                addressLocality: "Casablanca",
                addressRegion: "Casablanca-Settat",
                postalCode: "20000",
                addressCountry: "MA",
              },
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+212-600-000-000",
                  email: "contact@digitalia.agency",
                  contactType: "customer service",
                  availableLanguage: ["French", "English", "Arabic"],
                },
                {
                  "@type": "ContactPoint",
                  telephone: "+212-600-000-000",
                  contactType: "sales",
                  availableLanguage: ["French", "English", "Arabic"],
                },
              ],
              sameAs: [
                "https://www.facebook.com/digitalia.agency",
                "https://www.linkedin.com/company/digitalia-agency",
                "https://www.instagram.com/digitalia.agency",
                "https://twitter.com/digitalia_ma",
              ],
            }),
          }}
        />

        {/* LocalBusiness Schema for Morocco */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "@id": "https://digitalia.agency/#localbusiness",
              name: "Digitalia - Agence Digitale Casablanca",
              image: "https://digitalia.agency/logos/DIGITALIA-DARK.png",
              url: "https://digitalia.agency",
              telephone: "+212-600-000-000",
              email: "contact@digitalia.agency",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Casablanca",
                addressLocality: "Casablanca",
                addressRegion: "Casablanca-Settat",
                postalCode: "20000",
                addressCountry: "MA",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 33.5731,
                longitude: -7.5898,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "09:00",
                  closes: "18:00",
                },
              ],
              priceRange: "$$",
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Services Digitaux",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Développement Web",
                      description: "Création de sites web et applications web sur mesure",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Intelligence Artificielle",
                      description: "Solutions IA et machine learning pour entreprises",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Solutions Cloud",
                      description: "Infrastructure cloud et hébergement sécurisé",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Data Analytics",
                      description: "Analyse de données et tableaux de bord",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Consulting Digital",
                      description: "Accompagnement en transformation digitale",
                    },
                  },
                ],
              },
            }),
          }}
        />

        {/* WebSite Schema with SearchAction */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": "https://digitalia.agency/#website",
              url: "https://digitalia.agency",
              name: "Digitalia",
              description: "Agence Digitale au Maroc",
              publisher: {
                "@id": "https://digitalia.agency/#organization",
              },
              inLanguage: ["fr-MA", "fr-FR", "en", "ar-MA"],
            }),
          }}
        />

        {/* FAQ Schema for Rich Results */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "What services does Digitalia offer?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Digitalia provides end-to-end IT solutions, including custom software development, cloud infrastructure, data analytics, AI & machine learning, and IT consulting — all tailored to help your business grow and operate more efficiently.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How long does a typical project take?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Timelines vary depending on the scope and complexity of the project. A typical software development or cloud migration project ranges from 4 to 12 weeks, while larger enterprise solutions may take longer.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do you work with clients worldwide?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, we work with clients globally. Our team is equipped to collaborate remotely and deliver high-quality results regardless of location or time zone.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How can we get started with Digitalia?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Simply reach out through the contact form or send us an email. We'll schedule a discovery call to understand your needs and goals, then propose a tailored plan.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How much do your services cost?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Our pricing depends on the scope, complexity, and deliverables of each project. We provide custom quotes after understanding your specific needs during our initial consultation.",
                  },
                },
              ],
            }),
          }}
        />

        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
