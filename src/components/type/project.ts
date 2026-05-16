export type ProjectCategory =
  | "Data Analytics"
  | "Business Intelligence"
  | "Data Engineering";

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  shortDescription: string;
  cover: string;
  overview: string;
  problem: string;
  solution: string;
  results: string;
  tools: string[];
  gallery: string[];
  github?: string;
  demo?: string;
  report?: string;
  videoUrl?: string;
};

export const projects: Project[] = [

  {
    slug: "sugar-trap",
    title: "The Sugar Trap Market Gap Analysis",
    category: "Data Analytics",
    shortDescription: "Identified a hidden opportunity in the healthy snack market using data-driven analysis.",
    cover: "/images/project-1.jpg",
    overview:
      "This project investigates global food and nutrition datasets to understand evolving consumer preferences toward healthier snack alternatives. The aim was to analyze product composition and nutritional profiles to uncover underserved market opportunities in the food industry.",
    problem:
      "The snack food industry is heavily dominated by products high in sugar and processed ingredients. Despite increasing health awareness, there is limited structured data insight highlighting where healthier alternatives are missing in the market.",
    solution:
      "Using Python and exploratory data analysis with Pandas, I cleaned and analyzed nutritional datasets, segmenting products based on sugar levels, protein content, and market distribution. Visualization techniques were applied to identify gaps in product availability.",
    results:
      "The analysis revealed a significant gap in low-sugar, high-protein snack categories, highlighting a clear opportunity for innovation in healthier food product development.",
    tools: ["Python", "Pandas", "Power BI"],
    gallery: ["/images/project-1.jpg"],
    github: "https://github.com/Abdoul-razaq/The-Sugar-Trap-Market-Gap-Analysis",
    report: "https://github.com/Abdoul-razaq/The-Sugar-Trap-Market-Gap-Analysis/blob/main/README.md",
  },

  {
    slug: "logistics",
    title: "Last Mile Logistics Auditor",
    category: "Business Intelligence",
    shortDescription: "Analyzed delivery inefficiencies and customer satisfaction in logistics operations.",
    cover: "/images/project-2.jpg",
    overview:
      "This project focuses on evaluating last-mile delivery performance in an e-commerce logistics system. The objective was to understand how delivery efficiency impacts customer satisfaction and overall operational performance.",
    problem:
      "Customers were experiencing inconsistent delivery times, leading to dissatisfaction and reduced trust in logistics reliability. The lack of clear performance tracking made it difficult to identify the root cause of delays.",
    solution:
      "I used SQL and Power BI to analyze delivery datasets, focusing on delay patterns, route inefficiencies, and customer feedback metrics. This allowed me to build a structured view of operational bottlenecks.",
    results:
      "The analysis showed that inaccurate delivery time estimates were the primary driver of customer dissatisfaction, providing actionable insight for improving logistics planning systems.",
    tools: ["SQL", "Power BI"],
    gallery: ["/images/project-2.jpg"],
    github: "https://github.com/Abdoul-razaq/The-Last-Mile-Logistics-Auditor",
    report: "https://github.com/Abdoul-razaq/The-Last-Mile-Logistics-Auditor/blob/main/README.md",
  },

  {
    slug: "crypto",
    title: "Crypto API Data Pipeline",
    category: "Data Engineering",
    shortDescription: "Built an automated pipeline for real-time cryptocurrency data extraction and monitoring.",
    cover: "/images/project-3.jpg",
    overview:
      "This project involves building a real-time data pipeline to collect and analyze cryptocurrency market data using APIs. The goal was to automate data extraction and enable continuous monitoring of price movements.",
    problem:
      "Manual tracking of cryptocurrency data is inefficient and does not allow real-time decision-making, especially in a highly volatile market environment.",
    solution:
      "I developed an automated Python-based API pipeline to extract, clean, and structure live crypto market data. The pipeline continuously processes incoming data for analysis and visualization.",
    results:
      "The system enabled real-time monitoring of cryptocurrency trends, improving the ability to track market changes and respond quickly to fluctuations.",
    tools: ["Python", "API"],
    gallery: ["/images/project-3.jpg"],
    demo:
      "https://github.com/Abdoul-razaq/Python/blob/main/Automate%20API%20Extraction%20%2B%20Appending%20Data%20%2B%20Extra%20--%20Project.ipynb",
    report:
      "https://drive.google.com/file/d/1rPhxbNfuDSDVqZPW7aGTsxshXhcU5SN5/view?usp=sharing",
  },

  {
    slug: "amazon",
    title: "Amazon Web Scraper",
    category: "Data Engineering",
    shortDescription: "Developed an automated system to track and analyze product pricing trends.",
    cover: "/images/project-4.jpg",
    overview:
      "This project focuses on building a web scraping system to extract product pricing data from Amazon. The objective was to enable automated tracking of price fluctuations over time.",
    problem:
      "There was no efficient system for continuously monitoring product price changes, making it difficult to analyze pricing trends in real time.",
    solution:
      "Using Python and BeautifulSoup, I developed a web scraper that extracts product data, structures it, and prepares it for analysis and monitoring.",
    results:
      "The system successfully enabled automated price tracking, providing structured insights into pricing trends and market fluctuations.",
    tools: ["Python", "BeautifulSoup"],
    gallery: ["/images/project-4.jpg"],
    demo:
      "https://github.com/Abdoul-razaq/Python/blob/main/Amazon%20Web%20Scraper%20Project.ipynb",
    report:
      "https://drive.google.com/file/d/1WiljJlul-IKGKOFeWXvjgohDh-t-svTT/view?usp=sharing",
  },

  {
    slug: "sales-dashboard",
    title: "Sales Overview Dashboard",
    category: "Business Intelligence",
    shortDescription: "Built an interactive Power BI dashboard to monitor sales performance and KPIs.",
    cover: "/images/project-5.jpg",
    overview:
      "This project focuses on analyzing business sales performance through an interactive Power BI dashboard designed to consolidate key performance indicators into a single view.",
    problem:
      "Sales data was fragmented across multiple sources, making it difficult for decision-makers to track performance and identify trends efficiently.",
    solution:
      "I developed a Power BI dashboard with DAX measures and visual analytics to centralize sales data and provide real-time KPI tracking.",
    results:
      "The dashboard improved visibility into business performance and enabled faster, data-driven decision-making across teams.",
    tools: ["Power BI"],
    gallery: ["/images/project-5.jpg"],
    demo:
      "https://drive.google.com/file/d/17qKL3JYIvQlaCRk9Rtn4A9DNlAabwOjw/view?usp=sharing",
    report:
      "https://drive.google.com/drive/folders/1B4f7bdaR4lVO8SRnt1VdWQYCott-1VJr?usp=sharing",
  },

  {
    slug: "customer",
    title: "Customer Analysis Dashboard",
    category: "Business Intelligence",
    shortDescription: "Performed customer segmentation analysis using Tableau for business insights.",
    cover: "/images/project-6.jpg",
    overview:
      "This project analyzes customer data to identify behavioral patterns and segmentation opportunities using Tableau dashboards.",
    problem:
      "The business lacked clear visibility into customer segments, making it difficult to target high-value customers effectively.",
    solution:
      "I built an interactive Tableau dashboard to analyze customer behavior, revenue distribution, and segmentation patterns.",
    results:
      "The analysis identified key customer segments, enabling more targeted business and marketing strategies.",
    tools: ["Tableau"],
    gallery: ["/images/project-6.jpg"],
    demo:
      "https://drive.google.com/file/d/1UiNWYc8LXt5OeHtLojEm9-VChzyLgxA4/view?usp=sharing",
    report:
      "https://drive.google.com/drive/folders/1ZqRrU3gWSQ-Ju6b_Q5TSYJuuFA05lOqm?usp=sharing",
  },

  {
    slug: "atliq",
    title: "AtliQ Sales Analysis",
    category: "Business Intelligence",
    shortDescription: "Analyzed multi-year sales performance to identify key market trends.",
    cover: "/images/project-7.jpg",
    overview:
      "This project explores multi-year sales data to understand revenue trends, market performance, and business growth patterns.",
    problem:
      "The company lacked clarity on declining revenue patterns and underperforming markets.",
    solution:
      "Using Tableau, I built a dashboard to analyze sales trends across regions, products, and time periods.",
    results:
      "The analysis highlighted key high-performing markets and revealed factors contributing to revenue fluctuations.",
    tools: ["Tableau"],
    gallery: ["/images/project-7.jpg"],
    demo:
      "https://drive.google.com/file/d/1Duk-xE8AZlOvY4Hyvf1sCN2TIsQplpNa/view?usp=sharing",
    report:
      "https://drive.google.com/drive/folders/1QUTAms1SS-R70ptO_cyDtOjFGqs11dl1?usp=sharing",
  },

  {
    slug: "eda-layoffs",
    title: "Layoffs EDA (SQL)",
    category: "Data Analytics",
    shortDescription: "Performed exploratory analysis on global layoffs dataset.",
    cover: "/images/project-8.jpg",
    overview:
      "This project analyzes global layoffs data to uncover trends in workforce reductions across industries and time periods.",
    problem:
      "There was limited visibility into which industries and companies were most affected by global layoffs.",
    solution:
      "I used SQL to clean and analyze the dataset, identifying trends, patterns, and correlations in layoffs across sectors.",
    results:
      "The analysis revealed key industry patterns and highlighted economic trends influencing workforce reductions.",
    tools: ["SQL"],
    gallery: ["/images/project-8.jpg"],
    demo:
      "https://github.com/Abdoul-razaq/SQL/blob/main/Explatory%20Data%20Analysis%20PROJECT%20(In%20MySQL).sql",
    report:
      "https://drive.google.com/file/d/16ckV_7LULyR_zno0VoZ8sWIAihx5QTN0/view?usp=sharing",
  },

  {
    slug: "cleaning-layoffs",
    title: "Layoffs Data Cleaning",
    category: "Data Engineering",
    shortDescription: "Cleaned and structured raw layoffs dataset for analysis using SQL.",
    cover: "/images/project-9.jpg",
    overview:
      "This project focuses on cleaning and preparing a raw layoffs dataset to make it suitable for analysis.",
    problem:
      "The dataset contained missing values, inconsistencies, and duplicates, making it unreliable for analysis.",
    solution:
      "I used SQL techniques to clean, standardize, and structure the dataset for analytical use.",
    results:
      "The cleaned dataset became fully analysis-ready, enabling accurate exploration of layoffs trends.",
    tools: ["SQL"],
    gallery: ["/images/project-9.jpg"],
    demo:
      "https://github.com/Abdoul-razaq/SQL/blob/main/Data%20Cleaning%20PROJECT%20(In%20MySQL).sql",
    report:
      "https://drive.google.com/file/d/1TPZmnhUVtwKcBatB5aK9rCZVjlseKjc8/view?usp=sharing",
  },
];

export const categories: ProjectCategory[] = [
  "Data Analytics",
  "Business Intelligence",
  "Data Engineering",
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}