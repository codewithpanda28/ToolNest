import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PixelSwap from "@/components/reactbits/PixelSwap";

export function CTASection() {
  return (
    <section className="bg-indigo-600 py-16 md:py-20">
      <div className="mx-auto max-w-4xl px-4">
        <PixelSwap
          aspectRatio="16 / 6"
          pixelSize={48}
          gap={4}
          pattern="center"
          pixelRadius={12}
          pixelSpin={8}
          pixelScale={0.3}
          duration={1200}
          pixelDuration={400}
          trigger="click"
          fade
          randomness={0.3}
          className="rounded-2xl"
          firstContent={
            <div className="flex h-full w-full flex-col items-center justify-center gap-2 px-4 py-4 text-center text-white md:gap-4 md:py-6">
              <h2 className="text-xl font-bold leading-tight md:text-4xl">
                List Your Business or Tool
              </h2>
              <p className="text-sm text-indigo-100 md:text-base">
                Get discovered by thousands of users.
              </p>
              <button
                type="button"
                className="mt-1 inline-flex items-center rounded-lg bg-white px-6 py-2.5 text-sm font-semibold text-indigo-600 transition-colors duration-200 hover:bg-gray-100 md:mt-2 md:px-8 md:py-3 md:text-base"
              >
                Click to Reveal →
              </button>
            </div>
          }
          secondContent={
            <div className="flex h-full w-full flex-col items-center justify-center gap-2 px-4 py-4 text-center text-white md:gap-4 md:py-6">
              <h2 className="text-xl font-bold leading-tight md:text-4xl">
                Ready to Rank #1?
              </h2>
              <p className="text-sm text-indigo-100 md:text-base">
                Claim your spot on the leaderboard starting ₹100/week
              </p>
              <Link
                href="/submit"
                className="mt-1 inline-flex items-center rounded-lg bg-white px-6 py-2.5 text-sm font-semibold text-indigo-600 transition-colors duration-200 hover:bg-gray-100 md:mt-2 md:px-8 md:py-3 md:text-base"
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          }
        />
        <p className="mt-4 text-center text-xs text-indigo-200">
          Powered by ToolNest
        </p>
      </div>
    </section>
  );
}