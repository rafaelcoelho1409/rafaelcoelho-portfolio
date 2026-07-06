export type CVEducation = {
  degree: string;
  org: string;
  period: string;
};

export type CVExperience = {
  title: string;
  org: string;
  period: string;
  bullets: string[];
};

export const CV = {
  intro:
    "Senior AI Engineer with 6+ years designing, deploying, and operating production agentic and ML systems on Kubernetes — not just models, but the platforms, pipelines, and observability that make them reliable at scale. Delivered government-scale MLOps platforms (1.4M+ citizens served, 7.7M+ production interactions) and Kubernetes-native multi-agent AI systems running on 100% free-tier inference. Hands-on across the full lifecycle — data engineering, model training and serving, IaC, container orchestration, agentic orchestration with LangGraph, and observability at scale.",

  highlights: [
    "Built a Real-Time MLOps platform on Kubernetes — 3 concurrent pipelines (fraud detection, delivery-time prediction, customer segmentation) fusing River ML incremental learning with CatBoost/scikit-learn batch models on Kafka, Spark, Delta Lake; 39 FastAPI endpoints, full GitOps (Terraform / Helm / ArgoCD / GitLab CI), 50+ Prometheus metrics across 11 Grafana dashboards.",
    "Architected COELHO Nexus — a Kubernetes-native platform running three production AI features (FastAPI, FastHTML, FastMCP, LangGraph, DeepAgents, Neo4j, Qdrant) with evaluation-gated pipelines and full LangFuse/OpenTelemetry observability, on 100% free-tier inference via a self-learning bandit router.",
    "Delivered production ML platforms at government scale for state government clients (1.4M+ citizens served, 7.7M+ interactions processed) — recommendation systems, semantic search, and multi-cloud speech AI, each on Kubernetes with full observability and CI/CD.",
    "Domain experience across Public Sector/GovTech, Logistics, Financial Markets, Real Estate, Computer Vision, and Cybersecurity.",
  ],

  experience: [
    {
      title: "Independent AI Engineer",
      org: "Self-directed",
      period: "February 2026 – Present",
      bullets: [
        "COELHO Nexus: Kubernetes-native platform, 3 production AI apps (doc distillation, YouTube GraphRAG, research digests), 124 REST endpoints, 18 Terraform modules, self-learning bandit LLM router with evaluation-gated pipelines, full LangFuse/OpenTelemetry/Grafana LGTM observability, $0 inference cost.",
        "COELHO RealTime: Real-time MLOps platform on Kubernetes running 3 concurrent pipelines (fraud detection, delivery-time prediction, customer segmentation), combining River ML incremental learning with CatBoost/scikit-learn batch models on Kafka (KRaft)/Spark/Delta Lake; 39 FastAPI endpoints across 3 versioned routers, full GitOps delivery, 50+ Prometheus metrics across 11 Grafana dashboards.",
      ],
    },
    {
      title: "Senior AI Developer",
      org: "GovTech sector (client confidential)",
      period: "April 2025 – April 2026",
      bullets: [
        "Four production ML/MLOps platforms for Brazilian state government clients, each on Kubernetes with full observability and CI/CD.",
        "Citizen Recommendation Platform (state government client): Recommendation engine for 1.4M+ citizens, 7.7M+ interactions, hourly Delta Lake ETL; ALS models served at <100ms via FastAPI.",
        "Employment Matching Platform (state government client): Semantic job-matching pipeline (Portuguese-BERT, Qdrant) over public job listings, closing the loop with automatic citizen notifications.",
        "Speech-to-Speech: Multi-tenant, billable speech API (STT/TTS/conversational voice AI) abstracting AWS/Google Cloud/OpenAI as interchangeable providers; load-tested for p50/p95/p99 latency and concurrency.",
        "Speech-to-Speech (GPU prototype): Self-hosted Whisper + Kokoro via NVIDIA Triton; pivoted to the managed multi-cloud architecture above after GPU quantization still fell short of latency targets at scale.",
      ],
    },
    {
      title: "Independent AI Engineer",
      org: "Self-directed",
      period: "October 2023 – March 2025",
      bullets: [
        "Built and shipped seven open-source AI/Data Science platforms as a personal portfolio: COELHO Finance, COELHO VISION, Formula 1 Analytics, Pentesting Automation, COELHO GenAI, COELHO Agents, and YouTube Content Search — see Selected Work for details.",
      ],
    },
    {
      title: "Machine Learning Engineer (Contract)",
      org: "PropTech company (name confidential)",
      period: "October 2024 – February 2025",
      bullets: [
        "Designed recommendation strategies for real-estate property discovery; built an embedding-based similarity search pipeline (cosine similarity, Qdrant vector DB) with a scalable indexing strategy for fast, accurate property lookups.",
        "Engineered LangChain autonomous agents automating multi-step business workflows, integrated with existing systems in collaboration with cross-functional teams.",
      ],
    },
    {
      title: "Data Science Consultant",
      org: "Global Big Four consulting firm (name confidential)",
      period: "June 2022 – September 2023",
      bullets: [
        "Delivered DS/AI and market-intelligence consulting across electric-utility, telecom, and sugar-ethanol clients; authored market research and competitive-landscape deliverables presented to client management.",
        "Built multi-source data pipelines (Azure Data Factory, Logic Apps, Polars/Pandas/PySpark) and interactive Dash/Plotly dashboards for market sizing and KPIs.",
      ],
    },
    {
      title: "Data Science Intern",
      org: "E-commerce & retail company (name confidential)",
      period: "June 2021 – January 2022",
      bullets: [
        "Built predictive ML/DL models (scikit-learn, TensorFlow) from web-scraped and internal data; shipped analysis as internal Streamlit data-science web apps.",
      ],
    },
    {
      title: "Business Intelligence Intern",
      org: "E-commerce & retail company (name confidential)",
      period: "January 2020 – June 2021",
      bullets: [
        "Consolidated logistics data into BI dashboards (Tableau, Looker); led SQL-based data structuring and analysis for internal stakeholders.",
      ],
    },
  ] satisfies CVExperience[],

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
