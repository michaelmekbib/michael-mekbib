import { Newspaper } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const mediaArticles = [
  {
    title: "Turning Health Data into Lifesaving Decisions: Michael Mekbib's Leadership in Global Health Informatics",
    publication: "ThisDay Live",
    date: "December 19, 2023",
    url: "https://www.thisdaylive.com/2023/12/19/turning-health-data-into-lifesaving-decisions-michael-mekbibs-leadership-in-global-health-informatics/",
    coverImage: "https://www.thisdaylive.com/wp-content/uploads/2023/12/Michael-Mekbib.jpg"
  }
];

const Media = () => {
  return (
    <section id="media" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <Newspaper className="w-8 h-8 text-primary" />
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Media Coverage</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mediaArticles.map((article, index) => (
            <a
              key={index}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <Card className="h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-2 overflow-hidden">
                <CardContent className="p-0">
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img
                      src={article.coverImage}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6 bg-card">
                    <p className="text-sm text-muted-foreground mb-3 font-medium">
                      {article.publication} • {article.date}
                    </p>
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors leading-tight">
                      {article.title}
                    </h3>
                  </div>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Media;
