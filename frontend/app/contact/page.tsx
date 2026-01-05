'use client';

import { LanguageProvider } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingContact from '@/components/FloatingContact';
import ContactContent from '@/components/ContactContent';

export default function ContactPage() {
  return (
    <LanguageProvider>
      <div className="min-h-screen mt-12">
        <Header />
        <ContactContent />
        <Footer />
        <FloatingContact />
      </div>
    </LanguageProvider>
  );
}

