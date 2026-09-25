import type { Metadata } from "next";
import { LegalLayout } from "@/components/legal/LegalLayout";

export const metadata: Metadata = {
  title: {
    absolute: "Disclaimer — ToolNest",
  },
  description:
    "Read the disclaimer governing information, external links, and results shown on ToolNest.",
};

export default function DisclaimerPage() {
  return (
    <LegalLayout
      title="Disclaimer"
      badge="Legal"
      lastUpdated="September 25, 2025"
    >
      <section className="mb-8">
        <h2 className="mb-3 mt-6 text-xl font-bold text-gray-900 md:text-2xl">
          Website Disclaimer
        </h2>
        <p className="mb-3 leading-relaxed text-gray-700">
          The information provided on ToolNest is for general informational
          purposes only. While we work hard to keep the information on this
          site accurate and up to date, we make no representations or
          warranties of any kind, express or implied, about the completeness,
          accuracy, reliability, suitability, or availability of the
          information, products, or services shown on the site.
        </p>
        <p className="mb-3 leading-relaxed text-gray-700">
          Any reliance you place on such information is strictly at your own
          risk. We will not be liable for any losses or damages arising from
          the use of this website.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 mt-6 text-xl font-bold text-gray-900 md:text-2xl">
          External Links Disclaimer
        </h2>
        <p className="mb-3 leading-relaxed text-gray-700">
          ToolNest may contain links to external websites that are not provided
          or maintained by us. We do not control the content or accuracy of
          these third-party sites and are not responsible for any content,
          products, or services available on them. The inclusion of any link
          does not imply endorsement.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 mt-6 text-xl font-bold text-gray-900 md:text-2xl">
          Professional Disclaimer
        </h2>
        <p className="mb-3 leading-relaxed text-gray-700">
          Content on ToolNest, including descriptions, rankings, and pricing,
          is provided for general information and should not be treated as
          professional, financial, legal, or business advice. Before making any
          decision based on information from this site, you should consult a
          qualified professional.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 mt-6 text-xl font-bold text-gray-900 md:text-2xl">
          Earnings Disclaimer
        </h2>
        <p className="mb-3 leading-relaxed text-gray-700">
          Listing on ToolNest or purchasing a featured placement does not
          guarantee any specific amount of traffic, sales, leads, or earnings.
          Results depend on many factors outside our control, including your
          own efforts and market conditions.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 mt-6 text-xl font-bold text-gray-900 md:text-2xl">
          Testimonials Disclaimer
        </h2>
        <p className="mb-3 leading-relaxed text-gray-700">
          Any testimonials or success stories displayed on ToolNest reflect
          individual experiences and are not a guarantee of similar results for
          you. Individual outcomes vary.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 mt-6 text-xl font-bold text-gray-900 md:text-2xl">
          Contact
        </h2>
        <p className="mb-3 leading-relaxed text-gray-700">
          If you have any questions about this disclaimer, contact us at{" "}
          <a
            href="mailto:support@toolnest.in"
            className="text-indigo-600 hover:underline"
          >
            support@toolnest.in
          </a>
          .
        </p>
      </section>
    </LegalLayout>
  );
}