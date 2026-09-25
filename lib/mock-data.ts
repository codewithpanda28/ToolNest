import type { Business, LeaderboardItem, Tool } from "@/types";

export const mockBusinesses: Business[] = [
  {
    id: "b1",
    name: "TechCorp Solutions",
    slug: "techcorp-solutions",
    logo: "🏢",
    category: "SaaS",
    description: "Enterprise software solutions.",
    website: "https://example.com/techcorp-solutions",
    amount: 5000,
  },
  {
    id: "b2",
    name: "DesignHub Studio",
    slug: "designhub-studio",
    logo: "🎨",
    category: "Design",
    description: "Creative design studio.",
    website: "https://example.com/designhub-studio",
    amount: 3200,
  },
  {
    id: "b3",
    name: "CodeCraft Labs",
    slug: "codecraft-labs",
    logo: "💻",
    category: "Dev Agency",
    description: "Custom software development.",
    website: "https://example.com/codecraft-labs",
    amount: 2100,
  },
  {
    id: "b4",
    name: "PixelWorks India",
    slug: "pixelworks-india",
    logo: "🖼️",
    category: "Design",
    description: "Branding and illustrations.",
    website: "https://example.com/pixelworks-india",
    amount: 1500,
  },
  {
    id: "b5",
    name: "DataMinds Analytics",
    slug: "dataminds-analytics",
    logo: "📊",
    category: "Data",
    description: "Data analytics consulting.",
    website: "https://example.com/dataminds-analytics",
    amount: 1200,
  },
  {
    id: "b6",
    name: "CloudNine Hosting",
    slug: "cloudnine-hosting",
    logo: "☁️",
    category: "Hosting",
    description: "Reliable cloud hosting.",
    website: "https://example.com/cloudnine-hosting",
    amount: 1000,
  },
  {
    id: "b7",
    name: "SwiftShip Logistics",
    slug: "swiftship-logistics",
    logo: "🚚",
    category: "Logistics",
    description: "Fast delivery services.",
    website: "https://example.com/swiftship-logistics",
    amount: 800,
  },
  {
    id: "b8",
    name: "GreenLeaf Organics",
    slug: "greenleaf-organics",
    logo: "🌿",
    category: "E-commerce",
    description: "Organic products store.",
    website: "https://example.com/greenleaf-organics",
    amount: 600,
  },
  {
    id: "b9",
    name: "FinEdge Capital",
    slug: "finedge-capital",
    logo: "💰",
    category: "Fintech",
    description: "Investment advisory.",
    website: "https://example.com/finedge-capital",
    amount: 500,
  },
  {
    id: "b10",
    name: "BrightByte Media",
    slug: "brightbyte-media",
    logo: "📣",
    category: "Marketing",
    description: "Digital marketing agency.",
    website: "https://example.com/brightbyte-media",
    amount: 400,
  },
];

export const mockTools: Tool[] = [
  {
    id: "t1",
    name: "InvoicePro",
    slug: "invoicepro",
    logo: "🧾",
    category: "Invoicing",
    description: "Generate invoices in seconds.",
    website: "https://example.com/invoicepro",
    amount: 2000,
    pricing: "paid",
  },
  {
    id: "t2",
    name: "SEOSpy",
    slug: "seospy",
    logo: "🔍",
    category: "SEO",
    description: "Track and improve rankings.",
    website: "https://example.com/seospy",
    amount: 1800,
    pricing: "freemium",
  },
  {
    id: "t3",
    name: "ClipMaster",
    slug: "clipmaster",
    logo: "🎬",
    category: "Video",
    description: "Edit and export videos fast.",
    website: "https://example.com/clipmaster",
    amount: 1500,
    pricing: "paid",
  },
  {
    id: "t4",
    name: "MailBlast",
    slug: "mailblast",
    logo: "📧",
    category: "Email",
    description: "Email campaigns made simple.",
    website: "https://example.com/mailblast",
    amount: 1200,
    pricing: "freemium",
  },
  {
    id: "t5",
    name: "TaskFlow",
    slug: "taskflow",
    logo: "✅",
    category: "Project mgmt",
    description: "Organize projects and tasks.",
    website: "https://example.com/taskflow",
    amount: 1000,
    pricing: "freemium",
  },
  {
    id: "t6",
    name: "ImageCompress Pro",
    slug: "imagecompress-pro",
    logo: "🗜️",
    category: "Utility",
    description: "Compress images without losing quality.",
    website: "https://example.com/imagecompress-pro",
    amount: 900,
    pricing: "free",
  },
  {
    id: "t7",
    name: "PDF Wizard",
    slug: "pdf-wizard",
    logo: "📄",
    category: "Utility",
    description: "Merge, split and edit PDFs.",
    website: "https://example.com/pdf-wizard",
    amount: 700,
    pricing: "freemium",
  },
  {
    id: "t8",
    name: "LeadHunter",
    slug: "leadhunter",
    logo: "🎯",
    category: "Sales",
    description: "Find and qualify leads.",
    website: "https://example.com/leadhunter",
    amount: 600,
    pricing: "paid",
  },
  {
    id: "t9",
    name: "ContentAI",
    slug: "contentai",
    logo: "✍️",
    category: "Writing",
    description: "AI-powered content writer.",
    website: "https://example.com/contentai",
    amount: 500,
    pricing: "paid",
  },
  {
    id: "t10",
    name: "BackupNinja",
    slug: "backupninja",
    logo: "🥷",
    category: "Utility",
    description: "Automatic data backups.",
    website: "https://example.com/backupninja",
    amount: 400,
    pricing: "paid",
  },
];

export function getTopBusinesses(limit = 5): Business[] {
  return mockBusinesses.slice(0, limit);
}

export function getTopTools(limit = 5): Tool[] {
  return mockTools.slice(0, limit);
}

export function toBusinessLeaderboard(
  businesses: Business[]
): LeaderboardItem[] {
  return businesses.map((business, index) => ({
    rank: index + 1,
    id: business.id,
    name: business.name,
    slug: business.slug,
    logo: business.logo,
    category: business.category,
    amount: business.amount,
    type: "business",
    website: business.website,
  }));
}

export function toToolLeaderboard(tools: Tool[]): LeaderboardItem[] {
  return tools.map((tool, index) => ({
    rank: index + 1,
    id: tool.id,
    name: tool.name,
    slug: tool.slug,
    logo: tool.logo,
    category: tool.category,
    amount: tool.amount,
    type: "tool",
    website: tool.website,
  }));
}

export function getBusinessBySlug(slug: string): Business | undefined {
  return mockBusinesses.find((b) => b.slug === slug);
}

export function getToolBySlug(slug: string): Tool | undefined {
  return mockTools.find((t) => t.slug === slug);
}

export function getBusinessRank(business: Business): number {
  const sorted = [...mockBusinesses].sort((a, b) => b.amount - a.amount);
  return sorted.findIndex((b) => b.id === business.id) + 1;
}

export function getToolRank(tool: Tool): number {
  const sorted = [...mockTools].sort((a, b) => b.amount - a.amount);
  return sorted.findIndex((t) => t.id === tool.id) + 1;
}