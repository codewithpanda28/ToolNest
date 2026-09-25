export type Business = {
  id: string;
  name: string;
  slug: string;
  logo: string;
  category: string;
  description: string;
  website: string;
  amount: number;
};

export type Tool = {
  id: string;
  name: string;
  slug: string;
  logo: string;
  category: string;
  description: string;
  website: string;
  amount: number;
  pricing: "free" | "freemium" | "paid";
};

export type LeaderboardItem = {
  rank: number;
  id: string;
  name: string;
  slug: string;
  logo: string;
  category: string;
  amount: number;
  type: "business" | "tool";
  website: string;
};

export type SubmissionType = "business" | "tool";

export type SubmissionPayload = {
  type: SubmissionType;
  name: string;
  slug: string;
  category: string;
  description: string;
  website: string;
  email: string;
  contactName: string;
  plan: "free" | "starter" | "growth" | "pro";
  pricing?: "free" | "freemium" | "paid";
  amount?: number;
  acceptTerms: boolean;
};

export type SubmissionResponse = {
  success: boolean;
  message: string;
  id?: string;
};

export type BlogCategory =
  | "Freelancing"
  | "Business"
  | "Tools"
  | "Automation"
  | "Finance";

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: BlogCategory;
  author: string;
  publishedAt: string;
  updatedAt?: string;
  readingTime: number;
  tags: string[];
  coverEmoji: string;
  featured?: boolean;
};