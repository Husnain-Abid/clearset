import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  Shield, 
  Server, 
  Layers, 
  Lock, 
  Eye, 
  Settings,
  Users,
  Building2,
  UserCheck,
  Zap,
  HeadphonesIcon,
  TrendingUp,
  CheckCircle2
} from "lucide-react";

const CyberTechPage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  const coreFeatures = [
    {
      icon: Shield,
      title: "Enhanced Data Security & Isolation",
      description: "Ensures complete project data segregation and secure multi-tenancy for sensitive research and enterprise AI applications."
    },
    {
      icon: Settings,
      title: "Operational Flexibility & Efficiency",
      description: "Enables customizable LLM selection and cost-saving resource optimization through intelligent LLM hibernation and scaling."
    },
    {
      icon: Eye,
      title: "Comprehensive Oversight & Control",
      description: "Offers granular client dashboards, centralized administration, and a seamless white-labeled user experience for MSPs."
    }
  ];

  const capabilities = [
    "Real-time data protection for generative AI applications",
    "PII masking, tokenization, and monitoring across all AI endpoints",
    "Prompt injection blocking and data poisoning prevention",
    "Multi-tenant compliance and advanced analytics integration",
    "SIEM integrations for enterprise-grade security at scale",
    "White-labeled solutions for managed service providers",
    "Fast deployment with full regulatory compliance",
    "Seamless integration with existing cybersecurity infrastructure"
  ];

  const partnerTypes = [
    {
      icon: Users,
      title: "Managed Service Providers",
      description: "Partner with us to offer AI cybersecurity solutions to your clients with our MSP program.",
      features: ["Multi-tenant architecture", "Centralized management", "White-label solutions"]
    },
    {
      icon: Building2,
      title: "CyberTech Firms",
      description: "Enhance your security portfolio with cutting-edge AI protection and data defense capabilities.",
      features: ["Advanced threat detection", "Real-time monitoring", "Compliance automation"]
    },
    {
      icon: UserCheck,
      title: "IT Consultants",
      description: "Expand your service offerings with enterprise-grade AI cybersecurity consultation and implementation.",
      features: ["Implementation support", "Training programs", "Revenue sharing"]
    }
  ];

  const whyPartner = [
    {
      icon: Zap,
      title: "Cutting-Edge Technology",
      description: "Access to the latest AI CyberTech solutions and real-time data protection capabilities."
    },
    {
      icon: HeadphonesIcon,
      title: "Comprehensive Support",
      description: "Full training, implementation support, and ongoing technical assistance for all partners."
    },
    {
      icon: TrendingUp,
      title: "Revenue Growth",
      description: "Attractive revenue sharing models and competitive pricing for reseller partners."
    },
    {
      icon: Lock,
      title: "Enterprise-Grade Security",
      description: "Multi-tenant compliance, SIEM integrations, and advanced analytics for enterprise clients."
    }
  ];

  const partnerBenefits = [
    "White-label solutions with your branding",
    "Dedicated partner support and training",
    "Marketing materials and sales enablement"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute inset-0 bg-radial-gradient" />
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px]" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">

              <span className="text-5xl font-medium">CyberTech Page</span>

          </div>
        </div>
      </section>

      {/* Hero Section */}
      {/* <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm mb-6">
              <Shield className="w-4 h-4" />
              MSP & AI CyberTech Distribution
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Real-Time Data Protection for{" "}
              <span className="gradient-text">Generative AI</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Protect your company's most valuable assets—even when using public or private LLMs. 
              Partner with us to deliver enterprise-grade AI CyberTech solutions.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="flex items-center gap-2 text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span>Prevent data leaks & IP exposure with real-time filters</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span>Block prompt injection & data poisoning</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span>Fast to deploy, fully compliant</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-glow bg-primary text-primary-foreground hover:bg-primary/90">
                Partner With Us
              </Button>
              <Button variant="outline" className="border-border hover:bg-secondary">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section> */}

      {/* Seamless Data Protection */}
      {/* <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Seamless Data Protection for{" "}
              <span className="gradient-text">Every AI Call</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everyone can use AI — but do you have control over your sensitive data? 
              Mask, tokenize, and monitor PII in real time across all AI endpoints.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {coreFeatures.map((feature, index) => (
              <div
                key={index}
                className="glass-card p-8 rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div> */}

          {/* Capabilities Grid */}
          {/* <div className="glass-card p-8 md:p-12 rounded-3xl border border-border">
            <h3 className="text-2xl font-bold mb-8 text-center">
              From solo projects to global enterprises — choose the option that fits your needs
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {capabilities.map((capability, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-xl bg-secondary/30 hover:bg-secondary/50 transition-colors"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{capability}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* Partnership Opportunities */}
      {/* <section id="partnerships" className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Partnership <span className="gradient-text">Opportunities</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join our growing network of CyberTech professionals and IT service providers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partnerTypes.map((partner, index) => (
              <div
                key={index}
                className="glass-card p-8 rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <partner.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{partner.title}</h3>
                <p className="text-muted-foreground mb-6">{partner.description}</p>
                <ul className="space-y-2">
                  {partner.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Partner With Us Form Section */}
      {/* <section id="contact" className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12"> */}
            {/* Form */}
            {/* <div className="glass-card p-8 md:p-12 rounded-3xl border border-border">
              <h2 className="text-3xl font-bold mb-4">Partner With Us</h2>
              <p className="text-muted-foreground mb-8">
                Ready to expand your CyberTech portfolio? Fill out the form below and we'll get back to you within 24 hours.
              </p>

              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name *</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-primary focus:outline-none transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email Address *</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-primary focus:outline-none transition-colors"
                    placeholder="john@company.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Company / Organization</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-primary focus:outline-none transition-colors"
                    placeholder="Your Company"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message *</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-primary focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your partnership interests..."
                  />
                </div>
                <Button className="w-full btn-glow bg-primary text-primary-foreground hover:bg-primary/90">
                  Send Partnership Inquiry
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  By submitting this form, you agree to our privacy policy and terms of service. 
                  We'll respond to partnership inquiries within 24 hours.
                </p>
              </form>
            </div> */}

            {/* Why Partner */}
            {/* <div>
              <h3 className="text-2xl font-bold mb-8">Why Partner With ClearSet.AI?</h3>
              <div className="space-y-6">
                {whyPartner.map((item, index) => (
                  <div
                    key={index}
                    className="flex gap-4 p-6 rounded-2xl bg-secondary/30 border border-border hover:border-primary/50 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 rounded-2xl bg-primary/10 border border-primary/20">
                <h4 className="font-semibold mb-4">Partnership Benefits</h4>
                <ul className="space-y-2">
                  {partnerBenefits.map((benefit, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* <Footer /> */}
    </div>
  );
};

export default CyberTechPage;
