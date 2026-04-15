"use client";

import Link from "next/link";
import Image from "next/image";
import { useLocale } from "@/i18n/LocaleContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function TermsContent() {
  const { locale, dict } = useLocale();
  const t = dict.terms;

  return (
    <>
      {/* Header */}
      <header className="border-b border-azureish-white bg-white">
        <div className="mx-auto flex max-w-[83rem] items-center justify-between px-5 py-4 md:px-[3.75rem]">
          <Link href={`/${locale}`}>
            <Image
              src="/logos/DIGITALIA-DARK.svg"
              alt="Digitalia"
              width={100}
              height={28}
              className="h-16 w-auto"
            />
          </Link>
          <div className="flex items-center gap-3">
            <LanguageSwitcher />
            <Link
              href={`/${locale}`}
              className="rounded-pill bg-primary px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary-dark"
            >
              {t.backToHome}
            </Link>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-[83rem] px-5 py-16 md:px-[3.75rem] md:py-24">
        <h1 className="font-instrument text-4xl font-bold text-eerie-black md:text-5xl">
          {t.title}{" "}
          <span className="italic text-primary">{t.titleHighlight}</span>
        </h1>
        <p className="mt-4 text-sm text-independence">{t.lastUpdated}</p>

        {locale === "en" ? <EnglishTerms /> : <FrenchTerms />}
      </main>

      {/* Footer */}
      <footer className="border-t border-azureish-white bg-alice-blue py-6">
        <div className="mx-auto max-w-[83rem] px-5 text-center text-xs text-eerie-black/60 md:px-[3.75rem]">
          &copy; 2026 Copyright -{" "}
          <Link href={`/${locale}`} className="text-eerie-black hover:text-primary">
            Digitalia
          </Link>{" "}
          |{" "}
          <Link href={`/${locale}/terms`} className="font-medium text-primary">
            {dict.footer.termsOfUse}
          </Link>{" "}
          |{" "}
          <Link href={`/${locale}/privacy-policy`} className="text-eerie-black hover:text-primary">
            {dict.footer.privacyPolicy}
          </Link>
        </div>
      </footer>
    </>
  );
}

