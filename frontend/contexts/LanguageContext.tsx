'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'ar' | 'en';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
  ar: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.about': 'من نحن',
    'nav.sections': 'الأقسام',
    'nav.gallery': 'معرض الصور',
    'nav.team': 'الفريق',
    'nav.careers': 'الوظائف',
    'nav.contact': 'اتصل بنا',
    'nav.language': 'English',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.sections': 'Sections',
    'nav.gallery': 'Gallery',
    'nav.team': 'Team',
    'nav.careers': 'Careers',
    'nav.contact': 'Contact Us',
    'nav.language': 'العربية',
  },
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('ar');

  useEffect(() => {
    const saved = localStorage.getItem('language') as Language;
    if (saved) {
      setLanguageState(saved);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  };

  const toggleLanguage = () => {
    const newLang = language === 'ar' ? 'en' : 'ar';
    setLanguage(newLang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

