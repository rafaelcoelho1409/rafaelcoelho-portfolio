export const SITE = {
  title: "Rafael Coelho",
  tagline: "Senior AI Engineer · MLOps & Agentic Systems",
  description:
    "Senior AI Engineer shipping production agentic AI on Kubernetes — adaptive RAG, real-time ML, GraphRAG, GitOps. 6+ years. Building COELHO Nexus.",
  url: "https://rafaelcoelho.pages.dev",
  author: "Rafael Coelho",
  location: "Brazil",
  relocation: "Open to relocation — Abu Dhabi · Riyadh · Doha · Dubai · Singapore",
  ogImage: "/og.png",
  locale: "en",
} as const;

export const SOCIALS = {
  github: "https://github.com/rafaelcoelho1409",
} as const;

export const NAV = [
  { href: "/work", label: "Work" },
  { href: "/writing", label: "Writing" },
  { href: "/cv", label: "CV" },
  { href: "/now", label: "Now" },
  { href: "/contact", label: "Contact" },
] as const;

export const HOME_METRICS = [
  { value: "6+", unit: "yrs", label: "production ML and Data Science engineering" },
  { value: "9", unit: "", label: "public AI / ML projects shipped end-to-end" },
  { value: "BSc", unit: "", label: "Mathematics · Federal University of Paraná (UFPR)" },
] as const;
