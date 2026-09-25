import type { Metadata } from "next";
import Link from "next/link";
import { Clock, Mail, MapPin } from "lucide-react";
import { LegalLayout } from "@/components/legal/LegalLayout";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: {
    absolute: "Contact Us — ToolNest",
  },
  description:
    "Reach out to ToolNest for support, business inquiries, or feedback. Email: support@toolnest.in",
};

const CONTACT_INFO = [
  {
    icon: Mail,
    label: "Email",
    value: "support@toolnest.in",
    href: "mailto:support@toolnest.in",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "Mumbai, Maharashtra, India",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon–Fri, 10 AM – 6 PM IST",
  },
];

export default function ContactPage() {
  return (
    <LegalLayout
      title="Get in Touch"
      badge="Contact"
      subtitle="We usually respond within 24 hours."
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {CONTACT_INFO.map((info) => {
          const Icon = info.icon;
          const content = (
            <div className="flex flex-col items-center rounded-xl border border-gray-200 bg-white p-6 text-center">
              <Icon className="size-6 text-indigo-600" />
              <p className="mt-3 text-sm font-medium text-gray-900">
                {info.label}
              </p>
              {info.href ? (
                <a
                  href={info.href}
                  className="mt-1 text-sm text-gray-600 hover:text-indigo-600"
                >
                  {info.value}
                </a>
              ) : (
                <p className="mt-1 text-sm text-gray-600">{info.value}</p>
              )}
            </div>
          );
          return <div key={info.label}>{content}</div>;
        })}
      </div>

      <div className="mt-10">
        <h2 className="mb-4 text-xl font-bold text-gray-900 md:text-2xl">
          Send us a message
        </h2>
        <ContactForm />
      </div>

      <p className="mt-8 text-center text-sm text-gray-600">
        Common questions? Check our{" "}
        <Link
          href="/faq"
          className="font-medium text-indigo-600 transition-colors duration-200 hover:text-indigo-700"
        >
          FAQ →
        </Link>
      </p>
    </LegalLayout>
  );
}