import { Award, CheckCircle } from "lucide-react";
import { ScrollReveal, GlitchText, FloatingElement } from "@/components/effects";

const Endorsement = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <ScrollReveal direction="up">
          <div className="glass-card max-w-4xl mx-auto p-8 md:p-12 glow-effect">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <FloatingElement amplitude={10} duration={5} className="flex-shrink-0">
                <div className="w-32 h-32 rounded-2xl bg-secondary/50 flex items-center justify-center">
                  <img
                    src="https://heyboss.heeyo.ai/user-assets/ICCI_zenFV2fH.png"
                    alt="International College of the Cayman Islands"
                    className="max-w-full max-h-full object-contain p-4"
                  />
                </div>
              </FloatingElement>

              <div className="flex-grow text-center md:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm mb-4">
                  <Award className="w-4 h-4" />
                  Academic Endorsement
                </div>

                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  <GlitchText intensity="low">ClearSet.AI</GlitchText> is endorsed by the International College of the Cayman Islands
                </h3>

                <p className="text-muted-foreground mb-6">
                  This prestigious endorsement recognizes our commitment to advancing AI education and technological excellence.
                </p>

                <div className="flex items-center gap-2 text-primary">
                  <CheckCircle className="w-5 h-5" />
                  <span className="text-sm font-medium">Recognized for technical excellence and ethical AI development</span>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Endorsement;
