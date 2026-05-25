const settings = {
  isSplash: true,
};

const seo = {
  title: "Waleed Gul | Portfolio",
  description:
    "A Data Scientist and ML Engineer specializing in Agentic LLM architectures, multi-agent workflows, and leveraging startups with autonomous AI solutions.",
  og: {
    title: "Waleed Gul",
    type: "website",
    url: "https://portfolio-site-four-liard.vercel.app/",
  },
};

const greeting = {
  title: "Hello!",
  sub: "Waleed Gul",
  logo_name: "Waleed Gul",
  resumeLink: "",
};

const competitiveSites = {
  competitiveSites: [
    {
      siteName: "Github",
      iconifyClassname: "simple-icons:github",
      style: {
        color: "white",
      },
      profileLink: "https://github.com/waleedgul92",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/waleedgul/",
    },
    {
      siteName: "Leetcode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#FFA116",
      },
      profileLink: "https://leetcode.com/u/hwaleed0035/",
    },
    {
      siteName: "LinkedIn",
      iconifyClassname: "simple-icons:linkedin",
      style: {
        color: "#0077b5",
      },
      profileLink: "https://www.linkedin.com/in/waleedgul92/",
    },
  ],
};

const skills = {
  data: [
    {
      title: "Data Science, AI & LLM",
      fileName: "DataScienceImg",
      skills: [
        "Building scalable production-ready machine learning pipelines",
        "Designing advanced RAG applications and autonomous agent workflows",
      ],
      softwareSkills: [
        {
          skillName: "TensorFlow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "LangChain",
          fontAwesomeClassname: "simple-icons:langchain",
          style: {
            backgroundColor: "transparent",
            color: "#ffffff",
          },
        },
        {
          skillName: "OpenCV",
          fontAwesomeClassname: "simple-icons:opencv",
          style: {
            backgroundColor: "transparent",
            color: "#ffffff",
          },
        },
        {
          skillName: "scikit-learn",
          fontAwesomeClassname: "simple-icons:scikitlearn",
          style: {
            backgroundColor: "transparent",
            color: "#F7931E",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos:pytorch-icon",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Ollama",
          fontAwesomeClassname: "simple-icons:ollama",
          style: {
            backgroundColor: "transparent",
            color: "#ffffff",
          },
        },
      ],
    },
    {
      title: "Data Analysis & Visualization",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building comprehensive dashboards using Power BI for business intelligence and analytics",
        "⚡ Performing exploratory data analysis and statistical modeling using Pandas, NumPy, and Matplotlib",
        "⚡ Creating predictive models for various domains including retail, healthcare, and e-commerce",
        "⚡ Developing automated data extraction and processing pipelines from various sources",
        "⚡ Implementing time series analysis and forecasting models for business metrics",
      ],
      softwareSkills: [
        {
          skillName: "Power BI",
          fontAwesomeClassname: "simple-icons:powerbi",
          style: {
            backgroundColor: "transparent",
            color: "#F2C811",
          },
        },
        {
          skillName: "Matplotlib",
          fontAwesomeClassname: "logos:matplotlib",
        },
        {
          skillName: "Seaborn",
          fontAwesomeClassname: "simple-icons:plotly",
          style: {
            backgroundColor: "transparent",
            color: "#3F4F75",
          },
        },
        {
          skillName: "Excel",
          fontAwesomeClassname: "simple-icons:microsoftexcel",
          style: {
            backgroundColor: "transparent",
            color: "#217346",
          },
        },
      ],
    },
    {
      title: "MLOps & Deployment",
      fileName: "DesignImg",
      skills: [
        "⚡ Deploying ML models using FastAPI and creating RESTful APIs for model serving",
        "⚡ Building web applications with Streamlit for interactive data science demos",
        "⚡ Managing cloud deployments on AWS (EC2, ECS, ECR, S3, Lambda) for scalable solutions",
        "⚡ Implementing containerized ML applications using Docker and Kubernetes (K8s, pods, deployments)",
        "⚡ Creating end-to-end ML pipelines with CI/CD automation from data processing to model deployment",
      ],
      softwareSkills: [
        {
          skillName: "FastAPI",
          fontAwesomeClassname: "simple-icons:fastapi",
          style: {
            backgroundColor: "transparent",
            color: "#009688",
          },
        },
        {
          skillName: "Streamlit",
          fontAwesomeClassname: "simple-icons:streamlit",
          style: {
            backgroundColor: "transparent",
            color: "#FF4B4B",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            backgroundColor: "transparent",
            color: "#FF9900",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            backgroundColor: "transparent",
            color: "#2496ED",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            backgroundColor: "transparent",
            color: "#326CE5",
          },
        },
        {
          skillName: "ChromaDB",
          fontAwesomeClassname: "logos:chroma",
          style: {
            backgroundColor: "transparent",
            color: "#FF6B35",
          },
        },
      ],
    },
  ],
};

