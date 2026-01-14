import { useState, useRef } from "react";
import { SmoothReveal, TiltCard, HorizontalMarquee } from "@/components/effects";
import { ArrowLeft, ArrowRight } from "lucide-react";

// Import publication logos
import TampaBayInnoLogo from "@/assets/publications/tampa-bay-inno.png";
import TampaBay10Logo from "@/assets/publications/10-tampa-bay.png";
import VoyageTampaLogo from "@/assets/publications/voyage-tampa.png";
import HackerNoonLogo from "@/assets/publications/hackernoon.png";
import TampaBayConnectsLogo from "@/assets/publications/tampa-bay-connects.png";
import TampaBayTimesLogo from "@/assets/publications/tampa-bay-times.png";
const publications = [{
  name: "Tampa Bay Inno",
  logo: TampaBayInnoLogo
}, {
  name: "10 Tampa Bay",
  logo: TampaBay10Logo
}, {
  name: "Voyage Tampa",
  logo: VoyageTampaLogo
}, {
  name: "HackerNoon",
  logo: HackerNoonLogo
}, {
  name: "Tampa Bay Connects",
  logo: TampaBayConnectsLogo
}, {
  name: "Tampa Bay Times",
  logo: TampaBayTimesLogo
}];
const FeaturedIn = () => {
  const [isHovered, setIsHovered] = useState<number | null>(null);
  return <section className="py-20 bg-background relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <SmoothReveal>
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-[0.3em] text-primary mb-3 font-medium">
              [ Press & Media ]
            </p>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground">
              FEATURED<span className="text-primary">.</span>
            </h2>
          </div>
        </SmoothReveal>

        {/* Logo Slider - Main Display */}
        <SmoothReveal delay={100}>
          <div className="relative mb-12">
            {/* Gradient overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
            
            <HorizontalMarquee speed={25} direction="left" gap={40} pauseOnHover>
              {publications.map((publication, index) => <div key={index} className="flex-shrink-0 group" onMouseEnter={() => setIsHovered(index)} onMouseLeave={() => setIsHovered(null)}>
                  <div className={`glass-card p-8 w-[200px] h-[140px] flex items-center justify-center transition-all duration-500 ${isHovered === index ? 'border-primary/50 bg-primary/5 scale-105' : ''}`}>
                    <img src={publication.logo} alt={publication.name} className={`max-h-full max-w-full object-contain transition-all duration-500 ${isHovered === index ? 'scale-110 grayscale-0 opacity-100' : 'grayscale opacity-60'}`} />
                  </div>
                </div>)}
            </HorizontalMarquee>
          </div>
        </SmoothReveal>

        {/* Reverse direction slider */}
        <SmoothReveal delay={200}>
          <div className="relative">
            {/* Gradient overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
            
            <HorizontalMarquee speed={20} direction="right" gap={40} pauseOnHover>
              {[...publications].reverse().map((publication, index) => <div key={index} className="flex-shrink-0 group">
                  <div className="glass-card p-6 w-[160px] h-[100px] flex items-center justify-center transition-all duration-500 hover:border-primary/50 hover:bg-primary/5 hover:scale-105">
                    <img src={publication.logo} alt={publication.name} className="max-h-full max-w-full object-contain transition-all duration-500 grayscale opacity-40 hover:grayscale-0 hover:opacity-100" />
                  </div>
                </div>)}
            </HorizontalMarquee>
          </div>
        </SmoothReveal>

        {/* "As seen in" text */}
        <SmoothReveal delay={300}>
          <p className="text-center text-sm text-muted-foreground mt-12 uppercase tracking-widest">
            Trusted by reputable publications
          </p>
        </SmoothReveal>
      </div>
    </section>;
};
export default FeaturedIn;