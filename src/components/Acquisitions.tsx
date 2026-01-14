import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, TrendingUp, Users, Zap } from "lucide-react";

const Acquisitions = () => {
  const benefits = [
    {
      icon: TrendingUp,
      text: "Ready-to-scale SaaS products with proven market validation"
    },
    {
      icon: Users,
      text: "Full IP rights, existing customer base, and growth support"
    },
    {
      icon: Zap,
      text: "Skip months of development and validation phases"
    }
  ];

  return (
    <section id="acquisitions" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-4 bg-primary/20 rounded-3xl blur-2xl opacity-50" />
            <div className="relative glass-card overflow-hidden rounded-3xl">
              <img
                src="https://images.unsplash.com/photo-1642132652860-603f4e3c19b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800"
                alt="SaaS Acquisitions"
                className="w-full h-auto aspect-[4/3] object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm mb-6">
              <TrendingUp className="w-4 h-4" />
              Growth Opportunity
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              SaaS <span className="gradient-text">Acquisitions</span>
            </h2>
            <h3 className="text-2xl text-muted-foreground mb-6">
              Skip Development, Start Scaling
            </h3>

            <p className="text-lg text-muted-foreground mb-8">
              Acquire mature, market-validated SaaS products built by our expert team. Jump straight to growth with proven tools, established user bases, and scalable architectures.
            </p>

            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4"
                >
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground">{benefit.text}</span>
                </div>
              ))}
            </div>

            <Button className="btn-glow bg-primary text-primary-foreground hover:bg-primary/90 group">
              Explore SaaS Acquisitions
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Acquisitions;
