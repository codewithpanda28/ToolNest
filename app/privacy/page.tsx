import type { Metadata } from "next";
import { LegalLayout } from "@/components/legal/LegalLayout";

export const metadata: Metadata = {
  title: {
    absolute: "Privacy Policy — ToolNest",
  },
  description:
    "Learn how ToolNest collects, uses, and protects your data. Our Privacy Policy covers cookies, AdSense, GDPR, and user rights.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      badge="Legal"
      lastUpdated="September 25, 2025"
    >
      <section className="mb-8">
        <h2 className="mb-3 mt-6 text-xl font-bold text-gray-900 md:text-2xl">
          Introduction
        </h2>
        <p className="mb-3 leading-relaxed text-gray-700">
          Welcome to ToolNest (&quot;we&quot;, &quot;our&quot;, or
          &quot;us&quot;). We operate the website accessible at
          toolnest.in and related services. This Privacy Policy explains what
          information we collect when you use ToolNest, how we use and protect
          that information, and the choices you have about your data.
        </p>
        <p className="mb-3 leading-relaxed text-gray-700">
          By accessing or using ToolNest, you agree to the collection and use of
          information in accordance with this policy. If you do not agree,
          please do not use the website.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 mt-6 text-xl font-bold text-gray-900 md:text-2xl">
          Information We Collect
        </h2>
        <p className="mb-3 leading-relaxed text-gray-700">
          We collect information in a few different ways, depending on how you
          interact with ToolNest:
        </p>
        <ul className="mb-3 list-disc space-y-2 pl-6 text-gray-700">
          <li>
            <strong className="font-semibold text-gray-900">
              Information you provide
            </strong>{" "}
            — when you submit a business or tool listing, contact us, or
            otherwise fill in a form, we collect details such as your name,
            email address, and the content you submit (for example, business
            name, website, and description).
          </li>
          <li>
            <strong className="font-semibold text-gray-900">
              Automatically collected information
            </strong>{" "}
            — when you visit ToolNest, we may automatically record certain
            information, including your IP address, browser type, device type,
            operating system, pages you visit, and the time and date of your
            visit.
          </li>
          <li>
            <strong className="font-semibold text-gray-900">
              Cookies and similar technologies
            </strong>{" "}
            — we use cookies and similar technologies to remember your
            preferences and understand how visitors use the site. Cookies are
            small text files stored on your device.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 mt-6 text-xl font-bold text-gray-900 md:text-2xl">
          How We Use Your Information
        </h2>
        <p className="mb-3 leading-relaxed text-gray-700">
          We use the information we collect for the following purposes:
        </p>
        <ul className="mb-3 list-disc space-y-2 pl-6 text-gray-700">
          <li>To operate, maintain, and improve ToolNest.</li>
          <li>To process and display the listings you submit.</li>
          <li>To respond to your questions, feedback, and support requests.</li>
          <li>To send you occasional updates, if you have opted in.</li>
          <li>To prevent fraud, abuse, and security incidents.</li>
          <li>To comply with applicable laws and regulations.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 mt-6 text-xl font-bold text-gray-900 md:text-2xl">
          Cookies and Web Beacons
        </h2>
        <p className="mb-3 leading-relaxed text-gray-700">
          Cookies help ToolNest work properly and help us understand how the
          site is used. For example, cookies may remember your preferences or
          keep you signed in. Most browsers allow you to control cookies
          through their settings — you can block or delete cookies at any time,
          though some features of the site may not work correctly without them.
        </p>
        <p className="mb-3 leading-relaxed text-gray-700">
          Third-party service providers, such as advertising and analytics
          partners, may also place cookies on your device when you visit our
          site. These cookies are governed by the privacy policies of those
          third parties.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 mt-6 text-xl font-bold text-gray-900 md:text-2xl">
          Google AdSense and DoubleClick DART Cookie
        </h2>
        <p className="mb-3 leading-relaxed text-gray-700">
          Google, as a third-party vendor, uses cookies to serve ads on
          ToolNest.
        </p>
        <p className="mb-3 leading-relaxed text-gray-700">
          Google&apos;s use of the DART cookie enables it to serve ads to our
          users based on their visit to ToolNest and other sites on the
          Internet.
        </p>
        <p className="mb-3 leading-relaxed text-gray-700">
          Users may opt out of the use of the DART cookie by visiting the
          Google Ad and Content Network Privacy Policy at{" "}
          <a
            href="https://policies.google.com/technologies/ads"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:underline"
          >
            https://policies.google.com/technologies/ads
          </a>
          .
        </p>
        <p className="mb-3 leading-relaxed text-gray-700">
          Third-party vendors and ad networks may also serve ads on our site.
          These vendors may use cookies to serve ads based on a user&apos;s
          prior visits to ToolNest or other websites.
        </p>
        <p className="mb-3 leading-relaxed text-gray-700">
          Users may opt out of some third-party vendor&apos;s use of cookies
          for personalized advertising by visiting{" "}
          <a
            href="https://www.aboutads.info"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:underline"
          >
            https://www.aboutads.info
          </a>
          .
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 mt-6 text-xl font-bold text-gray-900 md:text-2xl">
          Third-Party Privacy Policies
        </h2>
        <p className="mb-3 leading-relaxed text-gray-700">
          This Privacy Policy does not apply to other advertisers or websites.
          We encourage you to consult the respective privacy policies of these
          third-party ad servers for more detailed information, including their
          practices and instructions about how to opt out of certain options.
        </p>
        <p className="mb-3 leading-relaxed text-gray-700">
          You can learn more about Google&apos;s privacy practices at{" "}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:underline"
          >
            https://policies.google.com/privacy
          </a>
          . We do not control third-party advertisers and are not responsible
          for their practices.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 mt-6 text-xl font-bold text-gray-900 md:text-2xl">
          Your Data Protection Rights (GDPR &amp; DPDP)
        </h2>
        <p className="mb-3 leading-relaxed text-gray-700">
          Depending on your location, you may have the following rights under
          applicable law, including the EU General Data Protection Regulation
          (GDPR) and the Indian Digital Personal Data Protection Act (DPDP):
        </p>
        <ul className="mb-3 list-disc space-y-2 pl-6 text-gray-700">
          <li>The right to access the personal data we hold about you.</li>
          <li>The right to request rectification of inaccurate data.</li>
          <li>The right to request erasure of your personal data.</li>
          <li>The right to restrict or object to certain processing.</li>
          <li>The right to data portability.</li>
          <li>The right to withdraw consent at any time.</li>
        </ul>
        <p className="mb-3 leading-relaxed text-gray-700">
          To exercise any of these rights, please contact us at{" "}
          <a
            href="mailto:support@toolnest.in"
            className="text-indigo-600 hover:underline"
          >
            support@toolnest.in
          </a>
          . We will respond within a reasonable timeframe and in accordance
          with applicable law.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 mt-6 text-xl font-bold text-gray-900 md:text-2xl">
          Children&apos;s Information
        </h2>
        <p className="mb-3 leading-relaxed text-gray-700">
          ToolNest is not directed at children under the age of 13, and we do
          not knowingly collect personal information from children under 13. If
          you are a parent or guardian and believe your child has provided us
          with personal information, please contact us so that we can delete
          it.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 mt-6 text-xl font-bold text-gray-900 md:text-2xl">
          Changes to This Privacy Policy
        </h2>
        <p className="mb-3 leading-relaxed text-gray-700">
          We may update this Privacy Policy from time to time. Any changes will
          be posted on this page with an updated &quot;Last updated&quot; date.
          We encourage you to review this policy periodically to stay informed
          about how we protect your information.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 mt-6 text-xl font-bold text-gray-900 md:text-2xl">
          Contact Us
        </h2>
        <p className="mb-3 leading-relaxed text-gray-700">
          If you have any questions about this Privacy Policy, please contact
          us at:
        </p>
        <p className="mb-3 leading-relaxed text-gray-700">
          Email:{" "}
          <a
            href="mailto:support@toolnest.in"
            className="text-indigo-600 hover:underline"
          >
            support@toolnest.in
          </a>
          <br />
          Address: Mumbai, Maharashtra, India
        </p>
      </section>
    </LegalLayout>
  );
}