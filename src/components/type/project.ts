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

export type StarMethod = {
  situation: string;
  task: string;
  action: string;
  result: string;
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
  star?: StarMethod;
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
    ],
    star: {
      situation: "I worked on a Diabetes Prediction project using real ICU patient data from the WiDS 2021 Kaggle Datathon Challenge.",
      task: "The goal was to build a model that predicts if a patient in the ICU already has diabetes, using only the data collected in their first 24 hours. This matters because when a patient arrives, doctors often don't have their full medical history yet. A model that can say \"this patient likely has diabetes\" from just vitals and lab results can help doctors act faster.\n\nThere are different types of diabetes. Type 1 is not linked to body weight. Type 2 is more common and often linked to excess weight and low activity. Gestational diabetes happens during pregnancy. According to WHO, diabetes is confirmed when blood sugar levels pass certain limits — for example, a fasting blood sugar at or above 7.0 mmol/L, or a reading at or above 11.1 mmol/L two hours after a glucose test. I used these real medical limits as my Ontology / Guidelines (the rulebook that says what counts as a valid or correct value) to check if the data made sense.",
      action: "I did not rush through the confusing parts. When I found values that broke these WHO limits — like impossible blood sugar numbers — I treated them as Edge Cases (unusual examples that don't fit the normal rules) and checked them carefully instead of deleting them or guessing. I cleaned the full dataset, which had over 130,000 patient records and 181 columns. I filled in missing information carefully instead of using random guesses, and I created two new helpful features: a BMI category and a count of other health problems the patient had. I also made sure to handle the fact that only about 22% of patients in the data had diabetes, so the model would not simply learn to always guess \"no diabetes.\"",
      result: "I first built a simple Logistic Regression model as a baseline, which reached an AUC of 0.82. Then I trained a stronger model, LightGBM, using 5-fold cross-validation, which improved the AUC to 0.87 — meaning the model got noticeably better at telling apart patients with and without diabetes. It also reached an F1 score of 0.57 on the diabetes class, which is a reasonable result given the class imbalance (only about 22% of patients had diabetes)."
    }
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
    demo: "https://github.com/Abdoul-razaq/YouTube-Trending-Video-Analytics/blob/main/pyspark_code.py",
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
    ],
    star: {
      situation: "I built a system on AWS that collects and cleans YouTube trending video data from 10 countries, every day, automatically.",
      task: "The business wanted to plan marketing and promotion campaigns on YouTube — to know which type of content performs best in which country. To answer that question, they needed clean, ready-to-use data every day, without someone manually downloading and cleaning CSV files each time. The system had to work on its own, and it had to handle two very different kinds of data — one small file and one big file.",
      action: "I did not use the same method for both files. For the small file (category names), I used a tool called AWS Lambda. It runs by itself the moment a new file arrives, cleans it, and saves it in a fast format called Parquet. For the big file (video statistics), I used a tool called Glue with PySpark, which is better for large amounts of data. This tool only loads the country data it actually needs, instead of loading everything and filtering it later — this saves time and cost. I organized the files saved by country, so the system could quickly find what it needed instead of scanning everything. I used a shared rulebook called the AWS Glue Data Catalog, so different tools like Athena could read the same data without confusion. I used Step Functions to control the order things run in, and IAM roles to make sure each part of the system could only touch the data it was allowed to.",
      result: "Instead of someone manually pulling and cleaning YouTube data every time the marketing team wanted to ask \"what content works best in which country,\" that data is already sitting there, clean and ready to query with SQL. The system runs by itself and stays reliable without me checking it manually every day. As limitations it does not have automatic tests yet, and I would add that next."
    }
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
    star: {
      situation: "I worked on a Customer Churn Prediction project using data from a telecom company — 7,043 customers, with information like their contract type, billing, how long they'd been a customer, and what services they used.",
      task: "The business question was: which customers are likely to leave the company? Here, getting it right mattered more than getting it fast, because missing a customer who is about to leave costs the company much more than a false alarm. So I could not just aim for the highest overall accuracy — I had to aim for the right kind of correctness.",
      action: "I tested eight different models side by side — Logistic Regression, Decision Tree, Random Forest, Gradient Boosting, AdaBoost, XGBoost, CatBoost, and a Linear SVM — plus a combined model made from AdaBoost and Logistic Regression together. Instead of just picking the model with the best overall accuracy, I focused on one specific number: how many of the customers who actually left did the model correctly catch? This is called recall. I also used a method called SMOTE, which creates more examples of the smaller group in the data — in this case, the churners — so the model would not ignore them.",
      result: "The models gave very different results. For example, CatBoost had almost 89% accuracy during training, but its ability to catch actual churners was only around 55%. Other models gave up a little overall accuracy but caught more real churners. This taught me an important lesson: a model can look accurate overall and still fail at the one thing the business cares about. That is the same mindset needed in labeling work — the total amount of work done does not matter if the important cases, like a real obstacle in a drone's path, get labeled wrong."
    }
  },

  {
    slug: "sales-overview-dashboard",
    title: "ABC Group Sales Overview Dashboard",
    category: "Business Intelligence",
    shortDescription: "Designed a comprehensive Power BI dashboard to monitor sales performance, track budget.",
    cover: "/images/project-4.png",
    overview:
      "Businesses generate huge volumes of sales data every day — transactions, customer records, product details, budget allocations — but raw data sitting in a database doesn't help anyone make decisions. Stakeholders need a single, centralized view where they can see how sales are trending, who the top customers and products are, and how actual performance compares to budget, all in real time. So the goal was to build an interactive business intelligence dashboard that pulls raw sales data from a database, cleans and models it properly, and turns it into visuals that management can actually use to track performance and act on.",
    problem:
      "Sales, customer, product, and budget data lived separately in a MySQL Server database with no unified way to analyze it. Without a centralized view, it was difficult to monitor sales trends, spot top-performing products and customers, or track how actual sales compared against budget across time, category, and geography.",
    solution:
      "An end-to-end Power BI solution that imports sales, customer, product, and budget data from MySQL Server, cleans and standardizes it in Power Query, and connects it through a proper star-schema data model (DIM_Products, DIM_Calendar, DIM_Customers linked to FACT_InternetSales and FACT_Budget). DAX measures power dynamic KPIs, and the dashboard surfaces total sales, budget vs. actual performance, top 10 customers, top 10 products, sales by category, and sales by customer city — all filterable by customer city, product category, sub-category, product name, month, and year.",
    results:
      "The dashboard enables real-time tracking of sales vs. budget with dynamic up/down performance indicators, highlights high- and under-performing products and categories, and maps customer distribution by city to support targeting decisions. In the current view, it tracks 22,239,730 in sales against a 21,100,000 budget, a positive variance of 1,139,730.26.",
    tools: ["Power BI", "MySQL Server", "DAX", "Power Query"],
    gallery: ["/images/project-4.png"],
    report: "https://drive.google.com/file/d/1B9jiNPJeJNNo8h6DG6cDrK6ENk10eShI/view?usp=sharing",
    demo: "https://drive.google.com/drive/folders/1B4f7bdaR4lVO8SRnt1VdWQYCott-1VJr?usp=sharing",
    dataSource: "MySQL Server database containing sales transactions, customer details, product information, and budget allocations.",
    toolDetails: [
      { name: "Power BI", description: "Used for data modeling, transformation, and building the interactive dashboard visuals." },
      { name: "MySQL Server", description: "Source system holding the raw sales, customer, product, and budget data." },
      { name: "DAX (Data Analysis Expressions)", description: "Used to build advanced calculations and KPI measures, including Total Sales, Budget vs. Actual Sales, and Top 10 Customers/Products." },
      { name: "Power Query", description: "Used to clean and transform the data, removing nulls and redundant columns, and standardizing dates, numbers, and text formats." }
    ],
    steps: [
      { number: 1, title: "Data Collection", description: "Imported raw sales transactions, customer details, product information, and budget allocations from MySQL Server into Power BI." },
      { number: 2, title: "Data Cleaning & Transformation", description: "Used Power Query to remove null/missing values, delete unnecessary or redundant columns, and standardize date, numerical, and text formats." },
      { number: 3, title: "Data Modeling", description: "Built relationships between DIM_Products, DIM_Calendar, DIM_Customers, FACT_InternetSales, and FACT_Budget to enable cross-table analysis." },
      { number: 4, title: "DAX Calculations", description: "Developed measures for Total Sales, Budget vs. Actual Sales, and Top 10 Customers & Top 10 Products." },
      { number: 5, title: "Dynamic KPIs", description: "Implemented KPI visuals with up/down arrows to indicate performance trends over time." },
      { number: 6, title: "Dashboard Design", description: "Built interactive visuals including Sales by Product Category, Top 10 Customers, Top 10 Products, Budget by Date, and Sales by Customer City, all filterable by city, category, product name, month, and year." }
    ],
    star: {
      situation: "I worked on a Sales Overview Dashboard project, building a business intelligence solution on top of raw sales, customer, product, and budget data stored in MySQL Server.",
      task: "The goal was to give stakeholders a single, interactive view to monitor sales performance, compare actual sales against budget, and identify top-performing customers and products, so they could make faster, data-driven decisions.",
      action: "I imported the data from MySQL Server into Power BI and cleaned it in Power Query — removing nulls, dropping redundant columns, and standardizing formats. I then built a proper data model connecting DIM_Products, DIM_Calendar, and DIM_Customers to FACT_InternetSales and FACT_Budget. On top of that model, I wrote DAX measures for total sales, budget vs. actual, and top 10 rankings, and used them to build dynamic KPI visuals with performance-trend indicators.",
      result: "The final dashboard tracks 22,239,730 in sales against a 21,100,000 budget (a variance of +1,139,730.26), and surfaces Top 10 Customers, Top 10 Products, Sales by Product Category, and Sales by Customer City, all filterable by city, category, product, month, and year — giving stakeholders a real-time, centralized view of sales performance."
    }
  },

  {
    slug: "california-housing",
    title: "California House Price Prediction Model",
    category: "Machine Learning",
    shortDescription: "Built a regression pipeline to predict median house values for California districts.",
    cover: "/images/project-5.jpg",
    overview:
      "Imagine you're trying to teach a computer to guess the price of houses in California, using old data from 1990. But instead of looking at individual houses, the data is grouped by neighborhoods (called 'districts') — so each row of data represents one neighborhood, not one house.\n\nYou give the computer some facts about a neighborhood — like how many people live there, their average income, how close it is to the ocean, how big the houses tend to be — and it learns to predict: 'based on these facts, the houses here are probably worth about this much money.'\n\nThis is called a regression problem in machine learning — 'regression' just means you're predicting a number (like a price), not a category (like 'cat vs dog').",
    problem:
      "Predicting property values is critical for real estate decisions, mortgage lending, and urban planning. The challenge lies in building a robust regression model using aggregate census data where key features like house count and bedroom count are highly collinear, some metrics are missing, and income distributions vary widely, making simple random sampling prone to bias.",
    solution:
      "An end-to-end regression pipeline built in Python. To prevent sampling bias, the pipeline implements stratified sampling based on median income categories. It includes structured feature engineering to extract rooms-per-household and bedrooms-per-room, builds a data pipeline using Scikit-Learn (medians for missing values, standard scaling, and one-hot encoding), and benchmarks Linear Regression, Decision Trees, and Random Forests.",
    results:
      "The best-performing Random Forest model was optimized with GridSearchCV to yield a final held-out Root Mean Squared Error (RMSE) of ~$46,000, with a 95% confidence interval of $44,072 to $47,973 calculated via SciPy. Feature importances confirmed that median income and proximity to the ocean were the primary predictors, aligning with real-world real estate dynamics.",
    tools: ["Python", "Google Colab", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-learn", "SciPy"],
    gallery: ["/images/project-5.jpg"],
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
    ],
    star: {
      situation: "I worked on a California House Price Prediction project — 20,640 neighborhoods (districts) from 1990 census data, with information like median income, location, room counts, and distance to the ocean.",
      task: "The business question was: what's a fair, honest estimate of house value for a given district? Here, the risk wasn't picking the wrong category — it was trusting a number that looked good but wouldn't hold up on new data. So I couldn't just chase the best-looking training score — I had to prove the score was real.",
      action: "I tested three models side by side — Linear Regression, Decision Tree, and Random Forest — using 10-fold cross-validation instead of a single train/test check. Along the way, the Decision Tree scored a perfect 0 error on the data it was trained on — but when tested on new data, it actually performed worse than the simplest model. That was a clear sign it had memorized the training data instead of learning a real pattern, so I set it aside. I moved forward with Random Forest, tuned its settings with grid search, and — critically — evaluated it only once on a completely held-out test set I hadn't touched during any of the earlier decisions, reporting both the error and a confidence interval around it.",
      result: "The final model's predictions were typically off by about $46,000, with 95% confidence the true error falls between $44K and $48K. The bigger lesson: a model can look flawless on data it's already seen and still fail on data it hasn't — the number that matters is the one measured on data the model never touched. That's the same mindset labeling work demands — a label can look complete or confident in the moment, but what matters is whether it's actually correct and would hold up on cases the labeler hasn't seen before."
    }
  },

  {
    slug: "customer",
    title: "Customer Analysis Dashboard",
    category: "Business Intelligence",
    shortDescription: "Performed customer segmentation analysis using Tableau for business insights.",
    cover: "/images/project-6.jpg",
    overview:
      "An e-commerce retailer's sales data — orders, products, customer demographics, discounts, and location — sat as raw transaction records with no easy way to see who the business's revenue was actually coming from. The goal was to turn that raw order data into a single interactive dashboard that shows where revenue is concentrated across regions, age groups, product categories, and customer gender, and how discounting behavior relates to order volume.",
    problem:
      "With hundreds of thousands of individual order records, it was difficult to answer basic strategic questions — which states and regions drive the most revenue, which age groups spend the most, which categories perform best by gender, and whether heavier discounting is actually driving larger order volumes. That required consolidating raw transactional data into clear, filterable visual summaries.",
    solution:
      "Using Tableau Public Desktop, imported and modeled the e-commerce transaction dataset and built an interactive dashboard combining a Total Revenue KPI, a monthly revenue trend line, a state-level revenue map, a revenue-by-age bar chart, a region-level revenue share donut chart, a male-vs-female revenue breakdown by category, and a quantity-vs-discount scatter plot — all filterable by product category.",
    results:
      "The dashboard shows $234M in total revenue across the dataset. Revenue by age skews toward the 20–60 range, with the 20–30 age group leading at $44.8M. Regionally, the South drives the largest share of revenue at 38.37%, followed by the Midwest at 26.93%, the West at 17.60%, and the Northeast at 17.10%. Mobiles & Tablets is the top category by revenue ($63.8M male / $66.3M female), with Appliances a distant second. The quantity-vs-discount scatter shows most orders cluster at low discount percentages regardless of quantity ordered, with no strong pattern of higher discounts driving bulk orders.",
    tools: ["Tableau Public Desktop", "Calculated Fields", "Interactive Filters & Parameters"],
    gallery: ["/images/project-6.jpg"],
    demo:
      "https://drive.google.com/drive/folders/1ZqRrU3gWSQ-Ju6b_Q5TSYJuuFA05lOqm?usp=sharing",
    report:
      "https://drive.google.com/file/d/1KTQ-QJy-rvCp8JQENIXHqA29bjpu68m8/view?usp=sharing",
    dataSource: "U.S. e-commerce sales dataset (FY2020–21), containing order-level transaction, product, customer demographic, and geographic data.",
    toolDetails: [
      { name: "Tableau Public Desktop", description: "Used for data modeling and building the interactive multi-chart dashboard." },
      { name: "Calculated Fields (Tableau)", description: "Used to compute revenue aggregations, regional revenue percentages, and gender-split category revenue." },
      { name: "Interactive Filters and Parameters", description: "Enabled dynamic filtering of all dashboard visuals by product category." }
    ],
    steps: [
      { number: 1, title: "Data Import", description: "Loaded the raw e-commerce transaction dataset (order, product, customer, and location fields) into Tableau." },
      { number: 2, title: "KPI Summary", description: "Built a Total Revenue KPI card summarizing overall performance across the full dataset." },
      { number: 3, title: "Time Trend Analysis", description: "Built a Revenue Per Month line chart to track monthly revenue swings across the fiscal year." },
      { number: 4, title: "Geographic Analysis", description: "Built a state-level revenue map (Revenue Per State) and a regional revenue-share donut chart (Revenue Percentage Per Region)." },
      { number: 5, title: "Demographic Analysis", description: "Built a Revenue Per Age bar chart segmenting revenue by customer age bracket." },
      { number: 6, title: "Category & Gender Analysis", description: "Built a Revenue Per Categories view comparing male vs. female revenue across product categories." },
      { number: 7, title: "Discount Behavior Analysis", description: "Built a Quantity–Discount correlation scatter plot to examine whether discount percentage relates to order quantity." },
      { number: 8, title: "Interactivity", description: "Added a Select Category filter to let users drill into any single product category across the whole dashboard." }
    ],
    star: {
      situation: "I worked on a Customer Analysis project using a large U.S. e-commerce transaction dataset spanning order, product, customer demographic, and location data.",
      task: "The goal was to turn raw order-level data into a single dashboard that could answer where the business's revenue was actually coming from — by region, age, category, and gender — and whether discounting was influencing order behavior.",
      action: "I built the data model in Tableau Public Desktop and designed a multi-view dashboard: a revenue KPI, a monthly trend line, a state-level revenue map, an age-bracket revenue breakdown, a regional revenue-share donut chart, a gender-split category revenue comparison, and a quantity-vs-discount scatter plot, all tied together with a category filter.",
      result: "The dashboard revealed $234M in total revenue, with the South region contributing the largest share (38.37%) and the 20–30 age group the top-spending demographic ($44.8M). Mobiles & Tablets emerged as the clear leading category across both genders, and the discount-vs-quantity analysis showed no strong relationship between deeper discounts and larger order volumes — giving the business a clear, filterable view of where its revenue concentration actually sits."
    }
  },

  {
    slug: "sales-by-revenue-atliq-hardware",
    title: "AtliQ Sales Revenue Analysis",
    category: "Business Intelligence",
    shortDescription: "Built a Tableau dashboard and conducted a root-cause analysis on declining sales revenue.",
    cover: "/images/project-7.jpg",
    overview:
      "AtliQ Hardware Company Ltd is a retail and distribution firm selling computer hardware components — cables, peripherals, and accessories — across major Indian cities. Leadership needed more than a dashboard of totals; they needed to understand why revenue was declining in their two largest markets, Mumbai and Delhi NCR. So this project went beyond visualization into the raw transaction data itself, first cleaning a data quality issue that was inflating reported revenue, then diagnosing the actual drivers behind the regional decline.",
    problem:
      "Mumbai and Delhi NCR — AtliQ's two largest markets — both peaked in 2018 and then declined sharply through 2019 into 2020. The existing dashboard reported the trend but didn't explain the cause, and a review of the raw transaction data uncovered that roughly 28% of transaction rows were exact duplicates, inflating total reported revenue by about 16%. Before any root-cause conclusions could be drawn, the data itself needed to be corrected. On top of that, the 2020 figures only covered data through mid-June, making that year's numbers misleading if read as a full annual comparison.",
    solution:
      "Went beyond Tableau's dashboard layer into the raw CSV source data using Python to identify and remove duplicate transaction rows before re-analyzing the trend. With clean data, broke down Mumbai and Delhi NCR's decline by customer count, transaction volume, customer channel (Brick & Mortar vs. E-Commerce), and product concentration to isolate what was actually driving each market's fall. The result is a diagnosis, not just a description: Mumbai's decline traces to over-reliance on a single flagship product and a shrinking e-commerce customer base, while Delhi NCR's traces to a narrow, aging customer base with no new account acquisition.",
    results:
      "After removing duplicate rows, Mumbai's revenue fell from a 2018 peak of $4.45M to $1.61M in 2019 (−64%), and Delhi NCR fell from $1.46M to $911K (−38%) over the same period. The analysis traced Mumbai's 2018 spike to a single product (Prod018, $4.07M of Mumbai's $4.49M that year) and e-commerce customers ($3.39M of $4.45M) — both of which pulled back sharply the following year, taking the market with them. Delhi NCR's revenue, by contrast, was never product-concentrated but ran on just three repeat Brick & Mortar customers, with no new accounts added since 2017 and its e-commerce channel disappearing entirely after that year. Smaller markets like Kanpur grew over the same period, showing the decline wasn't company-wide — it was specific to over-reliance on a narrow customer and product base in AtliQ's two biggest markets.",
    tools: ["Tableau Public Desktop", "Python (Pandas)", "Microsoft Excel / CSV", "Calculated Fields", "Interactive Filters & Parameters", "Data Story feature"],
    gallery: ["/images/project-7.jpg"],
    demo:
      "https://drive.google.com/drive/folders/1QUTAms1SS-R70ptO_cyDtOjFGqs11dl1?usp=sharing",
    report:
      "https://drive.google.com/file/d/17WLR1ch0LVnjjxvpLa2AyHwT5NSxdQlY/view?usp=sharing",
    dataSource: "AtliQ Hardware Sales Dataset (Codebasics.io / Tableau Public repositories) — raw transactions, customers, products, and markets tables covering 2017–2020.",
    toolDetails: [
      { name: "Tableau Public Desktop", description: "Used for data visualization, relational data modeling across five CSV tables, and building the interactive dashboard." },
      { name: "Python (Pandas)", description: "Used to audit the raw transaction data, detect and remove duplicate rows, and run the customer/product/channel breakdown behind the root-cause analysis." },
      { name: "Microsoft Excel / CSV File", description: "Initial format and storage of the raw transactional dataset." },
      { name: "Calculated Fields (Tableau)", description: "Used to derive metrics such as Normalized Amount, Total Revenue, and Total Quantity." },
      { name: "Interactive Filters and Parameters", description: "Enabled dynamic filtering by Year and Month across all dashboard visuals." },
      { name: "Data Story Feature (Tableau)", description: "Used to summarize key insights interactively." }
    ],
    steps: [
      { number: 1, title: "Data Import and Preparation", description: "Imported the raw transactions.csv, customers.csv, markets.csv, products.csv, and date.csv files into Tableau, relating them through the transactions table." },
      { number: 2, title: "Data Quality Audit", description: "Used Python to identify ~28% duplicate transaction rows inflating revenue by ~16%, and removed them before further analysis." },
      { number: 3, title: "Field Cleanup", description: "Renamed fields for clarity and verified data types (strings for Market/Product ID/Customer, numbers for Quantity/Revenue, dates for Year/Month)." },
      { number: 4, title: "Calculated Fields", description: "Created Normalized Amount (revenue adjusted for scale across years), Total Revenue (SUM of Revenue), and Total Quantity (SUM of Quantity)." },
      { number: 5, title: "Dashboard Design", description: "Built KPI cards for Total Revenue and Total Quantity, plus worksheets for Revenue by Market, Sales Qty by Market, Revenue by Year, Top 5 Products by Revenue, and Top 5 Customers by Revenue." },
      { number: 6, title: "Root-Cause Analysis", description: "Segmented Mumbai and Delhi NCR revenue by customer count, transaction volume, sales channel, and product to isolate the specific drivers of each market's decline." },
      { number: 7, title: "Interactivity", description: "Added Year (2017–2020) and Month (Jan–Dec) filters, plus dashboard actions so selecting a market filters all other visuals to that region." }
    ],
    star: {
      situation: "AtliQ Hardware's two largest markets, Mumbai and Delhi NCR, were declining after a 2018 peak, and the existing dashboard could show the trend but not explain it.",
      task: "I needed to go beyond the dashboard visuals into the raw transaction data to find the actual cause of the decline in each region, and along the way I discovered the dashboard's revenue figures were being inflated by duplicate data.",
      action: "I used Python to audit the raw transaction file and found that 28% of rows were exact duplicates, inflating total revenue by roughly 16%; I removed them before drawing any conclusions. With clean data, I broke down Mumbai and Delhi NCR by customer count, transaction volume, sales channel, and product concentration across each year to isolate what was actually driving the drop in each market, rather than just reporting that revenue had fallen.",
      result: "I found that Mumbai's 2018 peak was driven almost entirely by one product and a wave of e-commerce customers, both of which pulled back sharply in 2019 (revenue fell 64%), while Delhi NCR's decline (down 38%) came from a shrinking, un-refreshed customer base with no new accounts added since 2017. This reframed the business problem from \"sales are down\" to a specific, actionable diagnosis: over-reliance on a narrow product/customer base in the two biggest markets — while smaller markets like Kanpur were actually growing."
    }
  },

  {
    slug: "sugar-trap",
    title: "The Sugar Trap Market Gap Analysis",
    category: "Data Analytics",
    shortDescription: "Identified a hidden opportunity in the healthy snack market using data-driven analysis.",
    cover: "/images/project-8.webp",
    overview:
      "A simulated client engagement for Helix CPG Partners, a food & beverage strategy consultancy: their client, a global snack manufacturer, wanted to launch a 'Healthy Snacking' line but had no data to prove where the market gap actually was. The brief asked one question — where is the 'Blue Ocean' in the snack aisle, the space where consumer demand for high-protein, low-sugar products isn't being met by what's currently on shelves?",
    problem:
      "The snack aisle is widely assumed to be saturated with high-sugar, high-fat products, but 'assumed' isn't something you can hand to an R&D team. The client needed the assumption tested against real product data — an actual sugar-vs-protein map of the market — and a specific, defensible category recommendation to act on, not just a hunch.",
    solution:
      "Built a Python/Pandas pipeline to pull and clean a working sample of the Open Food Facts dataset, filtering out rows with missing or biologically impossible sugar and protein values. Plotted a sugar-vs-protein scatter to visually locate product clusters, then defined a data-driven 'Blue Ocean' zone as the top quartile of protein content combined with the bottom quartile of sugar content. Products falling in that zone were bucketed into high-level categories (Snacks, Beverages, Dairy, Meat, Seafood, Cereals, Sweets, Protein Products) using keyword matching against each product's category tags, in order to surface which category the underserved demand was concentrated in.",
    results:
      "Filtering to the top-quartile-protein (≥18.56g/100g), bottom-quartile-sugar (≤1.0g/100g) zone isolated 252 products out of the working sample — the market's actual 'Blue Ocean.' Once uncategorized products were excluded, Meat and Protein Products emerged as the two categories with the strongest presence in that gap, each accounting for 17 of the categorized products, pointing R&D toward high-protein, low-sugar meat-based or protein-supplement-style snacks as the most defensible white space. A notable limitation surfaced in the process: the keyword-based categorizer left the majority of the Blue Ocean segment (192 of 252 products) uncategorized as 'Other,' which is flagged as a next step for refinement rather than papered over.",
    tools: ["Python", "Pandas", "Matplotlib", "Jupyter Notebook", "Power BI"],
    gallery: ["/images/project-8.webp"],
    github: "https://github.com/Abdoul-razaq/The-Sugar-Trap-Market-Gap-Analysis",
    demo: "https://colab.research.google.com/drive/1pVcXVvGlrjK1E7pMLMk-wC7g3y3xBAwK?usp=sharing",
    dataSource: "Open Food Facts — a free, open database of global food products (worked with a 10,000-row sample of the full dataset, which exceeds 3GB).",
    toolDetails: [
      { name: "Python", description: "Core language for data ingestion, cleaning, and analysis." },
      { name: "Pandas", description: "Used to load, filter, and clean the product dataset, and to compute the protein/sugar quantile thresholds defining the Blue Ocean zone." },
      { name: "Matplotlib", description: "Used to build the sugar-vs-protein scatter plot visualizing where products cluster." },
      { name: "Jupyter Notebook", description: "Development environment for the full analysis workflow, from data cleaning through category classification." },
      { name: "Power BI", description: "Used to build the client-facing interactive dashboard version of the findings." }
    ],
    steps: [
      { number: 1, title: "Data Ingestion", description: "Pulled the Open Food Facts product dataset and loaded a working sample of product name, category tags, sugar, protein, and fat columns." },
      { number: 2, title: "Data Cleaning", description: "Dropped rows with missing sugar or protein values and filtered out biologically impossible readings (values outside a 0–100g/100g range)." },
      { number: 3, title: "Nutrient Matrix Visualization", description: "Plotted sugar (x-axis) against protein (y-axis) for all products, with median reference lines, to visually locate where offerings cluster." },
      { number: 4, title: "Blue Ocean Definition", description: "Defined the underserved zone as the top quartile of protein content combined with the bottom quartile of sugar content." },
      { number: 5, title: "Category Wrangling", description: "Parsed the raw, messy category tags into high-level buckets (Snacks, Beverages, Dairy, Meat, Seafood, Cereals, Sweets, Protein Products, Other) using keyword-based classification." },
      { number: 6, title: "Recommendation", description: "Identified the leading categories within the Blue Ocean segment and translated the finding into a specific, actionable recommendation for the client's R&D team." },
      { number: 7, title: "Dashboard Build", description: "Rebuilt the key visuals and recommendation as an interactive Power BI dashboard for client presentation." }
    ],
    star: {
      situation: "I worked on a simulated consulting engagement for a food & beverage strategy firm, whose client — a snack manufacturer — wanted to launch a healthy snacking line but had no data backing up where the actual market gap was.",
      task: "The brief was to prove, with data, whether the snack market really was oversaturated with high-sugar products, find the specific \"Blue Ocean\" where high-protein/low-sugar demand wasn't being met, and turn that into one concrete category recommendation for R&D.",
      action: "I built a cleaning pipeline in Pandas to filter the Open Food Facts dataset down to valid sugar and protein readings, then plotted the full sugar-vs-protein landscape to see where products actually clustered. I defined the Blue Ocean quantitatively — top-quartile protein, bottom-quartile sugar — rather than eyeballing it, then classified the products that fell in that zone into readable categories using a keyword-matching function built from the raw, messy category tags.",
      result: "The analysis isolated 252 products sitting in the true market gap, with Meat and Protein Products emerging as the strongest represented categories once uncategorized items were excluded — giving R&D a specific, data-backed direction (high-protein, low-sugar meat or protein-supplement-style snacks) instead of a guess. I also flagged that the categorizer left most of the Blue Ocean segment unclassified, which is the clear next step to sharpen the recommendation further rather than overstate confidence in it."
    }
  },

  {
    slug: "logistics",
    title: "Last Mile Logistics Auditor",
    category: "Data Analytics",
    shortDescription: "Analyzed delivery inefficiencies and customer satisfaction in logistics operations.",
    cover: "/images/project-9.webp",
    overview:
      "Veridi Logistics needed to know one thing: where is their delivery network actually failing, and what is that failure costing them in customer trust? Rather than treating 'late delivery' as a single yes/no flag, this project builds a full audit — merging orders, reviews, customer locations, and product categories into one dataset to find exactly which states and product categories are driving delays, and how directly delivery performance translates into customer review scores.",
    problem:
      "Raw order and review data lived in five separate files with no single view connecting delivery timing to customer sentiment or geography. Before any region or category could be blamed for poor performance, the data itself needed cleaning — 551 duplicate order IDs were found in the initial merge and had to be resolved before any delivery-status metric could be trusted.",
    solution:
      "Built a Python/Pandas pipeline merging orders, reviews, and customer data into a master dataset, removed duplicate order records, and calculated a Days_Difference metric (estimated vs. actual delivery date) to classify every order as On Time, Late, or Super Late. Used that classification to benchmark delivery performance by customer state and by product category, then merged in review scores to directly measure how delivery status affects customer satisfaction, visualizing how review scores erode as deliveries fall further behind schedule.",
    results:
      "Across 99,441 cleaned orders, 88,649 (89.2%) arrived On Time, while 4,665 (4.7%) were Super Late and 3,162 (3.2%) were Late. Alagoas (AL) had the worst late-delivery rate in the country at 23.9%, followed by Maranhão (MA) at 19.7% and Piauí (PI) at 16.0% — a clear regional pattern concentrated in Brazil's North/Northeast states. On the product side, home_comfort_2 (16.7%), furniture_mattress_and_upholstery (13.5%), and audio (12.7%) had the highest late-delivery rates. Most tellingly, the link between delivery performance and customer sentiment was stark: average review score fell from 4.29/5 for On Time orders to 3.59/5 for Late orders and collapsed to 1.85/5 for Super Late orders — proving that lateness alone, more than any other single factor, is what turns a customer against the brand.",
    tools: ["Python", "Pandas", "Matplotlib", "Jupyter Notebook", "Power BI"],
    gallery: ["/images/project-9.webp"],
    github: "https://github.com/Abdoul-razaq/The-Last-Mile-Logistics-Auditor",
    demo: "https://colab.research.google.com/drive/15WwOHsc6ApX3HapDvngNu5AH0Mr25kFs?usp=sharing",
    dataSource: "Olist Brazilian e-commerce public dataset (orders, reviews, customers, products, order items, and category translations), used as the underlying data for a simulated client engagement for 'Veridi Logistics.'",
    toolDetails: [
      { name: "Python", description: "Core language for data merging, cleaning, and metric calculation." },
      { name: "Pandas", description: "Used to merge five separate datasets (orders, reviews, customers, products, order items), remove duplicate records, and compute delivery-status classifications and state/category performance breakdowns." },
      { name: "Matplotlib", description: "Used to visualize the relationship between days late and average review score." },
      { name: "Jupyter Notebook (Google Colab)", description: "Development environment for the full audit workflow." },
      { name: "Power BI", description: "Used to build the client-facing interactive 'Last Mile Logistics Auditor' dashboard." }
    ],
    steps: [
      { number: 1, title: "Data Ingestion", description: "Loaded and merged the orders, reviews, and customers datasets into a single master dataframe." },
      { number: 2, title: "Data Cleaning", description: "Identified and removed 551 duplicate order IDs, converted date columns to proper datetime format, and dropped orders with no recorded delivery date." },
      { number: 3, title: "Delivery Classification", description: "Calculated the difference between estimated and actual delivery dates and classified each order as On Time, Late, or Super Late." },
      { number: 4, title: "Regional Performance Audit", description: "Grouped delivery status by customer state to rank which regions have the highest late-delivery rates." },
      { number: 5, title: "Sentiment Analysis", description: "Merged in review scores and calculated average customer rating by delivery status to quantify the satisfaction impact of delays." },
      { number: 6, title: "Category Performance Audit", description: "Merged in product and category-translation data to identify which product categories have the worst on-time delivery rates." },
      { number: 7, title: "Decay Visualization", description: "Plotted average review score against exact days late to show how satisfaction erodes the longer a delivery is delayed." }
    ],
    star: {
      situation: "I worked on a logistics audit for Veridi Logistics, using a 100K-order e-commerce dataset spanning orders, customer reviews, product categories, and delivery timing.",
      task: "The goal was to move past a simple \"X% of orders are late\" statistic and pinpoint exactly which regions and product categories were driving delivery failures, and prove how much those failures were actually costing the business in customer satisfaction.",
      action: "I merged five separate datasets into one master table, caught and removed 551 duplicate order records before trusting any delivery metric, then built a Days_Difference calculation to classify every order as On Time, Late, or Super Late. I benchmarked that classification against customer state and product category to rank the worst-performing regions and categories, then merged in review scores to directly connect delivery performance to customer sentiment.",
      result: "I found that late deliveries are heavily concentrated in specific states — Alagoas topped the list at a 23.9% late rate — and specific product categories like home comfort and furniture. More importantly, I quantified the sentiment cost precisely: average review score drops from 4.29 to 3.59 when an order is Late, and collapses to 1.85 when it's Super Late, giving Veridi a clear, data-backed case for where to prioritize last-mile delivery fixes first."
    }
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