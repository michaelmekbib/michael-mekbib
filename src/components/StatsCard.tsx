import { BookOpen, FileText, Calendar } from "lucide-react";

const stats = [
  {
    icon: FileText,
    label: "Publications",
    value: "10+",
    color: "text-primary"
  },
  {
    icon: BookOpen,
    label: "Articles Reviewed",
    value: "29",
    color: "text-accent"
  },
  {
    icon: Calendar,
    label: "Years of Experience",
    value: "10+",
    color: "text-primary"
  }
];

const StatsCard = () => {
  return (
    <section className="py-12 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="relative group">
          {/* Animated background blur effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary opacity-30 blur-xl group-hover:opacity-50 transition duration-1000 group-hover:duration-500 animate-pulse"></div>
          
          {/* Main stats card */}
          <div className="relative bg-card/80 backdrop-blur-xl rounded-2xl border border-primary/20 shadow-2xl p-8 hover:shadow-primary/20 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="flex flex-col items-center text-center space-y-3 group/item hover:scale-110 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="relative">
                    {/* Icon glow effect */}
                    <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl group-hover/item:bg-primary/40 transition-all duration-300"></div>
                    <div className={`relative p-4 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 group-hover/item:from-primary/20 group-hover/item:to-accent/20 transition-all duration-300 ${stat.color}`}>
                      <stat.icon className="w-8 h-8 group-hover/item:rotate-12 group-hover/item:scale-110 transition-all duration-300" />
                    </div>
                  </div>
                  
                  <div className="space-y-1">
                    <p className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-primary via-accent to-primary bg-clip-text text-transparent animate-fade-in">
                      {stat.value}
                    </p>
                    <p className="text-sm md:text-base text-muted-foreground font-semibold group-hover/item:text-foreground transition-colors">
                      {stat.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsCard;
