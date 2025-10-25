import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const experiences = [
  {
    organization: "US Centers for Disease Control and Prevention (US CDC)",
    role: "Public Health Informatics Fellow",
    logo: "https://imgur.com/pLf4ebL.jpeg",
    summary: "Support Immunization Information System (IIS) and Informatics and data modernization initiatives.",
    link: "https://www.cdc.gov/"
  },
  {
    organization: "Africa Centres for Disease Control and Prevention (Africa CDC)",
    role: "Technical Officer - Digital Systems",
    logo: "https://imgur.com/XxLc5je.jpeg",
    summary: "Led the Africa CDC continental digital health agenda: PHEOC digitization, Knowledge Hub, data modernization, and digital health system strengthening.",
    link: "https://africacdc.org/"
  },
  {
    organization: "Tony Blair Institute for Global Change (TBI)",
    role: "Vaccine Delivery Advisor - M&E",
    logo: "https://i.imgur.com/2H8HWEg.jpeg",
    summary: "COVID-19 vaccination and immunization system strengthening through the use of information technology in Ethiopia.",
    link: "https://www.institute.global/"
  },
  {
    organization: "Africa Field Epidemiology Network (AFENET)",
    role: "Country Coordinator - Immunization and VPD Surveillance Data Modernization Project",
    logo: "https://imgur.com/C8Kv1tU.jpeg",
    summary: "Coordinated Kenya DQIP initiatives, digitization of VPD surveillance and immunization data systems, and development of an eLearning platform.",
    link: "https://afenet.net/"
  },
  {
    organization: "World Health Organization (WHO)",
    role: "Immunization and VPD Surveillance Data Specialist",
    logo: "https://imgur.com/CCLcSd7.jpeg",
    summary: "Supported Global Polio Eradication Initiative, developed continental VPD surveillance and immunization performance monitoring tools, and improved data quality.",
    link: "https://www.who.int/"
  },
  {
    organization: "Ministry of Health Ethiopia",
    role: "HIS and M&E Coordinator",
    logo: "https://imgur.com/SORtVER.jpeg",
    summary: "Coordinated nationwide piloting and deployment of DHIS2, CHIS, HMIS, information revolution initiatives, and performance monitoring systems.",
    link: "https://moh.gov.et/"
  }
];

const Experience = () => {
  const [expandedCards, setExpandedCards] = useState<{ [key: number]: boolean }>({});

  const toggleCard = (index: number) => {
    setExpandedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <section id="experience" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 border-l-4 border-primary pl-6 text-foreground">
          Organizations I've Worked With
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
          {experiences.map((exp, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col">
              <CardContent className="p-6 flex flex-col items-center text-center flex-grow">
                <a href={exp.link} target="_blank" rel="noopener noreferrer">
                  <img 
                    src={exp.logo} 
                    alt={exp.organization}
                    className="h-20 w-auto object-contain rounded-lg mb-4 hover:opacity-80 transition-opacity"
                  />
                </a>
                <h3 className="font-bold text-lg mb-2 text-foreground">{exp.organization}</h3>
                <p className="text-accent font-semibold mb-3">{exp.role}</p>
                <p className={`text-muted-foreground text-sm mb-4 ${!expandedCards[index] ? 'line-clamp-2' : ''}`}>
                  {exp.summary}
                </p>
                <Button 
                  onClick={() => toggleCard(index)}
                  variant="outline"
                  size="sm"
                  className="mt-auto"
                >
                  {expandedCards[index] ? 'Show Less' : 'Learn More'}
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
