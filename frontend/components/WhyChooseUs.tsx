"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

export default function WhyChooseUs() {
  const { language } = useLanguage();

  const content = {
    ar: {
      title: "لماذا تختار مركز ليتل ليدرز؟",
      subtitle:
        "في مركزنا لا نقتصر على رعاية الأطفال فقط بل نعمل على بناء قادة المستقبل",
      features: [
        {
          title: "فريق رعاية وتعليم معتمد",
          description:
            "جميع معلمينا محترفون ومدربون بشغف على التعليم في مرحلة الطفولة المبكرة",
          gradient: "from-light-blue to-pink",
        },
        {
          title: "منشأة حديثة وآمنة",
          description:
            "مركز مجهز بالكامل وفق أعلى معايير السلامة والنظافة لتوفير بيئة مثالية للأطفال",
          gradient: "from-pink to-royal-blue",
        },
        {
          title: "برامج ثنائية اللغة",
          description:
            "تقدم البرامج باللغة العربية مع دعمها بمبادئ اللغة الإنجليزية",
          gradient: "from-pink to-light-blue",
        },
        {
          title: "برامج تعليمية مخصصة",
          description:
            "مصممة بعناية لتلبية الاحتياجات الفردية لكل طفل ودعم تقدمه وفق وتيرته الخاصة",
          gradient: "from-royal-blue to-pink",
        },
      ],
    },
    en: {
      title: "Why Choose Little Leaders Center?",
      subtitle:
        "At our center, we don't just care for children, we work on building future leaders",
      features: [
        {
          title: "Certified Care and Education Team",
          description:
            "All our teachers are professionals trained with passion for early childhood education",
          gradient: "from-light-blue to-pink",
        },
        {
          title: "Modern and Safe Facility",
          description:
            "A fully equipped center according to the highest safety and hygiene standards to provide an ideal environment for children",
          gradient: "from-pink to-royal-blue",
        },
        {
          title: "Bilingual Programs",
          description:
            "Programs are delivered in Arabic with support from English language principles",
          gradient: "from-pink to-light-blue",
        },
        {
          title: "Customized Educational Programs",
          description:
            "Carefully designed to meet the individual needs of each child and support their progress at their own pace",
          gradient: "from-royal-blue to-pink",
        },
      ],
    },
  };

  const current = content[language];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-white">
      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-royal-blue mb-3">
            {current.title}
          </h2>
          <p className="text-base text-royal-blue/70 max-w-3xl mx-auto">
            {current.subtitle}
          </p>
        </motion.div>

        {/* Image with animated circles */}
        <div className="relative mb-10 max-w-2xl mx-auto">
          <div className="relative rounded-xl overflow-hidden shadow-xl">
            {/* Previous image from unsplash (commented for future reference):
            <img
              src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=1200"
              alt="Why Choose Us"
              className="w-full h-64 object-cover"
            />
            */}
            {/* Using image from local images folder */}
            <img
              src="/images/Facilities/1-3.webp"
              alt="Why Choose Us"
              className="w-full h-74 object-cover"
            />
            {/* Animated circles behind image */}
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
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-pink/30 rounded-full blur-xl"
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2,
              }}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {current.features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: language === "ar" ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.03 }}
              className={`bg-gradient-to-br ${feature.gradient} rounded-2xl p-5 shadow-lg hover:shadow-2xl cursor-pointer`}
            >
              <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4">
                <h3 className="text-base font-bold text-royal-blue mb-2">
                  {feature.title}
                </h3>
                <p className="text-royal-blue/70 leading-relaxed text-xs">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
