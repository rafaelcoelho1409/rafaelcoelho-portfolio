export const SITE = {
  title: "Rafael Coelho",
  tagline: "Senior AI Engineer · MLOps & Agentic Systems",
  description:
    "Senior AI Engineer shipping production agentic systems on Kubernetes. 6+ years across MLOps, real-time ML, GraphRAG, agentic orchestration with LangGraph, and observability at scale.",
  url: "https://rafaelcoelho.pages.dev",
  author: "Rafael Coelho",
  email: "rafaelcoelho1409@gmail.com",
  location: "Curitiba, Paraná, Brazil",
  relocation: "Open to relocation — Abu Dhabi · Riyadh · Doha · Dubai · Singapore",
  ogImage: "/og.png",
  locale: "en",
} as const;

export const SOCIALS = {
  github: "https://github.com/rafaelcoelho1409",
  linkedin: "https://www.linkedin.com/in/rafaelcoelho1409",
  email: "mailto:rafaelcoelho1409@gmail.com",
} as const;

export const NAV = [
  { href: "/work", label: "Work" },
  { href: "/writing", label: "Writing" },
  { href: "/cv", label: "CV" },
  { href: "/now", label: "Now" },
  { href: "/contact", label: "Contact" },
] as const;

export const HOME_METRICS = [
  { value: "6+", unit: "yrs", label: "designing production ML systems" },
  { value: "50+", unit: "", label: "Prometheus metrics shipped to prod" },
  { value: "11", unit: "", label: "Grafana dashboards in real-time MLOps platform" },
] as const;
