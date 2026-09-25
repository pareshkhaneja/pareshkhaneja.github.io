export const siteConfig = {
  name: "Paresh Khaneja",
  title: "Senior SDET | AI-First Quality Engineering",
  location: "Gurgaon, Haryana, India",
  status: "Open to opportunities",
  url: "https://pareshkhaneja.github.io",
  portraitUrl: "/images/portrait.jpg",
  githubUsername: "pareshkhaneja",
  repoUrl: "https://github.com/pareshkhaneja/pareshkhaneja.github.io",
  resumeUrl: "/CV.pdf",
  social: {
    github: "https://github.com/pareshkhaneja",
    linkedin: "https://in.linkedin.com/in/paresh-khaneja-8617045a",
  },
  emailMe: "mailto:paresh.khaneja@globallogic.com",
  heroBio:
    "Senior SDET with 9+ years of experience delivering test automation, data platform validation, and AI-powered quality engineering. I help teams build reliable data pipelines, intelligent test frameworks, and scalable automation that accelerates release confidence.",
  skillTags: [
    "Python",
    "Microsoft Fabric",
    "PySpark",
    "pytest",
    "Selenium",
    "CI/CD",
    "JMeter",
    "Power BI",
    "Azure",
    "LLMs & AI Agents",
  ],
  heroStats: [
    { label: "9+ Years of Experience", icon: "chart" },
    { label: "AI-First Mindset", icon: "sparkles" },
    { label: "Data Platform Expertise", icon: "database" },
    { label: "Modern Tech Stack", icon: "cloud" },
    { label: "Focus: Automation | Data Quality | AI Agents", icon: "target" },
    { label: "Based in Gurgaon, India", icon: "map" },
  ],
  expertise: {
    title: "Expertise",
    subtitle: "Key areas I work on and continue to explore with AI.",
    linkLabel: "View all skills",
    items: [
      {
        title: "AI-Assisted Testing",
        description:
          "Leveraging AI and LLMs for intelligent test generation, analysis, and autonomous validation workflows.",
        tone: "blue",
        icon: "bot",
      },
      {
        title: "Data Platform Testing",
        description:
          "End-to-end validation of modern data platforms including Microsoft Fabric, lakehouses, and ETL pipelines.",
        tone: "green",
        icon: "database",
      },
      {
        title: "Test Automation",
        description:
          "Building scalable UI, API, and integration automation with pytest, Selenium, and CI/CD pipelines.",
        tone: "purple",
        icon: "cog",
      },
      {
        title: "Quality Engineering",
        description:
          "Embedding quality gates, metrics, and reliability practices across the software delivery lifecycle.",
        tone: "orange",
        icon: "chart",
      },
      {
        title: "Modern Tools",
        description:
          "Working with Azure, Power BI, JMeter, and cloud-native tooling for observability and performance.",
        tone: "red",
        icon: "cloud",
      },
    ],
  },
  featuredProject: {
    title: "Featured Project",
    subtitle: "An AI-powered solution built to solve real-world data quality challenges.",
    linkLabel: "View project on GitHub",
    githubUrl: "https://github.com/pareshkhaneja",
    name: "ADVP",
    fullName: "Autonomous Data Validation Platform",
    description:
      "ADVP is an AI-powered autonomous data validation platform designed to detect anomalies, validate data quality, and provide explainable insights across modern data stacks.",
    tags: [
      "Python",
      "Microsoft Fabric",
      "PySpark",
      "LLMs",
      "Data Validation",
      "Azure",
      "GitHub Actions",
    ],
    features: [
      "Autonomous Validation",
      "Data Quality & Anomaly Detection",
      "Explainable Insights",
      "Modern Data Stack",
      "CI/CD Integration",
    ],
    forks: 12,
    stars: 4,
    updatedLabel: "Updated 2 weeks ago",
    screenshotUrl: "/images/advp-dashboard.svg",
  },
  experience: {
    title: "Experience",
    subtitle: "My professional journey.",
    items: [
      {
        company: "GlobalLogic",
        role: "SDET / QA Lead",
        period: "2022 - Present",
        logo: "globallogic",
      },
      {
        company: "Qualys",
        role: "QA Automation Engineer",
        period: "2019 - 2022",
        logo: "qualys",
      },
      {
        company: "Previous Company",
        role: "QA Engineer",
        period: "2017 - 2019",
        logo: "generic",
      },
    ],
  },
  contactCta: {
    title: "Let's Build Intelligent Quality Solutions",
    description:
      "Interested in test automation, data platform quality, or AI-assisted validation? Let's connect and explore how we can collaborate.",
    linkedinLabel: "LinkedIn",
    githubLabel: "GitHub",
    emailLabel: "Email Me",
  },
  nav: [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#expertise", label: "Expertise" },
    { href: "#experience", label: "Experience" },
    { href: "#project", label: "Project" },
    { href: "#contact", label: "Contact" },
  ],
  blocklistedRepos: [
    "Desktop-Cleaner",
    "Expense-Tracker",
    "Auto-Power-VM",
    "pareshkhaneja.github.io",
  ],
  featuredRepos: ["Selenium-Projects"],
} as const;
