const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Waleed Gul | Portfolio",
  description:
    "A Data Science practitioner who thrives to leverage startups with AI based solutions ",
  og: {
    title: "Waleed Gul",
    type: "website",
    url: "https://portfolio-site-four-liard.vercel.app/",
  },
};

//Home Page
const greeting = {
  title: "Hello!",
  sub: "Waleed Gul",
  logo_name: "Waleed Gul",
  resumeLink: "",
};

// home logos
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

//what i do?
const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing RAG-based applications using LangChain and vector databases for intelligent document processing",
        "⚡ Building computer vision models for image classification, object detection, and OCR applications",
        "⚡ Creating NLP solutions including text extraction, translation, and subtitle generation systems",
        "⚡ Implementing deep learning models using TensorFlow, Keras, PyTorch for various ML use cases",
        "⚡ Fine-tuning large language models for custom datasets and domain-specific tasks",
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
            color: "#1C3C3C",
          },
        },
        {
          skillName: "OpenCV",
          fontAwesomeClassname: "simple-icons:opencv",
          // style: {
          //   backgroundColor: "transparent",
          //   color: "#5C3EE8",
          // },
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
          fontAwesomeClassname: "logos-pytorch",
          // style: {
          //   backgroundColor: "transparent",
          //   color: "#EE4C2C",
          // },
        },
      ],
    },
    {
      title: "Data Analysis & Visualization",
     "imageUrl": "https://via.placeholder.com/800x400.png?text=Data+Visualization",
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
          fontAwesomeClassname: "logos:matplotlib"
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
            color: "#326CE5" 
          }
        }
        ,
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

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects span across AI, data science, and machine learning domains. From RAG applications to computer vision and NLP solutions, I focus on building practical, scalable systems that solve real-world problems.",
};

//project cards
const projectcards = {
  list: [
    {
      title: "Scholar-AI ",
      img_path: "scholar.png",
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
      // link: "",
      code: "https://github.com/waleedgul92/Scholar-AI",
      linkcolor: "white",
    },
    {
      title: "CaptionCrafter",
      img_path: "caption.png",
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
      // link: "",
      code: "https://github.com/waleedgul92/CaptionCrafter",
      linkcolor: "white",
    },
    {
      title: "DocWeaver-AI",
      img_path: "DOCWEAVE.png",
      description: "Advanced multi-LLM RAG chatbot for querying documents and URLs with sophisticated reranking pipeline",
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
      // link: "",
      code: "https://github.com/waleedgul92/DocWeaver-AI",
      linkcolor: "white",
    },
    {
      title: "Receipt2Sheet",
      img_path: "receipt.png",
      description: "AI-powered receipt data extractor that processes receipt images and converts them to CSV/XLS format",
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
      // link: "",
      code: "https://github.com/waleedgul92/Receipt2Sheet-2.0",
      linkcolor: "white",
    },
    {
      title: "ColdComposeAI",
      img_path: "cold.png",
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
      // link: "",
      code: "https://github.com/waleedgul92/ColdComposeAI",
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
      // link: "",
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
      // link: "",
      code: "https://github.com/waleedgul92/DocWeaver-AI",
      linkcolor: "white",
    },
    {
      title: "Card Fraud Detection",
      img_path: "credit.png",
      description: "Imbalanced classification system using SMOTE and multiple ML algorithms to detect fraudulent transactions",
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
      // link: "",
      code: "https://github.com/waleedgul92/CardSafe-Europe",
      linkcolor: "white",
    },
    {
      title: "Traffic Sign Recognition",
      img_path: "traffic.png",
      description: "Dual approach system using Vision Transformers with DINO self-supervision and CNN for German traffic sign classification",
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
      // link: "",
      code: "https://github.com/waleedgul92/Traffic-Sign-Classifcation-using-CNN-and-Vision-Transformer",
      linkcolor: "white",
    },
    {
      title: "Fine-Tuned LLM for OCR",
      img_path: "ocr.png",
      description: "Fine-tuned TrOCR model for captcha text recognition with custom dataset training and inference pipeline",
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
      // link: "",
      code: "https://github.com/waleedgul92/OCR-using-Fine-Tuning-LLM-on-custom-datatset",
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
          lang: "Network Analysis",
          color: "#3c0095",
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
      title: "StyleGAN Monet",
      img_path: "style.png",
      description: "CycleGAN implementation from scratch to convert regular paintings into Monet art-style paintings",
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
      // link: "",
      code: "https://github.com/waleedgul92/StyleGAN-Monet",
      linkcolor: "white",
    },
  ],
};

