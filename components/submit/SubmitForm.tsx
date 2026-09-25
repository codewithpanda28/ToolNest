"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { Loader2 } from "lucide-react";
import {
  BUSINESS_CATEGORIES,
  PLANS,
  TOOL_CATEGORIES,
  submissionSchema,
  type SubmissionFormValues,
} from "@/lib/validations/submission";
import { cn, slugify } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import { SuccessState } from "./SuccessState";
import type { SubmissionResponse } from "@/types";

const PRICING_OPTIONS = ["free", "freemium", "paid"] as const;

export function SubmitForm() {
  const [submitted, setSubmitted] = useState<SubmissionResponse | null>(null);
  const [apiError, setApiError] = useState<string | null>(null);

  const defaultValues: SubmissionFormValues = {
    type: "business",
    name: "",
    slug: "",
    category: "",
    description: "",
    website: "",
    email: "",
    contactName: "",
    plan: "free",
    pricing: "freemium",
    amount: 0,
    acceptTerms: false,
  };

  const {
    register,
    handleSubmit,
    control,
    watch,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<SubmissionFormValues>({
    resolver: zodResolver(submissionSchema),
    defaultValues,
  });

  const type = watch("type");
  const plan = watch("plan");
  const slug = watch("slug");
  const description = watch("description");
  const categories = type === "business" ? BUSINESS_CATEGORIES : TOOL_CATEGORIES;

  async function onSubmit(values: SubmissionFormValues) {
    setApiError(null);
    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data: SubmissionResponse = await res.json();
      if (!res.ok) {
        setApiError(data.message || "Something went wrong. Please try again.");
        return;
      }
      setSubmitted(data);
    } catch {
      setApiError("Network error. Please try again.");
    }
  }

  if (submitted) {
    return (
      <SuccessState
        submissionId={submitted.id ?? ""}
        onSubmitAnother={() => {
          setSubmitted(null);
          setApiError(null);
          reset();
        }}
      />
    );
  }

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-10">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {apiError && (
          <div
            role="alert"
            className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
          >
            {apiError}
          </div>
        )}

        <Tabs
          value={type}
          onValueChange={(value) => {
            setValue("type", value as SubmissionFormValues["type"], {
              shouldValidate: true,
            });
            setValue("category", "", { shouldValidate: true });
          }}
        >
          <TabsList className="w-full">
            <TabsTrigger value="business" className="flex-1">
              🏢 Business
            </TabsTrigger>
            <TabsTrigger value="tool" className="flex-1">
              🛠️ Tool
            </TabsTrigger>
          </TabsList>
        </Tabs>

        <div>
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            placeholder="e.g. TechCorp Solutions"
            className="mt-1 h-11"
            aria-invalid={!!errors.name}
            {...register("name", {
              onBlur: (event) => {
                const current = watch("slug");
                if (!current) {
                  setValue("slug", slugify(event.target.value), {
                    shouldValidate: true,
                  });
                }
              },
            })}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="slug">Slug</Label>
          <Input
            id="slug"
            placeholder="techcorp-solutions"
            className="mt-1 h-11 lowercase"
            aria-invalid={!!errors.slug}
            {...register("slug")}
          />
          <p className="mt-1 text-xs text-gray-500">
            URL: /{type === "business" ? "business" : "tool"}/
            {slug || "your-slug"}
          </p>
          {errors.slug && (
            <p className="mt-1 text-sm text-red-600">{errors.slug.message}</p>
          )}
        </div>

        <div>
          <Label>Category</Label>
          <div className="relative mt-1">
            <select
              aria-label="Category"
              value={watch("category")}
              onChange={(event) =>
                setValue("category", event.target.value, {
                  shouldValidate: true,
                })
              }
              className={cn(
                "h-11 w-full appearance-none rounded-lg border border-input bg-transparent px-3 text-sm outline-none transition-colors focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50",
                !watch("category") && "text-gray-400"
              )}
            >
              <option value="" disabled>
                Select a category
              </option>
              {categories.map((cat) => (
                <option key={cat} value={cat} className="text-gray-900">
                  {cat}
                </option>
              ))}
            </select>
            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400">
              ▾
            </span>
          </div>
          {errors.category && (
            <p className="mt-1 text-sm text-red-600">
              {errors.category.message}
            </p>
          )}
        </div>

        <div>
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            rows={4}
            maxLength={500}
            className="mt-1"
            aria-invalid={!!errors.description}
            {...register("description")}
          />
          <p className="mt-1 flex justify-end text-xs text-gray-500">
            {description.length}/500
          </p>
          {errors.description && (
            <p className="mt-1 text-sm text-red-600">
              {errors.description.message}
            </p>
          )}
        </div>

        <div>
          <Label htmlFor="website">Website</Label>
          <Input
            id="website"
            type="url"
            placeholder="https://example.com"
            className="mt-1 h-11"
            aria-invalid={!!errors.website}
            {...register("website")}
          />
          {errors.website && (
            <p className="mt-1 text-sm text-red-600">{errors.website.message}</p>
          )}
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <Label htmlFor="contactName">Contact Name</Label>
            <Input
              id="contactName"
              placeholder="Your name"
              className="mt-1 h-11"
              aria-invalid={!!errors.contactName}
              {...register("contactName")}
            />
            {errors.contactName && (
              <p className="mt-1 text-sm text-red-600">
                {errors.contactName.message}
              </p>
            )}
          </div>
          <div>
            <Label htmlFor="email">Contact Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="mt-1 h-11"
              aria-invalid={!!errors.email}
              {...register("email")}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">
                {errors.email.message}
              </p>
            )}
          </div>
        </div>

        {type === "tool" && (
          <div>
            <Label>Pricing</Label>
            <RadioGroup
              value={watch("pricing") ?? "freemium"}
              onValueChange={(value) =>
                setValue(
                  "pricing",
                  value as SubmissionFormValues["pricing"],
                  { shouldValidate: true }
                )
              }
              className="mt-2 grid grid-cols-3 gap-3"
            >
              {PRICING_OPTIONS.map((option) => (
                <label
                  key={option}
                  className={cn(
                    "flex cursor-pointer items-center gap-2 rounded-lg border p-3 text-sm font-medium transition-colors duration-200",
                    watch("pricing") === option
                      ? "border-indigo-600 bg-indigo-50 text-indigo-700"
                      : "border-gray-200 text-gray-700 hover:border-indigo-300"
                  )}
                >
                  <RadioGroupItem value={option} />
                  {option.charAt(0).toUpperCase() + option.slice(1)}
                </label>
              ))}
            </RadioGroup>
            {errors.pricing && (
              <p className="mt-1 text-sm text-red-600">
                {errors.pricing.message}
              </p>
            )}
          </div>
        )}

        <div>
          <Label>Plan</Label>
          <RadioGroup
            value={plan}
            onValueChange={(value) =>
              setValue("plan", value as SubmissionFormValues["plan"], {
                shouldValidate: true,
              })
            }
            className="mt-2 grid grid-cols-1 gap-3 md:grid-cols-2"
          >
            {PLANS.map((p) => (
              <label
                key={p.value}
                className={cn(
                  "flex cursor-pointer items-start gap-3 rounded-lg border p-4 transition-colors duration-200",
                  plan === p.value
                    ? "border-indigo-600 bg-indigo-50"
                    : "border-gray-200 hover:border-indigo-300"
                )}
              >
                <RadioGroupItem value={p.value} className="mt-0.5" />
                <span className="flex-1">
                  <span className="flex items-center justify-between gap-2">
                    <span className="font-medium text-gray-900">{p.label}</span>
                    <span className="text-sm font-semibold text-indigo-600">
                      {p.price}
                    </span>
                  </span>
                  <span className="mt-1 block text-sm text-gray-600">
                    {p.description}
                  </span>
                </span>
              </label>
            ))}
          </RadioGroup>
        </div>

        {plan !== "free" && (
          <div>
            <Label htmlFor="amount">Bid Amount (₹/week)</Label>
            <Input
              id="amount"
              type="number"
              min={0}
              placeholder="500"
              className="mt-1 h-11"
              aria-invalid={!!errors.amount}
              {...register("amount", { valueAsNumber: true })}
            />
            {errors.amount && (
              <p className="mt-1 text-sm text-red-600">
                {errors.amount.message}
              </p>
            )}
          </div>
        )}

        <div>
          <label className="flex cursor-pointer items-start gap-3">
            <Checkbox
              checked={watch("acceptTerms")}
              onCheckedChange={(checked) =>
                setValue("acceptTerms", checked === true, {
                  shouldValidate: true,
                })
              }
              className="mt-0.5"
            />
            <span className="text-sm text-gray-600">
              I agree to the{" "}
              <Link
                href="/terms"
                className="font-medium text-indigo-600 hover:underline"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy"
                className="font-medium text-indigo-600 hover:underline"
              >
                Privacy Policy
              </Link>
            </span>
          </label>
          {errors.acceptTerms && (
            <p className="mt-1 text-sm text-red-600">
              {errors.acceptTerms.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex h-11 w-full min-w-[140px] items-center justify-center rounded-lg bg-indigo-600 px-6 font-medium text-white transition-colors duration-200 hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 size-4 animate-spin" />
              Submitting...
            </>
          ) : (
            "Submit Listing"
          )}
        </button>
      </form>
    </div>
  );
}