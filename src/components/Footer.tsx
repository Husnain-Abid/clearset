import { useState } from "react";
import { Mail, Linkedin, Instagram, Facebook, ArrowUpRight, Send } from "lucide-react";
import { SmoothReveal, MagneticElement, FallingLogos } from "@/components/effects";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const currentYear = new Date().getFullYear();

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const trimmedEmail = email.trim();
    if (!trimmedEmail) {
      toast({
        title: "Error",
        description: "Please enter your email address",
        variant: "destructive",
      });
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      const { data, error } = await supabase.functions.invoke('send-newsletter-confirmation', {
        body: { email: trimmedEmail }
      });

      if (error) {
        console.error("Newsletter subscription error:", error);
        toast({
          title: "Error",
          description: "Failed to subscribe. Please try again later.",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Subscribed!",
          description: "Check your inbox for a confirmation email.",
        });
        setEmail("");
      }
    } catch (error) {
      console.error("Newsletter subscription error:", error);
      toast({
        title: "Error",
        description: "Failed to subscribe. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const footerLinks = [
    {
      title: "Services",
      links: [
        { label: "Machine Learning", href: "/services#machine-learning" },
        { label: "Computer Vision", href: "/services#computer-vision" },
        { label: "NLP", href: "/services#nlp" },
        { label: "Data Validation", href: "/services#data-validation" },
        { label: "Business Analysis", href: "/services#business-analysis" },
      ]
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Contact", href: "/contact" },
        { label: "CyberTech", href: "/cybertech" },
        { label: "Services", href: "/services" },
        { label: "Blogs", href: "/blogs" },
      ]
    }
  ];

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Mail, href: "mailto:contact@clearset.ai", label: "Email" },
  ];

  return (
    <footer className="py-16 border-t border-border relative overflow-hidden">
      <FallingLogos />
      {/* Gradient accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <SmoothReveal className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4 group">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/30">
                <span className="text-primary-foreground font-bold text-xl">C</span>
              </div>
              <span className="text-xl font-semibold">
                ClearSet<span className="text-primary">.AI</span>
              </span>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Expert AI development, custom SaaS solutions, and strategic consultation to propel your business forward.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <MagneticElement key={social.label} strength={0.3}>
                  <a
                    href={social.href}
                    className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                </MagneticElement>
              ))}
            </div>
          </SmoothReveal>

          {/* Links */}
          {footerLinks.map((section, sectionIndex) => (
            <SmoothReveal key={section.title} delay={sectionIndex * 100}>
              <h4 className="font-semibold mb-4 text-foreground">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300 inline-flex items-center gap-1 group"
                    >
                      {link.label}
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    </Link>
                  </li>
                ))}
              </ul>
            </SmoothReveal>
          ))}

          {/* Newsletter */}
          <SmoothReveal delay={200}>
            <h4 className="font-semibold mb-4 text-foreground">Subscribe to Newsletter</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Stay updated with the latest AI trends and insights.
            </p>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-secondary/50 border-border focus:border-primary"
              />
              <Button 
                type="submit" 
                size="icon"
                disabled={isSubmitting}
                className="bg-primary hover:bg-primary/90 flex-shrink-0"
              >
                <Send className="w-4 h-4" />
              </Button>
            </form>
          </SmoothReveal>
        </div>

        {/* Bottom */}
        <SmoothReveal delay={200}>
          <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} ClearSet.AI. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors duration-300 animated-underline">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors duration-300 animated-underline">Terms of Service</a>
            </div>
          </div>
        </SmoothReveal>
      </div>
    </footer>
  );
};

export default Footer;
