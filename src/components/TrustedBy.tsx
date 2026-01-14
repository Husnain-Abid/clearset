import { SmoothReveal } from "@/components/effects";
import ActualizationAI from "@/assets/logos/Actualization_AI.png";
import AIDataDefense from "@/assets/logos/AI_Data_Defense.png";
import Atalo from "@/assets/logos/Atalo.png";
import BBBS from "@/assets/logos/BBBS.png";
import BeefBootlegger from "@/assets/logos/Beef_Bootlegger.png";
import BUP from "@/assets/logos/BUP.png";
import CooperCast from "@/assets/logos/CooperCast_LLC.png";
import CorePlanIT from "@/assets/logos/CorePlanIT.png";
import CorrelateHealth from "@/assets/logos/Correlate_Health.png";
import ElectusGlobal from "@/assets/logos/Electus_Global.png";
import Foliobridge from "@/assets/logos/Foliobridge.png";
import GSE from "@/assets/logos/GSE.png";
import HARTAgency from "@/assets/logos/HART_Agency.png";
import HurixDigital from "@/assets/logos/Hurix_Digital.png";
import ICCI from "@/assets/logos/ICCI.png";
import ITDCloud from "@/assets/logos/ITD_Cloud_Solutions.png";
import KelltonTech from "@/assets/logos/Kellton_Tech.png";
import KiwiTech from "@/assets/logos/KiwiTech.png";
import LD from "@/assets/logos/LD.png";
import StrategicPartners from "@/assets/logos/Strategic_Partners.png";
import RosariumPR from "@/assets/logos/Rosarium_PR.png";
import ZactonicsAI from "@/assets/logos/Zactonics_AI_Solutions_2.png";
import MirajoAI from "@/assets/logos/Mirajo_AI.png";
import OasisOpportunities from "@/assets/logos/Oasis_Opportunities.png";
import Trindie from "@/assets/logos/Trindie_2.png";

