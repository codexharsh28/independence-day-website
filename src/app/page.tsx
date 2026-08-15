import { Footer } from "@/components/layout/Footer";
import { Nav } from "@/components/layout/Nav";
import { Hero } from "@/components/hero/Hero";
import { StoryBegins } from "@/components/sections/StoryBegins";
import { ThePeopleSection } from "@/components/sections/ThePeopleSection";
import { TheRedFortSection } from "@/components/sections/TheRedFortSection";
import { TheStruggleSection } from "@/components/sections/TheStruggleSection";
import { TheSacrificeSection } from "@/components/sections/TheSacrificeSection";
import { TheMomentOfFreedom } from "@/components/sections/TheMomentOfFreedom";
import { NationRemembers } from "@/components/sections/NationRemembers";
import { TimelineSection } from "@/components/sections/TimelineSection";
import { TheNationRisesSection } from "@/components/sections/TheNationRisesSection";
import { VisitBharatSection } from "@/components/sections/VisitBharatSection";

export default function HomePage() {
  return (
    <div className="flex min-h-dvh flex-col bg-[#030508]">
      <Nav />
      <main id="story" className="flex-1">
        {/* 1. Hero: 3D Flowing Flag & 24-Spoke Ashoka Chakra */}
        <Hero />

        {/* 2. Opening: The Tricolor Awakening */}
        <StoryBegins />

        {/* 3. The People: "This freedom belonged to millions" */}
        <ThePeopleSection />

        {/* 4. The Red Fort: The Moment and Symbol */}
        <TheRedFortSection />

        {/* 5. The Struggle: Archival Sequence */}
        <TheStruggleSection />

        {/* 6. The Sacrifice: The Martyrs and Heroes */}
        <TheSacrificeSection />

        {/* 7. The Moment of Freedom: The Emotional Climax */}
        <TheMomentOfFreedom />

        {/* 8. A Nation Remembers: Interactive Asymmetric Panels */}
        <NationRemembers />

        {/* 9. Historical Timeline: The Illuminated Spine */}
        <TimelineSection />

        {/* 10. The Nation Rises: Past to Present */}
        <TheNationRisesSection />

        {/* 11. Visit Bharat: Sacred Heritage Destinations */}
        <VisitBharatSection />
      </main>
      <Footer />
    </div>
  );
}
