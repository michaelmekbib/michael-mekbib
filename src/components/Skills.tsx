import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    category: "Technical Expertise",
    skills: [
      "Health Information Systems",
      "DHIS2",
      "Data Analytics",
      "System Architecture",
      "Database Management",
      "Data Visualization",
      "Mobile Health (mHealth)",
      "Interoperability Standards",
    ],
  },
  {
    category: "Public Health",
    skills: [
      "Health Informatics",
      "Epidemiology",
      "Disease Surveillance",
      "Immunization Programs",
      "Emergency Response",
      "M&E Frameworks",
      "Health Systems Strengthening",
      "Global Health Security",
    ],
  },
  {
    category: "Leadership & Management",
    skills: [
      "Project Management",
      "Strategic Planning",
      "Team Leadership",
      "Stakeholder Engagement",
      "Capacity Building",
      "Change Management",
      "Policy Development",
      "Cross-functional Collaboration",
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 border-l-4 border-primary pl-6 text-foreground">
          Skills & Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="animate-slide-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <h3 className="text-xl font-bold mb-4 text-foreground">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge
                    key={skillIndex}
                    variant="outline"
                    className="bg-card text-foreground border-border hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
