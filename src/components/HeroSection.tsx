import heroImage from "@/assets/hero-ramraj.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="Ramraj Cotton Dhoti" className="w-full h-full object-cover" width={1920} height={1024} />
        <div className="absolute inset-0 bg-gradient-hero opacity-80" />
      </div>

      <div className="relative container mx-auto px-4 py-32 text-center">
        <p className="text-saffron font-body tracking-[0.3em] uppercase text-sm mb-4 animate-fade-in-up">
          Since 1983 • Tradition Meets Excellence
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-primary-foreground mb-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          Ramraj <span className="text-gradient-gold">Cottons</span>
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/80 font-body max-w-2xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          India's most trusted name in traditional cotton clothing. From humble beginnings to a nationwide legacy of pure comfort and timeless elegance.
        </p>
        <div className="flex gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
          <a href="#history" className="px-8 py-3 bg-saffron text-saffron-foreground font-body font-bold rounded-lg hover:opacity-90 transition-opacity shadow-gold">
            Explore Our Story
          </a>
          <a href="#products" className="px-8 py-3 border-2 border-primary-foreground/40 text-primary-foreground font-body rounded-lg hover:bg-primary-foreground/10 transition-colors">
            Our Products
          </a>
        </div>
      </div>

      {/* Decorative bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 80L60 68C120 56 240 32 360 24C480 16 600 24 720 32C840 40 960 48 1080 44C1200 40 1320 24 1380 16L1440 8V80H0Z" fill="hsl(40 33% 96%)" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
