export type CVPeriod = {
  role: string;
  org: string;
  period: string;
  location?: string;
  bullets: string[];
};

export type CVEducation = {
  degree: string;
  org: string;
  period: string;
};

export const CV = {
  intro:
    "Senior AI Engineer with 6+ years designing, deploying, and operating production agentic and ML systems on Kubernetes. Hands-on across the full lifecycle — data engineering, model training and serving, IaC, container orchestration, agentic orchestration with LangGraph, and observability at scale.",

  highlights: [
    "Built a Real-Time MLOps platform on Kubernetes — incremental + batch ML on Kafka, Spark, Delta Lake, MLflow, with Terraform / Helm / ArgoCD / GitLab CI and 50+ Prometheus metrics across 11 Grafana dashboards.",
    "Designing COELHO Nexus — an Agentic RAG + GraphRAG platform (FastAPI, Qdrant, Neo4j, LangGraph) running zero-cost on Oracle Cloud + free-tier inference providers.",
    "Production-grade Generative AI and Agentic AI experience: multi-agent systems with LangChain / LangGraph and Knowledge Graphs (GraphRAG / Neo4j) for autonomous reasoning and retrieval.",
    "Domain experience across Logistics, Financial Markets, Real Estate, Computer Vision, and Cybersecurity.",
  ],

  experience: [
    {
      role: "Senior ML / MLOps Engineer",
      org: "Independent · COELHO Projects",
      period: "2023 — present",
      location: "Remote · Brazil",
      bullets: [
        "Designed and shipped COELHO RealTime — production-grade Real-Time MLOps platform on k3d Kubernetes combining incremental ML (River) and batch ML (CatBoost, scikit-learn) across fraud detection, ETA prediction, and customer segmentation.",
        "Built unified FastAPI backend exposing 39 endpoints over incremental / batch / SQL routers, with MLflow model selection, Redis sub-millisecond inference cache, and Prometheus instrumentation.",
        "Authored complete CI/CD + GitOps: Terraform infra, Helm umbrella charts, GitLab CI for image builds, ArgoCD + Image Updater for sync.",
        "Operating observability stack: 50+ custom Prometheus metrics, 11 Grafana dashboards, 30+ alerting rules across 10 rule groups, Alertmanager routing.",
        "Building COELHO Nexus — Agentic RAG + GraphRAG search platform combining LangGraph, Qdrant vector store, and Neo4j knowledge graph for semantic search over video transcripts.",
      ],
    },
    {
      role: "ML Engineer",
      org: "Enterprise consulting engagements",
      period: "2020 — 2023",
      location: "Brazil",
      bullets: [
        "Shipped enterprise ML projects including a recommendation system for job positions and a Speech-To-Speech pipeline (STT + TTS).",
        "Domain delivery across Logistics, Financial Markets, Real Estate, Computer Vision, and Cybersecurity.",
        "Standardized team practice on Docker, Kubernetes, Helm, and Terraform; coached IaC adoption.",
      ],
    },
  ] satisfies CVPeriod[],

  education: [
    {
      degree: "Bachelor of Science in Mathematics",
      org: "Federal University of Paraná (UFPR)",
      period: "graduated",
    },
  ] satisfies CVEducation[],

  skills: {
    "ML / GenAI": [
      "LangChain",
      "LangGraph",
      "GraphRAG",
      "Agentic RAG",
      "River ML",
      "CatBoost",
      "scikit-learn",
      "MLflow",
      "Hugging Face",
      "Docling",
    ],
    "MLOps / Infra": [
      "Kubernetes",
      "Helm",
      "Terraform",
      "k3d",
      "Skaffold",
      "ArgoCD",
      "GitLab CI",
      "Docker",
    ],
    Data: [
      "Kafka",
      "Spark Structured Streaming",
      "Delta Lake",
      "MinIO",
      "PostgreSQL",
      "DuckDB",
      "Redis",
      "Neo4j",
      "Qdrant",
    ],
    Observability: [
      "Prometheus",
      "Grafana",
      "Alertmanager",
      "Karma",
      "OpenTelemetry",
    ],
    Backend: ["FastAPI", "SvelteKit", "Streamlit", "Python", "Go", "Bash"],
    Cloud: ["Oracle Cloud", "AWS (LocalStack)", "GCP fundamentals"],
  } as Record<string, string[]>,

  languages: [
    { name: "Portuguese", level: "Native" },
    { name: "English", level: "Professional" },
  ],
};
