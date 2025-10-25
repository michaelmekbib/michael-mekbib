import { Card, CardContent } from "@/components/ui/card";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const projects = [
  {
    title: "PHEOC Strengthening in Africa",
    description: "The PHEOC strengthening project supported 31 African Union Member States by enhancing their Public Health Emergency Operations Centers' capacity in information systems and data analysis through training, digital equipment, and project management.",
    links: [
      { label: "PHEOC Infrastructure", url: "https://app.powerbi.com/view?r=eyJrIjoiZWE1ZDY3MzctZmMyOS00ODQ4LWFkMWMtOTk3NzgwMzk2YjgxIiwidCI6ImFjZTVjNjQ1LTNlYzctNGM4ZS1iMTJlLTA3NzIyMTUwNWRmNSJ9" },
      { label: "MPox Outbreak RR", url: "https://app.powerbi.com/view?r=eyJrIjoiNjFhZTZhMGUtNzkwMC00YjNlLWE3MDAtZThlMzExOTc0YWVkIiwidCI6ImFjZTVjNjQ1LTNlYzctNGM4ZS1iMTJlLTA3NzIyMTUwNWRmNSJ9" },
      { label: "PHEOC Project", url: "https://app.powerbi.com/view?r=eyJrIjoiYmEyYTI2NzctYmYyMS00Mjk0LTgxOTEtNTcxM2U5MWE0MDkwIiwidCI6ImFjZTVjNjQ1LTNlYzctNGM4ZS1iMTJlLTA3NzIyMTUwNWRmNSJ9" }
    ]
  },
  {
    title: "Africa CDC Data Center",
    description: "State of the art Continental Data Center, established in 2024 with support in project management, certification, HR development, infrastructure setup, and resource mobilization",
    links: []
  },
  {
    title: "Knowledge Hub Portal",
    description: "Continental knowledge sharing portal, designed to strengthen research, evidence based decision making and information sharing across Africa.",
    links: [
      { label: "Check the Khub", url: "https://play.google.com/store/apps/details?id=com.africacdc.khubmobile&hl=en&pli=1" }
    ]
  },
  {
    title: "ePHEM System Deployment",
    description: "Deployment of Continental public health emergency management portal to faciliatate outbreak detection and response efforts in Africa",
    links: []
  },
  {
    title: "Event-Based Surveillance Reporting",
    description: "An electronic system developed to real-time event-based surveillance data for improved outbreak detection in Africa",
    links: []
  },
  {
    title: "Community Health Information System (CHIS)",
    description: "System piloted and deployed to collect information from the grassroot level to facilitate evidence based decision making covering the 85% of the population",
    links: [
      { label: "eCHIS", url: "https://moh.gov.et/en/projects-3-col/echis?language_content_entity=en" }
    ]
  },
  {
    title: "DHIS2",
    description: "DHIS2 was piloted, evaluated, and adopted as Ethiopia's national Health Information System (HIS). It improves data collection, management, and reporting across all levels of the health system, supporting evidence-based decision-making and strengthening national health monitoring.",
    links: [
      { label: "DHIS2 system", url: "https://dhis.moh.gov.et/dhis-web-commons/security/login.action" }
    ]
  },
  {
    title: "Africa CDC MIS Division Establishment",
    description: "As part of the organizational restructuring and system strengthening, supported establishment of Management Information system (later upgraded to digital health) division for Africa CDC, enabling digital governance, reporting, and analytics.",
    links: []
  },
  {
    title: "Chronic Disease Epidemiology Dashboard, USA",
    description: "Interactive dashboard exploring chronic disease distribution across the United States developed using R Shiny",
    links: [
      { label: "View Dashboard", url: "https://mikiethio.shinyapps.io/chronic-dashboard/" }
    ]
  },
  {
    title: "Immunization eLearning Platform",
    description: "An online, self-paced learning platform was developed and deployed in Kenya in collaboration with the Immunization Academy. The platform enabled over 3,000 managers to independently enhance their skills in immunization program monitoring and evidence-based decision-making",
    links: [
      { label: "A self-paced eLearning platform", url: "https://watch.immunizationacademy.com/en/videos/823/" }
    ]
  },
  {
    title: "Nationwide Immunization and VPD Surveillance Monitoring System Digitization",
    description: "The system consolidated multiple fragmented paper-based monitoring tools into a single, harmonized platform, creating an electronic system integrated with the national health information system. This approach leverages existing technology and promotes interoperability, ensuring more efficient use of resources.",
    links: [
      { label: "KHIS", url: "https://hiskenya.org/dhis-web-commons/security/login.action/" }
    ]
  },
  {
    title: "eIDSR Development and Implementation",
    description: "The electronic system enabled sub-counties nationwide to submit integrated disease surveillance reports on weekly notifiable diseases promptly and directly within the national health information system.",
    links: [
      { label: "Weekly eIDSR Reporting System - Kenya", url: "https://hiskenya.org/dhis-web-commons/security/login.action" }
    ]
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 border-l-4 border-primary pl-6 text-foreground">
          Project Leadership & Support
        </h2>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          className="pb-12"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <Card className="h-full hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 flex flex-col h-full min-h-[280px]">
                  <h3 className="text-xl font-bold text-accent mb-3">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 flex-grow">{project.description}</p>
                  {project.links.length > 0 && (
                    <div className="flex flex-col gap-2 mt-auto">
                      {project.links.map((link, linkIndex) => (
                        <a
                          key={linkIndex}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline text-sm"
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Projects;
