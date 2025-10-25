import { BookOpen } from "lucide-react";

const publications = [
  {
    title: "A pilot study on district health information software 2: challenges and lessons learned in a developing country: an experience from Ethiopia",
    journal: "International Research Journal of Engineering and Technology (IRJET), 2016",
    link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=_cS6w-MAAAAJ&citation_for_view=_cS6w-MAAAAJ:u5HHmVD_uO8C"
  },
  {
    title: "COVID-19 Vaccination Data Management and Visualization Systems for Improved Decision-Making: Lessons Learnt from Africa CDC Saving Lives and Livelihoods Program",
    journal: "PLOS Digital Health, 2025",
    link: "https://www.medrxiv.org/content/10.1101/2025.02.14.25322288v1"
  },
  {
    title: "Case Study of Monitoring and Evaluation System Capacity in health sector: data demand and use by health programs in Ethiopia",
    journal: "Special bulletin, 17th annual review meeting Ministry of Health, 2015",
    link: "https://www.researchgate.net/publication/392910852_SpecialBullitenBook1-83-85_1"
  },
  {
    title: "Informatics driven participatory onboarding accelerates health workforce integration collaboration and coordination",
    journal: "American Medical Informatics Association annual conference, 2025",
    link: ""
  },
  {
    title: "Speaker in the dhis2 annual conference 2022: Presentation on the customization of DHIS2 system for Routine immunization and VPD surveillance supportive supervision, the case of Kenya",
    journal: "DHIS2 Annual Conference",
    link: "https://thedhis2annualconference2022.sched.com/mikiethio"
  },
  {
    title: "Africa Vaccine Program (AVP) Utilizing data management tools for vaccine delivery",
    journal: "",
    link: "https://institute.global/insights/public-services/africa-vaccines-programme-utilising-data-management-tools-vaccine-delivery"
  },
  {
    title: "Presentation in Africa Delivery Exchange (ADX) forum: The role of technology in effective vaccine delivery",
    journal: "Michael Mekbib, Vaccine Delivery Advisor, TBI Ethiopia",
    link: "https://institute.global/insights/politics-and-governance/africa-delivery-exchange-adx-2022"
  },
  {
    title: "Strengthening Emergency Response in Hard-to-Reach Settings Through Portable Public Health Emergency Operation Center",
    journal: "Journal of Interventional Epidemiology and Public Health (Under review)",
    link: ""
  },
  {
    title: "DHIS2 Event Capture Application for Immunization Supportive Supervision: Experience from Kenya",
    journal: "BMC Medical Informatics and Decision Making (Under peer review)",
    link: ""
  },
  {
    title: "Immunization Coverage Estimates Among Children Aged 12–23 Months: Experience from Slum Sub-County of Nairobi, Kenya",
    journal: "Scientific Reports (Under peer review)",
    link: ""
  }
];

const Publications = () => {
  return (
    <section id="publications" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 border-l-4 border-primary pl-6 text-foreground">
          Publications and Conference Presentations
        </h2>
        <div className="space-y-4 animate-fade-in">
          {publications.map((pub, index) => (
            <div 
              key={index} 
              className="flex items-start gap-3 p-4 rounded-lg hover:bg-secondary/30 transition-all duration-300 hover:translate-x-2 cursor-pointer group"
            >
              <BookOpen className="w-5 h-5 text-primary flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
              <div className="flex-1">
                <p className="text-foreground font-medium group-hover:text-primary transition-colors">
                  {pub.title}
                </p>
                {pub.journal && (
                  <p className="text-sm text-muted-foreground mt-1">
                    <em>{pub.journal}</em>
                  </p>
                )}
                {pub.link && (
                  <a 
                    href={pub.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary text-sm hover:underline inline-block mt-1"
                  >
                    [Click to view]
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
