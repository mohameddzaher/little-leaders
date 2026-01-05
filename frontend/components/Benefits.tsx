"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

export default function Benefits() {
  const { language } = useLanguage();

  const benefits = {
    ar: [
      {
        title: "يعزز الثقة",
        description: "نساعد الأطفال على التعبير عن أنفسهم بثقة ووضوح",
        icon: "💪",
        gradient: "from-royal-blue to-light-blue",
      },
      {
        title: "ينمي الإبداع",
        description: "تنمية خيال الأطفال من خلال أنشطة عملية ممتعة وتفاعلية",
        icon: "🎨",
        gradient: "from-pink to-light-blue",
      },
      {
        title: "يبني مهارات التعلم",
        description: "تنمية روح العمل الجماعي وتحفيز مهارة اتخاذ القرار",
        icon: "🧠",
        gradient: "from-light-blue to-pink",
      },
      {
        title: "يحسن التواصل",
        description: "تنمية مهارات اللغة والتفاعل الاجتماعي بثقة وسلاسة",
        icon: "💬",
        gradient: "from-pink to-royal-blue",
      },
    ],
    en: [
      {
        title: "Boosts Confidence",
        description:
          "We help children express themselves with confidence and clarity",
        icon: "💪",
        gradient: "from-royal-blue to-light-blue",
      },
      {
        title: "Enhances Creativity",
        description:
          "Developing children's imagination through fun and interactive hands-on activities",
        icon: "🎨",
        gradient: "from-pink to-light-blue",
      },
      {
        title: "Builds Learning Skills",
        description:
          "Developing teamwork spirit and stimulating decision-making skills",
        icon: "🧠",
        gradient: "from-light-blue to-pink",
      },
      {
        title: "Improves Communication",
        description:
          "Developing language skills and social interaction with confidence and ease",
        icon: "💬",
        gradient: "from-pink to-royal-blue",
      },
    ],
  };

  const current = benefits[language];

  const sectionContent = {
    ar: {
      title: "راقب طفلك وهو يزدهر معنا",
      subtitle: "حيث يجتمع التعلم والمرح والنمو معًا",
    },
    en: {
      title: "Watch Your Child Bloom with Us",
      subtitle: "Where learning, laughter, and growth come together",
    },
  };

  const currentSection = sectionContent[language];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header - Centered */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-royal-blue mb-3">
            {currentSection.title}
          </h2>
          <p className="text-base text-royal-blue/70 max-w-2xl mx-auto">
            {currentSection.subtitle}
          </p>
        </motion.div>

        {/* Section: Image on left, Content on right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Image on left */}
          <motion.div
            initial={{ opacity: 0, x: language === "ar" ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`relative ${
              language === "ar" ? "lg:order-2" : "lg:order-1"
            }`}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl h-full">
              <img
                src="/images/Facilities/3-4.webp"
                alt={currentSection.title}
                className="w-full h-80 object-cover"
              />
              {/* Decorative circles */}
              <motion.div
                className="absolute -top-8 -left-8 w-32 h-32 bg-light-blue/40 rounded-full blur-2xl"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.4, 0.6, 0.4],
                  x: [0, -20, 0],
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute -bottom-8 -right-8 w-40 h-40 bg-pink/40 rounded-full blur-2xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.4, 0.6, 0.4],
                  x: [0, 20, 0],
                  y: [0, 20, 0],
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

          {/* Content on right */}
          <motion.div
            initial={{ opacity: 0, x: language === "ar" ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`h-full flex flex-col ${
              language === "ar" ? "lg:order-1" : "lg:order-2"
            }`}
          >
            {/* Benefits Cards - Vertical Layout */}
            <div className="space-y-3 flex-1 flex flex-col justify-center">
              {current.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.01, x: language === "ar" ? -4 : 4 }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.08,
                    ease: "easeOut",
                  }}
                  className={`bg-gradient-to-br ${benefit.gradient} rounded-xl p-4 shadow-md hover:shadow-lg cursor-pointer relative overflow-hidden`}
                >
                  {/* Decorative circles in corners */}
                  <motion.div
                    className="absolute top-1.5 right-1.5 w-8 h-8 bg-white/20 rounded-full blur-sm"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  <motion.div
                    className="absolute bottom-1.5 left-1.5 w-6 h-6 bg-white/20 rounded-full blur-sm"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1,
                    }}
                  />

                  <div className="flex items-center gap-3 relative z-10">
                    <div className="text-2xl flex-shrink-0">{benefit.icon}</div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-bold text-white mb-0.5 leading-tight">
                        {benefit.title}
                      </h3>
                      <p className="text-white/90 text-xs leading-snug">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
