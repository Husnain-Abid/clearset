import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  Brain, Eye, MessageSquare, Smartphone, Cloud, Lightbulb, 
  Phone, Server, Bot, BarChart3, CheckCircle, LineChart,
  ArrowRight, Sparkles, Zap, Shield, Users, Target
} from "lucide-react";

const Services = () => {
  const location = useLocation();

  // Scroll to section when hash changes
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  const services = [
    {
      id: "machine-learning",
      icon: Brain,
      title: "Machine Learning",
      shortDesc: "Advanced ML algorithms and models that learn from your data to make intelligent predictions and automate complex decision-making processes.",
      fullDesc: "Our machine learning solutions leverage the latest advancements in AI to transform your data into actionable insights. We build custom models tailored to your specific business needs, from predictive analytics to automated decision systems.",
      features: [
        "Custom model development and training",
        "Predictive analytics and forecasting",
        "Automated decision-making systems",
        "Data pipeline optimization",
        "Model deployment and monitoring"
      ]
    },
    {
      id: "computer-vision",
      icon: Eye,
      title: "Computer Vision",
      shortDesc: "Cutting-edge image and video analysis solutions that can detect, classify, and track objects with human-level accuracy.",
      fullDesc: "Transform how you see and understand visual data. Our computer vision solutions enable automated inspection, facial recognition, object detection, and video analytics for industries ranging from manufacturing to healthcare.",
      features: [
        "Object detection and recognition",
        "Facial recognition systems",
        "Quality inspection automation",
        "Video analytics and monitoring",
        "OCR and document processing"
      ]
    },
    {
      id: "nlp",
      icon: MessageSquare,
      title: "Natural Language Processing",
      shortDesc: "Sophisticated NLP systems that understand, interpret, and generate human language for chatbots, content analysis, and more.",
      fullDesc: "Bridge the gap between human communication and machine understanding. Our NLP solutions power intelligent chatbots, sentiment analysis, document understanding, and automated content generation.",
      features: [
        "Intelligent chatbots and virtual assistants",
        "Sentiment analysis and opinion mining",
        "Document classification and extraction",
        "Language translation services",
        "Text summarization and generation"
      ]
    },
    {
      id: "mobile-apps",
      icon: Smartphone,
      title: "Mobile App Development",
      shortDesc: "Native and cross-platform mobile applications powered by AI capabilities, delivering exceptional user experiences.",
      fullDesc: "Create powerful mobile experiences that leverage AI capabilities. From concept to deployment, we build native and cross-platform applications that engage users and drive business results.",
      features: [
        "Native iOS and Android development",
        "Cross-platform React Native apps",
        "AI-powered features integration",
        "UI/UX design and optimization",
        "App store optimization and deployment"
      ]
    },
    {
      id: "saas-solutions",
      icon: Cloud,
      title: "SaaS Solutions",
      shortDesc: "Turn-key software solutions tailored for techpreneurs, designed to bypass the development phase and accelerate your time to market.",
      fullDesc: "Skip months of development with our ready-to-deploy SaaS solutions. We offer white-label platforms and custom software development that gets you to market faster with proven architectures.",
      features: [
        "White-label SaaS platforms",
        "Custom software development",
        "Multi-tenant architecture",
        "Subscription management systems",
        "API development and integration"
      ]
    },
    {
      id: "ai-consultation",
      icon: Lightbulb,
      title: "AI Consultation",
      shortDesc: "Strategic AI consulting to help you identify opportunities, plan implementation, and maximize ROI from artificial intelligence initiatives.",
      fullDesc: "Navigate the AI landscape with expert guidance. Our consultation services help you identify the right opportunities, develop implementation roadmaps, and ensure successful AI adoption across your organization.",
      features: [
        "AI readiness assessment",
        "Strategy development and roadmapping",
        "Technology selection and evaluation",
        "ROI analysis and business case development",
        "Change management and training"
      ]
    },
    {
      id: "call-center-software",
      icon: Phone,
      title: "Call Center Software",
      shortDesc: "Modern communication solutions that enable your team to make calls from anywhere and efficiently manage customer interactions.",
      fullDesc: "Revolutionize your customer service with AI-powered call center solutions. Our platforms enable seamless communication, intelligent routing, and real-time analytics to improve customer satisfaction.",
      features: [
        "Cloud-based call management",
        "AI-powered call routing",
        "Real-time analytics and reporting",
        "CRM integration",
        "Quality assurance and monitoring"
      ]
    },
    {
      id: "cloud-engineering-devsecops",
      icon: Server,
      title: "Cloud Engineering DevSecOps",
      shortDesc: "Secure, scalable cloud infrastructure with integrated security practices throughout the development lifecycle.",
      fullDesc: "Build secure, scalable infrastructure with our cloud engineering and DevSecOps services. We integrate security at every stage of development, ensuring faster delivery with built-in protection.",
      features: [
        "Cloud architecture design",
        "Infrastructure as Code (IaC)",
        "CI/CD pipeline implementation",
        "Security automation and monitoring",
        "Container orchestration with Kubernetes"
      ]
    },
    {
      id: "agentic-ai-platform",
      icon: Bot,
      title: "Agentic AI Platform",
      shortDesc: "Autonomous AI agents that think, reason, and act independently to achieve complex business goals.",
      fullDesc: "Harness the power of autonomous AI agents that can plan, reason, and execute complex tasks. Our agentic AI platforms enable intelligent automation that adapts to changing conditions and achieves your business objectives.",
      features: [
        "Autonomous task execution",
        "Multi-agent collaboration systems",
        "Adaptive workflow automation",
        "Goal-oriented decision making",
        "Human-in-the-loop controls"
      ]
    },
    {
      id: "business-analysis",
      icon: BarChart3,
      title: "Business Analysis",
      shortDesc: "Transform raw business data into actionable insights that drive strategic decision-making and competitive advantage.",
      fullDesc: "Turn your data into a strategic asset. Our business analysis services help you uncover hidden patterns, identify opportunities, and make data-driven decisions that give you a competitive edge.",
      features: [
        "Data mining and pattern recognition",
        "Competitive intelligence analysis",
        "Market research and insights",
        "Performance metrics and KPIs",
        "Strategic recommendations"
      ]
    },
    {
      id: "data-validation",
      icon: CheckCircle,
      title: "Data Validation",
      shortDesc: "Ensure data quality and integrity with comprehensive validation services that prevent costly errors.",
      fullDesc: "Data quality is the foundation of good decision-making. Our data validation services ensure accuracy, consistency, and reliability across all your data sources.",
      features: [
        "Automated data quality checks",
        "Data cleansing and standardization",
        "Error detection and correction",
        "Compliance validation",
        "Data integrity monitoring"
      ]
    },
    {
      id: "data-visualization",
      icon: LineChart,
      title: "Data Visualization",
      shortDesc: "Turn complex datasets into compelling visual narratives that make your data accessible and impactful.",
      fullDesc: "Make your data tell a story. Our visualization services transform complex datasets into intuitive dashboards and reports that drive understanding and action.",
      features: [
        "Interactive dashboards",
        "Custom report generation",
        "Real-time data visualization",
        "Executive presentations",
        "Self-service analytics tools"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />


      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute inset-0 bg-radial-gradient" />
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px]" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary mb-8">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Comprehensive AI Solutions</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              Our <span className="gradient-text text-glow">Services</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              From cutting-edge AI solutions to comprehensive SaaS platforms, we deliver the technology that transforms your business
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary/50 text-sm">
                <Zap className="w-4 h-4 text-primary" />
                <span>Fast Implementation</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary/50 text-sm">
                <Shield className="w-4 h-4 text-primary" />
                <span>Enterprise Security</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary/50 text-sm">
                <Users className="w-4 h-4 text-primary" />
                <span>Dedicated Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center scroll-mt-24 ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm mb-4">
                    <service.icon className="w-4 h-4" />
                    <span>Service</span>
                  </div>

                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    {service.title}
                  </h2>

                  <p className="text-lg text-muted-foreground mb-6">
                    {service.fullDesc}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle className="w-3 h-3 text-primary" />
                        </div>
                        <span className="text-foreground/90">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button asChild className="btn-glow bg-primary text-primary-foreground hover:bg-primary/90 group">
                    <Link to="/contact#message-form">
                      Get Started
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>

                {/* Visual Card */}
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="relative">
                    <div className="absolute -inset-4 bg-primary/10 rounded-3xl blur-2xl opacity-50" />
                    <div className="relative glass-card p-8 md:p-12">
                      <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 mx-auto">
                        <service.icon className="w-10 h-10 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold text-center mb-4">{service.title}</h3>
                      <p className="text-muted-foreground text-center">
                        {service.shortDesc}
                      </p>
                    </div>
                  </div>
                </div>
              </div> 
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[150px]" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="glass-card max-w-4xl mx-auto p-12 md:p-16 text-center glow-effect">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6">
              <Target className="w-8 h-8 text-primary" />
            </div>

            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Get <span className="gradient-text">Started</span>?
            </h2>
            
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
              Let's discuss how our services can help transform your business with cutting-edge AI solutions
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="btn-glow bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg group">
                <Link to="/contact#message-form">
                  Start Your Project
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-border hover:bg-secondary px-8 py-6 text-lg">
                <Link to="/contact#message-form">
                  Schedule a Call
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
