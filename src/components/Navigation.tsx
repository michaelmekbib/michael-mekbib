import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-foreground shadow-md" : "bg-foreground/95"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-center h-16">
          <div className="flex space-x-8">
            <Button
              variant="ghost"
              onClick={() => scrollToSection("about")}
              className="text-background hover:text-accent hover:bg-transparent transition-colors"
            >
              About
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("experience")}
              className="text-background hover:text-accent hover:bg-transparent transition-colors"
            >
              Experience
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("projects")}
              className="text-background hover:text-accent hover:bg-transparent transition-colors"
            >
              Projects
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("skills")}
              className="text-background hover:text-accent hover:bg-transparent transition-colors"
            >
              Skills
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("contact")}
              className="text-background hover:text-accent hover:bg-transparent transition-colors"
            >
              Contact
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
