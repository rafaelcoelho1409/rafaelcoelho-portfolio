export type CVEducation = {
  degree: string;
  org: string;
  period: string;
};

export const CV = {
  intro:
    "Senior AI Engineer with 6+ years of experience with Data Science and Machine Learning, designing, deploying, and operating production agentic and ML systems on Kubernetes. Hands-on across the full lifecycle — data engineering, model training and serving, IaC, container orchestration, agentic orchestration with LangGraph, and observability at scale.",

  highlights: [
    "Built a Real-Time MLOps platform on Kubernetes — incremental + batch ML on Kafka, Spark, Delta Lake, MLflow, with Terraform / Helm / ArgoCD / GitLab CI and 50+ Prometheus metrics across 11 Grafana dashboards.",
    "Designing COELHO Nexus — an Agentic RAG + GraphRAG platform (FastAPI, Qdrant, Neo4j, LangGraph) running zero-cost on Oracle Cloud + free-tier inference providers.",
    "Production-grade Generative AI and Agentic AI experience: multi-agent systems with LangChain / LangGraph and Knowledge Graphs (GraphRAG / Neo4j) for autonomous reasoning and retrieval.",
    "Domain experience across Logistics, Financial Markets, Real Estate, Computer Vision, and Cybersecurity.",
  ],

  education: [
    {
      degree: "Bachelor of Science in Mathematics",
      org: "Federal University of Paraná (UFPR)",
      period: "graduated August 2024",
    },
  ] satisfies CVEducation[],

  areasOfExpertise: [
    "Data Science",
    "Data Analytics",
    "Machine Learning",
    "Deep Learning",
    "Generative AI",
    "Large Language Models (LLMs)",
    "Agentic AI",
    "Computer Vision",
    "MLOps",
    "DevOps",
    "Data Engineering",
    "Automation & Orchestration",
    "Cloud Platforms",
    "Databases",
    "Cybersecurity",
    "Pentesting",
    "Open Source Intelligence (OSINT)",
  ],

  interests: [
    "Artificial Intelligence",
    "AI Agents",
    "Generative AI",
    "Cybersecurity",
    "Computer Vision",
    "Quantum Computing",
    "Physics",
    "Financial Markets",
  ],

  languages: [
    { name: "Portuguese", level: "Native" },
    { name: "English", level: "Professional" },
  ],
};
