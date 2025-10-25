import { Mail, Linkedin, Github, User, GraduationCap } from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "mikiethio@gmail.com",
    link: "mailto:mikiethio@gmail.com"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/michaelsileshi",
    link: "https://linkedin.com/in/michaelsileshi"
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/mikiethio-git",
    link: "https://github.com/mikiethio-git"
  },
  {
    icon: GraduationCap,
    label: "Google Scholar",
    value: "Michael Sileshi",
    link: "https://scholar.google.com/citations?hl=en&user=_cS6w-MAAAAJ"
  },
  {
    icon: User,
    label: "Africa CDC Profile",
    value: "africacdc.org/people/michael-sileshi",
    link: "https://africacdc.org/people/michael-sileshi/"
  }
];

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 border-l-4 border-primary pl-6 text-foreground">
          Get In Touch
        </h2>
        <div className="max-w-4xl mx-auto space-y-4 animate-fade-in">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <a
                key={index}
                href={method.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-lg hover:bg-background transition-all duration-300 hover:translate-x-2 group"
              >
                <Icon className="w-5 h-5 text-primary flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-foreground font-medium group-hover:text-primary transition-colors">
                  {method.value}
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Contact;
