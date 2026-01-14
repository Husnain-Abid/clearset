import { Link } from "react-router-dom";
import { Brain, Eye, MessageSquare, Smartphone, Cloud, Lightbulb, Phone, Server, Bot, BarChart3, CheckCircle, LineChart, ArrowRight } from "lucide-react";
import { GlitchText, TiltCard, SmoothReveal, MouseFollowGradient, StackedScrollCard, FallingLogos } from "@/components/effects";

const ServicesSection = () => {
  const mainServices = [
    {
      icon: Brain,
      title: "Machine Learning",
      id: "machine-learning",
      description: "Advanced ML algorithms and models that learn from your data to make intelligent predictions and automate complex decision-making processes."
    },
    {
      icon: Eye,
      title: "Computer Vision",
      id: "computer-vision",
      description: "Cutting-edge image and video analysis solutions that can detect, classify, and track objects with human-level accuracy."
    },
    {
      icon: MessageSquare,
      title: "Natural Language Processing",
      id: "nlp",
      description: "Sophisticated NLP systems that understand, interpret, and generate human language for chatbots, content analysis, and more."
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      id: "mobile-apps",
      description: "Native and cross-platform mobile applications powered by AI capabilities, delivering exceptional user experiences."
    },
    {
      icon: Cloud,
      title: "SaaS Solutions",
      id: "saas-solutions",
      description: "Turn-key software solutions tailored for techpreneurs, designed to bypass the development phase and accelerate your time to market."
    },
    {
      icon: Lightbulb,
      title: "AI Consultation",
      id: "ai-consultation",
      description: "Strategic AI consulting to help you identify opportunities, plan implementation, and maximize ROI from artificial intelligence initiatives."
    },
    {
      icon: Phone,
      title: "Call Center Software",
      id: "call-center-software",
      description: "Modern communication solutions that enable your team to make calls from anywhere and efficiently manage customer interactions."
    },
    {
      icon: Server,
      title: "Cloud Engineering DevSecOps",
      id: "cloud-engineering-devsecops",
      description: "Secure, scalable cloud infrastructure with integrated security practices throughout the development lifecycle, ensuring faster delivery with built-in protection."
    },
    {
      icon: Bot,
      title: "Agentic AI Platform",
      id: "agentic-ai-platform",
      description: "Autonomous AI agents that think, reason, and act independently to achieve complex business goals through intelligent decision-making and adaptive workflows."
    }
  ];

  const specializedServices = [
    {
      icon: BarChart3,
      title: "Business Analysis",
      id: "business-analysis",
      description: "Transform raw business data into actionable insights that drive strategic decision-making and competitive advantage."
    },
    {
      icon: CheckCircle,
      title: "Data Validation",
      id: "data-validation",
      description: "Ensure data quality and integrity with comprehensive validation services that prevent costly errors and improve decision-making."
    },
    {
      icon: LineChart,
      title: "Data Visualization",
      id: "data-visualization",
      description: "Turn complex datasets into compelling visual narratives that make your data accessible, actionable, and impactful."
    }
  ];

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      <FallingLogos />
      <div className="absolute inset-0 bg-radial-gradient opacity-50" />

      <div className="container mx-auto px-4 relative z-10">
        <SmoothReveal>
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.3em] text-primary mb-3 font-medium">
              [ What We Offer ]
            </p>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
              <GlitchText intensity="low" continuous>OUR SERVICES</GlitchText>
              <span className="text-primary">.</span>
            </h2>
            <p className="section-subtitle">
              From cutting-edge AI solutions to comprehensive SaaS platforms, we deliver the technology that transforms your business
            </p>
          </div>
        </SmoothReveal>

        {/* Main Services Grid with Stacked Scroll Effect */}
        <MouseFollowGradient className="rounded-3xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {mainServices.map((service, index) => (
              <StackedScrollCard 
                key={service.title} 
                index={index} 
                total={mainServices.length}
              >
                <TiltCard intensity={8} scale={1.02}>
                  <div className="glass-card p-6 group h-[280px] flex flex-col hover:border-primary/50 transition-all duration-500">
                    <div className="service-icon mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                      <service.icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4 flex-grow">{service.description}</p>
                    <Link
                      to={`/services#${service.id}`}
                      className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:gap-3 transition-all mt-auto animated-underline"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </TiltCard>
              </StackedScrollCard>
            ))}
          </div>
        </MouseFollowGradient>

        {/* Specialized Services with Stacked Effect */}
        <SmoothReveal delay={200}>
          <div className="glass-card p-8 md:p-12">
            <div className="text-center mb-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-3">
                <GlitchText intensity="low">Specialized Services</GlitchText>
              </h3>
              <p className="text-muted-foreground">
                Expand your capabilities with our service offerings designed to maximize your data potential.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {specializedServices.map((service, index) => (
                <StackedScrollCard 
                  key={service.title} 
                  index={index} 
                  total={specializedServices.length}
                >
                  <TiltCard intensity={6} scale={1.02}>
                    <div className="p-6 rounded-xl bg-secondary/30 border border-border hover:border-primary/50 transition-all duration-300 group h-[240px] flex flex-col">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                        <service.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h4 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">{service.title}</h4>
                      <p className="text-muted-foreground text-sm mb-4 flex-grow">{service.description}</p>
                      <Link
                        to={`/services#${service.id}`}
                        className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:gap-3 transition-all mt-auto animated-underline"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </TiltCard>
                </StackedScrollCard>
              ))}
            </div>
          </div>
        </SmoothReveal>
      </div>
    </section>
  );
};

export default ServicesSection;
