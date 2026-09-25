import type { Metadata } from "next";
import { LegalLayout } from "@/components/legal/LegalLayout";

export const metadata: Metadata = {
  title: {
    absolute: "Terms of Service — ToolNest",
  },
  description:
    "The Terms of Service governing use of ToolNest, including listings, paid placements, leaderboards, and user content.",
};

export default function TermsPage() {
  return (
    <LegalLayout
      title="Terms of Service"
      badge="Legal"
      lastUpdated="September 25, 2025"
    >
      <section className="mb-8">
        <h2 className="mb-3 mt-6 text-xl font-bold text-gray-900 md:text-2xl">
          Agreement to Terms
        </h2>
        <p className="mb-3 leading-relaxed text-gray-700">
          These Terms of Service (&quot;Terms&quot;) govern your access to and
          use of ToolNest, including the directory, leaderboards, listings, and
          any related features. By accessing or using ToolNest, you agree to be
          bound by these Terms. If you do not agree with any part of these
          Terms, please do not use the website.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 mt-6 text-xl font-bold text-gray-900 md:text-2xl">
          Use License
        </h2>
        <p className="mb-3 leading-relaxed text-gray-700">
          We grant you a limited, revocable, non-exclusive license to use
          ToolNest for personal and business purposes, subject to these Terms.
        </p>
        <p className="mb-3 leading-relaxed text-gray-700">
          You may not, without our prior written permission:
        </p>
        <ul className="mb-3 list-disc space-y-2 pl-6 text-gray-700">
          <li>Modify, copy, or create derivative works from the site.</li>
          <li>Reverse engineer or attempt to extract the source code.</li>
          <li>Remove or alter any copyright or trademark notices.</li>
          <li>Use the site for any commercial purpose not permitted here.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 mt-6 text-xl font-bold text-gray-900 md:text-2xl">
          User Content
        </h2>
        <p className="mb-3 leading-relaxed text-gray-700">
          When you submit a business or tool listing, you retain ownership of
          the content you provide. By submitting content, you grant ToolNest a
          non-exclusive, worldwide, royalty-free license to host, display,
          reproduce, and promote that content on the website and in marketing
          materials.
        </p>
        <p className="mb-3 leading-relaxed text-gray-700">
          You are solely responsible for the accuracy, legality, and quality of
          the content you submit. We may remove or reject any listing that
          violates these Terms or applicable law, at our discretion.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 mt-6 text-xl font-bold text-gray-900 md:text-2xl">
          Paid Listings &amp; Leaderboard
        </h2>
        <ul className="mb-3 list-disc space-y-2 pl-6 text-gray-700">
          <li>
            Featured listings and leaderboard placements are paid services.
            Payments are non-refundable except as described in our{" "}
            <a href="/refund" className="text-indigo-600 hover:underline">
              Refund Policy
            </a>
            .
          </li>
          <li>
            The leaderboard resets weekly, as described on the site. Rankings
            are determined by the amount bid for each slot.
          </li>
          <li>
            We do not guarantee any specific amount of traffic, sales, or
            results from a paid placement.
          </li>
          <li>
            We may adjust leaderboard rules or pricing with reasonable notice.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 mt-6 text-xl font-bold text-gray-900 md:text-2xl">
          Prohibited Uses
        </h2>
        <p className="mb-3 leading-relaxed text-gray-700">
          You agree not to use ToolNest to:
        </p>
        <ul className="mb-3 list-disc space-y-2 pl-6 text-gray-700">
          <li>Post illegal, fraudulent, or misleading content.</li>
          <li>Send spam, junk, or unsolicited messages.</li>
          <li>Scrape, harvest, or bulk-download site content.</li>
          <li>Attempt to disrupt, hack, or damage the website.</li>
          <li>Impersonate another person or entity.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 mt-6 text-xl font-bold text-gray-900 md:text-2xl">
          Third-Party Links
        </h2>
        <p className="mb-3 leading-relaxed text-gray-700">
          ToolNest may contain links to third-party websites that are not owned
          or controlled by us. We are not responsible for the content, privacy
          policies, or practices of any third-party sites. Your use of such
          sites is at your own risk.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 mt-6 text-xl font-bold text-gray-900 md:text-2xl">
          Disclaimer
        </h2>
        <p className="mb-3 leading-relaxed text-gray-700">
          ToolNest is provided on an &quot;as is&quot; and &quot;as
          available&quot; basis. We make no warranties, express or implied,
          regarding the accuracy, completeness, or reliability of the
          information on the site, including listings, rankings, and prices.
          Your use of the site is at your sole risk.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 mt-6 text-xl font-bold text-gray-900 md:text-2xl">
          Limitation of Liability
        </h2>
        <p className="mb-3 leading-relaxed text-gray-700">
          To the maximum extent permitted by law, ToolNest, its owners,
          employees, and partners shall not be liable for any indirect,
          incidental, special, consequential, or punitive damages, or any loss
          of profits or revenues, whether incurred directly or indirectly, in
          connection with your use of the website.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 mt-6 text-xl font-bold text-gray-900 md:text-2xl">
          Indemnification
        </h2>
        <p className="mb-3 leading-relaxed text-gray-700">
          You agree to indemnify and hold harmless ToolNest and its affiliates
          from any claims, losses, liabilities, damages, or expenses, including
          reasonable legal fees, arising out of your use of the site, your
          content, or your violation of these Terms.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 mt-6 text-xl font-bold text-gray-900 md:text-2xl">
          Governing Law
        </h2>
        <p className="mb-3 leading-relaxed text-gray-700">
          These Terms are governed by and construed in accordance with the laws
          of India. Any disputes arising under these Terms shall be subject to
          the exclusive jurisdiction of the courts of Mumbai, Maharashtra.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 mt-6 text-xl font-bold text-gray-900 md:text-2xl">
          Changes to Terms
        </h2>
        <p className="mb-3 leading-relaxed text-gray-700">
          We may revise these Terms at any time. Updated Terms will be posted
          on this page, and continued use of the site after changes constitutes
          acceptance of the revised Terms.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 mt-6 text-xl font-bold text-gray-900 md:text-2xl">
          Contact
        </h2>
        <p className="mb-3 leading-relaxed text-gray-700">
          Questions about these Terms? Contact us at{" "}
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