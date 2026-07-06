export type Skill = {
  name: string;
  docs: string;
  logo: string;
};

export type SkillCategory = {
  name: string;
  tools: Skill[];
};

const DEVICON = (slug: string, variant = "original") =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${slug}/${slug}-${variant}.svg`;

export const SKILLS: SkillCategory[] = [
  {
    name: "Programming Languages",
    tools: [
      {
        name: "Python",
        docs: "https://docs.python.org/",
        logo: DEVICON("python"),
      },
      {
        name: "Bash",
        docs: "https://www.gnu.org/software/bash/manual/",
        logo: DEVICON("bash"),
      },
      {
        name: "Go",
        docs: "https://go.dev/doc/",
        logo: DEVICON("go", "original-wordmark"),
      },
    ],
  },
  {
    name: "Data Science & Analytics",
    tools: [
      {
        name: "NumPy",
        docs: "https://numpy.org/doc/",
        logo: DEVICON("numpy"),
      },
      {
        name: "Pandas",
        docs: "https://pandas.pydata.org/docs/",
        logo: DEVICON("pandas"),
      },
      {
        name: "DuckDB",
        docs: "https://duckdb.org/docs/stable/",
        logo: "/skills/duckdb.png",
      },
      {
        name: "Plotly",
        docs: "https://plotly.com/python/",
        logo: DEVICON("plotly"),
      },
    ],
  },
  {
    name: "Machine Learning & MLOps",
    tools: [
      {
        name: "scikit-learn",
        docs: "https://scikit-learn.org/stable/documentation.html",
        logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg",
      },
      {
        name: "River",
        docs: "https://riverml.xyz/",
        logo: "https://avatars.githubusercontent.com/u/47002673?v=4",
      },
      {
        name: "XGBoost",
        docs: "https://xgboost.readthedocs.io/",
        logo: "https://raw.githubusercontent.com/dmlc/dmlc.github.io/master/img/logo-m/xgboost.png",
      },
      {
        name: "CatBoost",
        docs: "https://catboost.ai/docs/",
        logo: "https://upload.wikimedia.org/wikipedia/commons/c/cc/CatBoostLogo.png",
      },
      {
        name: "YellowBrick",
        docs: "https://www.scikit-yb.org/",
        logo: "https://img.stackshare.io/service/12133/yellobrick.png",
      },
      {
        name: "UMAP",
        docs: "https://umap-learn.readthedocs.io/",
        logo: "https://umap-learn.readthedocs.io/en/latest/_static/logo.png",
      },
      {
        name: "ADTK",
        docs: "https://adtk.readthedocs.io/",
        logo: "https://adtk.readthedocs.io/en/stable/_static/arundo_logo_black.png",
      },
      {
        name: "MLflow",
        docs: "https://mlflow.org/docs/latest/index.html",
        logo: "https://raw.githubusercontent.com/mlflow/mlflow/refs/heads/master/assets/logo.svg",
      },
    ],
  },
  {
    name: "Deep Learning",
    tools: [
      {
        name: "TensorFlow",
        docs: "https://www.tensorflow.org/api_docs",
        logo: DEVICON("tensorflow"),
      },
      {
        name: "PyTorch",
        docs: "https://pytorch.org/docs/",
        logo: DEVICON("pytorch"),
      },
      {
        name: "Keras",
        docs: "https://keras.io/api/",
        logo: DEVICON("keras"),
      },
    ],
  },
  {
    name: "Agentic AI",
    tools: [
      {
        name: "LangChain",
        docs: "https://python.langchain.com/docs/",
        logo: "/skills/langchain.jpg",
      },
      {
        name: "LangGraph",
        docs: "https://langchain-ai.github.io/langgraph/",
        logo: "/skills/langgraph.jpg",
      },
      {
        name: "DeepAgents",
        docs: "https://github.com/langchain-ai/deepagents",
        logo: "/skills/deepagents.jpg",
      },
      {
        name: "Hugging Face",
        docs: "https://huggingface.co/docs",
        logo: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg",
      },
      {
        name: "FastMCP",
        docs: "https://gofastmcp.com/",
        logo: "/skills/fastmcp.png",
      },
      {
        name: "Qdrant",
        docs: "https://python-client.qdrant.tech",
        logo: "/skills/qdrant.svg",
      },
      {
        name: "Neo4j",
        docs: "https://neo4j.com/docs/",
        logo: "/skills/neo4j.svg",
      },
    ],
  },
  {
    name: "LLMOps",
    tools: [
      {
        name: "LiteLLM",
        docs: "https://docs.litellm.ai/",
        logo: "/skills/litellm.jpg",
      },
      {
        name: "LangFuse",
        docs: "https://langfuse.com/docs",
        logo: "/skills/langfuse.png",
      },
    ],
  },
  {
    name: "Computer Vision",
    tools: [
      {
        name: "OpenCV",
        docs: "https://docs.opencv.org/4.x/",
        logo: DEVICON("opencv"),
      },
      {
        name: "Ultralytics",
        docs: "https://docs.ultralytics.com/",
        logo: "https://raw.githubusercontent.com/ultralytics/assets/main/logo/Ultralytics_Logotype_Original.svg",
      },
      {
        name: "MediaPipe",
        docs: "https://developers.google.com/mediapipe",
        logo: "https://viz.mediapipe.dev/logo.png",
      },
      {
        name: "RoboFlow",
        docs: "https://roboflow.com/docs",
        logo: "/skills/roboflow.png",
      },
      {
        name: "OpenVINO",
        docs: "https://docs.openvino.ai/",
        logo: "https://images.seeklogo.com/logo-png/46/1/openvino-logo-png_seeklogo-468085.png",
      },
    ],
  },
  {
    name: "DevOps",
    tools: [
      { name: "Git", docs: "https://git-scm.com/doc", logo: DEVICON("git") },
      {
        name: "GitHub",
        docs: "https://docs.github.com/",
        logo: DEVICON("github"),
      },
      {
        name: "GitLab",
        docs: "https://docs.gitlab.com",
        logo: DEVICON("gitlab"),
      },
      {
        name: "Docker",
        docs: "https://docs.docker.com/",
        logo: DEVICON("docker"),
      },
      {
        name: "Kubernetes",
        docs: "https://kubernetes.io/docs/",
        logo: DEVICON("kubernetes", "plain"),
      },
      {
        name: "Helm",
        docs: "https://helm.sh/docs/",
        logo: DEVICON("helm"),
      },
      {
        name: "ArgoCD",
        docs: "https://argo-cd.readthedocs.io/en/stable/",
        logo: DEVICON("argocd"),
      },
      {
        name: "K3D",
        docs: "https://k3d.io/stable/",
        logo: "https://k3d.io/stable/static/img/k3d_logo_black_blue.svg",
      },
      {
        name: "Rancher",
        docs: "https://ranchermanager.docs.rancher.com/",
        logo: "/skills/rancher.png",
      },
      {
        name: "Skaffold",
        docs: "https://skaffold.dev/docs/",
        logo: "https://raw.githubusercontent.com/GoogleContainerTools/skaffold/main/logo/skaffold.png",
      },
    ],
  },
  {
    name: "Infrastructure as Code (IaC)",
    tools: [
      {
        name: "Terragrunt",
        docs: "https://terragrunt.gruntwork.io/docs/",
        logo: "/skills/terragrunt.png",
      },
      {
        name: "Terraform",
        docs: "https://developer.hashicorp.com/terraform/docs",
        logo: DEVICON("terraform"),
      },
      {
        name: "OpenTofu",
        docs: "https://opentofu.org/docs/",
        logo: "/skills/opentofu.png",
      },
    ],
  },
  {
    name: "Observability",
    tools: [
      {
        name: "Grafana",
        docs: "https://grafana.com/docs/",
        logo: "/skills/grafana.svg",
      },
      {
        name: "Grafana Alloy",
        docs: "https://grafana.com/docs/alloy/latest/",
        logo: "/skills/grafana-alloy.png",
      },
      {
        name: "Grafana Loki",
        docs: "https://grafana.com/docs/loki/latest/",
        logo: "/skills/loki.png",
      },
      {
        name: "Grafana Tempo",
        docs: "https://grafana.com/docs/tempo/latest/",
        logo: "/skills/tempo.png",
      },
      {
        name: "Grafana Mimir",
        docs: "https://grafana.com/docs/mimir/latest/",
        logo: "/skills/mimir.png",
      },
      {
        name: "OpenTelemetry",
        docs: "https://opentelemetry.io/docs/",
        logo: "/skills/opentelemetry.png",
      },
    ],
  },
  {
    name: "Data Engineering",
    tools: [
      {
        name: "PySpark",
        docs: "https://spark.apache.org/docs/latest/api/python/",
        logo: DEVICON("apachespark"),
      },
      {
        name: "Delta Lake",
        docs: "https://docs.delta.io/",
        logo: "/skills/delta_lake.jpg",
      },
    ],
  },
  {
    name: "Web Development & UI",
    tools: [
      {
        name: "Streamlit",
        docs: "https://docs.streamlit.io/",
        logo: DEVICON("streamlit"),
      },
      {
        name: "PyQT6",
        docs: "https://doc.qt.io/qtforpython-6/",
        logo: DEVICON("qt"),
      },
      {
        name: "FastHTML",
        docs: "https://fastht.ml/docs/",
        logo: "/skills/fasthtml.svg",
      },
      {
        name: "FastAPI",
        docs: "https://fastapi.tiangolo.com/",
        logo: DEVICON("fastapi"),
      },
      {
        name: "Pydantic",
        docs: "https://docs.pydantic.dev/",
        logo: "/skills/pydantic.jpg",
      },
    ],
  },
  {
    name: "Automation & Orchestration",
    tools: [
      {
        name: "Selenium",
        docs: "https://www.selenium.dev/documentation/",
        logo: DEVICON("selenium"),
      },
      {
        name: "PyAutoGUI",
        docs: "https://pyautogui.readthedocs.io/",
        logo: DEVICON("python"),
      },
      {
        name: "BotCity",
        docs: "https://documentation.botcity.dev/",
        logo: "https://cdn.prod.website-files.com/6487203eebdb29c0fff6af27/66193a64d8ee208d28e3796f_logo_botcity_2024.svg",
      },
      {
        name: "Apache Airflow",
        docs: "https://airflow.apache.org/docs/",
        logo: DEVICON("apacheairflow"),
      },
      {
        name: "Luigi",
        docs: "https://luigi.readthedocs.io/",
        logo: "https://raw.githubusercontent.com/spotify/luigi/master/doc/luigi.png",
      },
      {
        name: "Playwright",
        docs: "https://playwright.dev/python/docs/intro",
        logo: "/skills/playwright.svg",
      },
      {
        name: "Crawl4AI",
        docs: "https://docs.crawl4ai.com/",
        logo: "/skills/crawl4ai.jpg",
      },
      {
        name: "Celery",
        docs: "https://docs.celeryq.dev/",
        logo: "/skills/celery.png",
      },
    ],
  },
  {
    name: "Cloud Platforms",
    tools: [
      {
        name: "AWS",
        docs: "https://docs.aws.amazon.com/",
        logo: DEVICON("amazonwebservices", "original-wordmark"),
      },
      {
        name: "Azure",
        docs: "https://learn.microsoft.com/azure/",
        logo: DEVICON("azure"),
      },
    ],
  },
  {
    name: "Databases",
    tools: [
      {
        name: "MySQL",
        docs: "https://dev.mysql.com/doc/",
        logo: DEVICON("mysql"),
      },
      {
        name: "PostgreSQL",
        docs: "https://www.postgresql.org/docs/",
        logo: DEVICON("postgresql"),
      },
      {
        name: "Redis",
        docs: "https://redis.io/docs/latest/",
        logo: "/skills/redis.svg",
      },
      {
        name: "Elasticsearch",
        docs: "https://www.elastic.co/docs",
        logo: "/skills/elasticsearch.svg",
      },
      {
        name: "MinIO",
        docs: "https://min.io/docs/minio/linux/index.html",
        logo: "/skills/minio.png",
      },
    ],
  },
  {
    name: "Cybersecurity",
    tools: [
      {
        name: "Metasploit",
        docs: "https://docs.metasploit.com/",
        logo: "https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/logos/metasploit-h33wivgvlvgtk3wmoejxq.png/metasploit-rkuireddk3p5vdgf5mil5.png",
      },
      {
        name: "Burp Suite",
        docs: "https://portswigger.net/burp/documentation",
        logo: "https://images.icon-icons.com/3053/PNG/512/burp_suite_macos_bigsur_icon_190319.png",
      },
      {
        name: "NMAP",
        docs: "https://nmap.org/book/man.html",
        logo: "https://nmap.org/images/nmap-logo-256x256.png",
      },
      {
        name: "Nikto",
        docs: "https://github.com/sullo/nikto/wiki",
        logo: "https://cirt.net/wp-content/uploads/2025/08/alienlogo_vectorized_500x609-768x936.png",
      },
      {
        name: "ProjectDiscovery",
        docs: "https://docs.projectdiscovery.io/",
        logo: "/skills/projectdiscovery.jpg",
      },
      {
        name: "Shodan",
        docs: "https://developer.shodan.io/",
        logo: "/skills/shodan.png",
      },
      {
        name: "Censys",
        docs: "https://search.censys.io/api",
        logo: "https://cdn.splunkbase.splunk.com/media/public/icons/5fd70d30-6f16-11f0-8a7b-1eb11825a2b4.svg",
      },
      {
        name: "QEMU",
        docs: "https://www.qemu.org/docs/master/",
        logo: "https://images.icon-icons.com/2699/PNG/512/qemu_logo_icon_169821.png",
      },
      {
        name: "Kali Linux",
        docs: "https://www.kali.org/docs/",
        logo: "https://www.kali.org/images/kali-logo.svg",
      },
      {
        name: "Ubuntu",
        docs: "https://ubuntu.com/server/docs",
        logo: DEVICON("ubuntu", "plain"),
      },
    ],
  },
];
