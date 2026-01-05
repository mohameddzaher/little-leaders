'use client';

import { LanguageProvider } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingContact from '@/components/FloatingContact';
import AboutContent from '@/components/AboutContent';

export default function AboutPage() {
  return (
    <LanguageProvider>
      <div className="min-h-screen mt-12">
        <Header />
        <AboutContent />
        <Footer />
        <FloatingContact />
      </div>
    </LanguageProvider>
  );
}