const TrustedBy = () => {
  const logos = [
    { name: "Actualization AI", url: ActualizationAI },
    { name: "AI Data Defense", url: AIDataDefense },
    { name: "Atalo", url: Atalo },
    { name: "Big Brothers Big Sisters", url: BBBS },
    { name: "Beef Bootlegger", url: BeefBootlegger },
    { name: "BUP", url: BUP },
    { name: "CooperCast LLC", url: CooperCast },
    { name: "CorePlanIT", url: CorePlanIT },
    { name: "Correlate Health", url: CorrelateHealth },
    { name: "Electus Global", url: ElectusGlobal },
    { name: "FolioBridge", url: Foliobridge },
    { name: "Global Solutions Enterprise", url: GSE },
    { name: "HART Agency", url: HARTAgency },
    { name: "Hurix Digital", url: HurixDigital },
    { name: "ICCI", url: ICCI },
    { name: "ITD Cloud Solutions", url: ITDCloud },
    { name: "Kellton Tech", url: KelltonTech },
    { name: "KiwiTech", url: KiwiTech },
    { name: "Loggerhead Dynamics", url: LD },
    { name: "Strategic Partners", url: StrategicPartners },
    { name: "Rosarium PR", url: RosariumPR },
    { name: "Zactonics AI Solutions", url: ZactonicsAI },
    { name: "Mirajo AI", url: MirajoAI },
    { name: "Oasis Opportunities", url: OasisOpportunities },
    { name: "Trindie", url: Trindie },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <SmoothReveal>
          <div className="text-center mb-12">
            <h2 className="section-title">
              Trusted by <span className="animated-gradient-text">Industry Leaders</span>
            </h2>
            <p className="section-subtitle">
              Join the innovative companies and industry leaders who have transformed their business with our cutting-edge AI solutions and strategic partnerships
            </p>
          </div>
        </SmoothReveal>
      </div>

      {/* Scrolling Logo Container - Row 1 */}
      <SmoothReveal delay={100}>
        <div className="relative mb-4">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
          
          <div className="overflow-hidden">
            <div className="flex logo-scroll">
              {logos.slice(0, 9).map((logo, index) => (
                <div
                  key={`row1-first-${index}`}
                  className="flex-shrink-0 mx-4 w-36 h-24 glass-card flex items-center justify-center p-4 hover:border-primary/50 transition-all duration-500 group hover:scale-105"
                >
                  <img
                    src={logo.url}
                    alt={logo.name}
                    className="max-w-full max-h-full object-contain opacity-50 group-hover:opacity-100 transition-all duration-500 filter grayscale group-hover:grayscale-0"
                  />
                </div>
              ))}
              {logos.slice(0, 9).map((logo, index) => (
                <div
                  key={`row1-second-${index}`}
                  className="flex-shrink-0 mx-4 w-36 h-24 glass-card flex items-center justify-center p-4 hover:border-primary/50 transition-all duration-500 group hover:scale-105"
                >
                  <img
                    src={logo.url}
                    alt={logo.name}
                    className="max-w-full max-h-full object-contain opacity-50 group-hover:opacity-100 transition-all duration-500 filter grayscale group-hover:grayscale-0"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </SmoothReveal>

      {/* Scrolling Logo Container - Row 2 (Reverse Direction) */}
      <SmoothReveal delay={150}>
        <div className="relative mb-4">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
          
          <div className="overflow-hidden">
            <div className="flex logo-scroll-reverse">
              {logos.slice(9, 17).map((logo, index) => (
                <div
                  key={`row2-first-${index}`}
                  className="flex-shrink-0 mx-4 w-36 h-24 glass-card flex items-center justify-center p-4 hover:border-primary/50 transition-all duration-500 group hover:scale-105"
                >
                  <img
                    src={logo.url}
                    alt={logo.name}
                    className="max-w-full max-h-full object-contain opacity-50 group-hover:opacity-100 transition-all duration-500 filter grayscale group-hover:grayscale-0"
                  />
                </div>
              ))}
              {logos.slice(9, 17).map((logo, index) => (
                <div
                  key={`row2-second-${index}`}
                  className="flex-shrink-0 mx-4 w-36 h-24 glass-card flex items-center justify-center p-4 hover:border-primary/50 transition-all duration-500 group hover:scale-105"
                >
                  <img
                    src={logo.url}
                    alt={logo.name}
                    className="max-w-full max-h-full object-contain opacity-50 group-hover:opacity-100 transition-all duration-500 filter grayscale group-hover:grayscale-0"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </SmoothReveal>

      {/* Scrolling Logo Container - Row 3 */}
      <SmoothReveal delay={200}>
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
          
          <div className="overflow-hidden">
            <div className="flex logo-scroll">
              {logos.slice(17).map((logo, index) => (
                <div
                  key={`row3-first-${index}`}
                  className="flex-shrink-0 mx-4 w-36 h-24 glass-card flex items-center justify-center p-4 hover:border-primary/50 transition-all duration-500 group hover:scale-105"
                >
                  <img
                    src={logo.url}
                    alt={logo.name}
                    className="max-w-full max-h-full object-contain opacity-50 group-hover:opacity-100 transition-all duration-500 filter grayscale group-hover:grayscale-0"
                  />
                </div>
              ))}
              {logos.slice(17).map((logo, index) => (
                <div
                  key={`row3-second-${index}`}
                  className="flex-shrink-0 mx-4 w-36 h-24 glass-card flex items-center justify-center p-4 hover:border-primary/50 transition-all duration-500 group hover:scale-105"
                >
                  <img
                    src={logo.url}
                    alt={logo.name}
                    className="max-w-full max-h-full object-contain opacity-50 group-hover:opacity-100 transition-all duration-500 filter grayscale group-hover:grayscale-0"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </SmoothReveal>
    </section>
  );
};

export default TrustedBy;
