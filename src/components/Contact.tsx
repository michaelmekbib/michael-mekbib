import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Linkedin, Github, Phone } from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "your.email@example.com",
    link: "mailto:your.email@example.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Connect on LinkedIn",
    link: "https://linkedin.com/in/yourprofile",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "View GitHub Profile",
    link: "https://github.com/yourprofile",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (555) 123-4567",
    link: "tel:+15551234567",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 border-l-4 border-primary pl-6 text-foreground">
          Get In Touch
        </h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-muted-foreground text-center mb-12 text-lg">
            I'm always interested in discussing new opportunities, collaborations, or how we can
            work together to advance digital health transformation.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contactMethods.map((method, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border cursor-pointer"
                onClick={() => window.open(method.link, "_blank")}
              >
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <method.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{method.label}</p>
                    <p className="text-sm text-muted-foreground">{method.value}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button
              size="lg"
              onClick={() => window.open("mailto:your.email@example.com", "_blank")}
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8"
            >
              Send Message
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
