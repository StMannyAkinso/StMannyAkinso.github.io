const projects = [
  {
    title: "Smyrna E-Commerce",
    metaDescription:
      "A full-scale e-commerce ecosystem, hand-built from scratch in vanilla PHP—complete with proprietary CMS, virtual currency, and intelligent analytics.",
    description:
      "Engineered a robust, end-to-end commerce platform without relying on third-party frameworks. From secure authentication to seamless payment workflows and dynamic admin interfaces, Smyrna represents a powerful synthesis of performance, elegance, and control. Designed to rival enterprise platforms while staying featherweight and bespoke.",
    highlights: [
      "Built a custom PHP backend with handcrafted MySQL schema",
      "Architected a virtual currency system for seamless transactions",
      "Implemented bank-level authentication and payment processing",
      "Engineered a full-featured CMS tailored for rapid content iteration",
      "Crafted a sleek, mobile-first interface using Bootstrap",
      "Integrated analytics for real-time sales intelligence",
      "Developed a modular admin dashboard for strategic operations",
      "Optimised every layer—from SQL queries to SEO indexing",
    ],
    tech: ["PHP", "MySQL", "Tailwind", "JavaScript"],
    link: "https://www.land-smyrna.com",
    images: "smyrna",
    tags: ["E-Commerce", "Full-Stack", "Frontend Design", "Database Management", "Backend Architecture"],
    private: false,
  },

  {
    title: "Climate Data Dashboard",
    metaDescription:
      "An immersive, real-time data visualisation tool transforming raw climate metrics into crystal-clear governance insights.",
    description:
      "Collaborated with Lambeth Council to empower policy makers with a rich, interactive dashboard that visualises environmental KPIs with surgical precision. By weaving together D3.js, Python, and geospatial logic, the tool became instrumental in making climate action quantifiable, explainable, and actionable.",
    highlights: [
      "Built interactive D3.js visualisations for complex climate datasets",
      "Automated data pipelines using Python for real-time accuracy",
      "Crafted geospatial insights via custom choropleth mapping",
      "Designed ultra-responsive interfaces with Tailwind CSS",
      "Enabled stakeholders to explore emissions and energy trends visually",
    ],
    tech: ["D3.js", "Python", "Tailwind CSS", "Microsoft Excel"],
    link: "https://lambeth-open-data.github.io/climate_action_plan/kpis.html",
    images: "climate-dashboard",
    tags: ["Data Visualisation", "Public Sector", "Climate"],
    private: false,
  },

  {
    title: "Lambeth Open Data Platform",
    metaDescription:
      "An open civic data gateway transforming complex datasets into shared public value.",
    description:
      "Instrumental in delivering a next-generation open data platform for Lambeth Council—bridging the gap between government transparency and citizen engagement. Delivered data upload, REST API endpoints, and embedded visualisation tools—all with a clean, intuitive UX.",
    highlights: [
      "Created a frictionless UI for real-time data exploration",
      "Engineered secure data ingestion and upload workflows",
      "Exposed RESTful APIs to enable developer ecosystem growth",
      "Ensured adherence to UK Open Data Standards (ODS)",
      "Drove public participation through accessible, embeddable tools",
    ],
    tech: ["D3.js", "Tailwind CSS", "JavaScript", "Python", "Microsoft Excel"],
    link: "https://lambeth-data-pack-2023.github.io/index.html",
    images: "lambeth-open-data",
    tags: ["Open Data", "Civic Tech", "Community"],
    private: false,
  },

  {
    title: "Football Analytics Dashboard",
    metaDescription:
      "AI-driven sports intelligence: a predictive platform for elite performance scouting and real-time player insights.",
    description:
      "Built a complete machine learning pipeline to predict player performance, revolutionising how data informs scouting and tactical decisions. Delivered with precision dashboards and model explainability for sports analysts.",
    highlights: [
      "Trained predictive models using scikit-learn and Pandas",
      "Integrated multi-stage data preprocessing and feature engineering",
      "Visualised outcomes using Matplotlib and custom dashboards",
      "Optimised ML pipeline for iterative performance tuning",
      "Enabled metric-driven talent scouting and match predictions",
    ],
    tech: ["Python", "Pandas", "Matplotlib", "Tailwind CSS", "JavaScript"],
    link: "",
    images: "football-analytics",
    tags: ["Machine Learning", "Sports", "Analytics"],
    private: true,
  },

  {
    title: "Real Estate Management Tool",
    metaDescription:
      "A predictive analytics engine for housing markets—merging geospatial logic with AI pricing models.",
    description:
      "Delivered a real estate platform with intelligent price forecasting, map-based visualisation, and deep analytics. Fused React, TensorFlow.js, and geographic filtering to provide actionable investment insights in real time.",
    highlights: [
      "Built regression models to forecast property prices with accuracy",
      "Integrated TensorFlow.js for on-device machine learning",
      "Developed interactive maps to explore housing trends spatially",
      "Designed a dynamic frontend using React and Tailwind CSS",
      "Connected a Node.js backend to process live market data",
    ],
    tech: ["Next.js", "Django", "Python", "JavaScript"],
    link: "",
    images: "real-estate",
    tags: ["Real Estate", "Predictive Analytics", "Web App"],
    private: true,
  },

  {
    title: "Multi-Tenant E-Commerce Platform",
    metaDescription:
      "A high-scale e-commerce engine with plug-and-play storefronts—built for growth-stage businesses.",
    description:
      "Designed a multi-tenant architecture enabling businesses to instantly launch their own branded storefronts—complete with dynamic catalogues, role-based dashboards, and modular components. This SaaS-style platform mirrors the complexity of Shopify, minus the bloat.",
    highlights: [
      "Built tenant-isolated storefronts using Django and Redis",
      "Integrated Stripe and custom checkout pipelines",
      "Crafted a modular UI layer with Next.js and Tailwind CSS",
      "Delivered centralised tenant management for scale",
      "Engineered for high concurrency and security from day one",
    ],
    tech: ["Django", "Redis", "Next.js", "Tailwind CSS"],
    link: "",
    images: "ecommerce-optimisation",
    tags: ["Performance", "E-Commerce", "Backend"],
    private: true,
  },

  {
    title: "Algorithmic Trading Platform",
    metaDescription:
      "An AI-powered trading bot designed for precision execution—deployed and monitored in the AWS cloud.",
    description:
      "Architected a cloud-deployed trading system that combines predictive modeling, automated execution, and real-time cloud observability. This mission-critical system operates in production, executing trades using a custom strategy built with gradient boosting.",
    highlights: [
      "Built a proprietary trading bot using Python and MQL5",
      "Engineered a gradient boosting pipeline for signal prediction",
      "Developed frontend architecture in Next.js for real-time monitoring",
      "Deployed to AWS with integrated logging and alerting via CloudWatch",
      "Designed for resilience, scalability, and autonomous decision-making",
    ],
    tech: ["MT5", "AWS", "Python", "Django", "Next.js"],
    link: "",
    images: "trading-bot",
    tags: ["Finance", "Automation", "Cloud"],
    private: true,
  },
];

export default projects;
