import Link from "next/link";
import { Package } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { SITE_NAME } from "@/lib/constants";
import { MobileMenu } from "./MobileMenu";
import { NavLinks } from "./NavLinks";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Package className="size-6 text-indigo-600" />
          <span className="text-lg font-bold text-gray-900">{SITE_NAME}</span>
        </Link>

        <NavLinks className="hidden items-center gap-8 md:flex" />

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/login"
            className={buttonVariants({ variant: "ghost" })}
          >
            Login
          </Link>
          <Link
            href="/submit"
            className={buttonVariants({
              variant: "default",
              className: "bg-indigo-600 hover:bg-indigo-600/80",
            })}
          >
            Submit
          </Link>
        </div>

        <MobileMenu />
      </div>
    </header>
  );
}