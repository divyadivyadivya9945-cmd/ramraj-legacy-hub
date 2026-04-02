const Footer = () => (
  <footer id="contact" className="bg-foreground text-background py-16">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h3 className="text-2xl font-heading font-bold mb-2">Ramraj <span className="text-saffron">Cottons</span></h3>
          <p className="text-background/60 font-body text-sm">Weaving tradition into every thread since 1983.</p>
        </div>
        <div>
          <h4 className="font-heading font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm font-body text-background/60">
            <li><a href="#history" className="hover:text-saffron transition-colors">Our History</a></li>
            <li><a href="#products" className="hover:text-saffron transition-colors">Products</a></li>
            <li><a href="#status" className="hover:text-saffron transition-colors">Current Status</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-heading font-semibold mb-3">Contact</h4>
          <ul className="space-y-2 text-sm font-body text-background/60">
            <li>📍 Tirupur, Tamil Nadu, India</li>
            <li>📞 1800-123-RAMRAJ</li>
            <li>✉️ info@ramrajcotton.com</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-background/10 mt-10 pt-6 text-center text-sm text-background/40 font-body">
        © {new Date().getFullYear()} Ramraj Cottons. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
