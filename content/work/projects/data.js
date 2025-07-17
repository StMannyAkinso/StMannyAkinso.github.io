const projects = [
  {
    title: "Smyrna E-Commerce",
    metaDescription: "Full-featured e-commerce platform built with vanilla PHP and MySQL.",
    description:
      "Built a fully functional online store with product listings, cart, checkout, and admin panel. Optimised for performance and security, with a clean and responsive UI.",
    tech: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
    link: "https://smyrna-store.example.com", // Replace with actual URL if public
    images: "smyrna", // Folder path like /assets/projects/smyrna/
    tags: ["E-Commerce", "Client", "Full-Stack"],
    private: true,
  },
  {
    title: "Climate Data Dashboard",
    metaDescription: "Interactive dashboard visualising climate metrics for local governance.",
    description:
      "Developed a data visualisation tool for Lambeth Council using D3.js and Python backend APIs. Helped stakeholders understand CO2 patterns and energy trends in real time.",
    tech: ["D3.js", "Python", "Flask", "PostgreSQL"],
    link: "",
    images: "climate-dashboard",
    tags: ["Data Visualisation", "Public Sector", "Climate"],
    private: false,
  },
  {
    title: "Football Analytics",
    metaDescription: "Machine learning model for football performance prediction and scouting.",
    description:
      "Created a full ML pipeline using Python for predicting player performance. Delivered insights via dashboards and model reports for sports analysts.",
    tech: ["Python", "scikit-learn", "Pandas", "Matplotlib"],
    link: "",
    images: "football-analytics",
    tags: ["Machine Learning", "Sports", "Analytics"],
    private: false,
  },
  {
    title: "Real Estate Analysis Tool",
    metaDescription: "Web app for real estate data analysis and price prediction.",
    description:
      "Built an interactive tool for analysing housing trends and forecasting prices using regression models. Integrated map-based filters and predictive analytics.",
    tech: ["React", "Node.js", "Express", "TensorFlow.js"],
    link: "",
    images: "real-estate",
    tags: ["Real Estate", "Predictive Analytics", "Web App"],
    private: false,
  },
  {
    title: "E-Commerce Optimisation",
    metaDescription: "Backend revamp of an e-commerce site to boost performance and UX.",
    description:
      "Enhanced cart logic, reduced load times, and implemented caching and CDN strategy. Delivered improved user satisfaction and increased conversion rate.",
    tech: ["Node.js", "Redis", "MongoDB", "NGINX"],
    link: "",
    images: "ecommerce-optimisation",
    tags: ["Performance", "E-Commerce", "Backend"],
    private: true,
  },
  {
    title: "Algorithmic Trading System",
    metaDescription: "Developed an automated trading bot using MQL5 with AWS deployment.",
    description:
      "Built a robust trading bot using technical indicators, deployed on AWS with cloud monitoring, logging, and notification features.",
    tech: ["MQL5", "AWS", "Python", "CloudWatch"],
    link: "",
    images: "trading-bot",
    tags: ["Finance", "Automation", "Cloud"],
    private: false,
  },
  {
    title: "Financial Market Dashboard",
    metaDescription: "Dashboard for real-time financial market metrics and trends.",
    description:
      "Created a sleek dashboard UI with interactive charts, alerts, and historical trend analysis, backed by financial APIs and WebSockets.",
    tech: ["React", "Chart.js", "Node.js", "WebSocket"],
    link: "",
    images: "finance-dashboard",
    tags: ["Finance", "Dashboard", "Frontend"],
    private: false,
  },
];

export default projects;
