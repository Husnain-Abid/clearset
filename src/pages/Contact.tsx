import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Mail, Users, TrendingUp, HeadphonesIcon, Settings, Clock, MapPin, ChevronDown } from "lucide-react";
const Contact = () => {
  const location = useLocation();
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Scroll to section when hash changes
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours."
    });
    setFormData({
      name: "",
      email: "",
      company: "",
      message: ""
    });
    setIsSubmitting(false);
  };
  const whyChooseUs = [{
    icon: Users,
    title: "Expert Team",
    description: "Our team of AI specialists has years of experience in delivering successful projects."
  }, {
    icon: TrendingUp,
    title: "Proven Results",
    description: "We've helped 10+ companies transform their business with AI solutions."
  }, {
    icon: HeadphonesIcon,
    title: "End-to-End Support",
    description: "From consultation to deployment, we're with you every step of the way."
  }, {
    icon: Settings,
    title: "Custom Solutions",
    description: "Every project is tailored to your specific needs and business goals."
  }];
  const faqs = [{
    question: "How long does a typical AI project take?",
    answer: "Project timelines vary based on complexity, but most projects range from 3-6 months from initial consultation to deployment."
  }, {
    question: "Do you provide ongoing support after project completion?",
    answer: "Yes, we offer comprehensive support packages including maintenance, updates, and optimization services."
  }, {
    question: "Can you work with our existing technology stack?",
    answer: "Absolutely! We specialize in integrating AI solutions with existing systems and can adapt to your current technology infrastructure."
  }, {
    question: "What industries do you serve?",
    answer: "We work across various industries including healthcare, finance, retail, manufacturing, and technology, adapting our solutions to specific industry needs."
  }];
  return <div className="min-h-screen bg-background">
      <Navbar />
      
     {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Get In <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Ready to transform your business with AI? We're here to help you every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              How Can We <span className="gradient-text">Help?</span>
            </h2>
            <p className="text-muted-foreground">Choose the best way to reach us</p>
          </div>

          <div className="max-w-md mx-auto">
            <a href="mailto:contact@clearset.ai" className="glass-card p-6 rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 flex items-start gap-4 group block">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Email Us</h3>
                <p className="text-sm text-muted-foreground mb-2">Send us an email and we'll respond within 24 hours</p>
                <span className="text-primary text-sm">contact@clearset.ai</span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Form and Why Choose Us */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div id="message-form" className="glass-card p-8 md:p-12 rounded-3xl border border-border scroll-mt-32">
              <h2 className="text-2xl font-bold mb-2">Send us a message</h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name *</label>
                  <input type="text" value={formData.name} onChange={e => setFormData({
                  ...formData,
                  name: e.target.value
                })} className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-primary focus:outline-none transition-colors" placeholder="John Doe" maxLength={100} />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email Address *</label>
                  <input type="email" value={formData.email} onChange={e => setFormData({
                  ...formData,
                  email: e.target.value
                })} className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-primary focus:outline-none transition-colors" placeholder="john@company.com" maxLength={255} />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Company</label>
                  <input type="text" value={formData.company} onChange={e => setFormData({
                  ...formData,
                  company: e.target.value
                })} className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-primary focus:outline-none transition-colors" placeholder="Your Company" maxLength={100} />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message *</label>
                  <textarea value={formData.message} onChange={e => setFormData({
                  ...formData,
                  message: e.target.value
                })} rows={4} className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-primary focus:outline-none transition-colors resize-none" placeholder="Tell us about your project..." maxLength={1000} />
                </div>
                <Button type="submit" className="w-full btn-glow bg-primary text-primary-foreground hover:bg-primary/90" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>

            {/* Why Choose Us */}
            <div>
              <h3 className="text-2xl font-bold mb-8">Why Choose Us?</h3>
              <div className="space-y-6">
                {whyChooseUs.map((item, index) => <div key={index} className="flex gap-4 p-6 rounded-2xl bg-secondary/30 border border-border hover:border-primary/50 transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>)}
              </div>

              <div className="mt-8 p-6 rounded-2xl bg-primary/10 border border-primary/20">
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">Response Time</h4>
                    <p className="text-sm text-muted-foreground">
                      We typically respond to all inquiries within 24 hours during business days. For urgent matters, please email us directly.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Location */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="gradient-text">Office</span>
            </h2>
            <p className="text-muted-foreground">Visit us at our Tampa Bay location</p>
          </div>

          <div className="max-w-md mx-auto">
            <div className="glass-card p-8 rounded-2xl border border-border text-center">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">​HEADQUARTERS
            </h3>
              <a href="https://www.google.com/maps/search/?api=1&query=100+S+Ashley+Drive+Suite+617+Tampa+FL+33602" target="_blank" rel="noopener noreferrer" className="block text-muted-foreground hover:text-primary transition-colors mb-4">
                <p className="mb-1">100 S. Ashley Drive Suite 617</p>
                <p>Downtown Tampa, FL 33602</p>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-muted-foreground">Quick answers to common questions</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => <div key={index} className="glass-card rounded-2xl border border-border overflow-hidden">
                <button onClick={() => setOpenFaq(openFaq === index ? null : index)} className="w-full p-6 text-left flex items-center justify-between hover:bg-secondary/30 transition-colors">
                  <span className="font-semibold pr-4">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-primary flex-shrink-0 transition-transform ${openFaq === index ? "rotate-180" : ""}`} />
                </button>
                {openFaq === index && <div className="px-6 pb-6">
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </div>}
              </div>)}
          </div>
        </div>
      </section>


       <Footer /> 
    </div>;
};
export default Contact;