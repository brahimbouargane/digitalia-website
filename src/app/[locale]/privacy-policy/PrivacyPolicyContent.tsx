"use client";

import Link from "next/link";
import Image from "next/image";
import { useLocale } from "@/i18n/LocaleContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function PrivacyPolicyContent() {
  const { locale, dict } = useLocale();
  const t = dict.privacy;

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
          {t.title} <span className="italic text-primary">{t.titleHighlight}</span>
        </h1>
        <p className="mt-4 text-sm text-independence">{t.lastUpdated}</p>

        {locale === "en" ? <EnglishPrivacy /> : <FrenchPrivacy />}
      </main>

      {/* Footer */}
      <footer className="border-t border-azureish-white bg-alice-blue py-6">
        <div className="mx-auto max-w-[83rem] px-5 text-center text-xs text-eerie-black/60 md:px-[3.75rem]">
          &copy; 2026 Copyright -{" "}
          <Link href={`/${locale}`} className="text-eerie-black hover:text-primary">
            Digitalia
          </Link>{" "}
          |{" "}
          <Link href={`/${locale}/terms`} className="text-eerie-black hover:text-primary">
            {dict.footer.termsOfUse}
          </Link>{" "}
          |{" "}
          <Link href={`/${locale}/privacy-policy`} className="font-medium text-primary">
            {dict.footer.privacyPolicy}
          </Link>
        </div>
      </footer>
    </>
  );
}

