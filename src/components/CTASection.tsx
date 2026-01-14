import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Rocket } from "lucide-react";
import { GlitchText, ParallaxSection, FloatingElement, MagneticElement, SmoothReveal, GradientBlob, TiltCard } from "@/components/effects";

const CTASection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/3 to-background" />
      
      <GradientBlob 
        className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        size={400}
        blur={180}
        speed={20}
        colors={["hsl(168 100% 45% / 0.15)", "hsl(200 100% 50% / 0.1)"]}
      />

      <div className="container mx-auto px-4 relative z-10">
        <SmoothReveal>
          <TiltCard intensity={5} scale={1.01}>
            <div className="glass-card max-w-4xl mx-auto p-12 md:p-16 text-center relative overflow-hidden">
              {/* Animated border */}
              <div className="absolute inset-0 rounded-2xl opacity-50" style={{
                background: 'linear-gradient(90deg, transparent, hsl(var(--primary) / 0.3), transparent)',
                animation: 'shimmer 3s ease-in-out infinite',
                backgroundSize: '200% 100%'
              }} />
              
              <FloatingElement amplitude={10} duration={4}>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6 pulse-ring">
                  <Rocket className="w-8 h-8 text-primary" />
                </div>
              </FloatingElement>

              <h2 className="text-3xl md:text-5xl font-bold mb-6 relative">
                Ready to{" "}
                <GlitchText className="animated-gradient-text" intensity="medium" continuous>
                  Transform
                </GlitchText>{" "}
                Your Business?
              </h2>

              <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
                Join companies that have already revolutionized their operations with our AI solutions
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <MagneticElement strength={0.4}>
                  <Link to="/contact#message-form">
                    <Button
                      size="lg"
                      className="btn-glow bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg group relative overflow-hidden"
                    >
                      <span className="relative z-10 flex items-center">
                        Start Your Project
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </Button>
                  </Link>
                </MagneticElement>
                <MagneticElement strength={0.4}>
                  <Link to="/services">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-border hover:bg-secondary px-8 py-6 text-lg hover-lift"
                    >
                      Learn More
                    </Button>
                  </Link>
                </MagneticElement>
              </div>
            </div>
          </TiltCard>
        </SmoothReveal>
      </div>
    </section>
  );
};

export default CTASection;
