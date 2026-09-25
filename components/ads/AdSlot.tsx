"use client";

import { useEffect } from "react";
import { cn } from "@/lib/utils";

declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

type AdSlotProps = {
  slot: string;
  format?: "auto" | "fluid" | "rectangle";
  className?: string;
  label?: string;
};

export function AdSlot({
  slot,
  format = "auto",
  className,
  label = "Advertisement",
}: AdSlotProps) {
  const client = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;

  useEffect(() => {
    if (!client) return;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {
      // ad block or load failure — ignore
    }
  }, [client]);

  if (!client) {
    return (
      <div
        className={cn(
          "flex h-[120px] items-center justify-center rounded-xl border border-dashed border-gray-300 bg-gray-50",
          className
        )}
      >
        <span className="text-xs text-gray-400">Ad slot · {slot}</span>
      </div>
    );
  }

  const adFormat = format === "rectangle" ? "rectangle" : format === "fluid" ? "fluid" : "auto";

  return (
    <div className={cn("flex flex-col items-center gap-1", className)}>
      <span className="text-[10px] uppercase tracking-wide text-gray-400">
        {label}
      </span>
      <ins
        className="adsbygoogle block w-full"
        data-ad-client={client}
        data-ad-slot={slot}
        data-ad-format={adFormat}
        data-full-width-responsive="true"
      />
    </div>
  );
}