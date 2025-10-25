import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const experiences = [
  {
    organization: "US Centers for Disease Control and Prevention (US CDC)",
    role: "Public Health Informatics Fellow",
    description: "Support Immunization Information System (IIS) and Informatics and data modernization initiatives.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/CDC_logo.svg/200px-CDC_logo.svg.png",
    link: "https://www.cdc.gov/",
  },
  {
    organization: "Africa Centres for Disease Control and Prevention (Africa CDC)",
    role: "Technical Officer - Digital Systems",
    description: "Leading digital health transformation initiatives across African nations with focus on health information systems and data analytics.",
    logo: "https://africacdc.org/wp-content/uploads/2021/10/africa-cdc-logo-1.png",
    link: "https://africacdc.org/",
  },
  {
    organization: "Tony Blair Institute for Global Change (TBI)",
    role: "Vaccine Delivery Advisor - M&E",
    description: "Monitoring and evaluation of vaccine delivery programs and health system strengthening initiatives.",
    logo: "https://institute.global/sites/default/files/2023-03/TBI_Logo_Primary_RGB_WhiteText.png",
    link: "https://institute.global/",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 border-l-4 border-primary pl-6 text-foreground">
          Organizations I've Worked With
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow duration-300 animate-fade-in border-border"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="mb-6 h-24 flex items-center justify-center">
                  <img
                    src={exp.logo}
                    alt={exp.organization}
                    className="max-h-20 max-w-full object-contain"
                  />
                </div>
                <h3 className="font-bold text-lg mb-2 text-foreground">{exp.organization}</h3>
                <p className="text-primary font-semibold mb-3">{exp.role}</p>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {exp.description}
                </p>
                <Button
                  variant="default"
                  size="sm"
                  onClick={() => window.open(exp.link, "_blank")}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Learn More
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
