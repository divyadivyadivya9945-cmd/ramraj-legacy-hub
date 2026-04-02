import { Store, Award, TrendingUp, Heart } from "lucide-react";

const milestones = [
  {
    year: "1983",
    title: "The Humble Beginning",
    description: "Founded by K.R. Nagarajan in Tirupur, Tamil Nadu, Ramraj Cottons started as a small shop selling traditional dhotis and cotton garments. With a vision to provide pure, quality cotton to every Indian household.",
    icon: Store,
  },
  {
    year: "1990s",
    title: "Expansion Across Tamil Nadu",
    description: "Ramraj rapidly expanded across Tamil Nadu, becoming a household name. The brand became synonymous with quality white cotton dhotis, worn with pride at festivals, weddings, and daily life.",
    icon: TrendingUp,
  },
  {
    year: "2000s",
    title: "Going National",
    description: "The brand crossed state borders, opening showrooms across South India and eventually reaching major cities nationwide. Celebrity endorsements and innovative marketing brought Ramraj into every home.",
    icon: Award,
  },
  {
    year: "2020s",
    title: "A Modern Legacy",
    description: "Today, Ramraj Cottons operates 200+ showrooms across India with a diverse product line including shirts, t-shirts, sarees, and accessories — all while staying true to its cotton heritage.",
    icon: Heart,
  },
];

const HistorySection = () => {
  return (
    <section id="history" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-saffron font-body tracking-widest uppercase text-sm mb-2">Our Journey</p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
            A Legacy Woven in <span className="text-primary">Cotton</span>
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-saffron via-primary to-gold" />

          {milestones.map((item, i) => {
            const Icon = item.icon;
            const isLeft = i % 2 === 0;
            return (
              <div key={item.year} className={`relative flex items-start mb-16 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}>
                {/* Dot */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-saffron border-4 border-background z-10" />

                {/* Content */}
                <div className={`ml-16 md:ml-0 md:w-1/2 ${isLeft ? "md:pr-16" : "md:pl-16"}`}>
                  <div className="bg-card rounded-xl p-6 shadow-elegant border border-border hover:shadow-gold transition-shadow duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-saffron font-heading font-bold text-xl">{item.year}</span>
                    </div>
                    <h3 className="text-lg font-heading font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground font-body text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HistorySection;
