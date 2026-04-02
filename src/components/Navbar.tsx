import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl font-heading font-bold text-primary">
            Ramraj
          </span>
          <span className="text-sm font-body text-muted-foreground tracking-widest uppercase">
            Cottons
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#history" className="text-sm font-body text-foreground hover:text-primary transition-colors">History</a>
          <a href="#products" className="text-sm font-body text-foreground hover:text-primary transition-colors">Products</a>
          <a href="#status" className="text-sm font-body text-foreground hover:text-primary transition-colors">Today</a>
          <a href="#contact" className="text-sm font-body text-foreground hover:text-primary transition-colors">Contact</a>
          <Link to="/login">
            <Button size="sm">Login</Button>
          </Link>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-b border-border px-4 pb-4 space-y-3">
          <a href="#history" onClick={() => setOpen(false)} className="block text-sm text-foreground hover:text-primary">History</a>
          <a href="#products" onClick={() => setOpen(false)} className="block text-sm text-foreground hover:text-primary">Products</a>
          <a href="#status" onClick={() => setOpen(false)} className="block text-sm text-foreground hover:text-primary">Today</a>
          <a href="#contact" onClick={() => setOpen(false)} className="block text-sm text-foreground hover:text-primary">Contact</a>
          <Link to="/login" onClick={() => setOpen(false)}>
            <Button size="sm" className="w-full">Login</Button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
