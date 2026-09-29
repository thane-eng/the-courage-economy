export const SITE = {
  name: "The Courage Economy",
  url: "https://thecourageeconomy.net",
  tagline: "A field guide for leaders building organizations where truth is the default",
  title: "The Courage Economy",
  subtitle: "Why Companies Lie and How to Change Yours",
  fullTitle: "The Courage Economy: Why Companies Lie and How to Change Yours",
  sequence: "Two public tools. Then the book. Then the work.",
  author: "Thane Bellomo",
  org: "Bellomo Leadership LLC",
  releaseDate: "October 15, 2026",
  releaseIso: "2026-10-15",
  description:
    "The Courage Economy by Thane Bellomo is a field guide for leaders building organizations where truth is the default. Take the free diagnostic, pre-order the book, or start the work.",
};

export const LINKS = {
  diagnostic: "https://diagnostic.thecourageeconomy.net",
  inventory: "https://diagnostic.thecourageeconomy.net/inventory.html",
  substack: "https://thane.substack.com",
  youtube: "https://www.youtube.com/@thanebellomo",
  linkedin: "https://www.linkedin.com/in/thanebellomo/",
  amazon: "https://www.amazon.com/dp/B0H9Y56TPG",
  contact: "https://thanebellomo.com/contact/",
  calendly: "https://calendly.com/thanebellomo",
  nameSite: "https://thanebellomo.com",
} as const;

export const NAV = [
  { href: "/#idea", label: "The idea" },
  { href: "/elements", label: "The map" },
  { href: "/diagnostic", label: "Tools" },
  { href: "/book", label: "The book" },
  { href: "/work", label: "The work" },
  { href: "/about", label: "About" },
] as const;

export const ELEMENTS = [
  {
    num: "01",
    slug: "important-work",
    name: "Important Work",
    role: "The Foundation",
    line: "When the work truly matters, lies become intolerable.",
    missing:
      "People smile, nod, and protect themselves. Fake work multiplies because the cost of calling it fake is higher than the cost of performing it.",
    monday:
      "Kill one project everyone knows does not matter. Say why out loud. Watch what happens to the room.",
    angle: -90,
  },
  {
    num: "02",
    slug: "curiosity",
    name: "Curiosity",
    role: "The Lubricant",
    line: "Real questions. Not theater. Tell me more.",
    missing:
      "Questions become performances. Leaders ask to look open, then punish the answer. People learn to bring theater instead of information.",
    monday:
      "In the next meeting, ask one question you do not already know the answer to. Then stay quiet long enough for the real answer.",
    angle: -18,
  },
  {
    num: "03",
    slug: "challenge",
    name: "Challenge",
    role: "The Crucible",
    line: "Protected, expected dissent — especially on what counts.",
    missing:
      "Dissent is treated as disloyalty. The smartest people in the room spend their energy calculating whether it is safe to speak.",
    monday:
      "Ask: \u201cTell me why this is a dumb idea.\u201d If nobody answers, you do not have a challenge problem. You have a fear problem.",
    angle: 54,
  },
  {
    num: "04",
    slug: "trust",
    name: "Trust",
    role: "The Revelation",
    line: "Revealed under pressure. Not declared on the wall.",
    missing:
      "Trust is a poster. It holds in routine and collapses the first time honesty costs a leader something.",
    monday:
      "Name one time you protected comfort over truth. Do it in front of the people who already know.",
    angle: 126,
  },
  {
    num: "05",
    slug: "community",
    name: "Community",
    role: "The Bond",
    line: "Forged in shared struggle. Not in off-sites.",
    missing:
      "Community is scheduled. Off-sites, values days, and language about \u201cfamily\u201d try to buy what only shared hard work creates.",
    monday:
      "Put two teams on one problem that actually matters and keep them together until it is solved. Community follows the work.",
    angle: 198,
  },
] as const;

export const TOOLS = [
  {
    kicker: "Your organization",
    name: "Courage Economy Diagnostic",
    body: "35 questions. 15\u201320 minutes. Where this organization actually stands across the five elements \u2014 and what the gaps are costing.",
    href: LINKS.diagnostic,
    cta: "Start the diagnostic",
    stats: [
      { value: "35", label: "questions" },
      { value: "15\u201320", label: "minutes" },
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
