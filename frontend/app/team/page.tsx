"use client";

import { LanguageProvider } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import TeamContent from "@/components/TeamContent";

export default function TeamPage() {
  return (
    <LanguageProvider>
      <div className="min-h-screen mt-12">
        <Header />
        <TeamContent />
        <Footer />
        <FloatingContact />
      </div>
    </LanguageProvider>
  );
}
