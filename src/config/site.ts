export const siteConfig = {
  name: "Paresh Khaneja",
  title: "QA & Test Automation Engineer",
  location: "Gurgaon, Haryana, India",
  description:
    "Quality assurance professional focused on test automation, software reliability, and collaborative delivery.",
  url: "https://pareshkhaneja.github.io",
  avatarUrl: "https://avatars.githubusercontent.com/u/18072873?v=4",
  githubUsername: "pareshkhaneja",
  repoUrl: "https://github.com/pareshkhaneja/pareshkhaneja.github.io",
  featuredRepos: ["Selenium-Projects"],
  blocklistedRepos: [
    "Desktop-Cleaner",
    "Expense-Tracker",
    "Auto-Power-VM",
    "pareshkhaneja.github.io",
  ],
  social: {
    github: "https://github.com/pareshkhaneja",
    linkedin: "https://in.linkedin.com/in/paresh-khaneja-8617045a",
  },
  resumeUrl: "/CV.pdf",
  expertise: [
    {
      title: "Test automation",
      description:
        "Designing maintainable UI and API automation that scales with product velocity.",
    },
    {
      title: "API & UI testing",
      description:
        "Validating critical paths, edge cases, and regression risk across the stack.",
    },
    {
      title: "CI quality gates",
      description:
        "Embedding checks in pipelines so defects surface early, not in production.",
    },
    {
      title: "Reliability engineering",
      description:
        "Stressing systems for stability, observability, and predictable releases.",
    },
    {
      title: "Tooling & frameworks",
      description:
        "Selenium and modern test stacks—choosing pragmatic tools for the team.",
    },
  ],
  about: [
    "Hello / Namaskar! I am a quality assurance professional who loves testing software and ensuring its reliability.",
    "I enjoy automating processes and tackling complex software challenges. Committed to continuous learning and sharing knowledge, I thrive in collaborative environments where innovation and improvement are encouraged.",
    "This site highlights my public work and how I think about quality—practical automation, clear signals, and shipping with confidence.",
  ],
} as const;