const resumeleft = {
  left: {
    title: ["Experience"],
    data: [
      {
        title: "Data Analyst Intern",
        subtitle: "Global Shala",
        date: "June 2022 - July 2022",
        content: [
          "Global Shala decided to discontinue some of theirs campaigns.",
          "We visualized the data and recommended to dicontinue 2 ineffective campaign.",
          "We strengthened campaign by cutting 18 percent cost on campaign that were less effective and focus on effective ones",
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
          title: "Masters in Artificial Intelligence",
          subtitle:
            "London Metropolitan University, London",
          date: "2025-Present",
          content: [],
        },
        {
          title: "Bachelor of Computer Science",
          subtitle:
            "National University of Computer and Emerging Science, Karachi",
          date: "2020 - 2024",
          content: [],
        },
        {
          title: "Higher Secondary Certificate [HSC]",
          subtitle:
            "Khawaja Fareed Government College. College, Rahim Yar Khan",
          date: "2016 - 2020",
          content: [],
        },
      ],
    },
    {
      title: ["Freelance Work"],
      data: [
        {
          title: "Data Science & AI Development",
          content: [
            "Developed AI models for prediction and deployed them on AWS",
            "Built RAG applications and document processing systems",
            "Created computer vision and NLP solutions for various clients",
          ],
        },
      ],
    },
  ],
};

//certificate cards
const certifications = {
  certifications: [
    {
      title: "Introduction to Data Science-Specialization",
      subtitle: "IBM",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://coursera.org/share/ad89f0259a322a405d740f7cf99139b5",
      alt_name: "IBM",
      color_code: "#000000",
    },
    {
      title: "Data Science-Specialization",
      subtitle: "IBM",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://coursera.org/share/a54ab35b893b98437d0a27800ff2ab2d",
      alt_name: "IBM",
      color_code: "#000000",
    },
    {
      title: "Data Analytics-Specialization",
      subtitle: "Google",
      logo_path: "google_logo.png",
      certificate_link:
        "https://coursera.org/share/fd14aa662860318468680779424d03fc",
      alt_name: "Google",
      color_code: "#000000",
    },
    {
      title: "Applied Data Science-Specialization",
      subtitle: "IBM",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://coursera.org/share/3b9f1dd069ef35fb52fa80508c00340f",
      alt_name: "IBM",
      color_code: "#000000",
    },
    {
      title: "Machine Learning-Specialization",
      subtitle: "IBM",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://coursera.org/share/31c5e8a2a5e3e4943c1a0a53b86a9a3c",
      alt_name: "IBM",
      color_code: "#000000",
    },
    {
      title: "Advanced Data Analytics-Specialization",
      subtitle: "Google",
      logo_path: "google_logo.png",
      certificate_link:
        "https://coursera.org/share/d201277d1be8e322eff1a3e7b1ad6111",
      alt_name: "Google",
      color_code: "#000000",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "contact.jpg",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI and Data science.",
  },
  addressSection: {},
  phoneSection: {},
};

//contact icons
const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/waleedgul92",
    iconifyClassname: "simple-icons:hackerrank",
    fontAwesomeIcon: "fa-github",
    backgroundColor: "#181717",
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
  certifications,
  resumeleft,
  resumeright,
};