function EnglishTerms() {
  return (
    <div className="mt-12 space-y-10 text-[0.938rem] leading-relaxed text-independence">
      <Section n={1} title="Purpose">
        <p>
          These Terms of Use govern access to and use of the <strong>digitalia-solutions.com</strong> website, the associated mobile application, and the services offered by <strong>Digitalia Solutions</strong>, a digital agency based in Casablanca, Morocco.
        </p>
        <p className="mt-2">
          By accessing our services, you unconditionally accept these Terms. If you do not accept these terms, please do not use our services.
        </p>
      </Section>

      <Section n={2} title="Publisher">
        <ul className="list-inside list-disc space-y-1">
          <li>Company: Digitalia Solutions</li>
          <li>Headquarters: Zenith II Lotissement Attaoufik, Casablanca, Morocco</li>
          <li>Email: <a href="mailto:support@digitalia-solutions.com" className="text-primary hover:underline">support@digitalia-solutions.com</a></li>
          <li>Phone: +212 661-255458</li>
        </ul>
      </Section>

      <Section n={3} title="Services Offered">
        <p>
          Digitalia Solutions provides custom software development, artificial intelligence, cloud solutions, data analytics, and digital transformation consulting services. The website presents these services and allows visitors to contact us.
        </p>
        <p className="mt-2">
          The mobile application is an internal tool reserved for Digitalia Solutions employees, intended for time management, ticketing, internal communications, and operational support.
        </p>
      </Section>

      <Section n={4} title="Access to Services">
        <p>
          The website is freely accessible to any user with Internet access. Digitalia Solutions reserves the right to suspend, limit, or interrupt access at any time for maintenance, updates, or any other reason, without notice or compensation.
        </p>
        <p className="mt-2">
          Access to the mobile application requires authentication and is strictly reserved for authorized employees.
        </p>
      </Section>

      <Section n={5} title="Intellectual Property">
        <p>
          All content on the website and mobile application — including text, images, logos, graphics, icons, source code, and software — is the exclusive property of Digitalia Solutions or its partners and is protected by Moroccan and international intellectual property laws.
        </p>
        <p className="mt-2">
          Any reproduction, representation, modification, distribution, or exploitation of these contents without prior written authorization is strictly prohibited.
        </p>
      </Section>

      <Section n={6} title="User Obligations">
        <p className="mb-3">The user agrees to:</p>
        <ul className="list-inside list-disc space-y-1">
          <li>Use the site and application in accordance with their purpose and these Terms</li>
          <li>Not attempt unauthorized access to Digitalia Solutions systems or data</li>
          <li>Not distribute unlawful, defamatory, or harmful content</li>
          <li>Provide accurate and current information when using the contact form</li>
          <li>(For employees) Comply with Digitalia Solutions internal IT policy when using the mobile application</li>
        </ul>
      </Section>

      <Section n={7} title="Limitation of Liability">
        <p>
          Digitalia Solutions strives to ensure the accuracy of information on the site. However, we cannot guarantee the accuracy, completeness, or timeliness of all information provided.
        </p>
        <p className="mt-2">Digitalia Solutions disclaims liability for:</p>
        <ul className="mt-2 list-inside list-disc space-y-1">
          <li>Direct or indirect damages resulting from the use or inability to use the site or application</li>
          <li>Temporary or permanent interruption of services for technical reasons</li>
          <li>Third-party intrusion, viruses, or security breaches despite protective measures</li>
          <li>Content of third-party websites accessible via links on the site</li>
        </ul>
      </Section>

      <Section n={8} title="External Links">
        <p>
          The site may contain links to third-party websites. Digitalia Solutions exercises no control over these sites and disclaims all responsibility for their content, privacy practices, or availability.
        </p>
      </Section>

      <Section n={9} title="Personal Data Protection">
        <p>
          The collection and processing of personal data is governed by our{" "}
          <Link href="/en/privacy-policy" className="text-primary hover:underline">Privacy Policy</Link>,
          which forms an integral part of these Terms.
        </p>
      </Section>

      <Section n={10} title="Applicable Law & Jurisdiction">
        <p>
          These Terms are governed by Moroccan law. Any dispute relating to their interpretation or execution shall be subject to the exclusive jurisdiction of the courts of Casablanca, Morocco.
        </p>
      </Section>

      <Section n={11} title="Changes to Terms">
        <p>
          Digitalia Solutions reserves the right to modify these Terms at any time. Changes take effect upon publication on this page. Continued use of services after modification constitutes acceptance of the new terms.
        </p>
      </Section>

      <Section n={12} title="Contact">
        <p>For any questions regarding these Terms:</p>
        <ul className="mt-3 list-inside list-disc space-y-1">
          <li>Email: <a href="mailto:support@digitalia-solutions.com" className="text-primary hover:underline">support@digitalia-solutions.com</a></li>
          <li>Phone: +212 661-255458</li>
          <li>Address: Zenith II Lotissement Attaoufik, Casablanca, Morocco</li>
        </ul>
      </Section>
    </div>
  );
}

