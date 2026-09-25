export const SITE_NAME = "ToolNest";
export const SITE_TAGLINE = "Discover top businesses & tools in India";

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Businesses", href: "/businesses" },
  { label: "Tools", href: "/tools" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
] as const;

export const FOOTER_LINKS = {
  quickLinks: [
    { label: "Home", href: "/" },
    { label: "Businesses", href: "/businesses" },
    { label: "Tools", href: "/tools" },
    { label: "Blog", href: "/blog" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "FAQ", href: "/faq" },
    { label: "Submit", href: "/submit" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Refund Policy", href: "/refund" },
    { label: "Disclaimer", href: "/disclaimer" },
    { label: "FAQ", href: "/faq" },
  ],
} as const;