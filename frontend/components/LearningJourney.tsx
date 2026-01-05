"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import Image from "next/image";

export default function LearningJourney() {
  const { language } = useLanguage();

  const content = {
    ar: {
      title: "رحلة التعلّم معنا",
      description:
        "فريقنا المؤهل والمحب هو قلب مركزنا النابض بخبرة تمتد لأكثر من 30 عامًا حيث نضع سلامة الأطفال ونموهم في المقام الأول جميع معلماتنا مدربات على الإسعافات الأولية ويتبعن أحدث أساليب التعليم المبكر لضمان تجربة تعليمية آمنة وملهمة لكل طفل",
    },
    en: {
      title: "The Learning Journey with Us",
      description:
        "Our qualified and loving team is the beating heart of our center with over 30 years of experience. We put children's safety and growth first. All our teachers are trained in first aid and follow the latest early education methods to ensure a safe and inspiring educational experience for every child",
    },
  };

  const current = content[language];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-white">
      {/* Animated bubbles in background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-light-blue/20 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 30, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-40 h-40 bg-pink/20 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, -20, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute bottom-20 left-1/4 w-36 h-36 bg-pink/20 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 25, 0],
            y: [0, -25, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        <motion.div
          className="absolute bottom-40 right-1/3 w-28 h-28 bg-royal-blue/15 rounded-full blur-xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
            x: [0, -30, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: language === "ar" ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=800"
                alt="Learning Journey"
                className="w-full h-96 object-cover relative z-10"
              />
              {/* Animated circles around image corners */}
              <motion.div
                className="absolute -top-8 -right-8 w-32 h-32 bg-light-blue/40 rounded-full blur-2xl z-0"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.4, 0.6, 0.4],
                  x: [0, 15, 0],
                  y: [0, 15, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute -bottom-8 -left-8 w-40 h-40 bg-pink/40 rounded-full blur-2xl z-0"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.4, 0.6, 0.4],
                  x: [0, -15, 0],
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />
              <motion.div
                className="absolute top-1/2 -right-12 w-24 h-24 bg-pink/30 rounded-full blur-xl z-0"
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2,
                }}
              />
              <motion.div
                className="absolute -top-12 left-1/4 w-20 h-20 bg-royal-blue/30 rounded-full blur-xl z-0"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.5,
                }}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: language === "ar" ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-light-blue to-pink rounded-2xl p-8 shadow-lg"
          >
            <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-royal-blue mb-4">
                {current.title}
              </h2>
              <p className="text-royal-blue/70 text-base leading-relaxed">
                {current.description}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