const projectsHeader = {
  title: "Projects",
  description:
    "My projects span across AI, data science, and machine learning domains. From RAG applications to computer vision and NLP solutions, I focus on building practical, scalable systems that solve real-world problems.",
};

const projectcards = {
  list: [
    {
      title: "Apex Synthesis",
      img_path: "apex.jpg",
      video_path: "Apex Synthesis.webm",
      description:
        "AI-driven Decision Intelligence pipeline using LangGraph and multiple LLM agents to evaluate executive candidates against high-stakes crisis scenarios.",
      tags: [
        {
          lang: "Python",
          color: "#004782",
        },
        {
          lang: "LangGraph",
          color: "#1C3C3C",
        },
        {
          lang: "n8n",
          color: "#EA4335",
        },
        {
          lang: "React",
          color: "#61DAFB",
        },
      ],
      code: "https://github.com/waleedgul92/Apex-Synthesis",
      linkcolor: "white",
    },

    {
      title: "Crop-Doc AI",
      video_path: "crop doc.webm",
      img_path: "crop.jpeg",
      description:
        "VGG-16 based CNN architecture for rapid crop disease detection, deployed as a REST API on Google Cloud Platform (GCP).",
      tags: [
        {
          lang: "Python",
          color: "#004782",
        },
        {
          lang: "TensorFlow",
          color: "#FF6F00",
        },
        {
          lang: "GCP Cloud",
          color: "#4285F4",
        },
        {
          lang: "CNN",
          color: "#00a100",
        },
      ],
      code: "https://github.com/waleedgul92/Crop-Doc",
      linkcolor: "white",
    },

    {
      title: "Blog Writing Agent",
      img_path: "blog.png",
      video_path: "blog_writng.webm",
      description:
        "Highly concurrent, multi-agent pipeline using LangGraph and FastAPI that performs live web research to autonomously generate structured blog posts.",
      tags: [
        {
          lang: "Python",
          color: "#004782",
        },
        {
          lang: "FastAPI",
          color: "#009688",
        },
        {
          lang: "LangGraph",
          color: "#1C3C3C",
        },
        {
          lang: "Tavily API",
          color: "#F7931E",
        },
      ],
      code: "https://github.com/waleedgul92/blog-writing-agent",
      linkcolor: "white",
    },

    {
      title: "Scholar-AI ",
      img_path: "scolar.png",
      video_path: "Scholar.webm",
      description:
        "A RAG-based research assistant that processes ArXiv papers and PDF documents, providing contextual Q&A using LangChain and ChromaDB",
      tags: [
        {
          lang: "Python",
          color: "#004782",
        },
        {
          lang: "LangChain",
          color: "#1C3C3C",
        },
        {
          lang: "ChromaDB",
          color: "#336791",
        },
        {
          lang: "FastAPI",
          color: "#009688",
        },
        {
          lang: "Gemini",
          color: "#4285F4",
        },
      ],
      code: "https://github.com/waleedgul92/Scholar-AI",
      linkcolor: "white",
    },

    {
      title: "CaptionCrafter",
      img_path: "caption.png",
      video_path: "caption.webm",
      description:
        "Automated video subtitle generation and translation tool supporting multiple languages using Whisper and Google Gemini",
      tags: [
        {
          lang: "Python",
          color: "#004782",
        },
        {
          lang: "FastAPI",
          color: "#009688",
        },
        {
          lang: "Whisper",
          color: "#412991",
        },
        {
          lang: "Gemini",
          color: "#4285F4",
        },
        {
          lang: "MoviePy",
          color: "#c47206",
        },
      ],
      code: "https://github.com/waleedgul92/CaptionCrafter",
      linkcolor: "white",
    },
    {
      title: "DocWeaver-AI",
      img_path: "DOCWEAVE.png",
      description:
        "Advanced multi-LLM RAG chatbot for querying documents and URLs with sophisticated reranking pipeline",
      tags: [
        {
          lang: "Python",
          color: "#004782",
        },
        {
          lang: "RAG",
          color: "#8700b0",
        },
        {
          lang: "FAISS",
          color: "#c47206",
        },
        {
          lang: "Multi-LLM",
          color: "#ff4b4b",
        },
        {
          lang: "Ollama",
          color: "#000000",
        },
      ],
      code: "https://github.com/waleedgul92/DocWeaver-AI",
      linkcolor: "white",
    },
    {
      title: "Receipt2Sheet",
      img_path: "receipt.png",
      description:
        "AI-powered receipt data extractor that processes receipt images and converts them to CSV/XLS format",
      tags: [
        {
          lang: "Python",
          color: "#004782",
        },
        {
          lang: "Streamlit",
          color: "#ff4b4b",
        },
        {
          lang: "Gemini AI",
          color: "#4285F4",
        },
        {
          lang: "OCR",
          color: "#00a100",
        },
        {
          lang: "Multi-language",
          color: "#820032",
        },
      ],
      code: "https://github.com/waleedgul92/Receipt2Sheet-2.0",
      linkcolor: "white",
    },
    {
      title: "ColdComposeAI",
      img_path: "cold.png",
      video_path: "ColdComposeAI.webm",
      description:
        "Automated cold email generator for job applications that matches skills with job requirements and integrates portfolio links",
      tags: [
        {
          lang: "Python",
          color: "#004782",
        },
        {
          lang: "LLM",
          color: "#303030",
        },
        {
          lang: "Streamlit",
          color: "#ff4b4b",
        },
        {
          lang: "Web Scraping",
          color: "#051c61",
        },
        {
          lang: "NLP",
          color: "#820032",
        },
      ],
      code: "https://github.com/waleedgul92/ColdComposeAI",
      linkcolor: "white",
    },

    {
      title: "Traffic Sign Recognition",
      img_path: "traffic.png",
      description:
        "Dual approach system using Vision Transformers with DINO self-supervision and CNN for German traffic sign classification",
      tags: [
        {
          lang: "Python",
          color: "#004782",
        },
        {
          lang: "Vision Transformer",
          color: "#4257f5",
        },
        {
          lang: "CNN",
          color: "#00a100",
        },
        {
          lang: "Computer Vision",
          color: "#820032",
        },
      ],
      code:
        "https://github.com/waleedgul92/Traffic-Sign-Classifcation-using-CNN-and-Vision-Transformer",
      linkcolor: "white",
    },
    {
      title: "Fine-Tuned LLM for OCR",
      img_path: "ocr.png",
      description:
        "Fine-tuned TrOCR model for captcha text recognition with custom dataset training and inference pipeline",
      tags: [
        {
          lang: "Python",
          color: "#004782",
        },
        {
          lang: "TrOCR",
          color: "#4257f5",
        },
        {
          lang: "Fine-tuning",
          color: "#c47206",
        },
        {
          lang: "OCR",
          color: "#00a100",
        },
        {
          lang: "Transformers",
          color: "#ff4b4b",
        },
      ],
      code:
        "https://github.com/waleedgul92/OCR-using-Fine-Tuning-LLM-on-custom-datatset",
      linkcolor: "white",
    },
    {
      title: "StyleGAN Monet",
      img_path: "style.png",
      video_path: "stylemonet.webm",
      description:
        "CycleGAN implementation from scratch to convert regular paintings into Monet art-style paintings",
      tags: [
        {
          lang: "Python",
          color: "#004782",
        },
        {
          lang: "CycleGAN",
          color: "#4257f5",
        },
        {
          lang: "Style Transfer",
          color: "#c47206",
        },
        {
          lang: "GANs",
          color: "#820032",
        },
      ],
      code: "https://github.com/waleedgul92/StyleGAN-Monet",
      linkcolor: "white",
    },
    {
      title: "Layer7Defend IDS",
      img_path: "layer.png",
      description:
        "Intrusion Detection System for Edge IIoT environments with ML-based attack classification and network analysis",
      tags: [
        {
          lang: "Python",
          color: "#004782",
        },
        {
          lang: "Cybersecurity",
          color: "#820032",
        },
        {
          lang: "IDS",
          color: "#ff4b4b",
        },

        {
          lang: "IoT",
          color: "#00a100",
        },
      ],

      code: "https://github.com/waleedgul92/Layer7Defend",
      linkcolor: "white",
    },

    {
      title: "Walmart Price Prediction",
      img_path: "wallmart.png",
      description:
        "ML model to predict current product prices using comprehensive EDA, feature engineering, and multiple regression algorithms",
      tags: [
        {
          lang: "Python",
          color: "#004782",
        },
        {
          lang: "Scikit-learn",
          color: "orange",
        },
        {
          lang: "Random Forest",
          color: "#00a100",
        },
        {
          lang: "Linear Regression",
          color: "#c47206",
        },
      ],
      code: "https://github.com/waleedgul92/PriceWise-Walmart",
      linkcolor: "white",
    },
    {
      title: "CalorieCount Analysis",
      img_path: "calori.png",
      description:
        "Comprehensive Fitbit data analysis and calorie prediction using Random Forest and XGBoost with extensive feature engineering",
      tags: [
        {
          lang: "Python",
          color: "#004782",
        },
        {
          lang: "XGBoost",
          color: "#c47206",
        },
        {
          lang: "Random Forest",
          color: "#00a100",
        },
      ],
      code: "https://github.com/waleedgul92/DocWeaver-AI",
      linkcolor: "white",
    },
    {
      title: "Card Fraud Detection",
      img_path: "credit.png",
      description:
        "Imbalanced classification system using SMOTE and multiple ML algorithms to detect fraudulent transactions",
      tags: [
        {
          lang: "Python",
          color: "#004782",
        },
        {
          lang: "SMOTE",
          color: "#820032",
        },
        {
          lang: "Random Forest",
          color: "#00a100",
        },
        {
          lang: "Fraud Detection",
          color: "#ff4b4b",
        },
      ],
      code: "https://github.com/waleedgul92/CardSafe-Europe",
      linkcolor: "white",
    },
  ],
};

