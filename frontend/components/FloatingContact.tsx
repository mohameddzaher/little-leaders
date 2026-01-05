'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

export default function FloatingContact() {
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const content = {
    ar: {
      call: 'اتصل بنا',
      whatsapp: 'واتساب',
    },
    en: {
      call: 'Call Us',
      whatsapp: 'WhatsApp',
    },
  };

  const current = content[language];
  const phone = '+966537468887';
  const whatsappUrl = `https://wa.me/966537468887`;

  return (
    <div className="fixed bottom-6 left-6 z-50 rtl:left-auto rtl:right-6">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            className="mb-3 space-y-2"
          >
            <a
              href={`tel:${phone}`}
              className="flex items-center space-x-2 rtl:space-x-reverse bg-royal-blue text-white px-3 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer text-xs"
            >
              <span className="text-sm">📞</span>
              <span className="text-xs font-medium">{current.call}</span>
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 rtl:space-x-reverse bg-[#25D366] text-white px-3 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer text-xs"
            >
              <span className="text-sm">💬</span>
              <span className="text-xs font-medium">{current.whatsapp}</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-12 h-12 bg-gradient-to-br from-light-blue to-royal-blue text-white rounded-full shadow-lg hover:shadow-xl flex items-center justify-center text-xl cursor-pointer relative"
        aria-label="Contact Options"
      >
        {isOpen ? '✕' : '💬'}
        {/* Smaller decorative circle behind */}
        <motion.div
          className="absolute inset-0 bg-light-blue/20 rounded-full blur-md -z-10"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.4, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </motion.button>
    </div>
  );
}

