import Link from "next/link";
import { requireAdmin } from "@/lib/auth/requireAdmin";
import { cn } from "@/lib/utils";

const NAV = [
  { href: "/admin", label: "Dashboard" },
  { href: "/admin/submissions", label: "Submissions" },
  { href: "/admin/contacts", label: "Contacts" },
  { href: "/admin/businesses", label: "Businesses", future: true },
  { href: "/admin/tools", label: "Tools", future: true },
];

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  await requireAdmin();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-6 md:flex-row">
        <aside className="shrink-0 md:w-52">
          <nav className="flex gap-2 overflow-x-auto md:flex-col">
            {NAV.map((item) =>
              item.future ? (
                <span
                  key={item.href}
                  className="whitespace-nowrap rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-400"
                >
                  {item.label} <span className="text-xs">(soon)</span>
                </span>
              ) : (
                <AdminLink key={item.href} href={item.href} label={item.label} />
              )
            )}
          </nav>
        </aside>
        <div className="min-w-0 flex-1">{children}</div>
      </div>
    </div>
  );
}

function AdminLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className={cn(
        "whitespace-nowrap rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors duration-200 hover:border-indigo-300 hover:text-indigo-600"
      )}
    >
      {label}
    </Link>
  );
}