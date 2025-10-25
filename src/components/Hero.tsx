import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Hero = () => {
  return (
    <section className="relative min-h-[500px] bg-primary text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/90"></div>
      <div className="container mx-auto px-6 py-24 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-8 animate-fade-in">
          <Avatar className="w-32 h-32 border-4 border-primary-foreground/20 shadow-lg">
            <AvatarImage src="https://imgur.com/PXQfStV.jpeg" alt="Michael Sileshi Mekbib" />
            <AvatarFallback className="text-2xl font-bold bg-accent text-accent-foreground">MS</AvatarFallback>
          </Avatar>
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-3 tracking-tight">
              Michael Sileshi Mekbib
            </h1>
            <p className="text-xl md:text-2xl text-accent font-semibold mb-4">
              Public Health Informatics Specialist & Digital Health Leader
            </p>
            <p className="text-base md:text-lg text-primary-foreground/90 max-w-2xl leading-relaxed">
              Strategic leader in public health analytics supporting data flow from facility to global
              reporting through interconnected systems and turning raw, complex datasets into life-saving intelligence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
