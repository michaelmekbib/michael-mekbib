import { BookOpen } from "lucide-react";

const articlesReviewed = [
  { journal: "American Public Health Association (APHA)", count: 6 },
  { journal: "Journal of Medical Internet Research (JMIR, JMIR Formative, JMIR Aging, JMIR Public Health and Surveillance)", count: 8 },
  { journal: "International Journal of Population Data Science", count: 7 },
  { journal: "Proceedings of the 11th IRC Conference on Science, Engineering and Technology (IRC-SET 2025), Singapore", count: 3 },
  { journal: "Journal of Mental Health and Digital Technologies (JMHDT)", count: 1 },
  { journal: "Journal of Interventional Epidemiology and Public Health (JIEPH)", count: 3 },
  { journal: "Cureus Journal of Medical Science", count: 3 },
  { journal: "BMJ Public Health", count: 1 },
  { journal: "Journal of Public Health and Epidemiology", count: 1 }
];

const ArticlesReviewed = () => {
  return (
    <section id="articles-reviewed" className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 border-l-4 border-primary pl-6 text-foreground animate-slide-in">
          Articles Reviewed
        </h2>
        <div className="space-y-4">
          {articlesReviewed.map((article, index) => (
            <div 
              key={index}
              className="flex items-start gap-3 p-5 rounded-xl bg-card/80 backdrop-blur-sm hover:bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 hover:translate-x-3 hover:shadow-lg cursor-pointer group animate-bounce-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <BookOpen className="w-6 h-6 text-primary flex-shrink-0 mt-1 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" />
              <div className="flex-1">
                <p className="text-foreground font-semibold group-hover:text-primary transition-colors leading-relaxed">
                  {article.journal}
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    {article.count} {article.count === 1 ? 'Article' : 'Articles'}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArticlesReviewed;
