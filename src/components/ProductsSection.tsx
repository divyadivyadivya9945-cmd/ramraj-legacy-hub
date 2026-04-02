const products = [
  { name: "Traditional Dhotis", desc: "Pure white cotton dhotis with golden zari borders — the signature Ramraj product.", emoji: "🪔" },
  { name: "Cotton Shirts", desc: "Comfortable, breathable cotton shirts for daily wear and formal occasions.", emoji: "👔" },
  { name: "Sarees & Salwars", desc: "Elegant cotton sarees and salwar sets in vibrant colors and classic designs.", emoji: "👗" },
  { name: "Kids Wear", desc: "Traditional and modern cotton clothing for children of all ages.", emoji: "🧒" },
  { name: "Accessories", desc: "Towels, angavastram, and other cotton essentials for everyday use.", emoji: "🎀" },
  { name: "Festive Collection", desc: "Special occasion wear with rich silk blends and premium cotton for celebrations.", emoji: "🎉" },
];

const ProductsSection = () => {
  return (
    <section id="products" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-saffron font-body tracking-widest uppercase text-sm mb-2">What We Offer</p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
            Our <span className="text-primary">Products</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {products.map((product) => (
            <div
              key={product.name}
              className="bg-card rounded-xl p-6 border border-border hover:border-saffron/50 hover:shadow-gold transition-all duration-300 group cursor-pointer"
            >
              <span className="text-4xl mb-4 block group-hover:scale-110 transition-transform">{product.emoji}</span>
              <h3 className="text-lg font-heading font-semibold text-foreground mb-2">{product.name}</h3>
              <p className="text-muted-foreground font-body text-sm">{product.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
