"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger
        render={
          <Button
            variant="ghost"
            size="icon"
            aria-label="Open menu"
            className="md:hidden"
          />
        }
      >
        <Menu />
      </SheetTrigger>
      <SheetContent side="right" className="w-72">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-1 px-4">
          {NAV_LINKS.map((link) => (
            <SheetClose
              key={link.href}
              render={
                <Link
                  href={link.href}
                  className={cn(
                    "rounded-md px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-muted hover:text-gray-900"
                  )}
                />
              }
            >
              {link.label}
            </SheetClose>
          ))}
        </div>
        <div className="mt-auto flex flex-col gap-2 p-4">
          <Link
            href="/login"
            className={buttonVariants({ variant: "ghost", className: "w-full" })}
          >
            Login
          </Link>
          <Link
            href="/submit"
            className={buttonVariants({
              variant: "default",
              className: "w-full bg-indigo-600 hover:bg-indigo-600/80",
            })}
          >
            Submit
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}