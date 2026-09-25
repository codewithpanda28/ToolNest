import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const businessSeeds = [
  {
    slug: "techcorp-solutions",
    name: "TechCorp Solutions",
    logo: "🏢",
    category: "SaaS",
    description: "Enterprise software solutions.",
    website: "https://example.com/techcorp-solutions",
    amount: 5000,
  },
  {
    slug: "designhub-studio",
    name: "DesignHub Studio",
    logo: "🎨",
    category: "Design",
    description: "Creative design studio.",
    website: "https://example.com/designhub-studio",
    amount: 3200,
  },
  {
    slug: "codecraft-labs",
    name: "CodeCraft Labs",
    logo: "💻",
    category: "Dev Agency",
    description: "Custom software development.",
    website: "https://example.com/codecraft-labs",
    amount: 2100,
  },
  {
    slug: "pixelworks-india",
    name: "PixelWorks India",
    logo: "🖼️",
    category: "Design",
    description: "Branding and illustrations.",
    website: "https://example.com/pixelworks-india",
    amount: 1500,
  },
  {
    slug: "dataminds-analytics",
    name: "DataMinds Analytics",
    logo: "📊",
    category: "Data",
    description: "Data analytics consulting.",
    website: "https://example.com/dataminds-analytics",
    amount: 1200,
  },
  {
    slug: "cloudnine-hosting",
    name: "CloudNine Hosting",
    logo: "☁️",
    category: "Hosting",
    description: "Reliable cloud hosting.",
    website: "https://example.com/cloudnine-hosting",
    amount: 1000,
  },
  {
    slug: "swiftship-logistics",
    name: "SwiftShip Logistics",
    logo: "🚚",
    category: "Logistics",
    description: "Fast delivery services.",
    website: "https://example.com/swiftship-logistics",
    amount: 800,
  },
  {
    slug: "greenleaf-organics",
    name: "GreenLeaf Organics",
    logo: "🌿",
    category: "E-commerce",
    description: "Organic products store.",
    website: "https://example.com/greenleaf-organics",
    amount: 600,
  },
  {
    slug: "finedge-capital",
    name: "FinEdge Capital",
    logo: "💰",
    category: "Fintech",
    description: "Investment advisory.",
    website: "https://example.com/finedge-capital",
    amount: 500,
  },
  {
    slug: "brightbyte-media",
    name: "BrightByte Media",
    logo: "📣",
    category: "Marketing",
    description: "Digital marketing agency.",
    website: "https://example.com/brightbyte-media",
    amount: 400,
  },
];

const toolSeeds = [
  {
    slug: "invoicepro",
    name: "InvoicePro",
    logo: "🧾",
    category: "Invoicing",
    description: "Generate invoices in seconds.",
    website: "https://example.com/invoicepro",
    amount: 2000,
    pricing: "paid",
  },
  {
    slug: "seospy",
    name: "SEOSpy",
    logo: "🔍",
    category: "SEO",
    description: "Track and improve rankings.",
    website: "https://example.com/seospy",
    amount: 1800,
    pricing: "freemium",
  },
  {
    slug: "clipmaster",
    name: "ClipMaster",
    logo: "🎬",
    category: "Video",
    description: "Edit and export videos fast.",
    website: "https://example.com/clipmaster",
    amount: 1500,
    pricing: "paid",
  },
  {
    slug: "mailblast",
    name: "MailBlast",
    logo: "📧",
    category: "Email",
    description: "Email campaigns made simple.",
    website: "https://example.com/mailblast",
    amount: 1200,
    pricing: "freemium",
  },
  {
    slug: "taskflow",
    name: "TaskFlow",
    logo: "✅",
    category: "Project mgmt",
    description: "Organize projects and tasks.",
    website: "https://example.com/taskflow",
    amount: 1000,
    pricing: "freemium",
  },
  {
    slug: "imagecompress-pro",
    name: "ImageCompress Pro",
    logo: "🗜️",
    category: "Utility",
    description: "Compress images without losing quality.",
    website: "https://example.com/imagecompress-pro",
    amount: 900,
    pricing: "free",
  },
  {
    slug: "pdf-wizard",
    name: "PDF Wizard",
    logo: "📄",
    category: "Utility",
    description: "Merge, split and edit PDFs.",
    website: "https://example.com/pdf-wizard",
    amount: 700,
    pricing: "freemium",
  },
  {
    slug: "leadhunter",
    name: "LeadHunter",
    logo: "🎯",
    category: "Sales",
    description: "Find and qualify leads.",
    website: "https://example.com/leadhunter",
    amount: 600,
    pricing: "paid",
  },
  {
    slug: "contentai",
    name: "ContentAI",
    logo: "✍️",
    category: "Writing",
    description: "AI-powered content writer.",
    website: "https://example.com/contentai",
    amount: 500,
    pricing: "paid",
  },
  {
    slug: "backupninja",
    name: "BackupNinja",
    logo: "🥷",
    category: "Utility",
    description: "Automatic data backups.",
    website: "https://example.com/backupninja",
    amount: 400,
    pricing: "paid",
  },
];

async function main() {
  await prisma.submission.deleteMany();
  await prisma.contactMessage.deleteMany();
  await prisma.payment.deleteMany();
  await prisma.tool.deleteMany();
  await prisma.business.deleteMany();

  const businesses = await prisma.business.createMany({ data: businessSeeds });
  const tools = await prisma.tool.createMany({ data: toolSeeds });

  console.log(`Seeded ${businesses.count} businesses, ${tools.count} tools`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });