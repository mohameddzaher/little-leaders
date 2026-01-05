"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function StartJourney() {
  const { language } = useLanguage();

  const content = {
    ar: {
      title: "ابدأ رحلتك معنا اليوم",
      description:
        "إذا كنت تبحث عن مركز ضيافة للأطفال فإن مركز ليتل ليدرز هنا للترحيب بطفلك الصغير بعناية واهتمام وفرح",
      subDescription:
        "تواصل معنا عبر الاتصال أو الواتساب لحجز زيارة أو لمعرفة المزيد عن برامجنا ساعد طفلك على النمو والتألّق فقط في مركز ليتل ليدرز",
      whatsapp: "الواتساب",
      phone: "+966 537 468 887",
    },
    en: {
      title: "Start Your Journey with Us Today",
      description:
        "If you are looking for a daycare center for children, Little Leaders Center is here to welcome your little one with care, attention and joy",
      subDescription:
        "Contact us via phone or WhatsApp to book a visit or learn more about our programs. Help your child grow and shine only at Little Leaders Center",
      whatsapp: "WhatsApp",
      phone: "+966 537 468 887",
    },
  };

  const current = content[language];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-br from-light-blue/10 via-white to-pink/10">
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: language === "ar" ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`relative ${
              language === "ar" ? "lg:order-2" : "lg:order-1"
            }`}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://plus.unsplash.com/premium_photo-1758324627404-a012d66bef26?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDczfHx8ZW58MHx8fHx8"
                alt="Start Journey"
                className="w-full h-80 sm:h-96 object-cover"
              />
              {/* Animated circles */}
              <motion.div
                className="absolute -top-10 -right-10 w-40 h-40 bg-light-blue/30 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.5, 0.3],
                  x: [0, 20, 0],
                  y: [0, 20, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute -bottom-10 -left-10 w-36 h-36 bg-pink/30 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                  x: [0, -20, 0],
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: language === "ar" ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`bg-gradient-to-br from-royal-blue to-light-blue rounded-3xl p-8 sm:p-10 shadow-2xl text-white relative overflow-hidden ${
              language === "ar" ? "lg:order-1" : "lg:order-2"
            }`}
          >
            {/* Decorative elements */}
            <motion.div
              className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-16 -mt-16"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute bottom-0 left-0 w-28 h-28 bg-pink/20 rounded-full blur-2xl -ml-14 -mb-14"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            />

            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 leading-tight">
                {current.title}
              </h2>
              <p className="text-white/95 mb-4 text-base sm:text-lg leading-relaxed">
                {current.description}
              </p>
              <p className="text-white/85 mb-8 text-sm sm:text-base leading-relaxed">
                {current.subDescription}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/966537468887"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 bg-[#25D366] text-white rounded-full font-semibold hover:bg-[#20ba5a] transition-all duration-300 shadow-lg hover:shadow-xl text-center cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>{current.whatsapp}</span>
                </a>
                <a
                  href="tel:+966537468887"
                  className="px-6 py-3.5 bg-white text-royal-blue rounded-full font-semibold hover:bg-pink hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl text-center cursor-pointer flex items-center justify-center"
                  dir="ltr"
                >
                  {current.phone}
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
