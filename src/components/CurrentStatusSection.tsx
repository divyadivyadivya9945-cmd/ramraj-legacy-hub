import { MapPin, Users, ShoppingBag, Star } from "lucide-react";

const stats = [
  { icon: MapPin, value: "200+", label: "Showrooms Nationwide" },
  { icon: Users, value: "5000+", label: "Employees" },
  { icon: ShoppingBag, value: "₹1000 Cr+", label: "Annual Revenue" },
  { icon: Star, value: "40+", label: "Years of Trust" },
];

const CurrentStatusSection = () => {
  return (
    <section id="status" className="py-24 bg-gradient-hero text-primary-foreground relative overflow-hidden">
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
      </div>

      <div className="relative container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-saffron font-body tracking-widest uppercase text-sm mb-2">Where We Stand</p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold">
            Ramraj <span className="text-gradient-gold">Today</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-primary-foreground/70 font-body">
            From a single store in Tirupur to India's leading cotton brand, Ramraj continues to grow while preserving its core values of quality, tradition, and customer trust.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="text-center p-6 rounded-xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/10">
                <Icon className="w-8 h-8 text-saffron mx-auto mb-3" />
                <p className="text-3xl md:text-4xl font-heading font-bold text-gradient-gold">{stat.value}</p>
                <p className="text-sm text-primary-foreground/70 font-body mt-1">{stat.label}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 max-w-3xl mx-auto bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-8 border border-primary-foreground/10">
          <h3 className="text-2xl font-heading font-bold mb-4">Modern Innovations</h3>
          <ul className="space-y-3 font-body text-primary-foreground/80 text-sm">
            <li className="flex items-start gap-3">
              <span className="text-saffron mt-0.5">●</span>
              <span>E-commerce platform serving customers across India with doorstep delivery</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-saffron mt-0.5">●</span>
              <span>Eco-friendly manufacturing with sustainable cotton sourcing practices</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-saffron mt-0.5">●</span>
              <span>Brand ambassadors including top South Indian film stars</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-saffron mt-0.5">●</span>
              <span>Expanding into contemporary fashion while maintaining traditional roots</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CurrentStatusSection;
