import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Hero = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-primary/80">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/50 to-accent/20 mix-blend-overlay"></div>
      
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-shrink-0 animate-bounce-in">
            <div className="relative">
              <div className="absolute -inset-2 bg-accent/30 rounded-full blur-xl animate-glow"></div>
              <Avatar className="relative w-40 h-40 md:w-48 md:h-48 border-4 border-white/30 shadow-2xl hover:scale-110 transition-transform duration-300">
                <AvatarImage src="https://imgur.com/PXQfStV.jpeg" alt="Michael Sileshi Mekbib" />
                <AvatarFallback className="text-4xl font-bold bg-accent text-accent-foreground">MS</AvatarFallback>
              </Avatar>
            </div>
          </div>
          
          <div className="flex-1 text-center md:text-left text-white animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 hover:scale-105 transition-transform duration-300">
              Michael Sileshi Mekbib
            </h1>
            <h2 className="text-2xl md:text-3xl text-accent font-semibold mb-6 animate-shimmer bg-gradient-to-r from-accent via-accent-glow to-accent bg-[length:200%_auto] bg-clip-text">
              Public Health Informatics Specialist & Digital Health Leader
            </h2>
            <p className="text-lg md:text-xl leading-relaxed max-w-3xl opacity-95 hover:opacity-100 transition-opacity duration-300">
              Strategic leader in public health analytics supporting data flow from facility to global reporting through interconnected systems and turning raw, complex datasets into life-saving intelligence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