const resumeleft = {
  left: {
    title: ["Experience"],
    data: [
      {
        title: "Data Science & AI Development",
        subtitle: "Freelance",
        date: "2024 - Present",
        content: [
          "Architected and deployed production-grade machine learning models with automated inference pipelines on cloud infrastructure.",
          "Designed advanced RAG applications, autonomous agent workflows, and intelligent document extraction systems.",
        ],
      },
      {
        title: "Data Analyst Intern",
        subtitle: "Global Shala",
        date: "June 2022 - July 2022",
        content: [
          "Analyzed campaign performance data to identify underperforming marketing streams and support strategic restructuring decisions.",
          "Engineered data visualizations that successfully identified and justified the discontinuation of two major ineffective campaigns.",
          "Optimized resource allocation by reducing expenditure on low-yield campaigns by 18%, shifting organizational focus toward high-impact initiatives.",
        ],
      },
    ],
  },
};

const resumeright = {
  right: [
    {
      title: ["Education"],
      data: [
        {
          title: "Master of Science in Artificial Intelligence",
          subtitle: "London Metropolitan University, London",
          date: "2025 - 2026",
          content: [],
        },
        {
          title: "Bachelor of Computer Science",
          subtitle:
            "National University of Computer and Emerging Science, Karachi",
          date: "2020 - 2024",
          content: [],
        },
      ],
    },
  ],
};