/* ── English version ── */
function EnglishPrivacy() {
  return (
    <div className="mt-12 space-y-10 text-[0.938rem] leading-relaxed text-independence">
      <Section n={1} title="Introduction">
        <p>
          This Privacy Policy describes how Digitalia Solutions collects, uses, and protects personal data in connection with its mobile application and website.
        </p>
        <p className="mt-2">
          The mobile application is intended exclusively for internal use by Digitalia Solutions employees for managing work time, tasks, and professional communication. It is not intended for the general public.
        </p>
      </Section>

      <Section n={2} title="Publisher Identity">
        <ul className="mt-3 list-inside list-disc space-y-1">
          <li>Company: Digitalia Solutions</li>
          <li>Headquarters: Zenith II Lotissement Attaoufik, Casablanca, Morocco</li>
          <li>France Office: Neuilly-sur-Seine, France</li>
          <li>Contact: <a href="mailto:support@digitalia-solutions.com" className="text-primary hover:underline">support@digitalia-solutions.com</a></li>
          <li>Phone: +212 661-255458</li>
        </ul>
      </Section>

      <Section n={3} title="Scope">
        <p>This policy applies to:</p>
        <ul className="mt-2 list-inside list-disc space-y-1">
          <li>The Digitalia mobile application (iOS and Android)</li>
          <li>The digitalia-solutions.com website</li>
          <li>Associated internal services</li>
        </ul>
        <p className="mt-2">
          In the context of use via an employee account, the employer may be considered the data controller, and Digitalia Solutions acts as a technical service provider.
        </p>
      </Section>

      <Section n={4} title="Data Collected">
        <h3 className="mb-2 font-instrument text-base font-semibold text-eerie-black">Personal Data</h3>
        <ul className="mb-4 list-inside list-disc space-y-1">
          <li>First and last name</li>
          <li>Professional email address</li>
          <li>Employee identifier</li>
        </ul>
        <h3 className="mb-2 font-instrument text-base font-semibold text-eerie-black">Professional Data</h3>
        <ul className="mb-4 list-inside list-disc space-y-1">
          <li>Working hours (clock-in, activities)</li>
          <li>Tasks, tickets, and assignments</li>
          <li>Internal communications (messages, notifications)</li>
        </ul>
        <h3 className="mb-2 font-instrument text-base font-semibold text-eerie-black">Technical Data</h3>
        <ul className="mb-4 list-inside list-disc space-y-1">
          <li>IP address</li>
          <li>Device type and operating system</li>
          <li>Application usage data and diagnostic logs</li>
          <li>Push notification identifiers</li>
        </ul>
        <h3 className="mb-2 font-instrument text-base font-semibold text-eerie-black">Website Data</h3>
        <ul className="list-inside list-disc space-y-1">
          <li>Contact form data: name, email, project type, message</li>
          <li>Browsing data: IP address, browser type, pages visited</li>
        </ul>
      </Section>

      <Section n={5} title="How Data Is Collected">
        <ul className="list-inside list-disc space-y-1">
          <li>Directly from the user</li>
          <li>Through company administrators or internal systems</li>
          <li>Automatically during application use</li>
        </ul>
      </Section>

      <Section n={6} title="Purpose of Processing">
        <ul className="list-inside list-disc space-y-1">
          <li>Authenticate users</li>
          <li>Manage work time and activities</li>
          <li>Enable internal communication</li>
          <li>Send notifications and reminders</li>
          <li>Ensure application security</li>
          <li>Improve performance and user experience</li>
          <li>Respond to contact requests (website)</li>
        </ul>
      </Section>

      <Section n={7} title="Application Features & Permissions">
        <p>The application may use:</p>
        <ul className="mt-2 list-inside list-disc space-y-1">
          <li>Push notifications (reminders, messages, validation)</li>
          <li>Technical device data</li>
        </ul>
        <p className="mt-2">No location or biometric data is used unless otherwise stated.</p>
      </Section>

      <Section n={8} title="Data Sharing">
        <p>Data is never sold or used for commercial purposes. It may be shared with:</p>
        <ul className="mt-2 list-inside list-disc space-y-1">
          <li>Technical service providers (hosting, infrastructure)</li>
          <li>Services necessary for application operation</li>
          <li>Legal authorities if required</li>
        </ul>
      </Section>

      <Section n={9} title="International Transfers">
        <p>
          If our hosting or cloud providers operate outside Morocco (e.g., AWS, Google Cloud), your data may be transferred internationally. We ensure appropriate safeguards are in place in compliance with applicable data protection laws.
        </p>
      </Section>

      <Section n={10} title="Data Retention">
        <ul className="list-inside list-disc space-y-1">
          <li><strong>Website contact data:</strong> retained for the duration needed to process your request, then deleted within 12 months</li>
          <li><strong>Employee data (app):</strong> retained during the employment contract and deleted within 12 months after termination</li>
          <li><strong>Browsing data:</strong> retained for a maximum of 13 months</li>
        </ul>
      </Section>

      <Section n={11} title="Data Security">
        <p>
          We implement appropriate technical and organizational measures to protect your personal data, including encryption of data in transit (HTTPS/TLS), access control, secure authentication systems, and regular system backups.
        </p>
      </Section>

      <Section n={12} title="User Rights">
        <p className="mb-3">
          In accordance with Moroccan Law No. 09-08 on the protection of personal data and the General Data Protection Regulation (GDPR), you have the following rights:
        </p>
        <ul className="list-inside list-disc space-y-1">
          <li><strong>Right of access:</strong> obtain a copy of your personal data</li>
          <li><strong>Right to rectification:</strong> correct inaccurate or incomplete data</li>
          <li><strong>Right to deletion:</strong> request erasure of your data, subject to legal obligations</li>
          <li><strong>Right to object:</strong> object to the processing of your data in certain cases</li>
          <li><strong>Right to portability:</strong> receive your data in a structured, readable format</li>
        </ul>
        <p className="mt-3">
          To exercise these rights, contact us at{" "}
          <a href="mailto:support@digitalia-solutions.com" className="text-primary hover:underline">support@digitalia-solutions.com</a>.
          We commit to responding within 30 days.
        </p>
      </Section>

      <Section n={13} title="Legal Basis">
        <ul className="list-inside list-disc space-y-1">
          <li><strong>Performance of the employment contract</strong> for employee-related data via the application</li>
          <li><strong>Legitimate interest</strong> for website analytics and service improvement</li>
          <li><strong>Consent</strong> for newsletters and biometric data use</li>
        </ul>
      </Section>

      <Section n={14} title="Minors">
        <p>This application is not intended for children and is reserved for authorized employees.</p>
      </Section>

      <Section n={15} title="Cookies">
        <p>
          Our website may use essential cookies and analytical cookies to measure traffic. You can configure your browser to refuse cookies or be alerted when they are sent.
        </p>
      </Section>

      <Section n={16} title="Policy Changes">
        <p>
          We reserve the right to modify this privacy policy at any time. Changes will be published on this page with an updated date. We encourage you to review this page regularly.
        </p>
      </Section>

      <Section n={17} title="Contact">
        <p>For any questions regarding this privacy policy or the processing of your data:</p>
        <ul className="mt-3 list-inside list-disc space-y-1">
          <li>Email: <a href="mailto:support@digitalia-solutions.com" className="text-primary hover:underline">support@digitalia-solutions.com</a></li>
          <li>Phone: +212 661-255458</li>
          <li>Address: Zenith II Lotissement Attaoufik, Casablanca, Morocco</li>
        </ul>
      </Section>
    </div>
  );
}

