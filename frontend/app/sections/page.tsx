"use client";

import { LanguageProvider } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import SectionsContent from "@/components/SectionsContent";

export default function SectionsPage() {
  return (
    <LanguageProvider>
      <div className="min-h-screen mt-12">
        <Header />
        <SectionsContent />
        <Footer />
        <FloatingContact />
      </div>
    </LanguageProvider>
  );
}
