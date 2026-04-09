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

const HomePage: React.FC = () => {
  useDocumentTitle(
    'Thought Leadership Business School | Build a Seven-Figure Authority Brand',
    'For six-figure professionals building seven-figure brands through speaking, consulting, advisory, and media.'
  );

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
