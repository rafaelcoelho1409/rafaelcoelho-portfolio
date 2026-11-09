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
    "Senior AI Engineer with 7+ years designing production AI, ML, and data systems. Focused on agentic applications, reliable real-time ML, Kubernetes platforms, and end-to-end delivery from architecture through observability.",

  experience: [
    {
      title: "Independent AI Engineer · portfolio systems",
      org: "Self-directed",
      period: "February 2026 – Present",
      bullets: [
        "Built COELHO Nexus, a Kubernetes-native agentic AI platform, with a self-learning model router, evaluation-gated workflows, 18 Terraform modules, and end-to-end observability across its three production apps.",
        "Built COELHO RealTime for fraud detection, delivery-time prediction, and customer segmentation, combining River incremental learning and CatBoost/scikit-learn batch models across Kafka, Spark, and Delta Lake. Delivered GitOps, 50+ Prometheus metrics, and 11 Grafana dashboards.",
      ],
    },
    {
      title: "Senior AI Developer",
      org: "GovTech sector (client confidential)",
      period: "April 2025 – April 2026",
      bullets: [
        "Delivered four Kubernetes-based ML/MLOps platforms for Brazilian state clients, each with observability and CI/CD.",
        "Built ALS recommendations for 1.4M+ citizens across 7.7M+ interactions, powered by hourly Delta Lake ETL and served through FastAPI in under 100 ms.",
        "Developed semantic employment matching with Portuguese BERT and Qdrant over public job listings, closing the loop with automatic citizen notifications.",
        "Built a multi-tenant speech API for STT, TTS, and conversational voice AI, with AWS, Google Cloud, and OpenAI as interchangeable providers; load-tested latency and concurrency.",
        "Evaluated self-hosted Whisper and Kokoro on NVIDIA Triton, then moved to managed multi-cloud providers when GPU quantization missed latency targets at scale.",
      ],
    },
    {
      title: "Machine Learning Engineer (Contract)",
      org: "PropTech company (name confidential)",
      period: "October 2024 – February 2025",
      bullets: [
        "Built an embedding-based property discovery pipeline with cosine similarity, Qdrant, and scalable indexing for fast lookups.",
        "Developed LangChain agents to automate multi-step business workflows and integrate with existing systems.",
      ],
    },
    {
      title: "Independent AI Engineer · portfolio systems",
      org: "Self-directed",
      period: "October 2023 – March 2025",
      bullets: [
        "Built seven open-source AI and data-science projects across generative AI, agent workflows, finance, computer vision, analytics, and security.",
      ],
    },
    {
      title: "Data Science Consultant",
      org: "Global Big Four consulting firm (name confidential)",
      period: "June 2022 – September 2023",
      bullets: [
        "Delivered data science, AI, and market-intelligence work for electric utility, telecom, and sugar-ethanol clients; presented market research and competitive analysis to client management.",
        "Built multi-source pipelines with Azure Data Factory, Logic Apps, Polars, Pandas, and PySpark, plus Dash/Plotly dashboards for market sizing and KPIs.",
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
    "Python",
    "AI Platform Architecture",
    "Agentic AI & Retrieval",
    "LLM Evaluation & Observability",
    "Machine Learning & MLOps",
    "Data Engineering",
    "Kubernetes & GitOps",
    "FastAPI & Model Serving",
  ],

  languages: [
    { name: "Portuguese", level: "Native" },
    { name: "English", level: "Professional" },
  ],
};
