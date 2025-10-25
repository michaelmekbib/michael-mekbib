import { BookOpen } from "lucide-react";

const articlesReviewed = [
  { journal: "American Public Health Association (APHA)", count: 6 },
  { journal: "Journal of Medical Internet Research (JMIR, JMIR Formative, JMIR Aging, JMIR Public Health and Surveillance)", count: 8 },
  { journal: "International Journal of Population Data Science", count: 4 },
  { journal: "Proceedings of the 11th IRC Conference on Science, Engineering and Technology (IRC-SET 2025), Singapore", count: 3 },
  { journal: "Journal of Mental Health and Digital Technologies (JMHDT)", count: 1 },
  { journal: "Journal of Interventional Epidemiology and Public Health (JIEPH)", count: 3 }
];

const ArticlesReviewed = () => {
  return (
    <section id="articles-reviewed" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 border-l-4 border-primary pl-6 text-foreground">
          Articles Reviewed
        </h2>
        <div className="space-y-4 animate-fade-in">
          {articlesReviewed.map((article, index) => (
            <div 
              key={index}
              className="flex items-start gap-3 p-4 rounded-lg hover:bg-secondary/30 transition-all duration-300 hover:translate-x-2 cursor-pointer group"
            >
              <BookOpen className="w-5 h-5 text-primary flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
              <div className="flex-1">
                <p className="text-foreground font-medium group-hover:text-primary transition-colors">
                  {article.journal}
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  <strong>{article.count} Articles</strong>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArticlesReviewed;
