import type { Metadata } from "next";
import { SignupForm } from "@/components/auth/SignupForm";

export const metadata: Metadata = {
  title: {
    absolute: "Create Account — ToolNest",
  },
  description: "Create your free ToolNest account.",
};

export default function SignupPage() {
  return (
    <section className="bg-gradient-to-b from-indigo-50 to-white py-16">
      <div className="mx-auto max-w-md px-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">Create an account</h1>
          <p className="mt-2 text-gray-600">
            Join ToolNest and manage your listings
          </p>
        </div>
        <div className="mt-8">
          <SignupForm />
        </div>
      </div>
    </section>
  );
}