import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, Server, Layers, ArrowRight } from "lucide-react";

const CyberTech = () => {
  const features = [
    {
      icon: Shield,
      text: "Prevent data leaks & IP exposure with real-time filters"
    },
    {
      icon: Server,
      text: "Multi-tenant compliance & SIEM integrations"
    },
    {
      icon: Layers,
      text: "White-label solutions for IT & CyberTech firms"
    }
  ];

  return (
    <section id="cybertech" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm mb-6">
              <Shield className="w-4 h-4" />
              Enterprise Security
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              AI <span className="gradient-text">CyberTech</span>
            </h2>
            <h3 className="text-2xl text-muted-foreground mb-6">
              MSP & Distribution Solutions
            </h3>

            <p className="text-lg text-muted-foreground mb-8">
              Real-time data protection for generative AI. Partner with us as a Managed Service Provider or CyberTech distributor to deliver enterprise-grade AI security solutions.
            </p>

            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-xl bg-secondary/30 border border-border hover:border-primary/50 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-foreground">{feature.text}</span>
                </div>
              ))}
            </div>

            <Link to="/cybertech">
              <Button className="btn-glow bg-primary text-primary-foreground hover:bg-primary/90 group">
                Explore CyberTech Solutions
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="absolute -inset-4 bg-primary/20 rounded-3xl blur-2xl opacity-50" />
            <div className="relative glass-card overflow-hidden rounded-3xl">
              <img
                src="https://images.unsplash.com/photo-1642352104934-a158ad289adc?ixid=M3w2MjE1MDB8MHwxfHNlYXJjaHwxfHxBSSUyMGN5YmVyc2VjdXJpdHklMkMlMjBkYXRhJTIwcHJvdGVjdGlvbiUyQyUyMHRlY2hub2xvZ3klMjBzb2x1dGlvbnN8ZW58MHx8fHwxNzU3MTIwODI4fDA&ixlib=rb-4.1.0&w=800"
                alt="AI CyberTech Solutions"
                className="w-full h-auto aspect-[4/3] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CyberTech;
