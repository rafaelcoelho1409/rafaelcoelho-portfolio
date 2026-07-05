export const SITE = {
  title: "Rafael Coelho",
  tagline: "Senior AI Engineer · Agentic AI, LLMOps & MLOps",
  description:
    "Senior AI Engineer building production agentic AI on Kubernetes — multi-agent orchestration, evaluation-gated RAG, real-time MLOps. 6+ years.",
  url: "https://rafaelcoelho.pages.dev",
  author: "Rafael Coelho",
  location: "Brazil",
  relocation: "Available · Senior AI / MLOps roles",
  ogImage: "/og.png",
  locale: "en",
} as const;

export const SOCIALS = {
  github: "https://github.com/rafaelcoelho1409",
} as const;

export const NAV = [
  { href: "/work", label: "Work" },
  { href: "/writing", label: "Writing" },
  { href: "/skills", label: "Skills" },
  { href: "/repositories", label: "Repositories" },
  { href: "/cv", label: "CV" },
] as const;

export const HOME_METRICS = [
  { value: "6+", unit: "yrs", label: "production ML and Data Science engineering" },
  { value: "9", unit: "", label: "public AI / ML projects shipped end-to-end" },
  { value: "BSc", unit: "", label: "Mathematics · Federal University of Paraná (UFPR)" },
] as const;
