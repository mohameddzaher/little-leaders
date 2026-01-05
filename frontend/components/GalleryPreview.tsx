'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function GalleryPreview() {
  const { language } = useLanguage();

  const content = {
    ar: {
      title: 'معرض الصور',
      subtitle: 'اكتشفوا لحظات النمو والإبداع والفرح في مركز ليتل ليدرز',
      description: 'تعكس مجموعتنا من الصور روح التعلم والاستكشاف والقيادة التي تملأ أرجاء المركز حيث تتألّق العقول الصغيرة ويُصنع القادة الصغار',
      cta: 'عرض المعرض الكامل',
    },
    en: {
      title: 'Photo Gallery',
      subtitle: 'Discover moments of growth, creativity and joy at Little Leaders Center',
      description: 'Our gallery captures the spirit of learning, exploration and leadership that fills every corner of our center where young minds shine and little leaders are made',
      cta: 'View Full Gallery',
    },
  };

  const current = content[language];

  // Placeholder images - replace with actual images
  const images = [
    'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400',
    'https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=400',
    'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400',
    'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400',
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-pink/5 via-white to-light-blue/5">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-royal-blue mb-4">
            {current.title}
          </h2>
          <p className="text-xl text-royal-blue/70 max-w-3xl mx-auto mb-4">
            {current.subtitle}
          </p>
          <p className="text-lg text-royal-blue/60 max-w-2xl mx-auto">
            {current.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative overflow-hidden rounded-2xl aspect-square"
            >
              <img
                src={img}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/gallery"
            className="inline-block px-8 py-3 bg-royal-blue text-white rounded-full font-semibold hover:bg-light-blue transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            {current.cta}
          </Link>
        </div>
      </div>
    </section>
  );
}

