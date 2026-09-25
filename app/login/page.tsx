import type { Metadata } from "next";
import { LoginForm } from "@/components/auth/LoginForm";

export const metadata: Metadata = {
  title: {
    absolute: "Sign In — ToolNest",
  },
  description: "Sign in to your ToolNest account to manage your listings.",
};

export default async function LoginPage({
  searchParams,
}: PageProps<"/login">) {
  const { signup } = await searchParams;

  return (
    <section className="bg-gradient-to-b from-indigo-50 to-white py-16">
      <div className="mx-auto max-w-md px-4">
        {signup === "success" && (
          <div className="mb-6 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
            Account created! Sign in to continue.
          </div>
        )}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">Welcome back</h1>
          <p className="mt-2 text-gray-600">
            Sign in to manage your listings
          </p>
        </div>
        <div className="mt-8">
          <LoginForm />
        </div>
      </div>
    </section>
  );
}