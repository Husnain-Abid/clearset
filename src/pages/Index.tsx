import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MarqueeSection from "@/components/MarqueeSection";
import TrustedBy from "@/components/TrustedBy";
import FeaturedIn from "@/components/FeaturedIn";
import Affiliations from "@/components/Affiliations";
import Endorsement from "@/components/Endorsement";
import CyberTech from "@/components/CyberTech";
import ServicesSection from "@/components/Services";
import CTASection from "@/components/CTASection";
import Acquisitions from "@/components/Acquisitions";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import ChamberMembership from "@/components/ChamberMembership";
import Footer from "@/components/Footer";
import IntroAnimation from "@/components/IntroAnimation";
import { ParticleField, CursorTrail } from "@/components/effects";
import Banner from "@/components/Banner";

const Index = () => {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <div className="min-h-screen bg-background">
      {/* {showIntro && <IntroAnimation onComplete={() => setShowIntro(false)} />} */}
      {/* <ParticleField /> */}
      <CursorTrail />
      <Navbar />
      {/* <Hero /> */}
      <Banner />
      <MarqueeSection />
      <TrustedBy />
      <FeaturedIn />
      <Affiliations />
      <Endorsement />
      <CyberTech />
      <ServicesSection />
      <CTASection />
      <Acquisitions />
      <Testimonials />
      <FinalCTA />
      <ChamberMembership />
      <Footer />
    </div>
  );
};

export default Index;
