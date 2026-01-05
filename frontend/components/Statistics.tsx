"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Statistics() {
  const { language } = useLanguage();
  const [counts, setCounts] = useState({
    happy: 0,
    teachers: 0,
    years: 0,
    pioneers: 0,
  });

  const stats = {
    ar: {
      happy: "قادة سعداء",
      teachers: "المعلمين المؤهلين",
      years: "سنوات من الخبرة",
      pioneers: "روّاد الغد",
      subtitle: "هنا يزهر القادة الصغار في أجواء مليئة بالحب والتعلم",
      description: "مكان يجتمع فيه التعلم، والضحك، والنمو",
    },
    en: {
      happy: "Happy Leaders",
      teachers: "Qualified Teachers",
      years: "Years of Experience",
      pioneers: "Future Pioneers",
      subtitle:
        "Here, little leaders bloom in an atmosphere full of love and learning",
      description: "A place where learning, laughter, and growth come together",
    },
  };

  const current = stats[language];
  const targets = { happy: 100, teachers: 12, years: 30, pioneers: 350 };

  useEffect(() => {
    const duration = 2500;
    const steps = 100;
    const interval = duration / steps;

    const timers = Object.keys(targets).map((key) => {
      const target = targets[key as keyof typeof targets];
      let current = 0;
      const increment = target / steps;
      let timer: NodeJS.Timeout;

      const animate = () => {
        current += increment;
        if (current >= target) {
          current = target;
          setCounts((prev) => ({ ...prev, [key]: Math.floor(current) }));
          clearInterval(timer);
        } else {
          setCounts((prev) => ({ ...prev, [key]: Math.floor(current) }));
        }
      };

      timer = setInterval(animate, interval);
      return timer;
    });

    return () => timers.forEach(clearInterval);
  }, []);

  const statItems = [
    {
      label: current.happy,
      value: counts.happy,
      suffix: "+",
      gradient: "from-pink to-light-blue",
    },
    {
      label: current.teachers,
      value: counts.teachers,
      suffix: "+",
      gradient: "from-light-blue to-pink",
    },
    {
      label: current.years,
      value: counts.years,
      suffix: "+",
      gradient: "from-pink to-royal-blue",
    },
    {
      label: current.pioneers,
      value: counts.pioneers,
      suffix: "+",
      gradient: "from-royal-blue to-pink",
    },
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* First Section: Image on right, Content on left */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Content on left */}
          <motion.div
            initial={{ opacity: 0, x: language === "ar" ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`${language === "ar" ? "lg:order-2" : "lg:order-1"}`}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-royal-blue mb-3">
              {current.subtitle}
            </h2>
            <p className="text-base text-royal-blue/70 mb-6">
              {current.description}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {statItems.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -8 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                  className={`bg-gradient-to-br ${stat.gradient} rounded-2xl p-5 text-center shadow-lg hover:shadow-xl cursor-pointer relative overflow-hidden`}
                >
                  {/* Decorative circles in corners */}
                  <motion.div
                    className="absolute top-2 right-2 w-12 h-12 bg-white/20 rounded-full blur-md"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  <motion.div
                    className="absolute bottom-2 left-2 w-10 h-10 bg-white/20 rounded-full blur-md"
                    animate={{
                      scale: [1, 1.4, 1],
                      opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1,
                    }}
                  />
                  <motion.div
                    className="text-3xl sm:text-4xl font-bold text-white mb-2 relative z-10"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {stat.value}
                    {stat.suffix}
                  </motion.div>
                  <div className="text-white/90 font-medium text-xs sm:text-sm relative z-10">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image on right */}
          <motion.div
            initial={{ opacity: 0, x: language === "ar" ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`relative ${
              language === "ar" ? "lg:order-1" : "lg:order-2"
            }`}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/images/Facilities/19.webp"
                alt={current.subtitle}
                className="w-full h-80 object-cover"
              />
              {/* Decorative circles */}
              <motion.div
                className="absolute -top-8 -right-8 w-32 h-32 bg-light-blue/40 rounded-full blur-2xl"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.4, 0.6, 0.4],
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
                className="absolute -bottom-8 -left-8 w-40 h-40 bg-pink/40 rounded-full blur-2xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.4, 0.6, 0.4],
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
        </div>
      </div>
    </section>
  );
}
