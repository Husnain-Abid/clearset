import { Quote, Star } from "lucide-react";
import { GlitchText, TiltCard, SmoothReveal, MouseFollowGradient, StackedScrollCard, FallingLogos } from "@/components/effects";

const Testimonials = () => {
  const testimonials = [
    {
      text: "I have had the pleasure of working closely with Yasmine over the past few years, and her commitment to excellence, innovative thinking, and strategic approach to AI are truly commendable. As an AI specialist, Yasmine has demonstrated a profound understanding of the evolving landscape, staying ahead of industry trends and leveraging cutting-edge technologies to drive impactful outcomes.",
      type: "Long-term Collaboration"
    },
    {
      text: "Yasmine is a true professional. We recently met, and she was so insightful. She also provided myself with some good tools and resources to stay up to date with AI. Along with her professionalism, she is someone who genuinely cares about the success of those around her. I highly recommend Yasmine for any of your data needs!",
      type: "Consultation Session"
    },
    {
      text: "Super knowledgeable regarding all forms of AI. Was able to help guide through the complexities and capabilities of different types. Will be my go to for all my AI needs!",
      type: "AI Guidance"
    },
    {
      text: "Yasmine is great. When I met with her, she had so much planned out for me. She knew I was somewhat a novice, and she created a list specifically catered towards my industry and walked me through how I could use each of them to be more productive.",
      type: "Industry-Specific Consultation"
    },
    {
      text: "Yasmine is a wonderful person with a beautiful energy and smile. She is a visionary with a contagious intentionality, I am so grateful to be working alongside her to make her dream a reality.",
      type: "Strategic Partnership"
    },
    {
      text: "Yasmine's passion for AI is evident in her exceptional technical skills and ability to inspire and lead diverse teams towards common goals. She possesses a unique combination of technical prowess and effective communication skills, making complex AI concepts accessible to a broad audience. Her leadership has been a driving force behind the success of several projects.",
      type: "Project Leadership"
    }
  ];

  return (
    <section id="testimonials" className="py-20 relative overflow-hidden">
      <FallingLogos />
      <div className="absolute inset-0 bg-radial-gradient opacity-30" />

      <div className="container mx-auto px-4 relative z-10">
        <SmoothReveal>
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.3em] text-primary mb-3 font-medium">
              [ Testimonials ]
            </p>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
              What Clients Say About{" "}
              <GlitchText className="animated-gradient-text" intensity="medium" continuous>
                Yasmine
              </GlitchText>
              <span className="text-primary">.</span>
            </h2>
            <p className="section-subtitle">
              Discover why clients trust Yasmine's expertise and professionalism in AI development and strategic consultation
            </p>
          </div>
        </SmoothReveal>

        <MouseFollowGradient className="rounded-3xl" gradientSize={500}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <StackedScrollCard key={index} index={index} total={testimonials.length}>
                <TiltCard intensity={6} scale={1.02}>
                  <div className="glass-card p-6 flex flex-col h-[320px] group hover:border-primary/30 transition-all duration-500">
                    <Quote className="w-10 h-10 text-primary/30 mb-4 flex-shrink-0 group-hover:text-primary/50 transition-colors" />

                    <p className="text-foreground/90 mb-6 flex-grow text-sm leading-relaxed overflow-hidden">
                      {testimonial.text}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-border flex-shrink-0">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className="w-4 h-4 fill-primary text-primary transition-transform duration-300"
                            style={{ transitionDelay: `${i * 50}ms` }}
                          />
                        ))}
                      </div>
                      <span className="text-xs text-muted-foreground font-medium px-3 py-1 rounded-full bg-secondary/50 group-hover:bg-primary/10 group-hover:text-primary transition-all">
                        {testimonial.type}
                      </span>
                    </div>
                  </div>
                </TiltCard>
              </StackedScrollCard>
            ))}
          </div>
        </MouseFollowGradient>
      </div>
    </section>
  );
};

export default Testimonials;
