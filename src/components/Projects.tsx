import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "National Health Information System",
    description: "Led the design and deployment of integrated health information systems across multiple African countries, improving data flow from facility to national level.",
    tags: ["DHIS2", "Data Integration", "System Architecture"],
  },
  {
    title: "COVID-19 Data Visualization Platform",
    description: "Developed real-time dashboards for pandemic response coordination, enabling evidence-based decision making for public health officials.",
    tags: ["Data Visualization", "Emergency Response", "Analytics"],
  },
  {
    title: "Immunization Information System",
    description: "Implemented comprehensive IIS to track vaccination coverage and support immunization program management across regions.",
    tags: ["IIS", "Public Health", "Data Modernization"],
  },
  {
    title: "Health Data Governance Framework",
    description: "Established data quality standards and governance structures for national health programs, ensuring data reliability and security.",
    tags: ["Data Governance", "Quality Assurance", "Policy Development"],
  },
  {
    title: "Digital Health Training Program",
    description: "Created capacity building initiatives for health informatics professionals, training over 200 practitioners in digital health systems.",
    tags: ["Capacity Building", "Training", "Knowledge Transfer"],
  },
  {
    title: "Mobile Health Surveillance System",
    description: "Designed mobile-based disease surveillance tools for remote health facilities, enabling real-time reporting and outbreak detection.",
    tags: ["mHealth", "Surveillance", "Mobile Technology"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 border-l-4 border-primary pl-6 text-foreground">
          Key Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border"
            >
              <CardContent className="p-6">
                <h3 className="font-bold text-xl mb-3 text-foreground">{project.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="bg-primary/10 text-primary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
