import { HorizontalMarquee, SmoothReveal, StackingText } from "@/components/effects";

const MarqueeSection = () => {
  const words = [
    "AI Development",
    "Machine Learning", 
    "Computer Vision",
    "NLP",
    "Data Analytics",
    "Cloud Engineering",
    "SaaS Solutions",
    "Digital Transformation",
  ];

  const stackingWords = ["Innovation", "Excellence", "Intelligence", "Growth"];

  return (
    <section className="py-20 relative overflow-hidden border-y border-border/50">
      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background z-10 pointer-events-none" />
      
      {/* Stacking text header */}
      <SmoothReveal>
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-muted-foreground/50">
            Driving{" "}
            <StackingText 
              words={stackingWords} 
              className="text-primary" 
              interval={2500}
            />
          </h3>
        </div>
      </SmoothReveal>

      <SmoothReveal delay={100}>
        <HorizontalMarquee speed={40} direction="left" className="mb-6" gap={60}>
          {words.map((word, index) => (
            <span 
              key={index} 
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground/10 hover:text-primary/50 transition-colors duration-500 whitespace-nowrap cursor-default"
            >
              {word}
              <span className="text-primary/30 mx-8">•</span>
            </span>
          ))}
        </HorizontalMarquee>
      </SmoothReveal>

      <SmoothReveal delay={200}>
        <HorizontalMarquee speed={35} direction="right" gap={60}>
          {[...words].reverse().map((word, index) => (
            <span 
              key={index} 
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground/5 hover:text-primary/40 transition-colors duration-500 whitespace-nowrap cursor-default"
            >
              {word}
              <span className="text-accent/20 mx-8">✦</span>
            </span>
          ))}
        </HorizontalMarquee>
      </SmoothReveal>
    </section>
  );
};

export default MarqueeSection;
