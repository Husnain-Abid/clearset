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
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute inset-0 bg-radial-gradient" />
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px]" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">

              <span className="text-5xl font-medium">Contact Page</span>

          </div>
        </div>
      </section>


      {/* <Footer /> */}
    </div>;
};
export default Contact;