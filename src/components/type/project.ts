export type ProjectCategory =
  | "Machine Learning"
  | "Data Analytics"
  | "Business Intelligence"
  | "Data Engineering";

export type ToolDetail = {
  name: string;
  description: string;
};

export type ProjectStep = {
  number: number;
  title: string;
  description: string;
};

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
  pysparkCode?: string;
  videoUrl?: string;
  dataSource?: string;
  toolDetails?: ToolDetail[];
  steps?: ProjectStep[];
};

export const projects: Project[] = [

  {
    slug: "diabetes-prediction",
    title: "Diabetes Prediction System",
    category: "Machine Learning",
    shortDescription: "Built a machine learning model to predict pre-existing diabetes diagnoses in ICU patients.",
    cover: "/images/Project-1.webp",
    overview:
      "Imagine someone gets rushed to a hospital's Intensive Care Unit (ICU) — the ward for the most critically ill patients. Doctors need to treat them fast, but often they don't yet know the patient's full medical history (the person might be unconscious, or their old records haven't arrived yet). One important thing doctors want to know quickly: does this patient already have diabetes? That knowledge changes how they read blood sugar levels and other vital signs.\n\nSo the problem was: can we build a computer program that guesses \"yes, this patient likely has diabetes\" or \"no, they probably don't\" — using only the information collected in the patient's first 24 hours in the ICU?",
    problem:
      "Doctors must make immediate clinical decisions for critically ill ICU patients, but vital medical history (like diabetes status) is frequently missing or delayed. Without this context, interpreting blood sugar levels and other vitals becomes highly error-prone, which can severely compromise emergency patient care.",
    solution:
      "A high-performance machine learning pipeline built using LightGBM and validated using 5-fold stratified cross-validation. The project includes extensive exploratory data analysis on a dataset of over 130,000 anonymized ICU patients with 180+ features, handling data imputation (like replacing implausible age 0 values), addressing class imbalances, encoding categorical variables via one-hot encoding, and feature engineering (calculating BMI categories and a comorbidity health risk score).",
    results:
      "The final model achieved a strong predictive performance of 0.87 AUC, outperforming the Logistic Regression baseline model. The workflow is thoroughly documented in a public GitHub repository and Google Colab notebook containing evaluations, clinical feature importance analyses, and the final predicted submission file.",
    tools: ["Python", "Google Colab", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-learn", "LightGBM"],
    gallery: ["/images/Project-1.png"],
    github: "https://github.com/Abdoul-razaq/Diabetes-Detection-Model",
    demo: "https://colab.research.google.com/drive/15ifbHAmdWu5gtB2xE768Jac8BuPWhAIU?usp=sharing",
    dataSource: "WiDS Datathon 2021 (Women in Data Science) hosted on Kaggle, containing anonymized data from over 130,000 real ICU patients with ~180 clinical features.",
    toolDetails: [
      { name: "Google Colab", description: "Cloud-based notebook environment where all the code runs, allowing live visualization of results, charts, and statistics." },
      { name: "Python", description: "The core programming language used to build the data analysis and modeling pipeline." },
      { name: "Pandas", description: "Used to open the clinical CSV files, handle row/column manipulation, and execute spreadsheet-like queries." },
      { name: "NumPy", description: "Powers scientific computations and fast array manipulations behind the scenes." },
      { name: "Matplotlib & Seaborn", description: "Used to design diagnostic visuals including demographic distributions, missingness bar charts, and the final model's confusion matrix." },
      { name: "Scikit-learn", description: "Utilized for data splitting (stratification), metric evaluations (AUC, F1, confusion matrix), and building the baseline Logistic Regression model." },
      { name: "LightGBM", description: "A high-performance tree-based gradient boosting framework used as the primary classifier to discover non-linear combinations across all 180+ features." }
    ],
    steps: [
      { number: 1, title: "Exploratory Data Analysis (EDA)", description: "Analyzed dataset size (130K patients, 180 columns), mapped missing values, and identified a 1-in-5 class imbalance (78% non-diabetic vs 22% diabetic)." },
      { number: 2, title: "Data Cleaning", description: "Corrected implausible values (like patients recorded with age 0) and handled empty cells by imputing columns with clinical medians or means." },
      { number: 3, title: "Feature Engineering", description: "Engineered BMI categories (underweight/healthy/overweight/obese) and calculated a comorbidity score summing other pre-existing clinical diagnoses." },
      { number: 4, title: "Categorical Encoding", description: "Converted text columns like gender and ethnicity into numerical formats using one-hot encoding for compatibility with machine learning models." },
      { number: 5, title: "Baseline Modeling", description: "Trained a simple Logistic Regression model as a benchmark, establishing a baseline classification threshold." },
      { number: 6, title: "Advanced LightGBM Model", description: "Built and trained a LightGBM classifier with 5-fold stratified cross-validation, protecting against overfitting and validating generalizability." },
      { number: 7, title: "Model Evaluation", description: "Measured final predictive strength, achieving 0.87 AUC. Plotted confusion matrices and analyzed feature importances to verify clinical logic." },
      { number: 8, title: "Prediction Output", description: "Generated predictions on a completely unseen test dataset and formatted the results into a final submission.csv file." }
    ]
  },

  {
    slug: "youtube-trending-analytics-pipeline",
    title: "YouTube Trending Video Data Pipeline",
    category: "Data Engineering",
    shortDescription: "Built a serverless AWS pipeline to analyze trending YouTube data for content marketing insights.",
    cover: "/images/Project-2.jpeg",
    overview:
      "Marketing team wants to run a YouTube campaign, but first they need to answer a basic question: what kind of content actually performs well, and where? Trending video data exists — but it arrives daily, split across ten different country files, in raw CSV and JSON formats that aren't ready to analyze or plug into a dashboard.\n\nSo the problem was: can we build a system that automatically pulls this data in, cleans it, organizes it, and makes it instantly queryable — without anyone manually downloading files or wrangling spreadsheets every day?",
    problem:
      "Marketing teams need to identify which video categories and content types drive the most engagement across regions in order to plan effective campaigns. But trending video data is scattered across multiple regional sources, arrives in raw/messy formats, and isn't structured for repeatable analysis — making it slow and error-prone to work with by hand.",
    solution:
      "A serverless AWS data pipeline built on S3, Lambda, and Glue, following a raw → cleansed → analytics data lake architecture. The project ingests daily trending-video statistics across 10 countries (~200K+ records) using Hive-style partitioning by region, transforms the data through both event-driven (Lambda) and batch (Glue/PySpark) ETL, and registers schema centrally in the AWS Glue Data Catalog — making the cleaned data instantly queryable via Athena for engagement and content-performance analysis, without ever loading it into a separate database.",
    results:
      "Delivered an automated, query-ready data lake processing 200K+ trending video records across 10 regions, enabling engagement and category-level analysis to inform video marketing strategy. The workflow is documented in a public GitHub repository with an architecture diagram, and extends an open-source reference implementation with added logging, error handling, and refactored, maintainable code.",
    tools: ["Python", "AWS S3", "AWS Lambda", "AWS Glue", "PySpark", "AWS Athena", "AWS IAM", "AWS Step Functions", "AWS CLI"],
    gallery: ["/images/Project-2.png", "/images/architecture.jpeg"],
    github: "https://github.com/Abdoul-razaq/YouTube-Trending-Video-Analytics",
    pysparkCode: "https://github.com/Abdoul-razaq/YouTube-Trending-Video-Analytics/blob/main/pyspark_code.py",
    dataSource: "Trending YouTube Video Statistics dataset (Kaggle), containing daily trending-video metrics across 10 regions (US, GB, CA, DE, FR, IN, JP, KR, MX, RU).",
    toolDetails: [
      { name: "AWS S3", description: "Object storage forming the data lake — holds the raw, cleansed, and analytics-ready layers of the pipeline." },
      { name: "AWS Lambda", description: "Event-driven compute that automatically transforms incoming JSON reference data to Parquet the moment a new file lands in S3." },
      { name: "AWS Glue", description: "Managed Spark environment used for batch ETL on the larger video-statistics dataset, plus the Data Catalog that tracks schema across all tables." },
      { name: "PySpark", description: "Used within the Glue job to apply schema mapping, resolve data types, drop null fields, and repartition data at scale." },
      { name: "AWS Athena", description: "Serverless SQL engine used to query the cleansed S3 data directly, without provisioning a database." },
      { name: "AWS IAM", description: "Manages access control across S3, Lambda, and Glue so only authorized roles can read or write each data layer." },
      { name: "AWS Step Functions", description: "Orchestrates the pipeline stages — ingestion, transformation, and cataloging — as a single coordinated workflow." },
      { name: "AWS CLI", description: "Used to upload regional source files into S3 with Hive-style partitioning by region." }
    ],
    steps: [
      { number: 1, title: "Data Ingestion", description: "Uploaded raw CSV and JSON trending-video data for 10 regions into an S3 raw layer, partitioned by region using Hive-style folder naming." },
      { number: 2, title: "Event-Driven ETL", description: "Built an AWS Lambda function triggered by S3 uploads that flattens and converts incoming JSON reference data into partitioned Parquet." },
      { number: 3, title: "Batch ETL at Scale", description: "Wrote a PySpark AWS Glue job to transform the larger statistics dataset — applying schema mapping, resolving types, and dropping null fields." },
      { number: 4, title: "Schema Cataloging", description: "Registered all transformed datasets in the AWS Glue Data Catalog, making schema centrally trackable and queryable." },
      { number: 5, title: "Serverless Querying", description: "Used AWS Athena to run SQL directly against the cleansed S3 layer to explore category and regional engagement trends." },
      { number: 6, title: "Pipeline Orchestration", description: "Designed the end-to-end flow — ingestion, transformation, cataloging — to run as a coordinated pipeline via AWS Step Functions." },
      { number: 7, title: "Code Refactoring & Documentation", description: "Extended an open-source reference architecture with structured logging, input validation, error handling, and a documented, attributed README." },
      { number: 8, title: "Business Application", description: "Applied the cleaned dataset to identify content categories and regional patterns most useful for planning a YouTube marketing campaign." }
    ]
  },

  {
    slug: "customer-churn",
    title: "Customer Churn Prediction Model",
    category: "Machine Learning",
    shortDescription: "Built a classification pipeline to predict customer churn for a telecom company.",
    cover: "/images/Project-3.webp",
    overview:
      "You're trying to teach a computer to guess which telecom customers are about to quit (churn) — based on things like their contract type, how long they've been a customer, what services they've signed up for, and how much they pay each month.\n\nYou give the computer facts about a customer — 'month-to-month contract, high monthly bill, no tech support, only 2 months as a customer' — and it learns to predict: 'this customer is probably about to leave.'\n\nThis is called a classification problem in machine learning — 'classification' means you're predicting a category (Churn / No Churn), not a number like a price.",
    problem:
      "Telecom customer churn (cancellation) leads to significant revenue loss. Since retaining a customer is far cheaper than acquiring a new one, businesses need an automated, early-warning classification system to identify at-risk customers so customer success teams can intervene. Crucially, a standard accuracy metric is misleading due to class imbalance, meaning we must optimize specifically to reduce false negatives (maximizing recall on churners).",
    solution:
      "Built an end-to-end classification pipeline utilizing IBM's public Telco Churn dataset. The solution cleans numerical features, encodes categorical items, and addresses a 26.6% churn rate imbalance by applying Synthetic Minority Over-sampling Technique (SMOTE) to the training split. It benchmarks 13 distinct machine learning models (ranging from simple Linear Classifiers to CatBoost and ensembled Stacking) and automates hyperparameter optimization for the top performer.",
    results:
      "The best-performing AdaBoost model was tuned using Optuna to capture 82% of actual churners (82% recall) at an overall test accuracy of 70% on completely held-out data. Feature importance metrics validated that contract length, total tenure, and the absence of technical support are the primary churn triggers, providing actionable insights for marketing and retention teams.",
    tools: ["Python", "Google Colab", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-learn", "XGBoost", "CatBoost", "Optuna", "SMOTE"],
    gallery: ["/images/Project-3.png"],
    github: "https://github.com/Abdoul-razaq/Customer-Churn-Prediction",
    demo: "https://colab.research.google.com/drive/144sqx8HxYM3pTmiKlxJbWgVwZpK4EWGz?usp=sharing",
    dataSource: "IBM's Telco Customer Churn dataset, containing account details, demographics, and service choices for 7,043 telecom customers.",
    toolDetails: [
      { name: "Python", description: "The scripting engine driving data manipulation and machine learning model operations." },
      { name: "Google Colab / Jupyter", description: "The notebook workspace merging source code, results, charts, and workflow documentation." },
      { name: "Pandas", description: "Used to load and manipulate the dataset, handling tabular structures and cleaning missing information." },
      { name: "NumPy", description: "Accelerates vector math operations and array calculations." },
      { name: "Matplotlib & Seaborn", description: "Used to plot demographic counts, correlation matrices, and model benchmarks." },
      { name: "Scikit-learn", description: "Used to scale continuous values, encode text factors, split datasets, and train most of the 13 benchmarked classifiers." },
      { name: "XGBoost & CatBoost", description: "Powerful gradient-boosted tree frameworks tested for high-precision customer classification." },
      { name: "SMOTE (imbalanced-learn)", description: "Synthetic Minority Over-sampling Technique, used to generate realistic synthetic churn data to balance the training set." },
      { name: "Optuna", description: "An automated framework that searched the hyperparameter space to discover optimal settings for AdaBoost." }
    ],
    steps: [
      { number: 1, title: "Exploratory Data Analysis", description: "Profiled 7,043 customers and mapped 21 variables. Used a custom mixed-type association matrix to evaluate correlations and identified the 26.6% churn rate imbalance." },
      { number: 2, title: "Data Cleaning & Imputation", description: "Resolved missing values in total-charges, stripped out non-predictive Customer IDs, and consolidated redundant categorical inputs." },
      { number: 3, title: "Preprocessing & Scaling", description: "Converted string categories into numeric columns using one-hot encoding and scaled tenure and charges to prevent feature magnitude bias." },
      { number: 4, title: "Data Partitioning", description: "Split data into 80% training and 20% validation sets using stratified sampling to guarantee identical churn proportions in both splits." },
      { number: 5, title: "Handling Class Imbalance", description: "Recognized that predicting 'no churn' everywhere yields 73% accuracy but catches 0 churners. Shifted optimization target to Recall (catching true churners)." },
      { number: 6, title: "Multi-Model Benchmarking", description: "Trained and compared 13 classification models side-by-side (Logistic Regression, Random Forests, XGBoost, CatBoost, AdaBoost, Stacking, etc.)" },
      { number: 7, title: "Oversampling with SMOTE", description: "Applied SMOTE to generate synthetic churn examples, creating a balanced 50/50 dataset for the models to learn from during training." },
      { number: 8, title: "Feature Importance Mapping", description: "Inspected model decisions to discover that contract type, internet service category, and lack of support packages are the strongest indicators of churn." },
      { number: 9, title: "AdaBoost Fine-Tuning", description: "Identified AdaBoost as the highest performing model on SMOTE data and tuned its parameters (estimators and learning rate) using Optuna." },
    ],
  },

  {
    slug: "sales-dashboard",
    title: "Sales Overview Dashboard",
    category: "Business Intelligence",
    shortDescription: "Built an interactive Power BI dashboard to monitor sales performance and KPIs.",
    cover: "/images/project-4.jpg",
    overview:
      "This project focuses on analyzing business sales performance through an interactive Power BI dashboard designed to consolidate key performance indicators into a single view.",
    problem:
      "Sales data was fragmented across multiple sources, making it difficult for decision-makers to track performance and identify trends efficiently.",
    solution:
      "I developed a Power BI dashboard with DAX measures and visual analytics to centralize sales data and provide real-time KPI tracking.",
    results:
      "The dashboard improved visibility into business performance and enabled faster, data-driven decision-making across teams.",
    tools: ["Power BI"],
    gallery: ["/images/project-4.jpg"],
    demo:
      "https://drive.google.com/file/d/17qKL3JYIvQlaCRk9Rtn4A9DNlAabwOjw/view?usp=sharing",
    report:
      "https://drive.google.com/drive/folders/1B4f7bdaR4lVO8SRnt1VdWQYCott-1VJr?usp=sharing",
  },

  {
    slug: "california-housing",
    title: "California House Price Prediction Model",
    category: "Machine Learning",
    shortDescription: "Built a regression pipeline to predict median house values for California districts.",
    cover: "/images/Project-5.webp",
    overview:
      "Imagine you're trying to teach a computer to guess the price of houses in California, using old data from 1990. But instead of looking at individual houses, the data is grouped by neighborhoods (called 'districts') — so each row of data represents one neighborhood, not one house.\n\nYou give the computer some facts about a neighborhood — like how many people live there, their average income, how close it is to the ocean, how big the houses tend to be — and it learns to predict: 'based on these facts, the houses here are probably worth about this much money.'\n\nThis is called a regression problem in machine learning — 'regression' just means you're predicting a number (like a price), not a category (like 'cat vs dog').",
    problem:
      "Predicting property values is critical for real estate decisions, mortgage lending, and urban planning. The challenge lies in building a robust regression model using aggregate census data where key features like house count and bedroom count are highly collinear, some metrics are missing, and income distributions vary widely, making simple random sampling prone to bias.",
    solution:
      "An end-to-end regression pipeline built in Python. To prevent sampling bias, the pipeline implements stratified sampling based on median income categories. It includes structured feature engineering to extract rooms-per-household and bedrooms-per-room, builds a data pipeline using Scikit-Learn (medians for missing values, standard scaling, and one-hot encoding), and benchmarks Linear Regression, Decision Trees, and Random Forests.",
    results:
      "The best-performing Random Forest model was optimized with GridSearchCV to yield a final held-out Root Mean Squared Error (RMSE) of ~$46,000, with a 95% confidence interval of $44,072 to $47,973 calculated via SciPy. Feature importances confirmed that median income and proximity to the ocean were the primary predictors, aligning with real-world real estate dynamics.",
    tools: ["Python", "Google Colab", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-learn", "SciPy"],
    gallery: ["/images/Project-5.png"],
    github: "https://github.com/Abdoul-razaq/California_House_Price_Prediction",
    demo: "https://colab.research.google.com/drive/1rgBLdqijANVoDqVoH7vkC3IipIHCTxUJ?usp=sharing",
    dataSource: "1990 California Census dataset, containing geographical coordinates, median incomes, room metrics, and housing prices for 20,640 census districts.",
    toolDetails: [
      { name: "Python", description: "The core programming language used to build the data analysis and modeling pipeline." },
      { name: "Google Colab / Jupyter", description: "Interactive environment hosting the code, visualization outputs, and explanations." },
      { name: "Pandas", description: "Used to handle tabular operations, calculate aggregate metrics, and prepare the dataset." },
      { name: "NumPy", description: "Powers vector math computations and mathematical operations on the matrices." },
      { name: "Matplotlib & Seaborn", description: "Used for spatial mapping of housing prices and plotting feature correlation heatmaps." },
      { name: "Scikit-learn", description: "Used to build preprocessing pipelines (imputation, scaling, one-hot encoding), split the dataset via stratified sampling, and train regressors." },
      { name: "SciPy", description: "Used to compute statistical confidence intervals for the final model error." }
    ],
    steps: [
      { number: 1, title: "Exploratory Data Analysis", description: "Explored 20,640 districts, identified missing bedroom totals, and mapped a $500,001 house value cap that could skew model training." },
      { number: 2, title: "Stratified Sampling", description: "Split the dataset into an 80% training and 20% test set using stratified sampling based on income brackets to ensure representative splits." },
      { number: 3, title: "Feature Engineering", description: "Created new ratio attributes including rooms per household, bedrooms per room, and population per household to isolate denser, higher-quality housing." },
      { number: 4, title: "Pipeline Automation", description: "Built a leakage-safe pipeline that imputes missing bedroom values with district medians, applies standard scaling, and one-hot encodes text attributes." },
      { number: 5, title: "Model Benchmarking", description: "Evaluated Linear Regression (high bias), a Decision Tree (overfit), and a Random Forest Regressor using 10-fold cross-validation." },
      { number: 6, title: "Hyperparameter Optimization", description: "Tuned the Random Forest's number of estimators and max features using GridSearchCV to achieve optimal performance." },
      { number: 7, title: "Feature Importance Validation", description: "Queried the model to determine that median income, ocean proximity, and population density are the main drivers of housing price." },
      { number: 8, title: "Uncertainty Estimation", description: "Tested the final model on hidden test data to find an RMSE of ~$46,000, and calculated a 95% confidence interval ($44K–$48K) using SciPy." }
    ]
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
  "Machine Learning",
  "Data Analytics",
  "Business Intelligence",
  "Data Engineering",
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}