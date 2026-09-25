import Link from "next/link";

type LegalLayoutProps = {
  title: string;
  badge: string;
  subtitle?: string;
  lastUpdated?: string;
  children: React.ReactNode;
};

export function LegalLayout({
  title,
  badge,
  subtitle,
  lastUpdated,
  children,
}: LegalLayoutProps) {
  return (
    <>
      <section className="bg-gradient-to-b from-indigo-50 to-white py-12 md:py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <span className="inline-flex items-center rounded-full border border-gray-200 bg-white px-4 py-1.5 text-sm font-medium text-gray-700 shadow-sm">
            {badge}
          </span>
          <h1 className="mt-4 text-3xl font-bold text-gray-900 md:text-5xl">
            {title}
          </h1>
          {subtitle ? (
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">{subtitle}</p>
          ) : null}
          {lastUpdated ? (
            <p className="mt-3 text-xs text-gray-500">
              Last updated: {lastUpdated}
            </p>
          ) : null}
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-3xl px-4">{children}</div>
        <div className="mx-auto mt-12 max-w-3xl border-t border-gray-200 px-4 pt-8 text-center">
          <p className="text-sm text-gray-600">
            Have questions?{" "}
            <Link
              href="/contact"
              className="font-medium text-indigo-600 transition-colors duration-200 hover:text-indigo-700"
            >
              Contact us →
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}