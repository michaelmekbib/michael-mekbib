import { Card, CardContent } from "@/components/ui/card";

const skillCategories = [
  {
    category: "Programming & Data Engineering",
    skills: [
      { name: "Python (pandas, NumPy, PySpark, scikit-learn, PyTorch)", level: 95 },
      { name: "R (tidyverse, caret, ggplot2, stats)", level: 88 },
      { name: "SQL (T-SQL, PostgreSQL, Snowflake, dynamic SQL)", level: 92 },
      { name: "Data Pipelines & APIs (ETL/ELT, REST, JSON, FHIR APIs)", level: 90 },
      { name: "Data Ops & Versioning (lineage, QA, CI/CD, automated testing)", level: 87 },
      { name: "Data Visualization (Power BI, Tableau, Google Studio, Excel)", level: 99 }
    ]
  },
  {
    category: "Statistical Modeling & Machine Learning",
    skills: [
      { name: "Classical Statistics (ANOVA, χ², regression, mixed models)", level: 91 },
      { name: "Predictive Modeling (Logit, RF, XGBoost, CatBoost, LightGBM, ensemble stacking)", level: 93 },
      { name: "Time-Series & Physiologic Signals (ARIMA, Prophet, LSTM, TFT, PELT)", level: 90 },
      { name: "Biostatistics (survival analysis, Bayesian modeling)", level: 88 },
      { name: "Explainability & Model Evaluation (SHAP, fairness metrics, calibration)", level: 84 }
    ]
  },
  {
    category: "Healthcare & Clinical Informatics",
    skills: [
      { name: "Clinical Data Standards (HL7 v2, ICD-10, LOINC, SNOMED, FHIR)", level: 86 },
      { name: "EHR & Clinical Analytics (perioperative, sepsis, delirium, outcomes)", level: 91 },
      { name: "Public Health Informatics (surveillance, DCIPHER, NNDSS ODSE, FungiSurv)", level: 89 },
      { name: "Data Governance & Quality (auditability, lineage, FAIR principles)", level: 88 }
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 border-l-4 border-primary pl-6 text-foreground">
          Technical Skills
        </h2>
        <p className="text-center text-muted-foreground mb-8">
          Public Health Data Science • Health Informatics • Data Analytics & System Implementation
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-primary mb-4">{category.category}</h3>
                <ul className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex}>
                      <div className="mb-2 text-sm font-medium text-foreground">{skill.name}</div>
                      <div className="relative bg-secondary rounded-full h-2.5 overflow-hidden">
                        <div 
                          className="absolute top-0 left-0 h-full bg-primary rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
