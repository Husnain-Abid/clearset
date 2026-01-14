import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { GlitchText, FloatingElement, MagneticElement, SmoothReveal, ScrambleText } from "@/components/effects";
import { Link } from "react-router-dom";

const FinalCTA = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <SmoothReveal>
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-lg text-muted-foreground mb-6">
              Ready to experience{" "}
              <GlitchText className="text-foreground font-semibold" intensity="low">
                Yasmine's
              </GlitchText>{" "}
              expertise firsthand? Let's discuss how AI can transform your business.
            </p>

            <MagneticElement strength={0.4}>
              <FloatingElement amplitude={5} duration={3}>
                <Link to="/contact">
                  <Button
                    size="lg"
                    className="btn-glow bg-primary text-primary-foreground hover:bg-primary/90 px-10 py-7 text-lg group relative overflow-hidden"
                  >
                    <Sparkles className="mr-2 w-5 h-5" />
                    <ScrambleText>Start Your AI Journey</ScrambleText>
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </FloatingElement>
            </MagneticElement>
          </div>
        </SmoothReveal>
      </div>
    </section>
  );
};

export default FinalCTA;
