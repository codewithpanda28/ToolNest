import { z } from "zod";

export const submissionSchema = z.object({
  type: z.enum(["business", "tool"]),
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(80, "Name must be at most 80 characters"),
  slug: z
    .string()
    .min(2, "Slug must be at least 2 characters")
    .max(80, "Slug must be at most 80 characters")
    .regex(
      /^[a-z0-9-]+$/,
      "Only lowercase letters, numbers, dashes"
    ),
  category: z.string().min(1, "Select a category"),
  description: z
    .string()
    .min(20, "Write at least 20 characters")
    .max(500, "Keep it under 500 characters"),
  website: z.string().url("Enter a valid URL (https://...)"),
  email: z.string().email("Enter a valid email"),
  contactName: z
    .string()
    .min(2, "Your name please")
    .max(60, "Name too long"),
  plan: z.enum(["free", "starter", "growth", "pro"]),
  pricing: z.enum(["free", "freemium", "paid"]).optional(),
  amount: z.number().int().min(0).max(1000000).optional(),
  acceptTerms: z.boolean().refine((value) => value === true, {
    message: "You must accept terms",
  }),
});

export type SubmissionFormValues = z.infer<typeof submissionSchema>;

export const BUSINESS_CATEGORIES = [
  "SaaS",
  "Design",
  "Dev Agency",
  "Data",
  "Hosting",
  "Logistics",
  "E-commerce",
  "Fintech",
  "Marketing",
  "Other",
];

export const TOOL_CATEGORIES = [
  "Invoicing",
  "SEO",
  "Video",
  "Email",
  "Project mgmt",
  "Utility",
  "Sales",
  "Writing",
  "Other",
];

export const PLANS = [
  {
    value: "free",
    label: "Free",
    description: "Basic listing, bottom of directory",
    price: "₹0",
  },
  {
    value: "starter",
    label: "Starter",
    description: "Featured for 1 week",
    price: "₹499/week",
  },
  {
    value: "growth",
    label: "Growth",
    description: "Featured + priority ranking",
    price: "₹1,499/week",
  },
  {
    value: "pro",
    label: "Pro",
    description: "Top 3 leaderboard slot",
    price: "₹2,999/week",
  },
] as const;