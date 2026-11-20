import React from 'react';
import HomeHero from '../components/tlbs/HomeHero';
import WhoForSection from '../components/tlbs/WhoForSection';
import StoryFrameworkSection from '../components/tlbs/StoryFrameworkSection';
import ProgramsShowcase from '../components/tlbs/ProgramsShowcase';
import LiveTeaserSection from '../components/tlbs/LiveTeaserSection';
import HomeTestimonials from '../components/tlbs/HomeTestimonials';
import ResourcesPreviewSection from '../components/tlbs/ResourcesPreviewSection';
import FounderSection from '../components/tlbs/FounderSection';
import CtaBanner from '../components/tlbs/CtaBanner';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { pageSeo } from '../data/seo';

const HomePage: React.FC = () => {
  useDocumentTitle(pageSeo['/'].title, pageSeo['/'].description);

  return (
    <div className="flex flex-col">
      <HomeHero />
      <WhoForSection />
      <StoryFrameworkSection />
      <ProgramsShowcase />
      <LiveTeaserSection />
      <HomeTestimonials />
      <ResourcesPreviewSection />
      <FounderSection />
      <CtaBanner />
    </div>
  );
};

export default HomePage;
