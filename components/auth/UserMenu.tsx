"use client";

import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { ChevronDown } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export function UserMenu() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div className="h-9 w-16 animate-pulse rounded-lg bg-gray-100" />;
  }

  if (!session?.user) {
    return (
      <Link href="/login" className={buttonVariants({ variant: "ghost" })}>
        Login
      </Link>
    );
  }

  const name = session.user.name ?? "User";
  const initial = name.charAt(0).toUpperCase();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 transition-colors duration-200 outline-none hover:border-indigo-300 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50">
        <Avatar className="size-7">
          <AvatarFallback className="bg-indigo-100 text-xs text-indigo-700">
            {initial}
          </AvatarFallback>
        </Avatar>
        <span className="hidden max-w-28 truncate sm:block">{name}</span>
        <ChevronDown className="size-3.5 text-gray-400" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-52">
        <DropdownMenuLabel>{session.user.email}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem render={<Link href="/dashboard" />}>
          Dashboard
        </DropdownMenuItem>
        <DropdownMenuItem render={<Link href="/submit" />}>
          Submit Listing
        </DropdownMenuItem>
        {session.user.role === "admin" && (
          <>
            <DropdownMenuSeparator />
            <DropdownMenuItem render={<Link href="/admin" />}>
              Admin
            </DropdownMenuItem>
          </>
        )}
        <DropdownMenuSeparator />
        <DropdownMenuItem
          render={
            <button
              type="button"
              onClick={() => signOut({ callbackUrl: "/" })}
              className="w-full text-left"
            />
          }
        >
          Sign out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}