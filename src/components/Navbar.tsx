import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { MagneticElement } from "@/components/effects";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "/", isRoute: true },
    { label: "Services", href: "/services", isRoute: true },
    { label: "CyberTech", href: "/cybertech", isRoute: true },
    { label: "Blogs", href: "/blogs", isRoute: true },
    { label: "About", href: "/about", isRoute: true },
    { label: "Contact", href: "/contact", isRoute: true },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
        ? "bg-background/90 backdrop-blur-xl border-b border-border shadow-lg shadow-background/50"
        : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/30">
              <span className="text-primary-foreground font-bold text-xl">C</span>
            </div>
            <span className="text-xl font-semibold">
              ClearSet<span className="text-primary">.AI</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <MagneticElement key={item.label} strength={0.2}>
                <Link
                  to={item.href}
                  className={`relative py-2 text-sm font-medium transition-colors duration-300 ${isActive(item.href)
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                    }`}
                >
                  {item.label}
                  {/* Animated underline */}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 ${isActive(item.href) ? "w-full" : "w-0"
                      }`}
                  />
                  <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full" />
                </Link>
              </MagneticElement>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">

            <Link to="/contact">
              <MagneticElement strength={0.3}>
                <Button className="btn-glow bg-primary text-primary-foreground hover:bg-primary/90 relative overflow-hidden group">
                  <span className="relative z-10">Get In Touch</span>
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ animation: "shimmer 2s linear infinite" }}
                  />
                </Button>
              </MagneticElement>
            </Link>
          </div>





          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground p-2 hover:bg-secondary rounded-lg transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="relative w-6 h-6">
              <Menu
                size={24}
                className={`absolute transition-all duration-300 ${isOpen ? "opacity-0 rotate-90" : "opacity-100 rotate-0"}`}
              />
              <X
                size={24}
                className={`absolute transition-all duration-300 ${isOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"}`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
        >
          <div className="py-4 border-t border-border space-y-1">
            {navItems.map((item, index) => (
              <Link
                key={item.label}
                to={item.href}
                className={`block py-3 px-4 rounded-lg transition-all duration-300 ${isActive(item.href)
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  }`}
                onClick={() => setIsOpen(false)}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {item.label}
              </Link>
            ))}

            <Link to="/contact" onClick={() => setIsOpen(false)}>
              <Button className="btn-glow bg-primary text-primary-foreground hover:bg-primary/90 w-full mt-4">
                Get In Touch
              </Button>
            </Link>


          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
