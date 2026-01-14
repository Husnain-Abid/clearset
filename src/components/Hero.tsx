import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { 
  GlitchText, 
  TextReveal, 
  FloatingElement, 
  ParallaxSection, 
  MagneticElement,
  GradientBlob,
  AnimatedCounter,
  SmoothReveal,
  TiltCard,
  FallingLogos,
  BreakoutClip
} from "@/components/effects";

const Hero = () => {
  const stats = [
    { value: 20, suffix: "+", label: "Projects Completed" },
    { value: 10, suffix: "+", label: "Enterprise Clients" },
    { value: 99, suffix: "%", label: "Client Satisfaction" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Falling Logos Effect */}
      <FallingLogos />
      
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute inset-0 bg-radial-gradient" />

      {/* Morphing gradient blobs */}
      <GradientBlob 
        className="top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2"
        size={500}
        blur={120}
        speed={25}
        colors={["hsl(168 100% 45%)", "hsl(200 100% 50%)"]}
      />
      <GradientBlob 
        className="bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2"
        size={400}
        blur={100}
        speed={30}
        colors={["hsl(168 80% 40%)", "hsl(180 100% 50%)"]}
      />

      {/* Animated orbs with parallax */}
      <ParallaxSection speed={0.2} className="absolute top-1/4 left-1/4">
        <FloatingElement amplitude={30} duration={8}>
          <div className="w-96 h-96 bg-primary/20 rounded-full blur-[128px]" />
        </FloatingElement>
      </ParallaxSection>
      
      <ParallaxSection speed={-0.15} className="absolute bottom-1/4 right-1/4">
        <FloatingElement amplitude={25} duration={7} delay={2}>
          <div className="w-80 h-80 bg-accent/15 rounded-full blur-[128px]" />
        </FloatingElement>
      </ParallaxSection>

      {/* Extra floating orbs for depth */}
      <ParallaxSection speed={0.3} className="absolute top-1/3 right-1/3">
        <FloatingElement amplitude={15} duration={5} delay={1}>
          <div className="w-48 h-48 bg-primary/10 rounded-full blur-[80px]" />
        </FloatingElement>
      </ParallaxSection>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="max-w-2xl">
            {/* Badge with shimmer */}
            <SmoothReveal delay={0}>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary mb-6 shimmer-effect">
                <Sparkles className="w-3.5 h-3.5" />
                <span className="text-xs font-medium">Expert AI Development</span>
              </div>
            </SmoothReveal>

            {/* Main Heading with enhanced effects */}
            <SmoothReveal delay={100}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
                <GlitchText className="text-primary" intensity="medium" continuous>
                  AI
                </GlitchText>{" "}
                <span className="text-foreground text-glow">
                  <TextReveal delay={300} staggerDelay={80}>
                    Built To Grow
                  </TextReveal>
                </span>
                <br />
                <span className="animated-gradient-text">
                  <TextReveal delay={600} staggerDelay={60}>
                    With You.
                  </TextReveal>
                </span>
              </h1>
            </SmoothReveal>

            {/* Subtitle */}
            <SmoothReveal delay={200}>
              <p className="text-lg max-w-xl mb-10 text-secondary-foreground font-serif md:text-xl">
                <TextReveal delay={800} staggerDelay={30}>
                  Turning Organizations Into Data-Driven Identities. We Automate Your Workflow Into An AI-Driven System.
                </TextReveal>
              </p>
            </SmoothReveal>

            {/* CTA Buttons with enhanced effects */}
            <SmoothReveal delay={300}>
              <div className="flex flex-col sm:flex-row items-start gap-4 mb-12">
                <MagneticElement strength={0.4}>
                  <Button
                    size="lg"
                    className="btn-glow bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg group relative overflow-hidden"
                    asChild
                  >
                    <Link to="/services">
                      <span className="relative z-10 flex items-center">
                        Explore Our Services
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </Link>
                  </Button>
                </MagneticElement>
                <MagneticElement strength={0.4}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-border hover:bg-secondary px-8 py-6 text-lg hover-lift"
                  >
                    Get In Touch
                  </Button>
                </MagneticElement>
              </div>
            </SmoothReveal>
          </div>

          {/* Right side - Breakout Clip */}
          <div className="flex justify-center lg:justify-end">
            <SmoothReveal delay={400}>
              <BreakoutClip />
            </SmoothReveal>
          </div>
        </div>

        {/* Stats with animated counters and tilt effect */}
        <SmoothReveal delay={500}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {stats.map((stat, index) => (
              <TiltCard key={stat.label} intensity={10} scale={1.03}>
                <div 
                  className="glass-card p-6 text-center spotlight-card"
                  style={{
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2 multi-glow">
                    <AnimatedCounter 
                      value={stat.value} 
                      suffix={stat.suffix}
                      duration={2000}
                    />
                  </div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              </TiltCard>
            ))}
          </div>
        </SmoothReveal>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
};

export default Hero;
