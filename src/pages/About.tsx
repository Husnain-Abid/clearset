import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  Lightbulb, 
  Users, 
  Award, 
  Target,
  Quote
} from "lucide-react";

const About = () => {
  const stats = [
    { value: "20+", label: "Projects Completed" },
    { value: "10+", label: "Enterprise Clients" },
    { value: "6+", label: "Years of Excellence" },
    { value: "99%", label: "Client Retention" },
  ];

  const values = [
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "We push the boundaries of what's possible with AI, constantly exploring new technologies and methodologies."
    },
    {
      icon: Users,
      title: "Client-Centric",
      description: "Your success is our success. We build long-term partnerships and deliver solutions that truly matter."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain the highest standards in everything we do, from code quality to client communication."
    },
    {
      icon: Target,
      title: "Results-Driven",
      description: "Every solution we create is designed to deliver measurable business value and competitive advantage."
    }
  ];

  const timeline = [
    { year: "2019", title: "The Beginning", description: "Founded with a vision to study AI technology for businesses of all sizes." },
    { year: "2020", title: "First Breakthrough", description: "Delivered our first enterprise-scale AI solution." },
    { year: "2021", title: "Our Vision", description: "ClearSet Consulting was formed." },
    { year: "2022", title: "Discipline", description: "Further developed technical skillsets to lead the curve in AI solutions." },
    { year: "2023", title: "ClearSet.AI Launch", description: "Launched our new brand as AI consultants and software developers." },
    { year: "2024", title: "Expansion", description: "Expanded our team and capabilities, adding NLP and mobile AI solutions to our portfolio." },
    { year: "2025", title: "The Future", description: "Continuing to innovate and lead the AI revolution, one solution at a time." },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                About <span className="gradient-text">ClearSet.AI</span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8">
                We're not just another tech company. We're AI visionaries, turning complex algorithms into business solutions that drive real growth and innovation.
              </p>

              <Link to="/contact">
                <Button className="btn-glow bg-primary text-primary-foreground hover:bg-primary/90">
                  Work With Us
                </Button>
              </Link>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-primary/20 rounded-3xl blur-2xl opacity-50" />
              <div className="relative glass-card overflow-hidden rounded-3xl">
                <img
                  src="https://heyboss.heeyo.ai/1757958096-78c765fd.webp"
                  alt="ClearSet.AI Team"
                  className="w-full h-auto aspect-[4/3] object-cover"
                />
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="glass-card p-6 rounded-2xl text-center border border-border"
              >
                <div className="text-4xl font-bold gradient-text mb-2">{stat.value}</div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Our <span className="gradient-text">Mission</span>
            </h2>
            
            <div className="glass-card p-8 md:p-12 rounded-3xl border border-border relative">
              <Quote className="w-12 h-12 text-primary/30 absolute top-6 left-6" />
              <p className="text-lg md:text-xl text-muted-foreground italic relative z-10">
                "To support, respond to, and educate artificial intelligence into communities, professionals, and organizations by developing cutting-edge AI solutions that are accessible, practical, and transformative for businesses of every size and industry."
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="glass-card p-6 rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="gradient-text">Journey</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              From a small startup to an industry leader, here's how we've grown and evolved
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />
              
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex items-start gap-8 mb-12 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Year bubble */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background -translate-x-1/2 mt-1.5 z-10" />
                  
                  {/* Content */}
                  <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-2">
                      {item.year}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              Meet Our <span className="gradient-text">Founder</span>
            </h2>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="glass-card p-8 md:p-12 rounded-3xl border border-border">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                <div className="relative">
                  <div className="absolute -inset-2 bg-primary/20 rounded-2xl blur-xl opacity-50" />
                  <img
                    src="https://images.unsplash.com/photo-1533901567451-7a6e68d6cd8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjE1MDB8MHwxfHNlYXJjaHwxfHxmb3VuZGVyfGVufDB8fHx8MTc1NDg5NDg0OHww&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Yasmine Gardiner - Founder of ClearSet.AI"
                    className="relative w-full aspect-square object-cover rounded-2xl"
                  />
                </div>
                
                <div className="md:col-span-2">
                  <h3 className="text-2xl font-bold mb-2">Yasmine Gardiner</h3>
                  <p className="text-primary mb-4">Founder & CEO</p>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Yasmine Gardiner founded ClearSet.AI with a vision to bridge the gap between cutting-edge research and practical business applications. With over six years of experience in data science and AI, she has impacted large corporations, startups, the Department of Defense, and federal agencies such as Accenture, NTT Data, and CFPB as a senior data scientist, cloud data specialist, and lead data engineer. She is currently the Director of Data Science at Electus Global Education.
                  </p>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Yasmine is also actively involved in her community, serving on the board of two nonprofits: Oasis Opportunities and Inside Reach Ministries. She has received accolades and recognitions such as the 2025 Caribbean Excellence Award nominee, 2023 & 2024 40 Under 40 honoree by the Tampa Club, Startup of the Year nomination, and features in Tampa Bay Inno, 10 Tampa Bay, and Voyage Tampa.
                  </p>

                  <div className="glass-card p-6 rounded-xl border border-primary/20 bg-primary/5">
                    <Quote className="w-6 h-6 text-primary mb-2" />
                    <p className="text-foreground italic">
                      "I believe AI should empower humans, not replace them. Our mission is to create AI solutions that enhance human capabilities and drive a creative change in the world."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="glass-card p-12 md:p-16 rounded-3xl border border-border text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Join Our <span className="gradient-text">Journey</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Ready to be part of the AI revolution? Let's build the future together.
            </p>
            <Link to="/contact">
              <Button className="btn-glow bg-primary text-primary-foreground hover:bg-primary/90">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* <Footer /> */}
    </div>
  );
};

export default About;
