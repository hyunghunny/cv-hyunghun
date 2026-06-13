import { CVData } from "./types";

export const cvData: CVData = {
  personal: {
    fullName: "Hyunghun Cho",
    title: "Senior AI Researcher",
    email: "hyunghunny@gmail.com",
    location: "Hwaseong, South Korea",
    website: "https://github.com/hyunghunny",
    github: "github.com/hyunghunny",
    linkedin: "linkedin.com/in/hyunghun-cho-94595394",
    summary: "I am an AI Researcher with a Ph.D. in Engineering from Seoul National University, dedicated to bridging the gap between theoretical AI optimization and practical, resource-constrained industrial applications. My career is defined by a unique transition from a veteran Software Engineer to an AI Researcher, enabling me to build end-to-end, production-ready machine learning pipelines."
  },
  education: [
    {
      id: "edu-1",
      degree: "PH. D. IN ENGINEERING",
      school: "Seoul National University",
      location: "Seoul, South Korea",
      date: "2017-03 ~ 2021-08",
      gpa: "3.96 / 4.5",
      dissertation: "Robust Algorithms for Hyperparameter Optimization of Deep Neural Networks",
      advisor: "Wonjong Rhee"
    },
    {
      id: "edu-2",
      degree: "M.S. IN ENGINEERING",
      school: "Seoul National University",
      location: "Seoul, South Korea",
      date: "2015-03 ~ 2017-02",
      gpa: "3.97 / 4.5",
      advisor: "Wonjong Rhee",
      dissertation: "A Study on Hyperparameter Optimization Strategy Utilizing Training Time in Deep Neural Networks"
    },
    {
      id: "edu-1781335329471",
      degree: "B.S. IN COMPUTER SCIENCE AND ENGINEERING",
      school: "ChungAng University",
      location: "Seoul, Korea",
      date: "1997-03 ~ 2005-02",
      dissertation: "",
      advisor: ""
    }
  ],
  workExperience: [
    {
      id: "exp-1781336201430",
      role: "AI Researcher & Hematology AI Lead",
      company: "Noul Co., Ltd.",
      location: "Yongin, Korea",
      startDate: "2022-02",
      endDate: "2026-03",
      description: [
        "Developed embedded AI models for precise diagnosis on top of the automated microscopy platform.",
        "Evaluated validation performance in hematology, such as malaria diagnosis and blood cell morphology."
      ]
    },
    {
      id: "exp-1",
      role: "Postdoctoral Researcher",
      company: "SNU Center for AI Education and Research",
      location: "Suwon, South Korea",
      startDate: "2021-09",
      endDate: "2022-02",
      description: [
        "Developed 'B2EA: General-Purpose Algorithm for Hyperparameter Optimization and Network Architecture Search of Deep Neural Networks'.",
        "Developed a state-of-the-art automatic machine learning algorithm."
      ]
    },
    {
      id: "exp-2",
      role: "Senior Software Engineer",
      company: "Samsung Electronics, S/W Center",
      location: "Suwon, South Korea",
      startDate: "2014-03",
      endDate: "2015-02",
      description: [
        "Developed Tizen Compliance Tests for Tizen Web APIs (WebTCT).",
        "Provided solutions for software quality engineering, such as a coding rule checker and a bug detector."
      ]
    },
    {
      id: "exp-3",
      role: "Software Engineer",
      company: "Samsung Electronics, S/W Laboratory",
      location: "Seoul, South Korea",
      startDate: "2005-08",
      endDate: "2014-02",
      description: [
        "Composed a C/C++ program of unit-testing framework on the embedded S/W of various digital devices.",
        "Provided test automation solutions, especially for mobile devices.",
        "Designed Device Web APIs on top of HTML5.",
        "Developed a Web application SDK for creating technological convergence programs (now part of the Tizen SDK)."
      ]
    }
  ],
  teachingExperience: [
    {
      id: "teach-1",
      role: "Teaching Assistant",
      company: "SNU-Samsung DS² Coursework",
      location: "Seoul, Korea",
      startDate: "August 2018",
      endDate: "December 2019",
      description: [
        "Instructed courses in Machine Learning applications for group structures.",
        "Prepared materials and open-source assets available at https://github.com/snu-adsl/s2-ds2."
      ]
    },
    {
      id: "teach-2",
      role: "Teaching Assistant",
      company: "Seoul National University",
      location: "Seoul, Korea",
      startDate: "August 2017",
      endDate: "July 2018",
      description: [
        "Academic courses: 2018 1st Semester - Machine Learning.",
        "Academic courses: 2017 2nd Semester - Neural Networks."
      ]
    },
    {
      id: "teach-1781338106230",
      role: "Lecturer",
      company: "Free Public Talks",
      location: "Seoul, Korea",
      startDate: "2014-03",
      endDate: "2018-12",
      description: [
        "Brief introduction to Internet of Things for all."
      ]
    }
  ],
  skills: [
    {
      id: "skill-3",
      categoryName: "AI & Data Science",
      skills: [
        "PyTorch",
        "TensorFlow",
        "Scikit-Learn"
      ]
    },
    {
      id: "skill-4",
      categoryName: "Cloud & DevOps Tools",
      skills: [
        "Docker & Containers",
        "Google Cloud Platform",
        "AWS (S3/ECS)",
        "CI/CD",
        "Git Version Control"
      ]
    },
    {
      id: "skill-1781335615489",
      categoryName: "Languages",
      skills: [
        "Python",
        "JavaScript",
        "Java",
        "C/C++",
        "Scala"
      ]
    }
  ],
  projects: [
    {
      id: "proj-1",
      name: "DEEP-BO",
      description: "Robust Bayesian optimization method for hyperparameter optimization of deep networks. Supports basic enhancement strategies such as diversification, parallelization, early termination, and cost function transformation.",
      technologies: [
        "TensorFlow",
        "PyTorch"
      ],
      url: "https://github.com/snu-adsl/DEEP-BO"
    },
    {
      id: "proj-2",
      name: "Energy Saving Dashboard",
      description: "Real-time power usage monitoring system based on an IoT platform with 1 Hz sampling sensors. Implemented plots and emoticons for data-driven intervention using the Web API.",
      technologies: [
        "Node.js",
        "HTML5",
        "MongoDB"
      ],
      url: "https://github.com/hyunghunny/EnergyInAction"
    },
    {
      id: "proj-3",
      name: "Do IoT Yourself",
      description: "Hands-on project of the Internet of Things with Arduino and REST API.",
      technologies: [
        "Node.js",
        "HTML5",
        "Arduino"
      ],
      url: "https://github.com/hyunghunny/DIoTY"
    }
  ],
  languages: [
    {
      id: "lang-1",
      name: "Korean",
      proficiency: "Native"
    },
    {
      id: "lang-2",
      name: "English",
      proficiency: "Professional Working Proficiency"
    }
  ],
  publications: [
    {
      id: "pub-1",
      authorsAndTitle: "H. Cho, Y. Kim, E. Lee, D. Choi, Y. Lee and W. Rhee, \"Basic Enhancement Strategies When Using Bayesian Optimization for Hyperparameter Tuning of Deep Neural Networks\"",
      venueAndDetails: "IEEE Access, vol. 8, pp. 52588-52608, 2020",
      url: "https://doi.org/10.1109/ACCESS.2020.2981072"
    },
    {
      id: "pub-2",
      authorsAndTitle: "H. Cho and S. Ryu, \"REST to JavaScript for better client-side development\"",
      venueAndDetails: "Proceedings of the 23rd International Conference on World Wide Web (WWW '14 Companion). ACM, New York, NY, USA, pp. 937–942, 2014",
      url: "https://doi.org/10.1145/2567948.2579219"
    },
    {
      id: "pub-1781338947142",
      authorsAndTitle: "Hyunghun Cho, Adam Balint, Creto Kanyemba, 'Edge-Optimized Cascaded Deep Learning for Automated Malaria Diagnosis: Enhancing Sensitivity and Efficiency on Resource-Constrained Devices'",
      venueAndDetails: "MICCAI-AMAI, Daejeon, Korea, 4th, 2025",
      url: "https://sites.google.com/view/amai2025/home"
    }
  ],
  scholarUrl: "https://scholar.google.com/citations?user=4YgXo_wAAAAJ&hl=ko",
  certifications: [
    {
      id: "cert-1",
      name: "Google Cloud Professional Cloud Architect (PCA)",
      issuer: "Google Cloud",
      year: "2024"
    },
    {
      id: "cert-2",
      name: "AWS Certified Solutions Architect – Associate",
      issuer: "Amazon Web Services",
      year: "2023"
    },
    {
      id: "cert-3",
      name: "Specialization in Deep Learning and Generative AI",
      issuer: "DeepLearning.AI",
      year: "2022"
    }
  ]
};
