const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 border-l-4 border-primary pl-6 text-foreground">
            About Me
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed animate-fade-in">
            <p>
              Michael Sileshi Mekbib is a <strong className="text-foreground">Health Informatics and Public Health Specialist</strong> with over 13 years of experience leading digital health transformation across Africa. He holds a <strong className="text-foreground">Master's degree in Health Informatics</strong> and has a proven track record in the health sector. Michael has worked with WHO, AFENET, TBI, and Africa CDC to design and deploy national health information systems, data visualization tools, and supportive supervision platforms.
            </p>
            <p>
              He has <strong className="text-foreground">led continental initiatives</strong> in public health programs and emergency response, coordinating large-scale projects that strengthen public health data quality, governance, and evidence-based decision-making across multiple African nations. Michael is a <strong className="text-foreground">specialist in digital health systems architecture and analytics</strong>, advancing global health security through innovative digital solutions and data-driven approaches to public health program management. He has contributed in diverse roles at regional, national, and international levels, consistently demonstrating agility, dedication, and professionalism across both technical and managerial responsibilities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
