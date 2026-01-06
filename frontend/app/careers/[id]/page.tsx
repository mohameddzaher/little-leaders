'use client';

import { LanguageProvider } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingContact from '@/components/FloatingContact';
import JobDetails from '@/components/JobDetails';

export default function JobPage({ params }: { params: { id: string } }) {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Header />
        <JobDetails jobId={params.id} />
        <Footer />
        <FloatingContact />
      </div>
    </LanguageProvider>
  );
}


