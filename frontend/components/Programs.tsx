"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import ShapeDivider from "./ShapeDivider";

export default function Programs() {
  const { language } = useLanguage();

  const programs = {
    ar: [
      {
        title: "مرحلة الرعاية",
        age: "من عمر 3 أشهر إلى سنتين",
        description:
          "نهتم بالرعاية المبكرة للأطفال من عمر 3 أشهر إلى سنتين حيث نوفر بيئة دافئة وآمنة تجمع بين الاهتمام واللعب والتعلّم المبكر من خلال أنشطة ممتعة ومحفّزة تناسب أعمارهم. نعمل على تنمية الإبداع والفضول لديهم وتعزيز المهارات الحركية واللغوية والاجتماعية تحت إشراف طاقم تربوي معتمد يعتني بكل تفاصيل نموّهم",
        icon: "👶",
        gradient: "from-pink to-light-blue",
      },
      {
        title: "مرحلة الطفولة المبكرة",
        age: "من عمر ٣ سنوات إلى 5 سنوات",
        description:
          "نستقبل الأطفال من عمر ٣ سنوات إلى 5 سنوات حيث نوفر لهم بيئة آمنة وداعمة بإشراف طاقم يهتم بكل تفاصيل رعايتهم ونموهم. يهدف المركز إلى دعم الآباء والأمهات العاملين عبر تقديم برنامج يومي غني يشمل أنشطة محفزة وأوقات استرخاء هادئة ورعاية عاطفية وتربوية تسهم في بناء شخصيات الأطفال وتعزيز نموهم المتكامل في أجواء مليئة بالحب والتعلم",
        icon: "🌟",
        gradient: "from-light-blue to-pink",
      },
      {
        title: "البرنامج الإضافي",
        age: "من عمر 3 أشهر إلى 10 سنوات",
        description:
          "نقدّم أنشطة ما بعد المدرسة المصمم خصيصاً لدعم الأطفال بعد انتهاء اليوم الدراسي من خلال أنشطة تعليمية وترفيهية متوازنة تجمع بين الإبداع والتعلّم الممتع وتنمية المهارات الحياتية. نركز على تعزيز حل المشكلات والتواصل والذكاء العاطفي لمساعدة الأطفال على النمو بثقة واستقلالية. البرنامج متاح للأطفال من عمر 3 أشهر إلى 10 سنوات ويشمل المسجلين في المركز وغير المسجلين",
        icon: "🎨",
        gradient: "from-pink to-royal-blue",
      },
    ],
    en: [
      {
        title: "Care Stage",
        age: "From 3 months to 2 years",
        description:
          "We care for early childhood from 3 months to 2 years, providing a warm and safe environment that combines care, play, and early learning through fun and stimulating activities suitable for their age. We work on developing their creativity and curiosity and enhancing motor, linguistic, and social skills under the supervision of a certified educational staff that cares for every detail of their growth.",
        icon: "👶",
        gradient: "from-pink to-light-blue",
      },
      {
        title: "Early Childhood Stage",
        age: "From 3 to 5 years",
        description:
          "We welcome children from 3 to 5 years old, providing them with a safe and supportive environment under the supervision of a staff that cares for every detail of their care and growth. The center aims to support working parents by providing a rich daily program that includes stimulating activities, quiet rest times, and emotional and educational care that contributes to building children's personalities and enhancing their integrated growth in an atmosphere full of love and learning.",
        icon: "🌟",
        gradient: "from-light-blue to-pink",
      },
      {
        title: "After-School Program",
        age: "From 3 months to 10 years",
        description:
          "We offer after-school activities specifically designed to support children after the end of the school day through balanced educational and recreational activities that combine creativity, fun learning, and life skills development. We focus on enhancing problem-solving, communication, and emotional intelligence to help children grow with confidence and independence. The program is available for children from 3 months to 10 years old and includes both enrolled and non-enrolled children.",
        icon: "🎨",
        gradient: "from-pink to-royal-blue",
      },
    ],
  };

  const currentPrograms = programs[language];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-br from-pink/5 via-white to-light-blue/5">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://plus.unsplash.com/premium_photo-1661456083573-08f75588cc64?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8",
        }}
      />
      <div className="absolute inset-0 bg-black/3" />
      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-royal-blue mb-3">
            {language === "ar"
              ? "برامجنا التعليمية"
              : "Our Educational Programs"}
          </h2>
          <p className="text-base text-royal-blue/70 max-w-2xl mx-auto">
            {language === "ar"
              ? "برامج مصممة خصيصاً لتنمية مهارات طفلك في بيئة آمنة ومحفزة"
              : "Programs specifically designed to develop your child's skills in a safe and stimulating environment"}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentPrograms.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -8, scale: 1.03 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden group cursor-pointer relative border-2 border-transparent hover:border-light-blue/30 transition-all duration-300"
            >
              {/* Gradient background overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${program.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}
              />

              {/* Decorative circles */}
              <motion.div
                className="absolute top-2 right-2 w-16 h-16 bg-light-blue/10 rounded-full blur-xl z-0"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute bottom-2 left-2 w-12 h-12 bg-pink/10 rounded-full blur-xl z-0"
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />

              <div className="p-6 h-full flex flex-col relative z-10">
                {/* Icon centered */}
                <div className="text-center mb-4">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-light-blue/20 to-pink/20 group-hover:from-light-blue/30 group-hover:to-pink/30 transition-all duration-300">
                    {program.icon === "👶" ? (
                      <svg className="w-10 h-10 text-royal-blue" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        <circle cx="8.5" cy="8.5" r="1.5"/>
                        <circle cx="15.5" cy="8.5" r="1.5"/>
                        <path d="M12 17.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>
                      </svg>
                    ) : program.icon === "🌟" ? (
                      <svg className="w-10 h-10 text-royal-blue" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    ) : (
                      <svg className="w-10 h-10 text-royal-blue" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z"/>
                      </svg>
                    )}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-royal-blue mb-2 text-center">
                  {program.title}
                </h3>

                {/* Age */}
                <p className="text-xs font-semibold text-light-blue mb-3 text-center">
                  {program.age}
                </p>

                {/* Description */}
                <p className={`text-royal-blue/70 leading-relaxed text-xs flex-1 text-center ${language === "ar" ? "text-justify" : "text-justify"}`}>
                  {program.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
