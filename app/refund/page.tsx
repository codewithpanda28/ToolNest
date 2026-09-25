import type { Metadata } from "next";
import { LegalLayout } from "@/components/legal/LegalLayout";

export const metadata: Metadata = {
  title: {
    absolute: "Refund Policy — ToolNest",
  },
  description:
    "Understand ToolNest's refund policy for paid listings, featured placements, and leaderboard bids.",
  alternates: { canonical: "/refund" },
};

export default function RefundPage() {
  return (
    <LegalLayout
      title="Refund Policy"
      badge="Legal"
      lastUpdated="September 25, 2025"
    >
      <section className="mb-8">
        <h2 className="mb-3 mt-6 text-xl font-bold text-gray-900 md:text-2xl">
          Overview
        </h2>
        <p className="mb-3 leading-relaxed text-gray-700">
          ToolNest provides digital services, including free listings, featured
          placements, and weekly leaderboard bids. Because these services are
          delivered digitally and begin as soon as a payment is confirmed, they
          are generally non-refundable. This policy explains the limited
          circumstances in which a refund may be provided.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 mt-6 text-xl font-bold text-gray-900 md:text-2xl">
          Eligible Refunds
        </h2>
        <p className="mb-3 leading-relaxed text-gray-700">
          You may be eligible for a refund in the following cases:
        </p>
        <ul className="mb-3 list-disc space-y-2 pl-6 text-gray-700">
          <li>
            A technical failure on our side prevented your listing or
            placement from going live.
          </li>
          <li>You were charged twice for the same purchase (duplicate payment).</li>
          <li>
            You requested a refund within 24 hours of payment and your listing
            had not yet been activated.
          </li>
        </ul>
        <p className="mb-3 leading-relaxed text-gray-700">
          To request a refund, email{" "}
          <a
            href="mailto:support@toolnest.in"
            className="text-indigo-600 hover:underline"
          >
            support@toolnest.in
          </a>{" "}
          with your order details and the reason for your request.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 mt-6 text-xl font-bold text-gray-900 md:text-2xl">
          Non-Refundable Cases
        </h2>
        <p className="mb-3 leading-relaxed text-gray-700">
          Refunds are not provided in the following cases:
        </p>
        <ul className="mb-3 list-disc space-y-2 pl-6 text-gray-700">
          <li>Change of mind after purchase.</li>
          <li>After a listing has been activated and is live on the site.</li>
          <li>After a leaderboard bid has placed your listing in a ranked slot.</li>
          <li>After partial use of a featured period (for example, midway through the week).</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 mt-6 text-xl font-bold text-gray-900 md:text-2xl">
          Process
        </h2>
        <ol className="mb-3 list-decimal space-y-2 pl-6 text-gray-700">
          <li>Email{" "}
            <a
              href="mailto:support@toolnest.in"
              className="text-indigo-600 hover:underline"
            >
              support@toolnest.in
            </a>{" "}
            with your order ID and payment details.
          </li>
          <li>We review your request and respond within 5–7 business days.</li>
          <li>
            If approved, the refund is issued to the original payment method
            within 7–10 business days.
          </li>
        </ol>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 mt-6 text-xl font-bold text-gray-900 md:text-2xl">
          Cancellations
        </h2>
        <p className="mb-3 leading-relaxed text-gray-700">
          You may cancel a featured listing at any time. Cancellation takes
          effect immediately, and no refund is provided for any portion of the
          period already used. Future renewals will not be charged.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 mt-6 text-xl font-bold text-gray-900 md:text-2xl">
          Contact
        </h2>
        <p className="mb-3 leading-relaxed text-gray-700">
          For any refund-related questions, contact us at{" "}
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