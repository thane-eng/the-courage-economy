export const SITE = {
  name: "The Courage Economy",
  tagline: "A field guide for leaders building organizations where truth is the default",
  title: "The Courage Economy",
  subtitle:
    "How comfortable lies are bankrupting your organization — and how to build one that runs on truth.",
  sequence: "Two public tools. Then the book. Then the work.",
};

export const LINKS = {
  diagnostic: "https://diagnostic.bellomoleadership.com",
  inventory: "https://diagnostic.bellomoleadership.com/inventory.html",
  substack: "https://thane.substack.com",
  youtube: "https://www.youtube.com/@thanebellomo",
  linkedin: "https://www.linkedin.com/in/thanebellomo/",
  amazon: "https://www.amazon.com/dp/B0H9Y56TPG",
  contact: "https://thanebellomo.com/contact/",
  calendly: "https://calendly.com/thanebellomo",
} as const;

export const NAV = [
  { href: "#idea", label: "The idea" },
  { href: "#map", label: "The map" },
  { href: "#tools", label: "Tools" },
  { href: "#notes", label: "Field notes" },
  { href: "#book", label: "The book" },
  { href: "#work", label: "The work" },
] as const;

export const ELEMENTS = [
  {
    num: "01",
    name: "Important Work",
    role: "The Foundation",
    line: "When the work truly matters, lies become intolerable.",
    angle: -90,
  },
  {
    num: "02",
    name: "Curiosity",
    role: "The Lubricant",
    line: "Real questions. Not theater. Tell me more.",
    angle: -18,
  },
  {
    num: "03",
    name: "Challenge",
    role: "The Crucible",
    line: "Protected, expected dissent — especially on what counts.",
    angle: 54,
  },
  {
    num: "04",
    name: "Trust",
    role: "The Revelation",
    line: "Revealed under pressure. Not declared on the wall.",
    angle: 126,
  },
  {
    num: "05",
    name: "Community",
    role: "The Bond",
    line: "Forged in shared struggle. Not in off-sites.",
    angle: 198,
  },
] as const;

export const TOOLS = [
  {
    kicker: "The place",
    name: "Courage Economy Diagnostic",
    body: "35 questions. 15–20 minutes. Where this organization actually stands across the five elements — and what the gaps are costing.",
    href: LINKS.diagnostic,
    cta: "Start the diagnostic",
    stats: [
      { value: "35", label: "questions" },
      { value: "15–20", label: "minutes" },
      { value: "5", label: "elements" },
    ],
  },
  {
    kicker: "Yourself",
    name: "Lie Economy Inventory",
    body: "37 statements. Answer how it actually is, not how you have described it. Then give it to your people and compare.",
    href: LINKS.inventory,
    cta: "Take the inventory",
    stats: [
      { value: "37", label: "statements" },
      { value: "You", label: "first" },
      { value: "Then", label: "your people" },
    ],
  },
] as const;