const awardsAndAchievements = {
  title: "AWARDS & ACCOMPLISHMENTS",
  list: [
    {
      id: 0,
      title: "Participation Agentic AI Hackathon",
      issuer: "BMW Group",
      date: "Mar 2026",
      image_path: "agentic_ai_hackatho.png",
      description:
        "Explored advanced autonomous agent workflows and LLM orchestration during the BMW Group innovation challenge.",
      category: "HACKATHON",
    },
    {
      id: 1,
      title: "Winner Data Science",
      issuer: "DevDay FAST",
      date: "Apr 2024",
      image_path: "devday_winner.webp",
      description:
        "Secured 1st place in the flagship Data Science competition, solving complex predictive modeling challenges under strict time constraints.",
      category: "COMPETITION",
    },
  ],
};

const professionalCertifications = {
  title: "PROFESSIONAL CERTIFICATIONS",
  list: [
    {
      id: 2,
      title: "Advanced Data Analytics-Specialization",
      issuer: "Google",
      date: "Dec 2023",
      image_path: "advanced_data_analytics.png",
      description:
        "Mastered end-to-end data pipelines, statistical analysis, and predictive modeling using Python and SQL.",
      category: "GOOGLE",
    },
    {
      id: 3,
      title: "Machine Learning-Specialization",
      issuer: "IBM",
      date: "Nov 2023",
      image_path: "machine_learning_spec.png",
      description:
        "Focused on supervised and unsupervised learning algorithms, model evaluation, and deployment strategies.",
      category: "IBM",
    },
    {
      id: 4,
      title: "Applied Data Science-Specialization",
      issuer: "IBM",
      date: "Oct 2023",
      image_path: "applied_data_science.png",
      description:
        "Applied data science methodologies to real-world datasets, emphasizing data visualization and storytelling.",
      category: "IBM",
    },
    {
      id: 5,
      title: "Data Analytics-Specialization",
      issuer: "Google",
      date: "Sep 2023",
      image_path: "data_analytics_spec.png",
      description:
        "Foundational training in data cleaning, analysis, and visualization using R and Tableau.",
      category: "GOOGLE",
    },
  ],
};

export { awardsAndAchievements, professionalCertifications };

const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "contact.jpg",
    description:
      "I am active across professional platforms and typically respond within 24 hours. Let's connect to discuss your Machine Learning, Agentic AI, or Data Science initiatives.",
  },
  addressSection: {},
  phoneSection: {},
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/waleedgul92",
    iconifyClassname: "simple-icons:hackerrank",
    fontAwesomeIcon: "fa-github",
    backgroundColor: "#ffffff",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/waleedgul92/",
    fontAwesomeIcon: "fa-linkedin-in",
    backgroundColor: "#0077B5",
  },
  {
    name: "Gmail",
    link: "mailto:hwaleed0035@gmail.com",
    fontAwesomeIcon: "fa-google",
    backgroundColor: "#D14836",
  },
];

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  projectsHeader,
  contactPageData,
  projectcards,
  resumeleft,
  resumeright,
};
