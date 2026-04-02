import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for the Digitalia mobile application and website. Learn how Digitalia Solutions collects, uses, and protects your personal data.",
};

export default function PrivacyPolicyPage() {
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
          Privacy <span className="italic text-primary">Policy</span>
        </h1>
        <p className="mt-2 text-[0.938rem] text-independence">
          Digitalia Mobile Application
        </p>
        <p className="mt-4 text-sm text-independence">
          Last updated: April 2, 2026
        </p>

        <div className="mt-12 space-y-10 text-[0.938rem] leading-relaxed text-independence">
          {/* 1 */}
          <section>
            <h2 className="mb-3 font-instrument text-xl font-semibold text-eerie-black">
              1. Introduction
            </h2>
            <p>
              This Privacy Policy describes how Digitalia Solutions collects,
              uses, and protects personal data in connection with the use of its
              mobile application and website.
            </p>
            <p className="mt-2">
              The mobile application is intended exclusively for internal use by
              employees of Digitalia Solutions for managing work time, tasks,
              and professional communication.{" "}
              <strong>It is not intended for the general public.</strong>
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2 className="mb-3 font-instrument text-xl font-semibold text-eerie-black">
              2. Publisher Identity
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
              3. Scope
            </h2>
            <p className="mb-3">This policy applies to:</p>
            <ul className="list-inside list-disc space-y-1">
              <li>The Digitalia mobile application (iOS and Android)</li>
              <li>Associated internal services</li>
              <li>
                The website{" "}
                <strong>digitalia.agency</strong>
              </li>
            </ul>
            <p className="mt-3">
              When used through an employee account, the employer may be
              considered the data controller, and Digitalia Solutions acts as
              the technical service provider (data processor).
            </p>
          </section>

          {/* 4 */}
          <section>
            <h2 className="mb-3 font-instrument text-xl font-semibold text-eerie-black">
              4. Data Collected
            </h2>
            <p className="mb-3">
              We may collect the following categories of data:
            </p>

            <h3 className="mb-2 font-instrument text-base font-semibold text-eerie-black">
              Personal Data
            </h3>
            <ul className="mb-4 list-inside list-disc space-y-1">
              <li>First and last name</li>
              <li>Professional email address</li>
              <li>Employee identifier</li>
            </ul>

            <h3 className="mb-2 font-instrument text-base font-semibold text-eerie-black">
              Professional Data
            </h3>
            <ul className="mb-4 list-inside list-disc space-y-1">
              <li>Working hours (clock-in/out, activities)</li>
              <li>Tasks, tickets, and assignments</li>
              <li>Internal communications (messages, notifications)</li>
            </ul>

            <h3 className="mb-2 font-instrument text-base font-semibold text-eerie-black">
              Technical Data
            </h3>
            <ul className="mb-4 list-inside list-disc space-y-1">
              <li>IP address</li>
              <li>Device type and operating system</li>
              <li>Application usage data</li>
              <li>Diagnostic data (logs, crash reports)</li>
            </ul>

            <h3 className="mb-2 font-instrument text-base font-semibold text-eerie-black">
              Notification Data
            </h3>
            <ul className="list-inside list-disc space-y-1">
              <li>Push notification identifiers</li>
              <li>Notification interactions</li>
            </ul>
          </section>

          {/* 5 */}
          <section>
            <h2 className="mb-3 font-instrument text-xl font-semibold text-eerie-black">
              5. How Data Is Collected
            </h2>
            <p className="mb-3">Data is collected:</p>
            <ul className="list-inside list-disc space-y-1">
              <li>Directly from the user</li>
              <li>
                Through company administrators or internal systems
              </li>
              <li>Automatically during use of the application</li>
            </ul>
          </section>

          {/* 6 */}
          <section>
            <h2 className="mb-3 font-instrument text-xl font-semibold text-eerie-black">
              6. Purposes of Processing
            </h2>
            <p className="mb-3">Data is used to:</p>
            <ul className="list-inside list-disc space-y-1">
              <li>Authenticate users</li>
              <li>Manage working time and activities</li>
              <li>Enable internal communication</li>
              <li>Send notifications and reminders</li>
              <li>Ensure the security of the application</li>
              <li>Improve performance and user experience</li>
            </ul>
          </section>

          {/* 7 */}
          <section>
            <h2 className="mb-3 font-instrument text-xl font-semibold text-eerie-black">
              7. App Features and Permissions
            </h2>
            <p className="mb-3">The application may use:</p>
            <ul className="list-inside list-disc space-y-1">
              <li>
                Push notifications (reminders, messages, validations)
              </li>
              <li>Technical device data</li>
            </ul>
            <p className="mt-3">
              No location or biometric data is collected or used unless
              explicitly stated otherwise.
            </p>
          </section>

          {/* 8 */}
          <section>
            <h2 className="mb-3 font-instrument text-xl font-semibold text-eerie-black">
              8. Data Sharing
            </h2>
            <p className="mb-3">
              Your personal data is never sold or used for commercial purposes.
              It may be shared with:
            </p>
            <ul className="list-inside list-disc space-y-1">
              <li>
                Technical service providers (hosting, infrastructure)
              </li>
              <li>
                Services required for the operation of the application, under
                confidentiality agreements
              </li>
              <li>Legal authorities if required by law</li>
            </ul>
          </section>

          {/* 9 */}
          <section>
            <h2 className="mb-3 font-instrument text-xl font-semibold text-eerie-black">
              9. International Data Transfers
            </h2>
            <p>
              Some of our technical service providers (cloud hosting, push
              notification services) may process data outside of Morocco. In
              such cases, we ensure that appropriate safeguards are in place,
              including contractual clauses and compliance with applicable data
              protection regulations.
            </p>
          </section>

          {/* 10 */}
          <section>
            <h2 className="mb-3 font-instrument text-xl font-semibold text-eerie-black">
              10. Data Retention
            </h2>
            <p className="mb-3">Data is retained:</p>
            <ul className="list-inside list-disc space-y-1">
              <li>
                <strong>Employee data (application):</strong> for the duration
                of the employment contract, plus up to 12 months after
                termination for legal and operational obligations
              </li>
              <li>
                <strong>Technical and diagnostic data:</strong> up to 13 months
                maximum
              </li>
              <li>
                <strong>Contact form data (website):</strong> for the time
                necessary to process your inquiry, then deleted within 12 months
              </li>
            </ul>
            <p className="mt-3">
              Data may be deleted or anonymized when retention is no longer
              necessary.
            </p>
          </section>

          {/* 11 */}
          <section>
            <h2 className="mb-3 font-instrument text-xl font-semibold text-eerie-black">
              11. Data Security
            </h2>
            <p className="mb-3">
              We implement appropriate security measures, including:
            </p>
            <ul className="list-inside list-disc space-y-1">
              <li>Encryption of data in transit (HTTPS/TLS)</li>
              <li>Access restricted to authorized personnel only</li>
              <li>Secure authentication systems</li>
              <li>Regular system backups</li>
            </ul>
          </section>

          {/* 12 */}
          <section>
            <h2 className="mb-3 font-instrument text-xl font-semibold text-eerie-black">
              12. User Rights
            </h2>
            <p className="mb-3">
              In accordance with Moroccan Law No. 09-08 on the protection of
              personal data and the General Data Protection Regulation (GDPR),
              you have the following rights:
            </p>
            <ul className="list-inside list-disc space-y-1">
              <li>
                <strong>Right of access:</strong> obtain a copy of your personal
                data
              </li>
              <li>
                <strong>Right to rectification:</strong> correct inaccurate or
                incomplete data
              </li>
              <li>
                <strong>Right to erasure:</strong> request deletion of your
                data, subject to legal obligations
              </li>
              <li>
                <strong>Right to object:</strong> object to the processing of
                your data in certain circumstances
              </li>
              <li>
                <strong>Right to data portability:</strong> receive your data in
                a structured, machine-readable format
              </li>
            </ul>
            <p className="mt-3">
              Requests should be sent to your employer or to our support team.
              We commit to responding within 30 days.
            </p>
          </section>

          {/* 13 */}
          <section>
            <h2 className="mb-3 font-instrument text-xl font-semibold text-eerie-black">
              13. Legal Basis
            </h2>
            <p className="mb-3">Data processing is based on:</p>
            <ul className="list-inside list-disc space-y-1">
              <li>
                <strong>Performance of the employment contract</strong> for
                employee-related data processed through the application
              </li>
              <li>
                <strong>Legitimate interest</strong> of the company for
                application security, analytics, and service improvement
              </li>
              <li>
                <strong>Consent</strong> for push notifications and any optional
                features
              </li>
            </ul>
          </section>

          {/* 14 */}
          <section>
            <h2 className="mb-3 font-instrument text-xl font-semibold text-eerie-black">
              14. Children&apos;s Data
            </h2>
            <p>
              This application is not intended for children. It is strictly
              reserved for authorized employees of Digitalia Solutions.
            </p>
          </section>

          {/* 15 */}
          <section>
            <h2 className="mb-3 font-instrument text-xl font-semibold text-eerie-black">
              15. Changes to This Policy
            </h2>
            <p>
              This policy may be updated at any time. Any changes will be
              published on this page with an updated effective date. We
              encourage you to review this page regularly.
            </p>
          </section>

          {/* 16 */}
          <section>
            <h2 className="mb-3 font-instrument text-xl font-semibold text-eerie-black">
              16. Contact
            </h2>
            <p>
              For any questions regarding this Privacy Policy or the processing
              of your data:
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
            className="text-eerie-black hover:text-primary"
          >
            Terms of Use
          </Link>{" "}
          |{" "}
          <Link
            href="/privacy-policy"
            className="font-medium text-primary"
          >
            Privacy Policy
          </Link>
        </div>
      </footer>
    </>
  );
}
