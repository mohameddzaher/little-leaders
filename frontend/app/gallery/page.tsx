'use client';

import { LanguageProvider } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingContact from '@/components/FloatingContact';
import GalleryContent from '@/components/GalleryContent';

export default function GalleryPage() {
  return (
    <LanguageProvider>
      <div className="min-h-screen mt-12">
        <Header />
        <GalleryContent />
        <Footer />
        <FloatingContact />
      </div>
    </LanguageProvider>
  );
}

