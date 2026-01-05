'use client';

import { LanguageProvider } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingContact from '@/components/FloatingContact';
import CareersContent from '@/components/CareersContent';

export default function CareersPage() {
  return (
    <LanguageProvider>
      <div className="min-h-screen mt-12">
        <Header />
        <CareersContent />
        <Footer />
        <FloatingContact />
      </div>
    </LanguageProvider>
  );
}

