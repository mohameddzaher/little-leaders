'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Programs from '@/components/Programs';
import SectionDivider from '@/components/SectionDivider';
import WhyChooseUs from '@/components/WhyChooseUs';
import Statistics from '@/components/Statistics';
import Benefits from '@/components/Benefits';
import Testimonials from '@/components/Testimonials';
import LearningJourney from '@/components/LearningJourney';
import CenterInstructions from '@/components/CenterInstructions';
import TeamPreview from '@/components/TeamPreview';
import StartJourney from '@/components/StartJourney';
import Footer from '@/components/Footer';
import FloatingContact from '@/components/FloatingContact';
import { LanguageProvider } from '@/contexts/LanguageContext';

export default function Home() {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Header />
        <Hero />
        <SectionDivider />
        <Programs />
        <WhyChooseUs />
        <Statistics />
        <Benefits />
        <Testimonials />
        <LearningJourney />
        <CenterInstructions />
        <TeamPreview />
        <StartJourney />
        <Footer />
        <FloatingContact />
      </div>
    </LanguageProvider>
  );
}

