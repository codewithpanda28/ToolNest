import Link from "next/link";
import { Building2, Wrench } from "lucide-react";
import CursorGrid from "@/components/reactbits/CursorGrid";
import ScrollFloat from "@/components/reactbits/ScrollFloat";

export function Hero() {
  return (
    <section className="relative min-h-[600px] overflow-hidden md:min-h-[700px]">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-50 via-white to-white" />
      <div className="absolute inset-0">
        <CursorGrid
          cellSize={60}
          color="#6366f1"
          radius={180}
          falloff="smooth"
          lineWidth={1.5}
          maxOpacity={0.35}
          gridOpacity={0.04}
          clickPulse
          pulseSpeed={400}
        />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[600px] max-w-4xl flex-col items-center justify-center px-4 py-16 text-center md:min-h-[700px] md:py-24">
        <h1 className="sr-only">
          Discover Top Businesses & Tools in India
        </h1>

        <span className="inline-flex items-center rounded-full border border-gray-200 bg-white px-4 py-1.5 text-sm font-medium text-gray-700 shadow-sm">
          🇮🇳 India&apos;s #1 Business &amp; Tools Directory
        </span>

        <ScrollFloat
          containerClassName="!my-6 max-w-4xl"
          textClassName="!text-4xl md:!text-6xl lg:!text-7xl !font-bold !leading-tight bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
          animationDuration={0.8}
          stagger={0.02}
          scrollStart="top bottom"
          scrollEnd="bottom center"
          ease="back.out(1.5)"
        >
          Discover Top Businesses & Tools
        </ScrollFloat>

        <p className="mt-6 max-w-2xl text-lg text-gray-600">
          Find the best businesses and tools trusted by thousands of users
          across India
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/businesses"
            className="inline-flex items-center rounded-lg bg-indigo-600 px-6 py-3 font-medium text-white transition-colors duration-200 hover:bg-indigo-700"
          >
            <Building2 className="mr-2 h-5 w-5" />
            Browse Businesses
          </Link>
          <Link
            href="/tools"
            className="inline-flex items-center rounded-lg border-2 border-gray-300 px-6 py-3 font-medium text-gray-700 transition-colors duration-200 hover:border-indigo-600 hover:text-indigo-600"
          >
            <Wrench className="mr-2 h-5 w-5" />
            Browse Tools
          </Link>
        </div>
      </div>
    </section>
  );
}