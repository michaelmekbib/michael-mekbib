import { CheckCircle } from "lucide-react";

const memberships = [
  "Program Committee Member – The 11th IRC Conference on Science, Engineering and Technology (IRC-SET 2025)",
  "Pitch Contest Faculty Member – Grant Success School",
  "Member – American Medical Informatics Association (AMIA)",
  "EPHIA – Ethiopian Public Health Informatics Association",
  "EPHA – Ethiopian Public Health Association"
];

const Membership = () => {
  return (
    <section id="membership" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 border-l-4 border-primary pl-6 text-foreground">
          Membership
        </h2>
        <div className="space-y-3 animate-fade-in">
          {memberships.map((membership, index) => (
            <div 
              key={index}
              className="flex items-start gap-3 p-4 rounded-lg hover:bg-background transition-all duration-300 hover:translate-x-2 cursor-pointer group"
            >
              <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
              <p className="text-foreground font-medium group-hover:text-primary transition-colors">
                {membership}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Membership;