function FrenchTerms() {
  return (
    <div className="mt-12 space-y-10 text-[0.938rem] leading-relaxed text-independence">
      <Section n={1} title="Objet">
        <p>
          Les presentes Conditions Generales d&apos;Utilisation (ci-apres &laquo; CGU &raquo;) regissent l&apos;acces et l&apos;utilisation du site web <strong>digitalia-solutions.com</strong>, de l&apos;application mobile associee et des services proposes par <strong>Digitalia Solutions</strong>, agence digitale basee a Casablanca, Maroc.
        </p>
        <p className="mt-2">
          En accedant a nos services, vous acceptez sans reserve les presentes CGU. Si vous n&apos;acceptez pas ces conditions, veuillez ne pas utiliser nos services.
        </p>
      </Section>

      <Section n={2} title="Editeur du site">
        <ul className="list-inside list-disc space-y-1">
          <li>Raison sociale : Digitalia Solutions</li>
          <li>Siege social : Zenith II Lotissement Attaoufik, Casablanca, Maroc</li>
          <li>Email : <a href="mailto:support@digitalia-solutions.com" className="text-primary hover:underline">support@digitalia-solutions.com</a></li>
          <li>Telephone : +212 661-255458</li>
        </ul>
      </Section>

      <Section n={3} title="Services proposes">
        <p>
          Digitalia Solutions propose des services de developpement logiciel sur mesure, d&apos;intelligence artificielle, de solutions cloud, de data analytics et de conseil en transformation digitale.
        </p>
        <p className="mt-2">
          L&apos;application mobile est un outil interne reserve aux employes de Digitalia Solutions, destine a la gestion du temps, des tickets, des communications internes et du support operationnel.
        </p>
      </Section>

      <Section n={4} title="Acces aux services">
        <p>
          Le site web est accessible gratuitement a tout utilisateur disposant d&apos;un acces Internet. Digitalia Solutions se reserve le droit de suspendre, limiter ou interrompre l&apos;acces a tout moment pour des raisons de maintenance ou toute autre raison, sans preavis ni indemnite.
        </p>
        <p className="mt-2">
          L&apos;acces a l&apos;application mobile est soumis a une authentification et est strictement reserve aux employes autorises.
        </p>
      </Section>

      <Section n={5} title="Propriete intellectuelle">
        <p>
          L&apos;ensemble des contenus presents sur le site web et l&apos;application mobile — incluant textes, images, logos, graphismes, icones, code source et logiciels — est la propriete exclusive de Digitalia Solutions ou de ses partenaires et est protege par les lois marocaines et internationales relatives a la propriete intellectuelle.
        </p>
        <p className="mt-2">
          Toute reproduction, representation, modification, distribution ou exploitation de ces contenus sans autorisation ecrite prealable est strictement interdite.
        </p>
      </Section>

      <Section n={6} title="Obligations de l'utilisateur">
        <p className="mb-3">L&apos;utilisateur s&apos;engage a :</p>
        <ul className="list-inside list-disc space-y-1">
          <li>Utiliser le site et l&apos;application conformement a leur destination et aux presentes CGU</li>
          <li>Ne pas tenter d&apos;acceder de maniere non autorisee aux systemes ou donnees de Digitalia Solutions</li>
          <li>Ne pas diffuser de contenu illicite, diffamatoire ou portant atteinte aux droits de tiers</li>
          <li>Fournir des informations exactes et a jour lors de l&apos;utilisation du formulaire de contact</li>
          <li>(Pour les employes) Respecter la charte informatique interne dans le cadre de l&apos;utilisation de l&apos;application mobile</li>
        </ul>
      </Section>

      <Section n={7} title="Limitation de responsabilite">
        <p>
          Digitalia Solutions s&apos;efforce d&apos;assurer l&apos;exactitude des informations diffusees sur le site. Toutefois, nous ne saurions garantir l&apos;exactitude, la completude ou l&apos;actualite de toutes les informations mises a disposition.
        </p>
        <p className="mt-2">Digitalia Solutions decline toute responsabilite en cas de :</p>
        <ul className="mt-2 list-inside list-disc space-y-1">
          <li>Dommages directs ou indirects resultant de l&apos;utilisation ou de l&apos;impossibilite d&apos;utiliser le site ou l&apos;application</li>
          <li>Interruption temporaire ou definitive des services pour raisons techniques</li>
          <li>Intrusion de tiers, virus informatiques ou toute atteinte a la securite des systemes</li>
          <li>Contenu de sites tiers accessibles via des liens hypertextes presents sur le site</li>
        </ul>
      </Section>

      <Section n={8} title="Liens hypertextes">
        <p>
          Le site peut contenir des liens vers des sites tiers. Digitalia Solutions n&apos;exerce aucun controle sur ces sites et decline toute responsabilite quant a leur contenu, leurs pratiques de confidentialite ou leur disponibilite.
        </p>
      </Section>

      <Section n={9} title="Protection des donnees personnelles">
        <p>
          La collecte et le traitement des donnees personnelles sont regis par notre{" "}
          <Link href="/fr/privacy-policy" className="text-primary hover:underline">Politique de Confidentialite</Link>,
          qui fait partie integrante des presentes CGU.
        </p>
      </Section>

      <Section n={10} title="Droit applicable et juridiction competente">
        <p>
          Les presentes CGU sont regies par le droit marocain. Tout litige relatif a l&apos;interpretation ou a l&apos;execution des presentes sera soumis a la competence exclusive des tribunaux de Casablanca, Maroc.
        </p>
      </Section>

      <Section n={11} title="Modifications des CGU">
        <p>
          Digitalia Solutions se reserve le droit de modifier les presentes CGU a tout moment. Les modifications prennent effet des leur publication sur cette page. L&apos;utilisation continue des services apres modification vaut acceptation des nouvelles conditions.
        </p>
      </Section>

      <Section n={12} title="Contact">
        <p>Pour toute question relative aux presentes CGU :</p>
        <ul className="mt-3 list-inside list-disc space-y-1">
          <li>Email : <a href="mailto:support@digitalia-solutions.com" className="text-primary hover:underline">support@digitalia-solutions.com</a></li>
          <li>Telephone : +212 661-255458</li>
          <li>Adresse : Zenith II Lotissement Attaoufik, Casablanca, Maroc</li>
        </ul>
      </Section>
    </div>
  );
}

function Section({ n, title, children }: { n: number; title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="mb-3 font-instrument text-xl font-semibold text-eerie-black">
        {n}. {title}
      </h2>
      {children}
    </section>
  );
}
