import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SmoothReveal, TiltCard, ParallaxSection } from "@/components/effects";
import { Calendar, Clock, ArrowRight, User } from "lucide-react";
import { Link } from "react-router-dom";

const Blogs = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Enterprise: Trends to Watch in 2025",
      excerpt: "Explore the emerging AI technologies that are reshaping how businesses operate, from generative AI to autonomous systems.",
      author: "ClearSet Team",
      date: "Dec 20, 2024",
      readTime: "8 min read",
      category: "AI Trends",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop",
    },
    {
      id: 2,
      title: "Building Scalable Machine Learning Pipelines",
      excerpt: "A comprehensive guide to designing and implementing ML pipelines that can handle enterprise-scale data processing.",
      author: "ClearSet Team",
      date: "Dec 15, 2024",
      readTime: "12 min read",
      category: "Machine Learning",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=500&fit=crop",
    },
    {
      id: 3,
      title: "Computer Vision Applications in Manufacturing",
      excerpt: "How computer vision is revolutionizing quality control, predictive maintenance, and safety in manufacturing environments.",
      author: "ClearSet Team",
      date: "Dec 10, 2024",
      readTime: "10 min read",
      category: "Computer Vision",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=500&fit=crop",
    },
    {
      id: 4,
      title: "Natural Language Processing: Beyond Chatbots",
      excerpt: "Discover the advanced NLP applications that are transforming document processing, sentiment analysis, and knowledge management.",
      author: "ClearSet Team",
      date: "Dec 5, 2024",
      readTime: "7 min read",
      category: "NLP",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=500&fit=crop",
    },
    {
      id: 5,
      title: "Data Validation Strategies for AI-Ready Datasets",
      excerpt: "Best practices for ensuring data quality and integrity before feeding it into machine learning models.",
      author: "ClearSet Team",
      date: "Nov 28, 2024",
      readTime: "9 min read",
      category: "Data Validation",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
    },
    {
      id: 6,
      title: "ROI of AI Implementation: A Business Perspective",
      excerpt: "Understanding the true value of AI investments and how to measure success in enterprise AI projects.",
      author: "ClearSet Team",
      date: "Nov 20, 2024",
      readTime: "11 min read",
      category: "Business Analysis",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
    

      {/* Hero Section */}
      <ParallaxSection speed={0.3}>
        <section className="pt-32 pb-16 relative overflow-hidden">
          {/* Background effects */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          
          <div className="container mx-auto px-4 relative z-10">
            <SmoothReveal>
              <div className="text-center max-w-3xl mx-auto">
                <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                  Insights & Updates
                </span>
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  Our <span className="text-gradient">Blog</span>
                </h1>
                <p className="text-xl text-muted-foreground">
                  Stay updated with the latest trends in AI, machine learning, and digital transformation.
                </p>
              </div>
            </SmoothReveal>
          </div>
        </section>
      </ParallaxSection>

      {/* Blog Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <SmoothReveal key={post.id} delay={index * 100}>
                <TiltCard className="h-full">
                  <article className="glass-card rounded-2xl overflow-hidden border border-border group h-full flex flex-col">
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                      <span className="absolute bottom-4 left-4 px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium backdrop-blur-sm">
                        {post.category}
                      </span>
                    </div>
                    
                    {/* Content */}
                    <div className="p-6 flex flex-col flex-grow">
                      <h2 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                        {post.title}
                      </h2>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-3 flex-grow">
                        {post.excerpt}
                      </p>
                      
                      {/* Meta */}
                      <div className="flex items-center justify-between text-xs text-muted-foreground pt-4 border-t border-border">
                        <div className="flex items-center gap-4">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {post.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {post.readTime}
                          </span>
                        </div>
                      </div>
                      
                      {/* Read More */}
                      <Link 
                        to={`/blogs/${post.id}`}
                        className="mt-4 inline-flex items-center gap-2 text-primary text-sm font-medium group/link"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                      </Link>
                    </div>
                  </article>
                </TiltCard>
              </SmoothReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SmoothReveal>
            <div className="glass-card rounded-3xl p-8 md:p-12 text-center border border-border relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5" />
              <div className="relative z-10">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Stay Ahead of the Curve
                </h2>
                <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                  Subscribe to our newsletter for the latest AI insights, industry trends, and company updates delivered straight to your inbox.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-grow px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:outline-none transition-colors"
                  />
                  <button className="btn-glow bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </SmoothReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blogs;
