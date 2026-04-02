import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Terms of Use for the Digitalia website and mobile application. Read our general terms and conditions for using our services.",
};

export default function TermsPage() {
  return (
    <>
      {/* Header */}
      <header className="border-b border-azureish-white bg-white">
        <div className="mx-auto flex max-w-[83rem] items-center justify-between px-5 py-4 md:px-[3.75rem]">
          <Link href="/">
            <Image
              src="/logos/DIGITALIA-DARK.svg"
              alt="Digitalia"
              width={100}
              height={28}
              className="h-16 w-auto"
            />
          </Link>
          <Link
            href="/"
            className="rounded-pill bg-primary px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary-dark"
          >
            Back to Home
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-[83rem] px-5 py-16 md:px-[3.75rem] md:py-24">
        {/* Title */}
        <h1 className="font-instrument text-4xl font-bold text-eerie-black md:text-5xl">
          Terms of <span className="italic text-primary">Use</span>
        </h1>
        <p className="mt-4 text-sm text-independence">
          Last updated: April 2, 2026
        </p>

        <div className="mt-12 space-y-10 text-[0.938rem] leading-relaxed text-independence">
          {/* 1 */}
          <section>
            <h2 className="mb-3 font-instrument text-xl font-semibold text-eerie-black">
              1. Purpose
            </h2>
            <p>
              These Terms of Use govern access to and use of the website{" "}
              <strong>digitalia.agency</strong>, the associated mobile
              application, and the services provided by{" "}
              <strong>Digitalia Solutions</strong>, a digital agency based in
              Casablanca, Morocco.
            </p>
            <p className="mt-2">
              By accessing our services, you unconditionally accept these Terms
              of Use. If you do not agree to these terms, please do not use our
              services.
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2 className="mb-3 font-instrument text-xl font-semibold text-eerie-black">
              2. Publisher
            </h2>
            <ul className="list-inside list-disc space-y-1">
              <li>Company: Digitalia Solutions</li>
              <li>Registered office: Casablanca, Morocco</li>
              <li>
                Email:{" "}
                <a
                  href="mailto:support@digitalia-solutions.com"
                  className="text-primary hover:underline"
                >
                  support@digitalia-solutions.com
                </a>
              </li>
              <li>Phone: +212 661-255458</li>
            </ul>
          </section>

          {/* 3 */}
          <section>
            <h2 className="mb-3 font-instrument text-xl font-semibold text-eerie-black">
              3. Services Offered
            </h2>
            <p>
              Digitalia Solutions provides custom software development,
              artificial intelligence solutions, cloud services, data analytics,
              and digital transformation consulting. The website presents these
              services and allows visitors to contact us.
            </p>
            <p className="mt-2">
              The mobile application is an internal tool exclusively reserved
              for employees of Digitalia Solutions, designed for time
              management, task tracking, internal communications, and
              operational support.
            </p>
          </section>

          {/* 4 */}
          <section>
            <h2 className="mb-3 font-instrument text-xl font-semibold text-eerie-black">
              4. Access to Services
            </h2>
            <p>
              The website is freely accessible to any user with an Internet
              connection. Digitalia Solutions reserves the right to suspend,
              limit, or interrupt access to the site at any time for
              maintenance, updates, or any other reason, without prior notice or
              compensation.
            </p>
            <p className="mt-2">
              Access to the mobile application requires authentication and is
              strictly reserved for authorized employees.
            </p>
          </section>

          {/* 5 */}
          <section>
            <h2 className="mb-3 font-instrument text-xl font-semibold text-eerie-black">
              5. Intellectual Property
            </h2>
            <p>
              All content on the website and mobile application — including
              text, images, logos, graphics, icons, source code, and software —
              is the exclusive property of Digitalia Solutions or its partners
              and is protected by Moroccan and international intellectual
              property laws.
            </p>
            <p className="mt-2">
              Any reproduction, representation, modification, distribution, or
              exploitation, in whole or in part, of this content without prior
              written authorization is strictly prohibited and constitutes
              infringement.
            </p>
          </section>

          {/* 6 */}
          <section>
            <h2 className="mb-3 font-instrument text-xl font-semibold text-eerie-black">
              6. User Obligations
            </h2>
            <p className="mb-3">The user agrees to:</p>
            <ul className="list-inside list-disc space-y-1">
              <li>
                Use the website and application in accordance with their
                intended purpose and these Terms of Use
              </li>
              <li>
                Not attempt unauthorized access to the systems or data of
                Digitalia Solutions
              </li>
              <li>
                Not distribute unlawful, defamatory, abusive, or
                rights-infringing content through the contact form or any other
                means
              </li>
              <li>
                Provide accurate and up-to-date information when using the
                contact form
              </li>
              <li>
                (For employees) Comply with Digitalia Solutions&apos; internal IT
                policy when using the mobile application
              </li>
            </ul>
          </section>

          {/* 7 */}
          <section>
            <h2 className="mb-3 font-instrument text-xl font-semibold text-eerie-black">
              7. Limitation of Liability
            </h2>
            <p>
              Digitalia Solutions strives to ensure the accuracy and currency of
              information published on the site. However, we cannot guarantee
              the accuracy, completeness, or timeliness of all information made
              available.
            </p>
            <p className="mt-2">
              Digitalia Solutions disclaims all liability in the event of:
            </p>
            <ul className="mt-2 list-inside list-disc space-y-1">
              <li>
                Direct or indirect damages resulting from the use or inability
                to use the site or application
              </li>
              <li>
                Temporary or permanent interruption of services for technical
                reasons
              </li>
              <li>
                Third-party intrusion, computer viruses, or any breach of
                system security despite the protective measures in place
              </li>
              <li>
                Content of third-party websites accessible via hyperlinks on
                the site
              </li>
            </ul>
          </section>

          {/* 8 */}
          <section>
            <h2 className="mb-3 font-instrument text-xl font-semibold text-eerie-black">
              8. External Links
            </h2>
            <p>
              The site may contain links to third-party websites. Digitalia
              Solutions exercises no control over these sites and disclaims all
              responsibility for their content, privacy practices, or
              availability.
            </p>
          </section>

          {/* 9 */}
          <section>
            <h2 className="mb-3 font-instrument text-xl font-semibold text-eerie-black">
              9. Personal Data Protection
            </h2>
            <p>
              The collection and processing of personal data are governed by
              our{" "}
              <Link
                href="/privacy-policy"
                className="text-primary hover:underline"
              >
                Privacy Policy
              </Link>
              , which forms an integral part of these Terms of Use.
            </p>
          </section>

          {/* 10 */}
          <section>
            <h2 className="mb-3 font-instrument text-xl font-semibold text-eerie-black">
              10. Governing Law and Jurisdiction
            </h2>
            <p>
              These Terms of Use are governed by Moroccan law. Any dispute
              relating to the interpretation or execution of these terms shall
              be subject to the exclusive jurisdiction of the courts of
              Casablanca, Morocco.
            </p>
          </section>

          {/* 11 */}
          <section>
            <h2 className="mb-3 font-instrument text-xl font-semibold text-eerie-black">
              11. Changes to These Terms
            </h2>
            <p>
              Digitalia Solutions reserves the right to modify these Terms of
              Use at any time. Changes take effect upon publication on this
              page. Continued use of the services after modification constitutes
              acceptance of the new terms.
            </p>
          </section>

          {/* 12 */}
          <section>
            <h2 className="mb-3 font-instrument text-xl font-semibold text-eerie-black">
              12. Contact
            </h2>
            <p>
              For any questions regarding these Terms of Use, you may contact
              us:
            </p>
            <ul className="mt-3 list-inside list-disc space-y-1">
              <li>
                Email:{" "}
                <a
                  href="mailto:support@digitalia-solutions.com"
                  className="text-primary hover:underline"
                >
                  support@digitalia-solutions.com
                </a>
              </li>
              <li>Phone: +212 661-255458</li>
              <li>Address: Casablanca, Morocco</li>
            </ul>
          </section>
        </div>
      </main>

      {/* Simple footer */}
      <footer className="border-t border-azureish-white bg-alice-blue py-6">
        <div className="mx-auto max-w-[83rem] px-5 text-center text-xs text-eerie-black/60 md:px-[3.75rem]">
          &copy; 2026 Copyright -{" "}
          <Link href="/" className="text-eerie-black hover:text-primary">
            Digitalia
          </Link>{" "}
          |{" "}
          <Link
            href="/terms"
            className="font-medium text-primary"
          >
            Terms of Use
          </Link>{" "}
          |{" "}
          <Link
            href="/privacy-policy"
            className="text-eerie-black hover:text-primary"
          >
            Privacy Policy
          </Link>
        </div>
      </footer>
    </>
  );
}
