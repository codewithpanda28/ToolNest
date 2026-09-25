import type { Metadata } from "next";
import { LegalLayout } from "@/components/legal/LegalLayout";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqSchema } from "@/lib/seo/structured-data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: {
    absolute: "FAQ — ToolNest",
  },
  description:
    "Frequently asked questions about ToolNest, including listings, leaderboards, payments, and accounts.",
  alternates: { canonical: "/faq" },
};

const FAQ_GROUPS = [
  {
    title: "General",
    items: [
      {
        q: "What is ToolNest?",
        a: "ToolNest is a directory website where users discover and compare businesses and tools across India. Listings are ranked on a weekly leaderboard, and users can submit their own business or tool to get discovered.",
      },
      {
        q: "Is it free to use?",
        a: "Yes. Browsing the directory, viewing rankings, and using the site is completely free. Paid options are only for featured placements and leaderboard bids if you want extra visibility.",
      },
      {
        q: "How do I list my business/tool?",
        a: "Visit the Submit page, choose whether you're listing a business or a tool, fill in your details, and hit Submit. Once approved, your listing goes live on the directory.",
      },
      {
        q: "How long does approval take?",
        a: "Most listings are reviewed within 24 hours. You'll get an update by email once your submission has been reviewed and approved.",
      },
    ],
  },
  {
    title: "Leaderboard & Payments",
    items: [
      {
        q: "How does the leaderboard work?",
        a: "The leaderboard ranks businesses and tools by the amount bid for each slot for the current week. Higher bids place you higher, and the board resets every Monday.",
      },
      {
        q: "When does the leaderboard reset?",
        a: "The leaderboard resets every Monday at 12 AM IST. Fresh rankings are then calculated for the new week based on that week's bids.",
      },
      {
        q: "What happens if I'm outbid?",
        a: "If another user bids more than you, they take the higher slot for that week. Your listing remains in the directory, and your bid applies to the following week's reset.",
      },
      {
        q: "Can I cancel my featured listing?",
        a: "Yes. You can cancel a featured listing at any time. Cancellation is immediate, and no refund is given for the portion of the period already used. See our Refund Policy for details.",
      },
      {
        q: "Do you offer refunds?",
        a: "Refunds are available only in limited cases, such as a technical failure on our side or a duplicate charge. Please read our Refund Policy for the full details.",
      },
    ],
  },
  {
    title: "Account",
    items: [
      {
        q: "Do I need an account to submit?",
        a: "No account is required to submit a listing today. You only need to provide a contact name and email so we can reach you about your submission.",
      },
      {
        q: "Can I edit my listing later?",
        a: "Yes. Contact us with your listing details and the changes you'd like to make, and our team will update the listing for you.",
      },
      {
        q: "How do I delete my listing?",
        a: "Email support@toolnest.in with your listing name and the email used at submission, and we'll remove the listing from the directory.",
      },
    ],
  },
];

export default function FAQPage() {
  const faqs = FAQ_GROUPS.flatMap((group) => group.items).map((item) => ({
    question: item.q,
    answer: item.a,
  }));

  return (
    <>
      <JsonLd data={faqSchema(faqs)} />
      <LegalLayout
        title="Frequently Asked Questions"
        badge="Support"
        subtitle="Answers to the questions we hear most often."
      >
      {FAQ_GROUPS.map((group) => (
        <section key={group.title} className="mb-8">
          <h2 className="mb-3 mt-6 text-xl font-bold text-gray-900 md:text-2xl">
            {group.title}
          </h2>
          <Accordion>
            {group.items.map((item) => (
              <AccordionItem key={item.q} value={item.q}>
                <AccordionTrigger className="py-3 text-base font-medium">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="leading-relaxed text-gray-700">{item.a}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
      ))}
      </LegalLayout>
    </>
  );
}