/* ── French version ── */
function FrenchPrivacy() {
  return (
    <div className="mt-12 space-y-10 text-[0.938rem] leading-relaxed text-independence">
      <Section n={1} title="Introduction">
        <p>
          La presente Politique de Confidentialite decrit comment Digitalia Solutions collecte, utilise et protege les donnees personnelles dans le cadre de l&apos;utilisation de son application mobile et de son site web.
        </p>
        <p className="mt-2">
          L&apos;application mobile est destinee exclusivement a un usage interne par les employes de Digitalia Solutions pour la gestion du temps de travail, des taches et de la communication professionnelle. Elle n&apos;est pas destinee au grand public.
        </p>
      </Section>

      <Section n={2} title="Identite de l'editeur">
        <ul className="mt-3 list-inside list-disc space-y-1">
          <li>Societe : Digitalia Solutions</li>
          <li>Siege social : Zenith II Lotissement Attaoufik, Casablanca, Maroc</li>
          <li>Bureau France : Neuilly-sur-Seine, France</li>
          <li>Contact : <a href="mailto:support@digitalia-solutions.com" className="text-primary hover:underline">support@digitalia-solutions.com</a></li>
          <li>Telephone : +212 661-255458</li>
        </ul>
      </Section>

      <Section n={3} title="Champ d'application">
        <p>Cette politique s&apos;applique :</p>
        <ul className="mt-2 list-inside list-disc space-y-1">
          <li>A l&apos;application mobile Digitalia (iOS et Android)</li>
          <li>Au site web digitalia-solutions.com</li>
          <li>Aux services internes associes</li>
        </ul>
        <p className="mt-2">
          Dans le cadre d&apos;une utilisation via un compte employe, l&apos;employeur peut etre considere comme responsable du traitement, et Digitalia Solutions agit en tant que prestataire technique.
        </p>
      </Section>

      <Section n={4} title="Donnees collectees">
        <h3 className="mb-2 font-instrument text-base font-semibold text-eerie-black">Donnees personnelles</h3>
        <ul className="mb-4 list-inside list-disc space-y-1">
          <li>Nom et prenom</li>
          <li>Adresse email professionnelle</li>
          <li>Identifiant employe</li>
        </ul>
        <h3 className="mb-2 font-instrument text-base font-semibold text-eerie-black">Donnees professionnelles</h3>
        <ul className="mb-4 list-inside list-disc space-y-1">
          <li>Heures de travail (pointage, activites)</li>
          <li>Taches, tickets et assignations</li>
          <li>Communications internes (messages, notifications)</li>
        </ul>
        <h3 className="mb-2 font-instrument text-base font-semibold text-eerie-black">Donnees techniques</h3>
        <ul className="mb-4 list-inside list-disc space-y-1">
          <li>Adresse IP</li>
          <li>Type d&apos;appareil et systeme d&apos;exploitation</li>
          <li>Donnees d&apos;utilisation et logs de diagnostic</li>
          <li>Identifiants de notifications push</li>
        </ul>
        <h3 className="mb-2 font-instrument text-base font-semibold text-eerie-black">Donnees du site web</h3>
        <ul className="list-inside list-disc space-y-1">
          <li>Donnees du formulaire de contact : nom, email, type de projet, message</li>
          <li>Donnees de navigation : adresse IP, type de navigateur, pages visitees</li>
        </ul>
      </Section>

      <Section n={5} title="Mode de collecte des donnees">
        <ul className="list-inside list-disc space-y-1">
          <li>Directement aupres de l&apos;utilisateur</li>
          <li>Via les administrateurs ou systemes internes de l&apos;entreprise</li>
          <li>Automatiquement lors de l&apos;utilisation de l&apos;application</li>
        </ul>
      </Section>

      <Section n={6} title="Finalites du traitement">
        <ul className="list-inside list-disc space-y-1">
          <li>Authentifier les utilisateurs</li>
          <li>Gerer le temps de travail et les activites</li>
          <li>Permettre la communication interne</li>
          <li>Envoyer des notifications et rappels</li>
          <li>Assurer la securite de l&apos;application</li>
          <li>Ameliorer les performances et l&apos;experience utilisateur</li>
          <li>Repondre aux demandes de contact (site web)</li>
        </ul>
      </Section>

      <Section n={7} title="Fonctionnalites et autorisations">
        <p>L&apos;application peut utiliser :</p>
        <ul className="mt-2 list-inside list-disc space-y-1">
          <li>Les notifications push (rappels, messages, validation)</li>
          <li>Les donnees techniques de l&apos;appareil</li>
        </ul>
        <p className="mt-2">Aucune donnee de localisation ou biometrique n&apos;est utilisee, sauf mention contraire.</p>
      </Section>

      <Section n={8} title="Partage des donnees">
        <p>Les donnees ne sont ni vendues ni utilisees a des fins commerciales. Elles peuvent etre partagees avec :</p>
        <ul className="mt-2 list-inside list-disc space-y-1">
          <li>Des prestataires techniques (hebergement, infrastructure)</li>
          <li>Des services necessaires au fonctionnement de l&apos;application</li>
          <li>Les autorites legales si requis</li>
        </ul>
      </Section>

      <Section n={9} title="Transferts internationaux">
        <p>
          Si nos prestataires d&apos;hebergement ou cloud operent en dehors du Maroc (ex: AWS, Google Cloud), vos donnees peuvent etre transferees internationalement. Nous veillons a ce que des garanties appropriees soient en place conformement aux lois applicables.
        </p>
      </Section>

      <Section n={10} title="Conservation des donnees">
        <ul className="list-inside list-disc space-y-1">
          <li><strong>Donnees de contact (site web) :</strong> conservees pendant la duree necessaire au traitement de votre demande, puis supprimees sous 12 mois</li>
          <li><strong>Donnees employes (application) :</strong> conservees pendant la duree du contrat de travail et supprimees dans un delai de 12 mois apres la fin du contrat</li>
          <li><strong>Donnees de navigation :</strong> conservees pendant 13 mois maximum</li>
        </ul>
      </Section>

      <Section n={11} title="Securite des donnees">
        <p>
          Nous mettons en oeuvre des mesures techniques et organisationnelles appropriees pour proteger vos donnees personnelles, incluant le chiffrement des donnees en transit (HTTPS/TLS), le controle d&apos;acces, des systemes d&apos;authentification securises et la sauvegarde reguliere des systemes.
        </p>
      </Section>

      <Section n={12} title="Droits des utilisateurs">
        <p className="mb-3">
          Conformement a la loi n&deg; 09-08 relative a la protection des personnes physiques a l&apos;egard du traitement des donnees a caractere personnel (Maroc) et au Reglement General sur la Protection des Donnees (RGPD), vous disposez des droits suivants :
        </p>
        <ul className="list-inside list-disc space-y-1">
          <li><strong>Droit d&apos;acces :</strong> obtenir une copie de vos donnees personnelles</li>
          <li><strong>Droit de rectification :</strong> corriger des donnees inexactes ou incompletes</li>
          <li><strong>Droit de suppression :</strong> demander l&apos;effacement de vos donnees, sous reserve des obligations legales</li>
          <li><strong>Droit d&apos;opposition :</strong> vous opposer au traitement de vos donnees dans certains cas</li>
          <li><strong>Droit a la portabilite :</strong> recevoir vos donnees dans un format structure et lisible</li>
        </ul>
        <p className="mt-3">
          Pour exercer ces droits, contactez-nous a{" "}
          <a href="mailto:support@digitalia-solutions.com" className="text-primary hover:underline">support@digitalia-solutions.com</a>.
          Nous nous engageons a repondre dans un delai de 30 jours.
        </p>
      </Section>

      <Section n={13} title="Base legale">
        <ul className="list-inside list-disc space-y-1">
          <li><strong>Execution du contrat de travail</strong> pour les donnees liees a la gestion des employes via l&apos;application</li>
          <li><strong>Interet legitime</strong> pour l&apos;analyse de frequentation du site et l&apos;amelioration de nos services</li>
          <li><strong>Consentement</strong> pour l&apos;envoi de newsletters et l&apos;utilisation de donnees biometriques</li>
        </ul>
      </Section>

      <Section n={14} title="Donnees des mineurs">
        <p>Cette application n&apos;est pas destinee aux enfants et est reservee aux employes autorises.</p>
      </Section>

      <Section n={15} title="Cookies">
        <p>
          Notre site peut utiliser des cookies essentiels au fonctionnement et des cookies analytiques pour mesurer la frequentation. Vous pouvez configurer votre navigateur pour refuser les cookies ou etre alerte lors de leur envoi.
        </p>
      </Section>

      <Section n={16} title="Modifications de cette politique">
        <p>
          Nous nous reservons le droit de modifier cette politique de confidentialite a tout moment. Toute modification sera publiee sur cette page avec une date de mise a jour actualisee.
        </p>
      </Section>

      <Section n={17} title="Contact">
        <p>Pour toute question relative a cette politique de confidentialite :</p>
        <ul className="mt-3 list-inside list-disc space-y-1">
          <li>Email : <a href="mailto:support@digitalia-solutions.com" className="text-primary hover:underline">support@digitalia-solutions.com</a></li>
          <li>Telephone : +212 661-255458</li>
          <li>Adresse : Zenith II Lotissement Attaoufik, Casablanca, Maroc</li>
        </ul>
      </Section>
    </div>
  );
}

/* ── Reusable section wrapper ── */
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
